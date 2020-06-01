import React from 'react'
import Slider from 'react-rangeslider';

class RangeSlider extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        value: 0,
      }
    }
  
    handleChangeStart = () => {
      console.log('Change event started')
    };
  
    handleChange = value => {
      this.setState({
        value: value
      })
      this.props.MapsliderValue(this.state)
    };
  
    handleChangeComplete = () => {
      console.log('Change event completed')
    };
  
    render() {
      const { value } = this.state
      let SilderRangeValue = parseInt(this.props.rangevalue);
      
      if (isNaN(SilderRangeValue)) { SilderRangeValue = 0 }
      return (

        <div className='slider'>
          <div className="row">
          <div className="col-xl-1 col-lg-1 col-sm-2 col-md-1 col-xs-2 col-centered">
          <b>{SilderRangeValue}</b>
          </div>
              <div className="col-xl-11 col-lg-11 col-sm-10 col-md-11 col-xs-10">
          <Slider
            min={SilderRangeValue}
            max={SilderRangeValue+1000}
            value={value}
            step={10}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          </div>
          {/* <div className="col-xl-1 col-lg-1 col-sm-1 col-md-1 col-xs-1">
          <b>{value}</b>
          </div> */}
          </div>
          
        </div>
      )
    }
  } 
export default RangeSlider