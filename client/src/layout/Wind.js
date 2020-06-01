import React, { Component } from 'react'
class WindAdjusted extends Component {

    constructor(props) {
        super(props);
        // this.options = ['britain', 'ireland', 'norway', 'sweden', 'denmark', 'germany', 'holland', 'belgium', 'france', 'spain', 'portugal', 'italy', 'switzerland'];
        this.state = {
            //input: '',
            selected: false,
            WindAdjusted: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // handleChange(event) {
    //     return this.setState({
    //         input: event.target.value
    //     });
    // }

    // handleClick(option) {
    //     return this.setState({
    //         input: option
    //     });
    // }

    // matches(input) {
    //     const regex = new RegExp(input, 'i');
    //     return this.options.filter(function (option) {
    //         return option.match(regex) && option !== input;
    //     });
    // }

    // onInputFocus(show) {
    //     if (show) {
    //         this.setState({ selected: true })
    //     } else {
    //         setTimeout(() => this.setState({ selected: false }), 500)
    //     }
    // }

    // checkIt() {
    //     this.setState({
    //         WindAdjusted: true
    //     });
    // }

    // unCheckIt() {
    //     this.setState({
    //         WindAdjusted: false
    //     });
    // }

    handleInputChange(event) {

        // const target = event.target;
        // const checkvalue = target.type === 'checkbox' ? target.checked : target.value;
        //alert("the value is " + checkvalue);

        //this.state({WindAdjusted: checkvalue})


        if (this.state.checked !== event.target.checked) {
            this.setState({
                WindAdjusted: event.target.checked
            });
            fetch('/users', {
                method: 'POST',
                body: JSON.stringify({ name: "run" }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(MaapData => this.setState({ MaapData }))
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error))
        }
        else
        {
            this.setState({MaapData: ''});
           // console.log("unchecked");
        }
    }



    render() {
      //  console.log("M:" + JSON.stringify (this.state.MaapData));
        // let styleSelect = {
        //   position: 'absolute',
        //   backgroundColor: '#f1f1f1',
        //   minWidth: '160px',
        //   boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        //   zIndex: 1,
        // };

        // let styleOptions = {
        //   color: 'black',
        //   padding: '12px 16px',
        //   display: 'block',
        // };

        // let autoComplete = null;
        // if (this.state.selected) {
        //   autoComplete = (<div style={styleSelect}>{
        //     this.matches(this.state.input).map( option => {
        //       return <div style={styleOptions} onClick={ () => this.handleClick(option)}>{option}</div>;
        //     })
        //   }</div>);
        // }

        return (
            <div>
                <div className="font-weight-bold col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 labelstyle">Wind</div>
                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                    <label>
                        <input
                            name="chkWind"
                            type="checkbox"
                            checked={this.state.WindAdjusted}
                            onChange={this.handleInputChange} />
                        Wind Adjusted:
                    </label>
                </div>
                {JSON.stringify (this.state.MaapData)}
            </div>
        );
    }
}
export default WindAdjusted