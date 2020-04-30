import wx from "../../../../onekit/wx"

Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map'
    }
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id:0,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      callout: {
        display: 'BYCLICK',
        content: '西山壹号院',
        color: '#FFF',
        fontSize: '16',
        borderRadius: 50,
        bgColor: '#5B9FFF',
        padding: 2,
        textAlign: 'center'
      }, label: {
        'content': 'label',
        'color': '#7B68EE',
        'fontSize': 16,
        'borderWidth': 1,
        'borderColor': '#5B9FFF',
        'borderRadius': 50,
        'bgColor': '#ADCFFF',
        'padding': 5,
        'textAlign': 'center'
      },
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    polyline: [{
      points: [{
        longitude: 113.324520,
        latitude: 23.099994
      }, {
          longitude: 113.323520,
          latitude: 23.098995,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    polygons: [{
      points: [
        {
          latitude: 23.099994,
          longitude: 113.324520,
        },
        {
          latitude: 23.098995,
          longitude: 113.323520,
        },
        {
          latitude: 23.098996,
          longitude: 113.325520,
        }
      ],
      strokeWidth: 3,
      strokeColor: '#FFFFFFAA',
    }],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    scale:20,
    skew:0,
    rotate:0,
    enable3d: false,
    showCompass: false,
    showLocation:true,
    enableOverlooking: true,
    enableZoom: true,
    enableScroll: true,
    enableRotate: true,
    drawPolygon: false,
    drawPolyline : false,
    enableSatellite: false,
    enableTraffic: false
  },
  onReady: function (e) {
    this.mapContext = wx.createMapContext('eMap');
  },
  toggle3d() {
    this.setData({
      enable3d: !this.data.enable3d
    })
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },
  togglePolygon() {
    this.setData({
      drawPolygon: !this.data.drawPolygon
    })
  },  
  togglePolyline() {
    this.setData({
      drawPolyline: !this.data.drawPolyline
    })
    console.log(this.data.drawPolyline);
  },
  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  },
  toggleGetCenterLocation(){
    this.mapContext.getCenterLocation({
      success(res){
        console.log("gtCenterLocation",res);
      }
    });
  },
  toggleGetRegion() {
    this.mapContext.getRegion({
      success(res) {
        console.log("getRegion", res);
      }
    });
  },
  toggleGetRotate() {
    this.mapContext.getRotate({
      success(res) {
        console.log("getRotate", res);
      },
      fail(res){
        console.log(res);
      }
    });
  },
  toggleGetScale() {
    this.mapContext.getScale({
      success(res) {
        console.log("getScale", res);
      }
    });
  },
  toggleGetSkew() {
    this.mapContext.getSkew({
      success(res) {
        console.log("getSkew", res);
      },
      fail(res){
        console.log(res);
      }
    });
  },
  toggleIncludePoints() {
    var points = this.data.polygons[0].points;
    console.log("所有points点：",points);
    this.mapContext.includePoints({
      points,
      success(res) {
        console.log("includePoints", res);
      }
    });
  },
  toggleMoveToLocation() {
    var that = this;
    that.mapContext.getCenterLocation({
      type:'gcj02',
      success(res){
        var longitude = res.longitude;
        var latitude = res.latitude;
        that.mapContext.moveToLocation({
          longitude,
          latitude,
          success(res) {
            console.log("moveToLocation", res);
          },
          fail(res){
            console.log(res);
          }
        });
      }
    });

  },
 toggleTranslateMarker() {
    var markers = this.data.markers;
    var markerId = markers[0].id;
    var rotate = this.data.rotate;
    var destination = {
      latitude: markers[0].latitude + 0.00005,
      longitude: markers[0].longitude + 0.00005,
    };
    this.mapContext.translateMarker({
      markerId,
      destination,
      autoRotate:true,
      rotate,
      success(res) {
        console.log("translateMarker", res);
      },
      fail(res){
        console.log(res);
      }
    });
  }

})
