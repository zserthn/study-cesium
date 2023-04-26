import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const vworld_key = '682E3A4E-662A-3100-AA4C-AA7DEFFE65E5';

const wmtsUrl = `https://api.vworld.kr/req/wmts/1.0.0/682E3A4E-662A-3100-AA4C-AA7DEFFE65E5/Satellite/11/793/1746.jpeg`;

// VWorld WTMS 레이어를 위한 Cesium Imagery Provider 생성
var vworldWTMSImageryProvider = new Cesium.WebMapTileServiceImageryProvider({
    url: wmtsUrl,
    layer: 'Satellite',
    style: 'default',
    tileMatrixSetID: 'EPSG:3857',
    maximumLevel: 19,
    credit: 'VWorld',
  });

var viewer = new Cesium.Viewer("cesiumContainer",{
    baseLayerPicker: false,
    imageryProvider: vworldWTMSImageryProvider,
    terrainProvider: Cesium.createWorldTerrain(),
    fullscreenButton: false, // 풀 스크린 버튼
    homeButton: false, //홈 버튼
    sceneModePicker: false, //지도 모드 버튼
    timeline: false, //시간라인
    navigationHelpButton: false, //도움말 버튼
    animation: false, //재생 등등 버튼
    baseLayerPicker: false, //레이어 선택 버튼
    geocoder: false, //주소검색 버튼
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
KEY=682E3A4E-662A-3100-AA4C-AA7DEFFE65E5&
DOMAIN=http://localhost:8080
`),{
  stroke : Cesium.Color.WHEAT,
  strokeWidth : 5
})

const provider = new Cesium.UrlTemplateImageryProvider({
  url : `http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lt_c_adsido,lt_c_adsigg&STYLES=lt_c_adsido,lt_c_adsigg&CRS=EPSG:4326&BBOX={westDegrees},{southDegrees},{eastDegrees},{northDegrees}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=false&BGCOLOR=0xFFFFFF&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}`
});
const imageryLayer = new Cesium.ImageryLayer(provider);
viewer.imageryLayers.add(imageryLayer);


viewer.camera.setView({
  destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
  }); 




