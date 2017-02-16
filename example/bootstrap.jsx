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

ReactDOM.render( <Listing className={'listing'} itemClassName={`col`} items={listingData} item={listItem} order={[["age"], ["asc"]]}/>, document.getElementById('listing'));