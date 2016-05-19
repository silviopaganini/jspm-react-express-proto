"use strict"

import React from 'react'

export default class ItemBasket extends React.Component
{
  render(){
    return (
      <li>
        <h4>{this.props.data.name} <span class="product-id">{this.props.data.id}</span></h4>
        <h5><span class="currency">{this.props.data.currency} </span>{this.props.data.price}</h5>
        <img src={this.props.data.picture} />
        <p>{this.props.data.details}</p>
      </li>
    )
  }
}
