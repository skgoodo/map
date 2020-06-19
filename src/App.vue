<template>
  <div id="app">
    <div class="map" id="allmap"></div>

  </div>
</template>
<script>
  import AMap from "AMap";
  // import MapLoader from "./amap.js";
  import { arr } from "./border";
  import { data } from "./5kmData ";
  export default {
    data() {
      return {
        map: null
      };
    },
    mounted() {
      this.mapInit();
      this.gaodemap();
      this.settext();
      this.setrectangle();

    },
    methods: {
      mapInit() {
        this.map = new AMap.Map("allmap", {
          resizeEnable: true,
          center: [119.7, 31.58],
          zoom: 10
        });
        this.map.on('click', function (e) {
          console.log(e.lnglat.lng, e.lnglat.lat)
        })
      },
      gaodemap() {
        var path = [];
        for (var i = 0; i < arr.length; i++) {
          path.push(arr[i]);
        }
        //折线
        var polyline = new AMap.Polyline({
          path: path,
          isOutline: false,
          borderWeight: 3,
          strokeColor: "#000",
          strokeOpacity: 1,
          strokeWeight: 3,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          lineJoin: "round",
          lineCap: "round",
          zIndex: 50
        });
        polyline.setMap(this.map);

      },
      settext() {
        // 纯文本标记
        for (var i = 0; i < data.length; i++) {
            var text = new AMap.Text({
              text: data[i].value.toFixed(1),
              anchor: "center", // 设置文本标记锚点
              style: {
                width: "40px",
                "text-align": "center",
                "font-size": "15px",
                color: "black"
              },
              position: [data[i].lon, data[i].lat]
            });
            text.setMap(this.map);
        }
      },
      setrectangle() {
        var p1=[118.224144 ,32.51183]
        var p2=[118.176031 ,32.489005]
        for(var i=0;i<data.length;i++){
          var bounds = new AMap.Bounds(p1, p2)
          if(data[i].value>=15&&data[i].value<16){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              // strokeWeight: 0,
              // strokeOpacity: 1,
              // strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              // strokeStyle: 'dashed',
              fillColor: 'red',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=16&&data[i].value<17){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'blue',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=17&&data[i].value<18){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'green',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=18&&data[i].value<19){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'lightBlue',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=19&&data[i].value<20){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'orange',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=20&&data[i].value<21){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'yellow',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }else if(data[i].value>=21&&data[i].value<22){
            var rectangle = new AMap.Rectangle({
              bounds: bounds,
              strokeWeight: 2,
              strokeOpacity: 0.5,
              strokeDasharray: [30, 10],
              // strokeStyle还支持 solid
              strokeStyle: 'dashed',
              fillColor: 'lightGreen',
              fillOpacity: 0.5,
              zIndex: 50,
            })
            rectangle.setMap(this.map)
          }
          var p3=p1[1]
          var p4=p2[1]
          if(p1[0]<121.222785){
            p1=[p1[0]+0.05,p3]
            p2=[p2[0]+0.05,p4]
          }
          else {
            p1=[118.224144 ,p1[1]-0.05]
            p2=[118.176031 ,p2[1]-0.05]
          }
        }

      }
    },

  };
</script>
<style>
  .map {
    height: 100%;
    width: 90%;
  }
  .amap-overlay-text-container{
    background-color: transparent;
    border:none;
  }
  #app {
    height: 100%;
  }
</style>