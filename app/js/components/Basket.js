"use strict";

import React from 'react';
import Item from "./ItemBasket";

export default class Basket extends React.Component{

  render(){

    let items = this.props.basket.products.map( (item) => <Item key={item.id} data={item} /> )

    return (
      <div>
        <h1>Basket</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
