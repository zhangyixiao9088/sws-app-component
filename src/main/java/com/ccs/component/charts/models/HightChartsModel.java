package com.ccs.component.charts.models;

public class HightChartsModel {

	private ChartNode chart= new ChartNode();;
	private TitleNode title= new TitleNode();;
	private SubtitleNode subtitle= new SubtitleNode();;
	private XAxisNode xAxis= new XAxisNode();;
	private YAxisNode yAxis= new YAxisNode();;
	private TooltipNode tooltip= new TooltipNode();;
	private PlotOptionsNode plotOptions= new PlotOptionsNode();;
	private SeriesNode series= new SeriesNode();;
	
	public HightChartsModel(){
	}
	
	
	
	/*********************************************************
	 *  Getter and Setter
	 *********************************************************/
	public ChartNode getChart() {
		return chart;
	}
	public void setChart(ChartNode chart) {
		this.chart = chart;
	}
	public TitleNode getTitle() {
		return title;
	}
	public void setTitle(TitleNode title) {
		this.title = title;
	}
	public SubtitleNode getSubtitle() {
		return subtitle;
	}
	public void setSubtitle(SubtitleNode subtitle) {
		this.subtitle = subtitle;
	}
	public XAxisNode getXAxis() {
		return xAxis;
	}
	public void setXAxis(XAxisNode axis) {
		xAxis = axis;
	}
	public YAxisNode getYAxis() {
		return yAxis;
	}
	public void setYAxis(YAxisNode axis) {
		yAxis = axis;
	}
	public TooltipNode getTooltip() {
		return tooltip;
	}
	public void setTooltip(TooltipNode tooltip) {
		this.tooltip = tooltip;
	}
	public PlotOptionsNode getPlotOptions() {
		return plotOptions;
	}
	public void setPlotOptions(PlotOptionsNode plotOptions) {
		this.plotOptions = plotOptions;
	}
	public SeriesNode getSeries() {
		return series;
	}
	public void setSeries(SeriesNode series) {
		this.series = series;
	}
	
}
