package com.ccs.component.action;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class FckConnectorServlet extends HttpServlet {
	private static String baseDir;
	private static boolean debug = false;
	private static String encoding = "GBK";
	private static String userName = "user";
	private static int height = 300;

	public void init() throws ServletException {
		baseDir = getInitParameter("baseDir");
		encoding = getInitParameter("encoding");
		debug = new Boolean(getInitParameter("debug")).booleanValue();
		if (baseDir == null) {
			baseDir = "/UserFiles/";
		}
		String accountPicker =  getInitParameter("account");
		if(accountPicker!=null){
			try {
				Class<FckConnectorAccount> account = (Class<FckConnectorAccount>) Class.forName(accountPicker);
				userName = account.newInstance().getUserName();
			} catch ( Exception e) {
				e.printStackTrace();
			}
		}
		String realBaseDir = getServletContext().getRealPath(baseDir);
		File baseFile = new File(realBaseDir);
		if (!baseFile.exists()) {
			baseFile.mkdir();
		}
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding(encoding);
		if (debug) {
			System.out.println("--- BEGIN DOGET ---");
		}
		response.setContentType("text/xml; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter();
		String commandStr = request.getParameter("Command");
		String typeStr = request.getParameter("Type");
		String currentFolderStr = request.getParameter("CurrentFolder");

		String currentPath = baseDir + typeStr + currentFolderStr
				+ userName + "/";
		String currentDirPath = getServletContext().getRealPath(currentPath);
		File currentDir = new File(currentDirPath);
		if (!currentDir.exists()) {
			currentDir.mkdir();
		}
		Document document = null;
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory
					.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			document = builder.newDocument();
		} catch (ParserConfigurationException pce) {
			pce.printStackTrace();
		}
		Node root = CreateCommonXml(document, commandStr, typeStr,
				currentFolderStr, request.getContextPath() + currentPath);
		if (debug) {
			System.out.println("Command = " + commandStr);
		}
		if (commandStr.equals("GetFolders")) {
			getFolders(currentDir, root, document);
		} else if (commandStr.equals("GetFoldersAndFiles")) {
			getFolders(currentDir, root, document);
			getFiles(currentDir, root, document);
		} else if (commandStr.equals("CreateFolder")) {
			String newFolderStr = request.getParameter("NewFolderName");
			File newFolder = new File(currentDir, newFolderStr);
			String retValue = "110";
			if (newFolder.exists()) {
				retValue = "101";
			} else {
				try {
					boolean dirCreated = newFolder.mkdir();
					if (dirCreated) {
						retValue = "0";
					} else {
						retValue = "102";
					}
				} catch (SecurityException sex) {
					retValue = "103";
				}
			}
			setCreateFolderResponse(retValue, root, document);
		}
		document.getDocumentElement().normalize();
		try {
			TransformerFactory tFactory = TransformerFactory.newInstance();
			Transformer transformer = tFactory.newTransformer();
			DOMSource source = new DOMSource(document);
			StreamResult result = new StreamResult(out);
			transformer.transform(source, result);
			if (debug) {
				StreamResult dbgResult = new StreamResult(System.out);
				transformer.transform(source, dbgResult);
				System.out.println("");
				System.out.println("--- END DOGET ---");
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		out.flush();
		out.close();
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
	}

	private void setCreateFolderResponse(String retValue, Node root,
			Document doc) {
		Element myEl = doc.createElement("Error");
		myEl.setAttribute("number", retValue);
		root.appendChild(myEl);
	}

	private void getFolders(File dir, Node root, Document doc) {
		Element folders = doc.createElement("Folders");
		root.appendChild(folders);
		File[] fileList = dir.listFiles();
		if(fileList!=null){
			for (int i = 0; i < fileList.length; i++) {
				if (fileList[i].isDirectory()) {
					Element myEl = doc.createElement("Folder");
					myEl.setAttribute("name", fileList[i].getName());
					folders.appendChild(myEl);
				}
			}
		}
	}

	private void getFiles(File dir, Node root, Document doc) {
		Element files = doc.createElement("Files");
		root.appendChild(files);
		File[] fileList = dir.listFiles();
		if(fileList!=null){
			for (int i = 0; i < fileList.length; i++) {
				if (fileList[i].isFile()) {
					Element myEl = doc.createElement("File");
					myEl.setAttribute("name", fileList[i].getName());
					myEl.setAttribute("size",
							String.valueOf(fileList[i].length() / 1024L));
					files.appendChild(myEl);
				}
			}
		}
	}

	private Node CreateCommonXml(Document doc, String commandStr,
			String typeStr, String currentPath, String currentUrl) {
		Element root = doc.createElement("Connector");
		doc.appendChild(root);
		root.setAttribute("command", commandStr);
		root.setAttribute("resourceType", typeStr);
		Element myEl = doc.createElement("CurrentFolder");
		myEl.setAttribute("path", currentPath);
		myEl.setAttribute("url", currentUrl);
		root.appendChild(myEl);
		return root;
	}

	private static String getNameWithoutExtension(String fileName) {
		return fileName.substring(0, fileName.lastIndexOf("."));
	}

	private String getExtension(String fileName) {
		return fileName.substring(fileName.lastIndexOf(".") + 1);
	}
}
