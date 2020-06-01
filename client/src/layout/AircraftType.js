import React from 'react';
//import logo from './logo.svg';
//import jsonData from './airport_jsonfile.json';
import jsonData from '../JsonFiles/AirportTypeData.json';
import Select from "react-select";



//json file called from source : [{"companycase_id":"CTSPROD","name":"CTS-Production"},{"companyc  ase_id":"CTSTESTING","name":"CTS-Testing"}]
//using jquery to make a ajax call
class DropDown extends React.Component {

  state = {
     // selectedOption: 'select',
      userList: [],
      isload: false,
      Items: jsonData.map((data) => { return { value: data.range, label: data.ac_name } }),

    }
  

  // Get Select value from drop down 
  handleChange = selectedOption => {
   // this.setState({ selectedOption });
    this.props.ddlselectedoption(selectedOption.value)
  };

  componentDidMount() {
    // this.fetchOptions()
     this.setState({

          isload: true,
          userList: jsonData

        })
  }

  // fetchOptions() {
  //   fetch('/airport_jsonfile.json')
  //     .then(res => res.json())
  //     .then(json => {
  //       // this.setState({

  //       //   isload: true,
  //       //   userList: json

  //       // })

  //     });



  // }
  render() {
  //  var { isload, userList } = this.state;
    var { isload } = this.state;
    //const { listData } = this.state.userList.map((data=>data.oag));
    const { selectedOption } = '';
    let optionItems = this.state.Items;

    //let newList= this.state.userList.map((data)=>{ return{ value: data.oag,label: data.oag }})
    // let abc=this.state.userList.map((obj) => {
    // <option value={obj.icao}>{obj.oag}</option>}

    //console.log("test" + optionItems.map(abc=>a) 

    if (!isload) {

      return <div>loading...</div>

    }
    else {
      return (
        <div>
        <div className="row">
          <div className=" labelstyle font-weight-bold col-lg-12 col-md-12 col-xl-12 col-sm-12 col-xs-12">
            Aircraft Type:
            </div>
            </div>
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-8 col-xs-12 col-xl-8 ">
            <Select value={selectedOption} classname ="form-control input-sm" options={optionItems} ref="idd" onChange={this.handleChange} placeholder="Aircraft Selection" />
            {/* <Select options={ newList } /> */}
          </div>
         </div>
         </div>
            // {/* <select value={this.state.userList}>{
            //        this.state.userList.map((obj) => {
            //            return <option value={obj.icao}>{obj.oag}</option>
            //        })
            //     }</select> */}

      );
    }

  }
}
export default DropDown;