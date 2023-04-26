// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/';

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import jQuery from 'jquery';

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTZiOTFiYy03ZWM1LTQzZTctYTEwMC03YjI0ODAxOWM5ODgiLCJpZCI6MTMxMTYzLCJpYXQiOjE2ODAwODg5MTZ9.QbDSl81_6gzGm_1l8ggIHv9UQ0i8TUvuawxnp7uhoGg';

// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});    
// Add Cesium OSM Buildings, a global 3D buildings layer.
// const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
// Fly the camera to San Francisco at the given longitude, latitude, and height.

viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation : {
    heading : Cesium.Math.toRadians(0.0),
    pitch : Cesium.Math.toRadians(-15.0),
  }
});

let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas); // 사용자 입력 처리
// let positions = [];

// handler.setInputAction(function(click) {
//   // 클릭한 위치의 지구 좌표
//   var position = viewer.camera.pickEllipsoid(click.position);
   
//   // 점 생성
//    var point = viewer.entities.add({
//     position: position,
//     point: {
//         pixelSize: 10,
//         color: Cesium.Color.YELLOW
//     }
// });  

// //   // 선 생성
//     positions.push(position);
//     if(positions.length >= 2) {
//       var polyline = viewer.entities.add({
//         polyline: {
//           positions: positions,
//           width: 5,
//           material: Cesium.Color.BLUE
//         }
//       });
//     }

// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


// handler.setInputAction(function(click) {
//   var position = viewer.camera.pickEllipsoid(click.position);
  
//   // 면 생성
//   positions.push(position);
//   var polygon = viewer.entities.add({
//     polygon: {
//         hierarchy: positions,
//         material: Cesium.Color.GREEN.withAlpha(0.5)
//     }
// });
  
// }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

handler.setInputAction(function(click) {

  // 클릭한 위치의 지구 좌표
  var position = viewer.camera.pickEllipsoid(click.position);
  // console.log(click.position);
  var center = position;

  // var center = Cesium.Cartesian3.fromDegrees(click.position.x, click.position.y, 10);
  var radius = 500; //반경

  var geometry = new Cesium.EllipseGeometry({ // 타원에 대한 설명
    center: center,
    semiMinorAxis: radius, //반장축 길이(미터)
    semiMajorAxis: radius, //반단축 길이
    
    //
    height: 1000000000.0, // 평면 상에 원을 그리기 위해서는 높이값을 0으로 설정
    // extrudedHeight: null, // 타원의 돌출된 면과 타원체 표면 사이의 거리(미터)
    // rotation: Cesium.Math.toRadians(0), // 북쪽에서 시계 반대 방향으로 회전하는 각도
    // stRotation: Cesium.Math.toRadians(0), // 텍스처 좌표의 회전은 북쪽에서 시계 반대 방향으로 회전
    // granularity: Cesium.Math.toRadians(1) // 라디안 단위의 타원에 있는 점 사이의 각도 거리
  });

  var ellipse = new Cesium.EllipseGraphics({ // 중심점과 반장축 및 반단축으로 정의된 타원을 설명, 타원은 구의 곡률을 따르며 표면 또는 고도에 배치, 선택적으로 볼륨을 돌출
    semiMajorAxis: radius, 
    semiMinorAxis: radius,
    height: 50.0,
    ellipsoid: {
      radii: {
        cartesian: [300000.0, 300000.0, 300000.0],
      }, 
      fill: true,
      material: Cesium.Color.RED.withAlpha()
    },
    
    outline: false,
    
  });
  
// option = {
//   position: {
//     cartographicDegrees: [click.position.x, click.position.y, 300000.0]
//   }
// }

  var entity = viewer.entities.add({
    position: center,
    ellipse: ellipse,
    name: 'Circle'
  });
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);