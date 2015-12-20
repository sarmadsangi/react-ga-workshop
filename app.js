import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';


export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      searchingFor: '',
      users: [],
    };
  }

  render () {
    return (
      <div className='appWrapper'>
        <SearchBox whenUserTypes={::this.whenUserTypes} />
        {this.getSearchingForDOM()}
        <SearchResult users={this.state.users} />
      </div>
    );
  }

  whenUserTypes (e) {
    const query = e.target.value ? '?username='+e.target.value : '';
    var that = this;


    this.setState({
      searchingFor: query
    });

    fetch('https://api.fieldbook.com/v1/5676d9a0be5b1f03002f63e9/ga_students_wdi_sg_discussions'+query)
      .then(function (response) {
        return response.json();
      }).then(function (result) {
        that.setState({
          searchingFor: '',
          users: result
        });
      })

  }

  getSearchingForDOM () {
    const { searchingFor } = this.state;

    if (searchingFor) {
      return <div>Searching for ... {searchingFor}</div>;
    }

    return null;
  }
}

  // Mounting App
  ReactDOM.render(
      <App />, document.querySelector('#app')
  );
