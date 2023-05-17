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

var tileset = new Cesium.Cesium3DTileset({
    url: 'https://skymaps.co.kr/map/tileset/gangnam/tileset.json?api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0&api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0'
  });
  
  viewer.scene.primitives.add(tileset);

viewer.camera.setView({
    destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
});

tileset.readyPromise.then(function(tileset) {
    // 3D Tiles의 경계 구 정보 가져오기
    var boundingSphere = tileset.boundingSphere;
    
    // 경계 구의 중심 좌표 계산
    var center = Cesium.Matrix4.multiplyByPoint(tileset.modelMatrix, boundingSphere.center, new Cesium.Cartesian3());
    
    // 경계 구의 반지름 계산
    var radius = boundingSphere.radius;
    
    // 카메라 이동할 위치 계산
    var destination = Cesium.Cartesian3.fromElements(center.x, center.y, center.z + radius * 4);
    
    // 카메라 이동
    viewer.camera.flyTo({
        destination: destination,
        orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-90),
            roll: Cesium.Math.toRadians(0)
        }
    });
});
    
viewer._cesiumWidget._creditContainer.style.display = "none";