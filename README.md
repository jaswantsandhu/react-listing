# React Listing
Simple react listing component.

React listing is component usefull for doing iteration on the array based data and provding custom template for list item. 

Checkout the example by running `npm start`. 

## Features 
* Component for list item.
* Sorting and ordering using lodash.
* Stateless
* Framework Independent (can be used with react or react-redux applications).
* CSS classes.
* Limit
* `key` property using GUID or using object key name using string input.


## Upcoming Features
* Infinite list.
* Datalist from promise.
* Paging
* Filter

## Installation

`npm install --save react-listing`

## Usage 

Importing

`
 import Listing from 'react-listing';
`

JSX 

`<Listing items={listingData} item={listItem}/>`


## Component Properties

### items | Array

List of items. 

### item | Component

Component for each item in the list

### keyName | String

Unique key in data set to help react identify component in the list.

### sort | Function

Handler for lodash's `sortBy` function. 

### order | Function

Handler for lodash's `orderBy` function.

### limit | Number
Limit the number of items to shown.


