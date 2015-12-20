import React, { Component } from 'react'

const UserProfile = (props) =>
  <a className='user' target='_blank' href={'https://github.com'+props.url}>
    <p className='title' >{props.displayname}</p>
    <p className='title' >@{props.username}</p>
    <img className='bgImg' src={props.avatarurlmedium} />
    <img className='profileImg' src={props.avatarurlmedium} />
  </a>

export default UserProfile
