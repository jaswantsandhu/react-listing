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

ReactDOM.render( <Listing items={listingData} sort={sort} keyName={"name"} item={listItem}/>, document.getElementById('listing'));