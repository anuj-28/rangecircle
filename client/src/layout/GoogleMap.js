import React from 'react'
import Map from '../Map';
class MapGoogle extends React.Component {

  render() {
    // const key = "AIzaSyBhilW5rRaMRTHWXtfR2EydgL43_JVXIiQ";
    
    const key = "AIzaSyCZjMINYR7RH9pBsUk9wpeXYdSluaRqQZ4";
    const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${key}&&v=3.exp&libraries=geometry,drawing,places`;

    let SilderRangeValue = '';
    if (this.props.rangeArgvalue===0) { SilderRangeValue =this.props.firttimeRangeValue }
    else{
      SilderRangeValue =this.props.rangeArgvalue
    }
    
    let AirportselectedData = []
    if (this.props.airportArgvalue !== 0) {
      AirportselectedData = this.props.airportArgvalue

      var lat = '', long = '', name = ''

      let obj = AirportselectedData;
      let keys = Object.keys(obj);
      // for (var i = 0; i < keys.length; i++) {
      //   
      // }
      console.log(AirportselectedData);
      lat = obj[keys[2]];
      long = obj[keys[3]];
      name = obj[keys[5]];
      // name = 'Ahemdabad'

      let data1 = '[{"id":' + 1 + ',"name":"' + name + '","latitude":"' + lat + '","longitude":"' + long + '"}]';
      data1 = JSON.parse(data1);
      
      data1[0].circle = {
        radius: Math.sqrt(SilderRangeValue) * 100,
        options: {
          strokeColor: "#ff0000"
        }
      };

      
     // console.log( parseFloat(lat.slice(0, long.length-3)))
      return (
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4>Range Circle</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Map
                center={{ lat: lat, lng: long }}
                zoom={12}
                places={data1}
                googleMapURL={G_API_URL}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '600px' }} />}
                mapElement={<div style={{ height: '100%' }} />}/>
                
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4>Range Circle</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            <h5>Please selected OAG</h5>
          </div>
        </div>
      )
    }
  }
}
export default MapGoogle