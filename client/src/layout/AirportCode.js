import React from 'react'
import Autosuggest from 'react-autosuggest';
import jsonAirportSearch from '../JsonFiles/airport_jsonfile.json';
class AirportCode extends React.Component {
    constructor() {
      super();
  
      // Autosuggest is a controlled component.
      // This means that you need to provide an input value
      // and an onChange handler that updates this value (see below).
      // Suggestions also need to be provided to the Autosuggest,
      // and they are initially empty because the Autosuggest is closed.
      this.state = {
        value: '',
        suggestions: [],
      };
    }
  
    onChange = (event, { newValue }) => {
      let Airportvalue = JSON.parse(JSON.stringify(jsonAirportSearch.filter(a => a.oag === newValue.toUpperCase())))
      this.setState({
        value: newValue.toUpperCase(),
      });
      this.props.airportSelectedValue(Airportvalue[0])
    };
  
  
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      const getSuggestions = value => {
        const inputValue = value.trim().toUpperCase();
        const inputLength = inputValue.length;
        //console.log(jsonAirportSearch);
        return inputLength === 0 ? [] : jsonAirportSearch.filter(lang =>
          lang.oag.toUpperCase().slice(0, inputLength) === inputValue
        );
      };
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
  
      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'ICOA or OAG code',
        value,
        onChange: this.onChange
      };
  
      // When suggestion is clicked, Autosuggest needs to populate the input
      // based on the clicked suggestion. Teach Autosuggest how to calculate the
      // input value for every given suggestion.
      const getSuggestionValue = suggestion => suggestion.oag;
  
      // Use your imagination to render suggestions.
      const renderSuggestion = suggestion => (
        <div>
          {suggestion.oag}
        </div>
      );
      // Finally, render it!
      return (
        <div>
          <div className="row">
            <div className="font-weight-bold col-xl-12 col-lg-12 col-sm-12 col-md-12 col-xs-12 labelstyle">Airport Search</div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-xs-12">
              <Autosuggest
                suggestions={suggestions} classname="form-control input-sm"
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </div>
  
          </div>
        </div>
      );
    }
  }
  export default AirportCode