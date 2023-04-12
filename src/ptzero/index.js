import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const vworld_key = '682E3A4E-662A-3100-AA4C-AA7DEFFE65E5';

var viewer = new Cesium.Viewer("cesiumContainer",/*{imageryProvider: wms}*/);	  



viewer.dataSources.add(Cesium.GeoJsonDataSource.load(`http://api.vworld.kr/req/wfs?
SERVICE=WFS&
REQUEST=GetFeature&
TYPENAME=lt_c_uq111&
PROPERTYNAME=mnum,sido_cd,sigungu_cd,dyear,dnum,ucode,bon_bun,bu_bun,uname,sido_name,sigg_name,ag_geom&
VERSION=1.1.0&
MAXFEATURES=40&
SRSNAME=EPSG:4326&
OUTPUT=application/json&
EXCEPTIONS=text/xml&
KEY=682E3A4E-662A-3100-AA4C-AA7DEFFE65E5&
DOMAIN=http://localhost:8080
`),{
  stroke : Cesium.Color.WHEAT,
  strokeWidth : 5
})


viewer.camera.setView({
  destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
  }); 




