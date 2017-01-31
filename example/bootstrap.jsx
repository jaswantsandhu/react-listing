import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from '../src';

const listingData = [
    {
        name : "ABC",
        age : "22"
    },
    {
        name : "XYZ",
        age : "15"
    }
]

const listItem = (item) => {
    return <span>{item.name}, {item.age}</span>
}

const sort = (item) => {
    return item.age;
}

const limit = 1;

ReactDOM.render( <Listing items={listingData} sort={sort} item={listItem} limit={limit}/>, document.getElementById('listing'));