-- 水库
insert into wrp_rsr_bsin (rscd, rsnm, prsc, mnun, addvcd, dtupdt) 
values ('50023330002', '金鸡水库', '3', '', '500233', current_timestamp);

-- 大坝
insert into wrp_rsr_dm (rscd, dmcd, dmnm, dmbsglcn, maxdmhg, dmcrel, wvwltpel, dtupdt)
values ('50023330002', '5002333000201', '主坝', 1, 37.2, 514.5, 515.50, current_timestamp);

insert into wrp_rsr_dm (rscd, dmcd, dmnm, dmbsglcn, maxdmhg, dmcrel, wvwltpel, dtupdt)
values ('50023330002', '5002333000202', '副坝', 1, 37.2, 514.5, 515.50, current_timestamp);

insert into wrp_rsr_sw (rscd, swcd, swnm, dtupdt)
values ('50023330002', '5002333000201', '溢洪道', current_timestamp);

-- 测站
insert into st_stbprp_b (stcd, locality) values ('301A0755', '');

-- 水库测站关系
insert into sws_wrp_stcd (wrpcd, wrp, stcd, lmt) values ('50023330002', 'RSR', '301A0755', current_timestamp);

-- 测点

-- 水位和雨量
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('RZ01', '', '301A0755', 'RZ', 0, 0,
'<xproperty>
<!-- 从坝底到坝顶的顺序 -->
<rz-polyline>
{"bot": {"x": 3.58, "y": 5.32, "el": 477},
 "mids": [{"x": 9.12, "y": 2.6}, {"x": 9.52, "y": 2.6}], 
 "top": {"x": 11.78, "y": 1.44, "el": 514.5}}
</rz-polyline>
</xproperty>',
'RSR', '50023330002', null, null, null, '水位');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('PP01', '', '301A0755', 'PP', 0, 0,
'<xproperty>
</xproperty>',
'RSR', '50023330002', null, null, null, '雨量');

-- 表面变形
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP01', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+127.000</安装位置x>
<安装位置y>坝纵0-005.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>21.81</DM01CRSC2001-x>
<DM01CRSC2001-y>54.36</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP01-DP02-DP03-DP04-DP05</DM01CRSC2001-group>
<视准线分组>514.5高程视准线1</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY1');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP02', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+097.000</安装位置x>
<安装位置y>坝纵0-005.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>35.64</DM01CRSC2001-x>
<DM01CRSC2001-y>51.26</DM01CRSC2001-y>

<DM01CRSC2001-baseY>18.67</DM01CRSC2001-baseY>
<DM01CRSC2001-baseEl>-1</DM01CRSC2001-baseEl>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP01-DP02-DP03-DP04-DP05</DM01CRSC2001-group>
<视准线分组>514.5高程视准线1</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY2');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP03', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+067.000</安装位置x>
<安装位置y>坝纵0-005.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>49.55</DM01CRSC2001-x>
<DM01CRSC2001-y>48.17</DM01CRSC2001-y>

<DM01CRSC2001-baseY>18.67</DM01CRSC2001-baseY>
<DM01CRSC2001-baseEl>-1</DM01CRSC2001-baseEl>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP01-DP02-DP03-DP04-DP05</DM01CRSC2001-group>
<视准线分组>514.5高程视准线1</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY3');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP04', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+037.000</安装位置x>
<安装位置y>坝纵0-005.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>63.39</DM01CRSC2001-x>
<DM01CRSC2001-y>45.08</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP01-DP02-DP03-DP04-DP05</DM01CRSC2001-group>
<视准线分组>514.5高程视准线1</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY4');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP05', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+007.000</安装位置x>
<安装位置y>坝纵0-005.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>77.22</DM01CRSC2001-x>
<DM01CRSC2001-y>41.99</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP01-DP02-DP03-DP04-DP05</DM01CRSC2001-group>
<视准线分组>514.5高程视准线1</视准线分组>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY5');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP06', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+127.000</安装位置x>
<安装位置y>坝纵0+004.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>22.70</DM01CRSC2001-x>
<DM01CRSC2001-y>58.75</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP06-DP07-DP08-DP09-DP10</DM01CRSC2001-group>
<视准线分组>514.5高程视准线2</视准线分组>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY6');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP07', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+097.000</安装位置x>
<安装位置y>坝纵0+004.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>36.62</DM01CRSC2001-x>
<DM01CRSC2001-y>55.66</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP06-DP07-DP08-DP09-DP10</DM01CRSC2001-group>
<视准线分组>514.5高程视准线2</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY7');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP08', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>
<安装位置x>坝横0+067.000</安装位置x>
<安装位置y>坝纵0+004.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
<DM01CRSC2001-x>50.45</DM01CRSC2001-x>
<DM01CRSC2001-y>52.57</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP06-DP07-DP08-DP09-DP10</DM01CRSC2001-group>
<视准线分组>514.5高程视准线2</视准线分组>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY8');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP09', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>64.28</DM01CRSC2001-x>
<DM01CRSC2001-y>49.39</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP06-DP07-DP08-DP09-DP10</DM01CRSC2001-group>
<视准线分组>514.5高程视准线2</视准线分组>

<安装位置x>坝横0+007.000</安装位置x>
<安装位置y>坝纵0+004.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY9');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP10', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>78.12</DM01CRSC2001-x>
<DM01CRSC2001-y>46.38</DM01CRSC2001-y>

<DM01CRSC2001-el>514.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP06-DP07-DP08-DP09-DP10</DM01CRSC2001-group>
<视准线分组>514.5高程视准线2</视准线分组>

<安装位置x>坝横0+037.000</安装位置x>
<安装位置y>坝纵0+004.000</安装位置y>
<安装位置z>高程514.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY10');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP11', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>39.06</DM01CRSC2001-x>
<DM01CRSC2001-y>67.02</DM01CRSC2001-y>

<DM01CRSC2001-el>499.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP11-DP12-DP13</DM01CRSC2001-group>
<视准线分组>499.5高程视准线</视准线分组>
<安装位置x>坝横0+097.000</安装位置x>
<安装位置y>坝纵0+025.000</安装位置y>
<安装位置z>高程499.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY11');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP12', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>53.05</DM01CRSC2001-x>
<DM01CRSC2001-y>64.28</DM01CRSC2001-y>

<DM01CRSC2001-el>499.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP11-DP12-DP13</DM01CRSC2001-group>
<视准线分组>499.5高程视准线</视准线分组>
<安装位置x>坝横0+067.000</安装位置x>
<安装位置y>坝纵0+025.000</安装位置y>
<安装位置z>高程499.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY12');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP13', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>66.97</DM01CRSC2001-x>
<DM01CRSC2001-y>61.27</DM01CRSC2001-y>

<DM01CRSC2001-el>499.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP11-DP12-DP13</DM01CRSC2001-group>
<视准线分组>499.5高程视准线</视准线分组>
<安装位置x>坝横0+037.000</安装位置x>
<安装位置y>坝纵0+025.000</安装位置y>
<安装位置z>高程499.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY13');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP14', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>56.15</DM01CRSC2001-x>
<DM01CRSC2001-y>78.12</DM01CRSC2001-y>

<DM01CRSC2001-el>484.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP14-DP15</DM01CRSC2001-group>
<视准线分组>484.5高程视准线</视准线分组>
<安装位置x>坝横0+067.000</安装位置x>
<安装位置y>坝纵0+045.000</安装位置y>
<安装位置z>高程485.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY14');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('DP15', '', '301A0755', 'DP', 0, 0,
'<xproperty>

<DM01CRSC2001-originalWidth>106.753</DM01CRSC2001-originalWidth>
<DM01CRSC2001-originalHeight>108.631</DM01CRSC2001-originalHeight>
<DM01CRSC2001-viewWidth>106.753</DM01CRSC2001-viewWidth>
<DM01CRSC2001-viewHeight>108.631</DM01CRSC2001-viewHeight>

<DM01CRSC2001-x>70.14</DM01CRSC2001-x>
<DM01CRSC2001-y>74.94</DM01CRSC2001-y>

<DM01CRSC2001-el>484.5</DM01CRSC2001-el>
<DM01CRSC2001-group>DP14-DP15</DM01CRSC2001-group>
<视准线分组>484.5高程视准线</视准线分组>

<安装位置x>坝横0+037.000</安装位置x>
<安装位置y>坝纵0+045.000</安装位置y>
<安装位置z>高程485.50</安装位置z>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', 'WY15');

-- 坝体渗流（SF）
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SFB01', '', '301A0755', 'SFB', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗流量1</bktxt>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗流量1</bktxt>
  <x>480</x>
  <y>190</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝左侧</安装位置x>
<安装位置y>坝下游侧</安装位置y>
<安装位置z>工程480m</安装位置z>
<!-- 渗压应该参照渗流量的数据配置，直接svg width和height等于viewBox的width和height -->
<DM01CRSC0001-originalWidth>188</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>53</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>188</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>39.03</DM01CRSC0001-baseY>
<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>

<DM01CRSC0001-weirEl>474</DM01CRSC0001-weirEl>

<DM01CRSC0001-x>1202</DM01CRSC0001-x>
<DM01CRSC0001-y>512</DM01CRSC0001-y>
<DM01CRSC0001-el>477</DM01CRSC0001-el>
<DM01CRSC0001-group>SFB01</DM01CRSC0001-group>

<!-- 三角堰坐标设置 -->
<DM01CRSC0001-triangle-bottom>167.19, 42.73</DM01CRSC0001-triangle-bottom>
<DM01CRSC0001-triangle-top-left>154.18, 33.28</DM01CRSC0001-triangle-top-left>
<DM01CRSC0001-triangle-top-right>180.33, 33.28</DM01CRSC0001-triangle-top-right>

<r1-formula>
<![CDATA[
${expr.evaluate("${v1}")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("${v1} / 100")},0
]]>
</r2-formula>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SL1', 'MWR');

--
-- 坝基渗压（SPF）
--
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPF03', '', '301A0755', 'SPF', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计3</bktxt>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计3</bktxt>
  <x>465</x>
  <y>260</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1202</DM01CRSC0001-x>
<DM01CRSC0001-y>512</DM01CRSC0001-y>
<DM01CRSC0001-el>477</DM01CRSC0001-el>
<DM01CRSC0001-group>SPF03-SPF06-SPF08</DM01CRSC0001-group>

<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游侧过渡料中</安装位置y>
<安装位置z>高程477.00m</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("-0.2129313 * (${v1} - 9130.1) + 0.017474 * (${v2} - 11.5)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("477 + (-0.2129313 * (${v1} - 9130.1) + 0.017474 * (${v2} - 11.5)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+058.400心墙下游侧过渡料中.高程477.00m</工程部位>
<测点编号>SY3</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径></钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度></钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1511003</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.21293</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料></回填封孔材料>
<温度系数>0.017474</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>9118.4</埋设前模数>
<埋设前温度>9.5</埋设前温度>
<埋设后模数>9127.9</埋设后模数>
<埋设后温度>10.0</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月24日 至 2015年12月4日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2016</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY3', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPF06', '', '301A0755', 'SPF', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计6</bktxt>
  <x>280</x>
  <y>275</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计6</bktxt>
   <x>650</x>
  <y>260</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1546</DM01CRSC0001-x>
<DM01CRSC0001-y>528</DM01CRSC0001-y>
<DM01CRSC0001-el>476</DM01CRSC0001-el>
<DM01CRSC0001-group>SPF03-SPF06-SPF08</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游28m</安装位置y>
<安装位置z>建基面</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.2633695 * (${v1} - 8422.6) + 0.362057 * (${v2} - 15.1)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("477 + (-0.2633695 * (${v1} - 8422.6) + 0.362057 * (${v2} - 15.1)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+058.400心墙下游28m。建基面</工程部位>
<测点编号>SY6</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径></钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>5.7</钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510992</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.2633695</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.362057</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8549.2</埋设前模数>
<埋设前温度>9.5</埋设前温度>
<埋设后模数>8422.6</埋设后模数>
<埋设后温度>15.3</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月28日 至 2015年12月28日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2016</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY6', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPF08', '', '301A0755', 'SPF', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计8</bktxt>
  <x>750</x>
  <y>285</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计8</bktxt>
   <x>750</x>
  <y>270</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1891</DM01CRSC0001-x>
<DM01CRSC0001-y>545</DM01CRSC0001-y>
<DM01CRSC0001-el>475</DM01CRSC0001-el>
<DM01CRSC0001-group>SPF03-SPF06-SPF08</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游53m</安装位置y>
<安装位置z>建基面</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.2366903 * (${v1} - 8506.2) + 0.327006 * (${v2} - 15.7)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("476 + (-0.2366903 * (${v1} - 8506.2) + 0.327006 * (${v2} - 15.7)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+058.400心墙下游侧过渡料中.建基面</工程部位>
<测点编号>SY8</测点编号>
<电缆耐水压力></电缆耐水压力>
<水中绝缘电阻></水中绝缘电阻>
<钻孔直径>110</钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>10.8</钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510989</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.2366903</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.327066</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8621.1</埋设前模数>
<埋设前温度>8.6</埋设前温度>
<埋设后模数>8501.3</埋设后模数>
<埋设后温度>15.7</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月28日 至 2015年12月28日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2016</填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY8', 'VWP');

--
-- 坝体渗压（SPB）
--
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPB01', '', '301A0755', 'SPB', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计1</bktxt>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计1</bktxt>
   <x>475</x>
  <y>130</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1202</DM01CRSC0001-x>
<DM01CRSC0001-y>189</DM01CRSC0001-y>
<DM01CRSC0001-el>502</DM01CRSC0001-el>
<DM01CRSC0001-group>SPB01-SPB05-SPB07</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游过渡料中</安装位置y>
<安装位置z>高程502.0</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.2366903 * (${v1} - 8286.3) + 0.327006 * (${v2} - 16.5)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("502 + (-0.2366903 * (${v1} - 8286.3) + 0.327006 * (${v2} - 16.5)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>大坝沥青心墙下游侧过渡料中，坝横0+058.400，高程502.0m</工程部位>
<测点编号>SY1</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径></钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度></钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510993</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.2060321KPa/Digit</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料></回填封孔材料>
<温度系数>0.036790KPa/°C</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8628.0</埋设前模数>
<埋设前温度>12.5</埋设前温度>
<埋设后模数>8627.8</埋设后模数>
<埋设后温度>12.6</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2016年3月13日 至 2016年3月13日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015</填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY1', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPB02', '', '301A0755', 'SPB', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计2</bktxt>
  <x>290</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计2</bktxt>
  <x>490</x>
  <y>150</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1202</DM01CRSC0001-x>
<DM01CRSC0001-y>344</DM01CRSC0001-y>
<DM01CRSC0001-el>490</DM01CRSC0001-el>
<DM01CRSC0001-group>SPB02-SPB05-SPB07</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游过渡料中</安装位置y>
<安装位置z>高程490.0</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.2060321 * (${v1} - 8633.4) + 0.03679 * (${v2} - 15.4)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("490 + (-0.2060321 * (${v1} - 8633.4) + 0.03679 * (${v2} - 15.4)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>大坝沥青心墙下游侧过渡料中，坝横0+058.400，高程490.0m</工程部位>
<测点编号>SY2</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径></钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度></钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510993</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.2060321KPa/Digit</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料></回填封孔材料>
<温度系数>0.036790KPa/°C</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8628.0</埋设前模数>
<埋设前温度>12.5</埋设前温度>
<埋设后模数>8627.8</埋设后模数>
<埋设后温度>12.6</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2016年3月13日 至 2016年3月13日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015</填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY2', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPB05', '', '301A0755', 'SPB', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计5</bktxt>
  <x>280</x>
  <y>275</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计5</bktxt>
   <x>650</x>
  <y>220</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1547</DM01CRSC0001-x>
<DM01CRSC0001-y>344</DM01CRSC0001-y>
<DM01CRSC0001-el>490</DM01CRSC0001-el>
<DM01CRSC0001-group>SPB01-SPB05-SPB07;SPB02-SPB05-SPB07</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游28m</安装位置y>
<安装位置z>高程490.0</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.2528221 * (${v1} - 8452.1) + 0.014411 * (${v2} - 12.7)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("490 + (-0.2528221 * (${v1} - 8452.1) + 0.014411 * (${v2} - 12.7)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>心墙下游28m处，EL490m</工程部位>
<测点编号>SY5</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径></钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度></钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510979</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.2528221KPa/Digit</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料></回填封孔材料>
<温度系数>0.014411KPa/Digit</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8446.8</埋设前模数>
<埋设前温度>12.9</埋设前温度>
<埋设后模数>8446.2</埋设后模数>
<埋设后温度>13.6</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2016年3月11日 至 2016年3月11日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期></填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY5', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPB07', '', '301A0755', 'SPB', 0, 0,
'<xproperty>
<平面>
  <bktxt>渗压计7</bktxt>
  <x>280</x>
  <y>285</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计7</bktxt>
   <x>750</x>
  <y>230</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1891</DM01CRSC0001-x>
<DM01CRSC0001-y>436</DM01CRSC0001-y>
<DM01CRSC0001-el>482</DM01CRSC0001-el>
<DM01CRSC0001-group>SPB01-SPB05-SPB07;SPB02-SPB05-SPB07</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游53m</安装位置y>
<安装位置z>高程482.0</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.1921229 * (${v1} - 8236.6) + 0.202382 * (${v2} - 12.4)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("482 + (-0.1921229 * (${v1} - 8236.6) + 0.202382 * (${v2} - 12.4)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+058.400心墙下游53m。高程482.00m</工程部位>
<测点编号>SY7</测点编号>
<电缆耐水压力>1MPa</电缆耐水压力>
<水中绝缘电阻>50Ω</水中绝缘电阻>
<钻孔直径>110</钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>1.5</钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1511000</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.1921229</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.202382</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8231.4</埋设前模数>
<埋设前温度>8.8</埋设前温度>
<埋设后模数>8236.4</埋设后模数>
<埋设后温度>12.7</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月28日 至 2015年12月28日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2016</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'SY7', 'VWP');

--
-- 基岩渗压（SPR）
--
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPR04', '', '301A0755', 'SPR', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计4</bktxt>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计4</bktxt>
  <x>485</x>
  <y>310</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>

<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>24.79</DM01CRSC1001-x>
<DM01CRSC1001-y>18.67</DM01CRSC1001-y>

<DM01CRSC1001-el>466</DM01CRSC1001-el>
<DM01CRSC1001-group>SPR04</DM01CRSC1001-group>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1203</DM01CRSC0001-x>
<DM01CRSC0001-y>654</DM01CRSC0001-y>
<DM01CRSC0001-el>466</DM01CRSC0001-el>
<DM01CRSC0001-group>SPR04</DM01CRSC0001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>帷幕灌浆带下游</安装位置y>
<安装位置z>高程466.0</安装位置z>
<r1-formula>
<![CDATA[
${expr.evaluate("-0.186169 * (${v1} - 7558.3) + 0.075511 * (${v2} - 20.3)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("466 + (-0.186169 * (${v1} - 7558.3) + 0.075511 * (${v2} - 20.3)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+058400</工程部位>
<测点编号>SY4</测点编号>
<电缆耐水压力></电缆耐水压力>
<水中绝缘电阻></水中绝缘电阻>
<钻孔直径>110</钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>11.3</钻孔深度>
<量程>700</量程>
<孔口高程>477.00</孔口高程>
<出厂编号>1510957</出厂编号>
<孔底高程>465.70</孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.186169</直线系数>
<透水材料底高程>465.70</透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.075511</温度系数>
<封孔材料底高程>470.00</封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程>477.00</封孔材料顶高程>
<埋设前模数>8154.2</埋设前模数>
<埋设前温度>12.5</埋设前温度>
<埋设后模数>7528.8</埋设后模数>
<埋设后温度>19.2</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月24日至2015年12月4日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015</填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'SY4', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPR09', '', '301A0755', 'SPR', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计9</bktxt>
  <x>290</x>
  <y>200</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计9</bktxt>
  <x>485</x>
  <y>290</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<安装位置x>坝横0+030.400</安装位置x>
<安装位置y>帷幕灌浆带下游</安装位置y>
<安装位置z>高程487.8</安装位置z>
<DM01CRSC1001-baseY>1331</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>15.80</DM01CRSC1001-x>
<DM01CRSC1001-y>11.74</DM01CRSC1001-y>

<DM01CRSC1001-el>487.8</DM01CRSC1001-el>
<DM01CRSC1001-group>SPR09</DM01CRSC1001-group>

<r1-formula>
<![CDATA[
${expr.evaluate("-0.2021804 * (${v1} - 7987.7) + 0.085743 * (${v2} - 22.7)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("487.80 + (-0.2021804 * (${v1} - 7987.7) + 0.085743 * (${v2} - 22.7)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+030.00心墙下游侧过渡料中.高程487.80m</工程部位>
<测点编号>SY9</测点编号>
<电缆耐水压力></电缆耐水压力>
<水中绝缘电阻></水中绝缘电阻>
<钻孔直径>110</钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>4.7</钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510996</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.20218040</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.085743</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8141.7</埋设前模数>
<埋设前温度>15.7</埋设前温度>
<埋设后模数>7977.9</埋设后模数>
<埋设后温度>19.5</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年11月24日 至 2015年11月25日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015.12.15</填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'SY9', 'VWP');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('SPR10', '', '301A0755', 'SPR', 0, 0,
'<xproperty>

<平面>
  <bktxt>渗压计10</bktxt>
  <x>280</x>
  <y>360</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>渗压计10</bktxt>
  <x>485</x>
  <y>300</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<安装位置x>坝横0+106.000</安装位置x>
<安装位置y>帷幕灌浆带下游</安装位置y>
<安装位置z>高程487.5</安装位置z>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>39.80</DM01CRSC1001-x>
<DM01CRSC1001-y>11.47</DM01CRSC1001-y>

<DM01CRSC1001-el>487.5</DM01CRSC1001-el>
<DM01CRSC1001-group>SPR10</DM01CRSC1001-group>

<r1-formula>
<![CDATA[
${expr.evaluate("-0.1940236 * (${v1} - 8096.1) + 0.044947 * (${v2} - 20.1)")},0
]]>
</r1-formula>
<r2-formula>
<![CDATA[
${expr.evaluate("487.50 + (-0.1940236 * (${v1} - 8096.1) + 0.044947 * (${v2} - 20.1)) * 0.1")},0
]]>
</r2-formula>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>坝横0+106.00帷幕灌浆带下游.高程487.50m</工程部位>
<测点编号>SY10</测点编号>
<电缆耐水压力></电缆耐水压力>
<水中绝缘电阻></水中绝缘电阻>
<钻孔直径>110</钻孔直径>
<仪器型号>BGK4500SR-700kPa</仪器型号>
<钻孔深度>3.7</钻孔深度>
<量程>700</量程>
<孔口高程></孔口高程>
<出厂编号>1510996</出厂编号>
<孔底高程></孔底高程>
<生产厂家>北京基康</生产厂家>
<回填透水材料>细砂</回填透水材料>
<直线系数>-0.19402</直线系数>
<透水材料底高程></透水材料底高程>
<回填封孔材料>砂浆</回填封孔材料>
<温度系数>0.044947</温度系数>
<封孔材料底高程></封孔材料底高程>
<电缆长度>50</电缆长度>
<封孔材料顶高程></封孔材料顶高程>
<埋设前模数>8067.8</埋设前模数>
<埋设前温度>18.6</埋设前温度>
<埋设后模数>8075.4</埋设后模数>
<埋设后温度>19.5</埋设后温度>
<上游水位></上游水位>
<下游水位></下游水位>
<天气>晴</天气>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月10日 至 2015年12月10日</埋设时间>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'SY10', 'VWP');

--
-- 温度计
--
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('TMW01', '', '301A0755', 'TMW', 0, 0,
'<xproperty>

<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>465</x>
  <y>130</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙中间</安装位置y>
<安装位置z>高程502</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("0.04235 * (${v1} - 3862.2)")},0
]]>
</r1-formula>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1179</DM01CRSC0001-x>
<DM01CRSC0001-y>190</DM01CRSC0001-y>
<DM01CRSC0001-el>502</DM01CRSC0001-el>
<DM01CRSC0001-group>TMW01</DM01CRSC0001-group>

<单位工程名称>忠县金鸡水库枢纽工程</单位工程名称>
<测点编号>WD1</测点编号>
<分部工程名称>大坝安全监测(控)及自动化系统</分部工程名称>
<施工单位>深圳市科皓信息技术有限公司</施工单位>
<桩号>坝横0+058.400</桩号>
<仪器型号>GK4700HT</仪器型号>
<坝轴距>沥青心墙中间</坝轴距>
<生产厂家>美国基康</生产厂家>
<高程>490.00</高程>
<出厂编号>1525149</出厂编号>
<量程>-20-200°C</量程>
<温度系数>0.04272C°/Digit</温度系数>
<零度测值>3902.9</零度测值>
<电缆长度>BGK02-250V6</电缆长度>
<电缆长度>50</电缆长度>
<埋设前读数>4225.1</埋设前读数>
<埋设后读数>4893.1</埋设后读数>
<天气>晴</天气>
<埋设示意图></埋设示意图>
<埋设时段>2015年12月23日</埋设时段>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期></填表日期>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'WD1', 'TM');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('TMW02', '', '301A0755', 'TMW', 0, 0,
'<xproperty>

<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>465</x>
  <y>150</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙中间</安装位置y>
<安装位置z>高程490</安装位置z>
<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1179</DM01CRSC0001-x>
<DM01CRSC0001-y>343</DM01CRSC0001-y>
<DM01CRSC0001-el>490</DM01CRSC0001-el>
<DM01CRSC0001-group>TMW02</DM01CRSC0001-group>

<r1-formula>
<![CDATA[
${expr.evaluate("0.04182 * (${v1} - 3848.9)")},0
]]>
</r1-formula>

<单位工程名称>忠县金鸡水库枢纽工程</单位工程名称>
<测点编号>WD2</测点编号>
<分部工程名称>大坝安全监测(控)及自动化系统</分部工程名称>
<施工单位>深圳市科皓信息技术有限公司</施工单位>
<桩号>坝横0+058.400</桩号>
<仪器型号>GK4700HT</仪器型号>
<坝轴距>沥青心墙中间</坝轴距>
<生产厂家>美国基康</生产厂家>
<高程>490.00</高程>
<出厂编号>1525149</出厂编号>
<量程>-20-200°C</量程>
<温度系数>0.04272C°/Digit</温度系数>
<零度测值>3902.9</零度测值>
<电缆长度>BGK02-250V6</电缆长度>
<电缆长度>50</电缆长度>
<埋设前读数>4225.1</埋设前读数>
<埋设后读数>4893.1</埋设后读数>
<天气>晴</天气>
<埋设示意图></埋设示意图>
<埋设时段>2015年12月23日</埋设时段>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期></填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'WD2', 'TM');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('TMW03', '', '301A0755', 'TMW', 0, 0,
'<xproperty>


<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>290</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>maptmpetag.png</tagimg>
  <x>465</x>
  <y>170</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙中间</安装位置y>
<安装位置z>高程480</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("0.04272 * (${v1} - 3902.9)")},0
]]>
</r1-formula>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1179</DM01CRSC0001-x>
<DM01CRSC0001-y>473</DM01CRSC0001-y>
<DM01CRSC0001-el>480</DM01CRSC0001-el>
<DM01CRSC0001-group>TMW03</DM01CRSC0001-group>

<单位工程名称>忠县金鸡水库枢纽工程</单位工程名称>
<测点编号>WD3</测点编号>
<分部工程名称>大坝安全监测(控)及自动化系统</分部工程名称>
<施工单位>深圳市科皓信息技术有限公司</施工单位>
<桩号>坝横0+058.400</桩号>
<仪器型号>GK4700HT</仪器型号>
<坝轴距>沥青心墙中间</坝轴距>
<生产厂家>美国基康</生产厂家>
<高程>480.00</高程>
<出厂编号>1525149</出厂编号>
<量程>-20-200°C</量程>
<温度系数>0.04182°C/Digit</温度系数>
<零度测值>3848.9</零度测值>
<电缆长度>BGK02-250V6</电缆长度>
<电缆长度>50</电缆长度>
<埋设前读数>4119.2</埋设前读数>
<埋设后读数>6165.3</埋设后读数>
<天气>晴</天气>
<埋设示意图></埋设示意图>
<埋设时段>2016年3月12日10点至2016年3月12日10点30分</埋设时段>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2016.3.20</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'WD3', 'TM');

--
-- 位错计（DL）
--
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('DLW01', '', '301A0755', 'DLW', 0, 0,
'<xproperty>

<平面>
  <bktxt>位错计1</bktxt>
  <x>290</x>
  <y>200</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>位错计1</bktxt>
  <x>465</x>
  <y>149</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<r1-formula>
<![CDATA[
${expr.evaluate("0.019794 * (${v1} - 2553.4) - 0.01732 * (${v2} - 23.5)")},0
]]>
</r1-formula>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>15.80</DM01CRSC1001-x>
<DM01CRSC1001-y>10.65</DM01CRSC1001-y>
<DM01CRSC1001-el>491.3</DM01CRSC1001-el>
<DM01CRSC1001-group>DLW01</DM01CRSC1001-group>
<安装位置x>坝横0+030.000</安装位置x>
<安装位置y>心墙上游侧表面</安装位置y>
<安装位置z>高程491.3</安装位置z>

<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>心墙与基座结合部位。顺河向</工程部位>
<测点编号>WC1</测点编号>
<仪器型号>BGK4420IHP-50</仪器型号>
<仪器生产厂家>北京基康</仪器生产厂家>
<仪器出厂编号>1510061</仪器出厂编号>
<量程>50</量程>
<埋设区及材料>砂、砾石</埋设区及材料>
<埋设桩号>坝横0+030.000</埋设桩号>
<距坝轴距>心墙上游侧</距坝轴距>
<测点高程>377.00</测点高程>
<接长电缆型号>BGK02-25006</接长电缆型号>
<电缆长度>50</电缆长度>
<仪器系数>0.010142mm/Digit</仪器系数>
<温度系数>0.008875/°C</温度系数>
<安装前模数>2478.9</安装前模数>
<安装前温度>10.3</安装前温度>
<埋设后模数>3930.2</埋设后模数>
<埋设后温度>14.8</埋设后温度>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月09日 至 2015年12月09日</埋设时间>
<天气>晴</天气>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015.12.18</填表日期>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'WC1', 'VWL');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('DLW02', '', '301A0755', 'DLW', 0, 0, 
'<xproperty>

<平面>
  <bktxt>位错计2</bktxt>
  <x>290</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>位错计2</bktxt>
  <x>450</x>
  <y>220</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<r1-formula>
<![CDATA[
${expr.evaluate("0.010142 * (${v1} - 3930.2) + 0.008875 * (${v2} - 14.8)")},0
]]>
</r1-formula>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>23.82</DM01CRSC1001-x>
<DM01CRSC1001-y>15.15</DM01CRSC1001-y>
<DM01CRSC1001-el>477</DM01CRSC1001-el>
<DM01CRSC1001-group>DLW02</DM01CRSC1001-group>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙上游侧表面</安装位置y>
<安装位置z>高程477.0</安装位置z>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>心墙与基座结合部位。顺河向</工程部位>
<测点编号>WC2</测点编号>
<仪器型号>BGK4420IHP-50</仪器型号>
<仪器生产厂家>北京基康</仪器生产厂家>
<仪器出厂编号>1510061</仪器出厂编号>
<量程>50</量程>
<埋设区及材料>砂、砾石</埋设区及材料>
<埋设桩号>坝横0+058.400</埋设桩号>
<距坝轴距>心墙上游侧</距坝轴距>
<测点高程>377.00</测点高程>
<接长电缆型号>BGK02-25006</接长电缆型号>
<电缆长度>50</电缆长度>
<仪器系数>0.010142mm/Digit</仪器系数>
<温度系数>0.008875/°C</温度系数>
<安装前模数>2478.9</安装前模数>
<安装前温度>10.3</安装前温度>
<埋设后模数>3930.2</埋设后模数>
<埋设后温度>14.8</埋设后温度>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月09日 至 2015年12月09日</埋设时间>
<天气>晴</天气>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015.12.18</填表日期>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'WC2', 'VWL');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('DLW03', '', '301A0755', 'DLW', 0, 0, 
'<xproperty>

<平面>
  <bktxt>位错计3</bktxt>
  <x>290</x>
  <y>260</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>位错计3</bktxt>
  <x>465</x>
  <y>220</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<r1-formula>
<![CDATA[
${expr.evaluate("0.01021 * (${v1} - 2354.2) + 0.008933 * (${v2} - 18.7)")},0
]]>
</r1-formula>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>33.32</DM01CRSC1001-x>
<DM01CRSC1001-y>15.15</DM01CRSC1001-y>
<DM01CRSC1001-el>477</DM01CRSC1001-el>
<DM01CRSC1001-group>DLW03</DM01CRSC1001-group>
<安装位置x>坝横0+083.400</安装位置x>
<安装位置y>心墙上游侧表面</安装位置y>
<安装位置z>高程477.0</安装位置z>
<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>心墙与基座结合部位。顺河向</工程部位>
<测点编号>WC3</测点编号>
<仪器型号>BGK4420IHP-50</仪器型号>
<仪器生产厂家>北京基康</仪器生产厂家>
<仪器出厂编号>1510061</仪器出厂编号>
<量程>50</量程>
<埋设区及材料>砂、砾石</埋设区及材料>
<埋设桩号>坝横0+083.400</埋设桩号>
<距坝轴距>心墙上游侧</距坝轴距>
<测点高程>377.00</测点高程>
<接长电缆型号>BGK02-25006</接长电缆型号>
<电缆长度>50</电缆长度>
<仪器系数>0.010142mm/Digit</仪器系数>
<温度系数>0.008875/°C</温度系数>
<安装前模数>2478.9</安装前模数>
<安装前温度>10.3</安装前温度>
<埋设后模数>3930.2</埋设后模数>
<埋设后温度>14.8</埋设后温度>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月09日 至 2015年12月09日</埋设时间>
<天气>晴</天气>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015.12.18</填表日期>

</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'WC3', 'VWL');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('DLW04', '', '301A0755', 'DLW', 0, 0,
'<xproperty>

<平面>
  <bktxt>位错计4</bktxt>
  <x>320</x>
  <y>295</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>位错计4</bktxt>
  <x>465</x>
  <y>149</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>

<r1-formula>
<![CDATA[
${expr.evaluate("0.019867 * (${v1} - 4988.2) - 0.01738 * (${v2} - 24.3)")},0
]]>
</r1-formula>

<DM01CRSC1001-originalWidth>52.1071</DM01CRSC1001-originalWidth>
<DM01CRSC1001-originalHeight>19.7641</DM01CRSC1001-originalHeight>
<DM01CRSC1001-viewWidth>52.1071</DM01CRSC1001-viewWidth>
<DM01CRSC1001-viewHeight>19.7641</DM01CRSC1001-viewHeight>
<DM01CRSC1001-baseY>18.67</DM01CRSC1001-baseY>
<DM01CRSC1001-baseEl>466</DM01CRSC1001-baseEl>

<DM01CRSC1001-x>39.80</DM01CRSC1001-x>
<DM01CRSC1001-y>10.53</DM01CRSC1001-y>
<DM01CRSC1001-el>491.3</DM01CRSC1001-el>
<DM01CRSC1001-group>DLW04</DM01CRSC1001-group>
<安装位置x>坝横0+106.000</安装位置x>
<安装位置y>心墙上游侧表面</安装位置y>
<安装位置z>高程491.0</安装位置z>

<工程名称>忠县金鸡水库枢纽工程</工程名称>
<工程部位>心墙与基座结合部位。顺河向</工程部位>
<测点编号>WC4</测点编号>
<仪器型号>BGK4420IHP-50</仪器型号>
<仪器生产厂家>北京基康</仪器生产厂家>
<仪器出厂编号>1510061</仪器出厂编号>
<量程>50</量程>
<埋设区及材料>砂、砾石</埋设区及材料>
<埋设桩号>坝横0+106.000</埋设桩号>
<距坝轴距>心墙上游侧</距坝轴距>
<测点高程>377.00</测点高程>
<接长电缆型号>BGK02-25006</接长电缆型号>
<电缆长度>50</电缆长度>
<仪器系数>0.010142mm/Digit</仪器系数>
<温度系数>0.008875/°C</温度系数>
<安装前模数>2478.9</安装前模数>
<安装前温度>10.3</安装前温度>
<埋设后模数>3930.2</埋设后模数>
<埋设后温度>14.8</埋设后温度>
<埋设示意图及说明></埋设示意图及说明>
<埋设时间>2015年12月09日 至 2015年12月09日</埋设时间>
<天气>晴</天气>
<主管>邓良</主管>
<埋设者>李明洁</埋设者>
<填表者>李明洁</填表者>
<校核者>胡国虎</校核者>
<监测者>章前君</监测者>
<填表日期>2015.12.18</填表日期>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', 'WC4', 'VWL');



-- 倾斜
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('ICW01', '', '301A0755', 'ICW', 0, 0,
'<xproperty>

<平面>
  <bktxt>倾斜仪1</bktxt>
  <x>280</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>倾斜仪1</bktxt>
  <x>480</x>
  <y>130</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面></纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游侧表面</安装位置y>
<安装位置z>高程502.0</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("0.06403435 * 12.5 * (${v1} + 0.615)")},0
]]> 
</r1-formula>

<DM01CRSC0001-base-point-x>1182</DM01CRSC0001-base-point-x>
<DM01CRSC0001-base-point-y>483</DM01CRSC0001-base-point-y>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1184</DM01CRSC0001-x>
<DM01CRSC0001-y>182</DM01CRSC0001-y>
<DM01CRSC0001-el>502</DM01CRSC0001-el>
<DM01CRSC0001-group>ICW01</DM01CRSC0001-group>

<工程部位>心墙下游侧表面,坝横+058.400</工程部位>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'QX1', 'IPI');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('ICW02', '', '301A0755', 'ICW', 0, 0, 
'<xproperty>

<平面>
  <bktxt>倾斜仪2</bktxt>
  <x>290</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>倾斜仪2</bktxt>
  <x>480</x>
  <y>150</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游侧表面</安装位置y>
<安装位置z>高程490.0</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("0.06406985 * 12 * (${v1} + 0.667)")},0
]]> 
</r1-formula>

<DM01CRSC0001-base-point-x>1182</DM01CRSC0001-base-point-x>
<DM01CRSC0001-base-point-y>483</DM01CRSC0001-base-point-y>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1184</DM01CRSC0001-x>
<DM01CRSC0001-y>335</DM01CRSC0001-y>
<DM01CRSC0001-el>490</DM01CRSC0001-el>
<DM01CRSC0001-group>ICW02</DM01CRSC0001-group>
<工程部位>心墙下游侧表面,坝横+058.400</工程部位>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'QX2', 'IPI');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm, msmt)
values ('ICW03', '', '301A0755', 'ICW', 0, 0, 
'<xproperty>
<平面>
  <bktxt>倾斜仪3</bktxt>
  <x>290</x>
  <y>255</y>
  <w>20</w>
  <h>30</h>
</平面>
<横剖面>
  <bktxt>倾斜仪3</bktxt>
  <x>480</x>
  <y>170</y>
  <w>20</w>
  <h>30</h>
</横剖面>
<纵剖面>
</纵剖面>
<安装位置x>坝横0+058.400</安装位置x>
<安装位置y>心墙下游侧表面</安装位置y>
<安装位置z>高程482.0</安装位置z>

<r1-formula>
<![CDATA[
${expr.evaluate("0.0642462 * 10 * (${v1} - 0.265)")},0
]]> 
</r1-formula>

<DM01CRSC0001-base-point-x>1182</DM01CRSC0001-base-point-x>
<DM01CRSC0001-base-point-y>483</DM01CRSC0001-base-point-y>

<DM01CRSC0001-originalWidth>2745</DM01CRSC0001-originalWidth>
<DM01CRSC0001-originalHeight>711</DM01CRSC0001-originalHeight>
<DM01CRSC0001-viewWidth>209</DM01CRSC0001-viewWidth>
<DM01CRSC0001-viewHeight>53</DM01CRSC0001-viewHeight>
<DM01CRSC0001-baseY>512</DM01CRSC0001-baseY>

<DM01CRSC0001-baseEl>477</DM01CRSC0001-baseEl>
<DM01CRSC0001-x>1184</DM01CRSC0001-x>
<DM01CRSC0001-y>465</DM01CRSC0001-y>
<DM01CRSC0001-el>482</DM01CRSC0001-el>
<DM01CRSC0001-group>ICW03</DM01CRSC0001-group>
<工程部位>心墙下游侧表面,坝横+058.400</工程部位>
</xproperty>', 
'RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', 'QX3', 'IPI');



--视频
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('VD01', '', '301A0755', 'VD', 0, 0,
'<xproperty>
<r1-formula>
</r1-formula>

<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>440</x>
  <y>260</y>
  <w>25</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>450</x>
  <y>320</y>
  <w>25</w>
  <h>30</h>
</横剖面>
<纵剖面></纵剖面>
<安装位置x>坝左侧</安装位置x>
<安装位置y>心墙中间</安装位置y>
<安装位置z>坝顶</安装位置z>
<id>VD01</id>
<snapshot>VD0001.jpg</snapshot>
<videoName>坝顶左侧摄像头</videoName>
<deviceId>8</deviceId>
<videoType>1</videoType>
<ip>192.168.1.119</ip>
<port>8000</port>
<serverIp>222.180.44.183</serverIp>
<serverPort>5111</serverPort>
<channel>1</channel>
<usr>admin</usr>
<pwd>12345</pwd>
<cameraId>8</cameraId>
<deviceType>10020</deviceType>
<protocolType>0</protocolType>
<streamType>0</streamType>
<cameraIndexCode>150430044553149460</cameraIndexCode>
<cascadeType>0</cascadeType>
<regionIndexCode>150430020551469390</regionIndexCode>
<pagIp>192.168.1.119</pagIp>
<pagPort>7071</pagPort>
<networkType>光纤</networkType>

</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', NULL, '坝顶左侧摄像头');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('VD02', '', '301A0755', 'VD', 0, 0,
'<xproperty>
<r1-formula>
</r1-formula>

<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>180</x>
  <y>290</y>
  <w>25</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>450</x>
  <y>220</y>
  <w>25</w>
  <h>30</h>
</横剖面>
<纵剖面>
  <bkimg></bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x></x>
  <y></y>
  <w></w>
  <h></h>
</纵剖面>

<id>VD02</id>
<snapshot>VD0002.jpg</snapshot>
<videoName>坝顶右侧摄像头</videoName>
<deviceId>7</deviceId>
<videoType>1</videoType>
<ip>192.168.1.119</ip>
<port>8000</port>
<serverIp>222.180.44.183</serverIp>
<serverPort>5112</serverPort>
<channel>1</channel>
<usr>admin</usr>
<pwd>12345</pwd>
<cameraId>7</cameraId>
<deviceType>10020</deviceType>
<protocolType>0</protocolType>
<streamType>0</streamType>
<cameraIndexCode>150430034264340260</cameraIndexCode>
<cascadeType>0</cascadeType>
<regionIndexCode>150430020551469390</regionIndexCode>
<pagIp>192.168.1.119</pagIp>
<pagPort>7071</pagPort>
<networkType>光纤</networkType>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', NULL, '坝顶右侧摄像头');

insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('VD03', '', '301A0755', 'VD', 0, 0,
'<xproperty>
<r1-formula>
</r1-formula>

<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>180</x>
  <y>290</y>
  <w>25</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>450</x>
  <y>220</y>
  <w>25</w>
  <h>30</h>
</横剖面>
<纵剖面>
  <bkimg></bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x></x>
  <y></y>
  <w></w>
  <h></h>
</纵剖面>

<id>VD02</id>
<snapshot>VD0003.jpg</snapshot>
<videoName>坝顶右侧2号摄像头</videoName>
<deviceId>5</deviceId>
<videoType>1</videoType>
<ip>192.168.1.119</ip>
<port>8000</port>
<serverIp>222.180.44.183</serverIp>
<serverPort>5113</serverPort>
<channel>1</channel>
<usr>admin</usr>
<pwd>12345</pwd>
<cameraId>5</cameraId>
<deviceType>10020</deviceType>
<protocolType>0</protocolType>
<streamType>0</streamType>
<cameraIndexCode>150430034222946560</cameraIndexCode>
<cascadeType>0</cascadeType>
<regionIndexCode>150430020551469390</regionIndexCode>
<pagIp>192.168.1.119</pagIp>
<pagPort>7071</pagPort>
<networkType>光纤</networkType>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', NULL, '坝顶右侧2号摄像头');

-- 全景高清摄像机
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('VD04', '', '301A0755', 'VD', 0, 0,
'<xproperty>
<平面>
  <bkimg>jjskpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>180</x>
  <y>290</y>
  <w>25</w>
  <h>30</h>
</平面>
<横剖面>
  <bkimg>jjskhpm.png</bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x>450</x>
  <y>220</y>
  <w>25</w>
  <h>30</h>
</横剖面>
<纵剖面>
  <bkimg></bkimg>
  <tagimg>mapvideotag.png</tagimg>
  <x></x>
  <y></y>
  <w></w>
  <h></h>
</纵剖面>

<videoType>overview</videoType>
<snapshot>VDOVERVIEW.jpg</snapshot>
<videoName>全景高清摄像机</videoName>
<serverIp>222.180.44.183</serverIp>
<serverPort>8557</serverPort>
<channel>1</channel>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', NULL, '全景高清摄像机');

-- 高速球机
insert into t_measpoint (pointid, dcode, stcd, mnritm, datype, runstate, xproperty, wrp, wrpcd, wrpbld, wrpbldcd, crsc, mpnm)
values ('VD05', '', '301A0755', 'VD', 0, 0,
'<xproperty>

<videoType>overview-tracking</videoType>
<videoName>高速球机</videoName>
<controllerUrl></controllerUrl>
<serverIp>222.180.44.183</serverIp>
<serverPort>5544</serverPort>
<username>admin</username>
<password>admin12345</password>
<channel>1</channel>
</xproperty>',
'RSR', '50023330002', 'DM', '5002333000201', NULL, '高速球机');

-- 厂家信息
insert into t_manufactures (iid, iname, xproperty) values ('JK', '美国基康', null);

-- 设备信息
insert into t_sensor (iid, iclass, iname, formula, xproperty) values ('50023340001WD3', 'TM', '心墙温度计', null, '');

-- 断面数据
insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC0001', '坝横0+058.400', 'H');

insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC0002', '坝横0+030.000', 'H');

insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC0003', '坝横0+106.000', 'H');

insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC0004', '坝横0+083.400', 'H');

insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC1001', '大坝纵剖面', 'V');

insert into sws_t_section(wrp, wrpcd, wrpbld, wrpbldcd, crsc, crscnm, crsctp)
values ('RSR', '50023330002', 'DM', '5002333000201', 'CRSC2001', '大坝平面图', 'O');
