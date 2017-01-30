import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from '../src';

const listingData = [
    {
        name : "ABC",
        age : "12"
    },
    {
        name : "XYZ",
        age : "15"
    }
]

const listItem = (item) => {
    return <span>{item.name}, {item.age}</span>
}

ReactDOM.render( <Listing items={listingData} keyName={"name"} item={listItem}/>, document.getElementById('listing'));