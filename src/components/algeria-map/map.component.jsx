import React,{Component} from 'react';
import './map.style.css';
//map chart
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_algerialow from '@amcharts/amcharts4-geodata/algeriaLow';

class AlgeriaMap extends Component{

    componentDidMount(){
        let map = am4core.create('chartdiv',am4maps.MapChart);
        map.geodata=am4geodata_algerialow;
        map.projection = new am4maps.projections.Miller();
        //Map areas (countries, states, etc.) are represented by objects MapPolygonSeries.
        let polygonSeries = new am4maps.MapPolygonSeries();
        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        map.series.push(polygonSeries);
        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText="{name}:{value} DA";
        polygonTemplate.fill=am4core.color("#058f58");
        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#008750");
        //add some data
        polygonSeries.data=this.props.data;
    }
    render(){
        return (
            <div id="chartdiv" className='map' style={{width:this.props.width,height:this.props.height}}></div>
        );
    }

}

export default AlgeriaMap;