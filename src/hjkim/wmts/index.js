import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const vworld_key = '682E3A4E-662A-3100-AA4C-AA7DEFFE65E5';
const domain = 'http://localhost:8080';

var viewer = new Cesium.Viewer("cesiumContainer",{
    terrainProvider: Cesium.createWorldTerrain(),
    fullscreenButton: false, // 풀 스크린 버튼
    homeButton: false, //홈 버튼
    sceneModePicker: false, //지도 모드 버튼
    timeline: false, //시간라인
    navigationHelpButton: false, //도움말 버튼
    animation: false, //재생 등등 버튼
    baseLayerPicker: false, //레이어 선택 버튼
    geocoder: false, //주소검색 버튼
    baseLayerPicker: false
});

const wmtsUrl = `https://api.vworld.kr/req/wmts/1.0.0/${vworld_key}/Satellite/{TileMatrix}/{TileRow}/{TileCol}.jpeg`;
//const wmtsUrl = `https://api.vworld.kr/req/wmts/1.0.0/${vworld_key}/{TileMatrix}/{TileRow}/{TileCol}.png`;

// VWorld WTMS 레이어를 위한 Cesium Imagery Provider 생성
var vworldWTMSImageryProvider = new Cesium.WebMapTileServiceImageryProvider({
  url: wmtsUrl,
  layer: 'Satellite',
  tileMatrixSetID : 'EPSG:4326',
  style: 'default',
  maximumLevel: 19
});

const vworldWTMSImageryLayer = new Cesium.ImageryLayer(vworldWTMSImageryProvider);
viewer.imageryLayers.add(vworldWTMSImageryLayer);


viewer.camera.setView({
  destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
});
  
viewer._cesiumWidget._creditContainer.style.display = "none";