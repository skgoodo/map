<template>
  <div id="app">
    <div class="map" id="allmap"></div>
   
  </div>
</template>
<script>
// import AMap from "AMap";
import MapLoader from "./amap.js";
import { arr } from "./border";
import { data } from "./5kmData ";
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    MapLoader().then(AMap => {
      this.map = new AMap.Map("allmap", {
        resizeEnable: true,
        center: [119.7, 31.58],
        zoom: 9
      });
      // this.setbounds();
      this.gaodemap();
      this.settext();
    });

  },
  methods: {
    // setbounds() {
    //   var bounds = new AMap.Bounds([119.135, 120.193], [31.153, 32.06]);
    //   this.map.setBounds(bounds);
    // },
    // mapInit(){
    //   let that=this
    //   that.map=new AMap.Map('allmap',{projection:'EPSG:4326'})
    // },
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
        if (data[i].value >= 15 && data[i].value < 16) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "red",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        } else if (data[i].value >= 16 && data[i].value < 17) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "blue",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        } else if (data[i].value >= 17 && data[i].value < 18) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "green",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        } else if (data[i].value >= 18 && data[i].value < 19) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "lightBlue",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        }else if (data[i].value >= 19 && data[i].value < 20) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "orange",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        }else if (data[i].value >= 20 && data[i].value < 21) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "yellow",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        }else if (data[i].value >= 21 && data[i].value < 22) {
          var text = new AMap.Text({
            text: data[i].value.toFixed(1),
            anchor: "center", // 设置文本标记锚点
            style: {
              "background-color": "lightGreen",
              width: "40px",
              "text-align": "center",
              "font-size": "15px",
              color: "black"
            },
            position: [data[i].lon, data[i].lat]
          });
          text.setMap(this.map);
        }
      }
    }
  }
};
</script>
<style>
.map {
  height: 100%;
}
#app {
  height: 100%;
}
</style>