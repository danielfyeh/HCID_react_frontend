import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { address: ''};
  }

  render() {
    return (
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input id="search" value = {this.state.term}
               />
            <label className="label-icon" for="search"></label>
            {/* <i className="material-icons">close</i> */}
          </div>
        </form>
      </div>
    );
  }

  onInputChange(address) {
    this.setState({address});
    this.props.onSearchTermChange(address);
  }

}

export default SearchBar;
