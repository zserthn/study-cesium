import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const vworld_key = '682E3A4E-662A-3100-AA4C-AA7DEFFE65E5';
const domain = 'http://localhost:8080';

document.querySelector("#positon").append("a");



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


const classificationTilesetUrl =
    "https://skymaps.co.kr/map/tileset/gangnam/tileset.json?api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0&api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0";

    var tileset = new Cesium.Cesium3DTileset({
    url: classificationTilesetUrl
});


viewer.scene.primitives.add(tileset);


var eventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);



eventHandler.setInputAction((movement) => {    
    var mousePosition = movement.endPosition;

    document.querySelector("#positon").innerText = '마우스 좌표 :' + mousePosition;
},Cesium.ScreenSpaceEventType.MOUSE_MOVE)



viewer.camera.moveEnd.addEventListener(function() {
    // 카메라 이동이 종료될 때 실행되는 로직
    console.log('Camera move ended');

    var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(viewer.camera.position);
    document.querySelector("#positon2").innerText = '카메라 좌표 :' + cartographic;
});



tileset.readyPromise.then(function () {
    viewer.scene.primitives.add(tileset);

    // 경계 구 정보 가져오기
    var boundingSphere = tileset.boundingSphere;

    // 경계 구 위치로 카메라 이동
    viewer.camera.flyToBoundingSphere(boundingSphere);
});

viewer._cesiumWidget._creditContainer.style.display = "none";


///
