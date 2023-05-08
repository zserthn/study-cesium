import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../css/main.css"

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  animation:false,
  baseLayerPicker:false,
  fullscreenButton:false,
  vrButton:false,
  geocoder:false,
  homeButton:false,
  infoBox:false,
  sceneModePicker:false,
  timeline:false,
  navigationHelpButton:false,
  navigationInstructionsInitiallyVisible:false,
  
});
viewer._cesiumWidget._creditContainer.style.display = "none";//로고지우기
// viewer.scene.primitives.add(Cesium.createOsmBuildings());   

viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(126.936753, 37.527278, 10000.0),
  orientation : {
    heading : Cesium.Math.toRadians(0.0),
    pitch : Cesium.Math.toRadians(-15.0),
  }
});
// 점찍기
// viewer.screenSpaceEventHandler.setInputAction((click)=>{
//   // 클릭한 위치의 지구 좌표 구하기
//   var position = viewer.scene.pickPosition(click.position);

//   // 클릭한 위치의 지리 좌표 구하기
//   var cartographic = Cesium.Cartographic.fromCartesian(position);
//   var longitude = Cesium.Math.toDegrees(cartographic.longitude);
//   var latitude = Cesium.Math.toDegrees(cartographic.latitude);

//   // 새로운 점 엔티티 생성하기
  // var pointEntity = viewer.entities.add({
  //     position : position,
  //     point : {
  //         pixelSize : 10,
  //         color : Cesium.Color.RED,
  //         outlineColor : Cesium.Color.WHITE,
  //         outlineWidth : 2
  //     }
  // });
//   // 점 엔티티에 클릭한 위치의 지리 좌표와 이름 설정하기
//   pointEntity.name = '위도: ' + latitude.toFixed(4) + '\n경도: ' + longitude.toFixed(4);
// },Cesium.ScreenSpaceEventType.LEFT_CLICK);


//선그리기
// let positions=[];
// let lineEntity;
// eventHandler.setInputAction(function(click) {
//   // 클릭한 위치의 지구 좌표 구하기
//   var position = viewer.scene.pickPosition(click.position);

//   // 클릭한 위치의 지리 좌표 구하기
//   var cartographic = Cesium.Cartographic.fromCartesian(position);
//   var longitude = Cesium.Math.toDegrees(cartographic.longitude);
//   var latitude = Cesium.Math.toDegrees(cartographic.latitude);

//   // 위치 배열에 추가하기
//   positions.push(position);
//   console.log(position);

//   // 두 개 이상의 위치가 있을 경우 선 엔티티 생성 또는 업데이트하기
//   if (positions.length > 1) {
//       if (!lineEntity) {
//           lineEntity = viewer.entities.add({
//               polyline : {
//                   positions : new Cesium.CallbackProperty(function() {
//                       return positions;
//                   }, false),
//                   width : 2,
//                   material : Cesium.Color.BLUE
//               }
//           });
//       } else {
//           lineEntity.polyline.positions = new Cesium.CallbackProperty(function() {
//               return positions;
//           }, false);
//       }
//   }
//   // 우클릭 이벤트의 기본 동작 막기
//   eventHandler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


//원그리기
// Add a left-click event listener to the viewer
// viewer.screenSpaceEventHandler.setInputAction(function(event) {
//     // Get the position where the left mouse button was clicked
//     var position = viewer.scene.pickPosition(event.position);

//     // If a position was picked, create a circle entity at that position
//     if (Cesium.defined(position)) {
//         var radius = 10000; // Set the radius of the circle in meters
//         var circleEntity = viewer.entities.add({
//             position: position,
//             name: 'Circle',
//             ellipse: {
//                 semiMinorAxis: radius,
//                 semiMajorAxis: radius,
//                 height: 0,
//                 material: Cesium.Color.RED.withAlpha(0.5),
//                 outline: true,
//                 outlineColor: Cesium.Color.BLACK
//             }
//         });
//     }
// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


//구 그리기
//클릭 이벤트
viewer.screenSpaceEventHandler.setInputAction(function(event) {
  //클릭한 위치의 좌표값
    var position = viewer.scene.pickPosition(event.position);
    //
    if (Cesium.defined(position)) {//defined method는 파라미터값의 객체가 정의 되었는지 boolean값 return

        //객체를 맵에 추가
        var ellipsoidEntity = viewer.entities.add({
            name: 'Ellipsoid',
            position: position,
            ellipsoid: {//구 객체
                radii: new Cesium.Cartesian3(10000.0, 10000.0, 10000.0),//크기
                material: Cesium.Color.BLUE.withAlpha(0.5)//색상
            }
        });
    }   
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


//입체 선 그리기

// Create an empty array to store the positions of the polyline
// var positions = [];

// // Add a left-click event listener to the viewer
// viewer.screenSpaceEventHandler.setInputAction(function(event) {
//     // Get the position where the left mouse button was clicked
//     var position = viewer.scene.pickPosition(event.position);

//     // If a position was picked, add it to the array of positions
//     if (Cesium.defined(position)) {
//         positions.push(position);
//         console.log(positions);
//     }

//     // If there are at least two positions, create a polyline entity
//     if (positions.length >= 2) {
//         var polylineGeometry = new Cesium.PolylineGeometry({
//             positions: positions,
//             width: 50,
//             vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL
//         });
//         var polylineEntity = viewer.entities.add({
//             polyline: {
//                 positions: positions,
//                 width: 50,
//                 material: Cesium.Color.RED
//             }
//         });
//     }
// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
