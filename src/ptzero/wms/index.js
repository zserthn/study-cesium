import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../../css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

const vworld_key = '682E3A4E-662A-3100-AA4C-AA7DEFFE65E5';

const domain = `http://localhost:8080`

var viewer = new Cesium.Viewer("cesiumContainer",/*{imageryProvider: wms}*/);	  



viewer.dataSources.add(Cesium.GeoJsonDataSource.load(`http://api.vworld.kr/req/wfs?
SERVICE=WFS&
REQUEST=GetFeature&
TYPENAME=lt_c_uq111&
PROPERTYNAME=sido_cd,sigungu_cd,uname,sido_name,sigg_name,ag_geom&
VERSION=1.1.0&
MAXFEATURES=1000&
SRSNAME=EPSG:4326&
OUTPUT=application/json&
EXCEPTIONS=text/xml&
KEY=${vworld_key}&
DOMAIN=http://localhost:8080
`),{
  stroke : Cesium.Color.WHEAT,
  strokeWidth : 5
})

//http://2d.vworld.kr:8895/2DCache/gis/map/WMS?Key=767B7ADF-10BA-3D86-AB7E-02816B5B92E9&domain=localhost:8080&

const provider = new Cesium.UrlTemplateImageryProvider({
  // url : `http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lt_c_adsido&STYLES=lt_c_adsido_3d&CRS=EPSG:4326&BBOX=14133818.022824,4520485.8511757,14134123.770937,4520791.5992888&&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=false&BGCOLOR=0xFFFFFF&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}`
  url : `http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lt_c_adsido,lt_c_adsigg&STYLES=lt_c_adsido,lt_c_adsigg&CRS=EPSG:4326&BBOX={westDegrees},{southDegrees},{eastDegrees},{northDegrees}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=false&BGCOLOR=0xFFFFFF&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}`
});
const imageryLayer = new Cesium.ImageryLayer(provider);
viewer.imageryLayers.add(imageryLayer);


viewer.camera.setView({
  destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
  }); 





  // 118.12499999999999,31.95216223802496,123.74999999999999,36.59788913307019
  //14133818.022824,4520485.8511757,14134123.770937,4520791.5992888&
  //14118224.872385193,4529964.044292685,14128008.812005695,4520180.104672182
  //14401959.121379767,5009377.085697312,15028131.257091936,4383204.9499851465

  // 14108440.93276469,4481044.346190173,14128008.812005695,4500612.225431178
  // http://api.vworld.kr/req/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=lp_pa_cbnd_bonbun,lp_pa_cbnd_bubun&STYLES=lp_pa_cbnd_bonbun_line,lp_pa_cbnd_bubun_line&CRS=EPSG:900913&BBOX={westProjected},{northProjected},{eastProjected},{southProjected}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=false&BGCOLOR=0xFFFFFF&EXCEPTIONS=text/xml&KEY=${vworld_key}&DOMAIN=${domain}