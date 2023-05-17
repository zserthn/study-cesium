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

viewer.camera.setView({
    destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
  });
    
  viewer._cesiumWidget._creditContainer.style.display = "none";

  var tileset = new Cesium.Cesium3DTileset({
    url: 'https://skymaps.co.kr/map/tileset/gangnam/tileset.json?api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0&api_key=66dd0019-905a-4d66-a0b7-eed7c418dbf0'
});

// 3D Tiles 데이터 소스를 뷰어에 추가합니다.
viewer.scene.primitives.add(tileset);


/**
 * 타일 중심점으로 이동
 */

// 3D Tiles 데이터 소스를 로드합니다.
tileset.readyPromise.then(function(tileset) {
    // readyPromise : 로드가 완료된 이후에 데이터 소스가 자동으로 화면에 표시됩니다.
    var tileBoundingSphere = tileset.boundingSphere; // -> 타일의 위치좌표 얻을 수 있다.
    var cameraPosition = tileBoundingSphere.center;
    var cameraDirection = Cesium.Cartesian3.negate(Cesium.Cartesian3.UNIT_Y, new Cesium.Cartesian3());
    var cameraUp = Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_Y);
    var cameraView = {
        destination: cameraPosition,
        orientation: {  // 카메라 방향 설정
            direction: cameraDirection,
            up: cameraUp
        }
    };

    // 카메라를 초기 세팅으로 설정합니다.
    viewer.scene.camera.setView(cameraView);
}).otherwise(function(error) {
    // 로드 중에 오류가 발생한 경우 오류 처리를 수행합니다.
    console.log(error);
});