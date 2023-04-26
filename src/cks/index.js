import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../css/main.css"


// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMjIwMWIxNC1jMmIwLTRiMzQtOGM1Yy1lYTk0NjI3YWU2M2MiLCJpZCI6MTMxMTY5LCJpYXQiOjE2ODAwODk3MDR9.TyXCi1NlL06VFur74T23Hgnuy7GyzEfCW0B2V2SyNLg';

const vworld_key = 'E1FA7288-382B-3F1C-928B-71DBD50790B4';

const domain = `http://localhost:8080`

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer',   {
  timeline  : false,
  animation : false,
  selectionIndicator  : false,
  navigationHelpButton  : false,
  infoBox : false,
  navigationInstructionsInitiallyVisible  : false,
  //홈버튼
  homeButton : false,
  //주소검색
  geocoder     : false,
  //전체화면
  fullscreenButton : false,
  //기본레이어 선택 위젯
  baseLayerPicker   : false,
  //도면 방식 선택 위젯
  sceneModePicker  :  false,
  bottomContainer   : false,

  terrainProvider: Cesium.createWorldTerrain()
});

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
KEY=${vworld_key}&
DOMAIN=${domain}
`),{
  stroke : Cesium.Color.WHEAT,
  strokeWidth : 5
})


const sidoWms = new Cesium.UrlTemplateImageryProvider({
  url : `http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lt_c_adsido,lt_c_adsigg&STYLES=lt_c_adsido,lt_c_adsigg&CRS=EPSG:4326&BBOX={westDegrees},{southDegrees},{eastDegrees},{northDegrees}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true&BGCOLOR=0xFF0000&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}`
});

const siggWms = new Cesium.UrlTemplateImageryProvider({
  url : `http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lt_c_adsigg,lt_c_adsigg&STYLES=lt_c_adsigg,lt_c_adsigg&CRS=EPSG:4326&BBOX={westDegrees},{southDegrees},{eastDegrees},{northDegrees}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true&BGCOLOR=0xFF0000&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}`
});

const sidoWmsLayer = new Cesium.ImageryLayer(sidoWms);
viewer.imageryLayers.add(sidoWmsLayer);

const siggWmsLayer = new Cesium.ImageryLayer(siggWms);
viewer.imageryLayers.add(siggWmsLayer);



// 3D 건물레이어
// viewer.scene.primitives.add(createOsmBuildings());   
viewer.camera.setView({
  destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
  }); 
