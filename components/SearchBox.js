import React, { Component } from 'react'

// SearchBox Component
export default class SearchBox extends Component {

  render () {

    return (
      <div className='searchbox' >
        <input onChange={::this.props.whenUserTypes} type='text' placeholder='Search for wdi-sg-discussions gitter usernames' />
      </div>
    );

  }

}
