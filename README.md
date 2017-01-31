# React Listing
Simple react listing component.

React listing is component usefull for doing iteration on the array based data and provding custom template for list item. 

Checkout the example by running `npm start`. 

## Features 
* Component for list item.
* Sorting using lodash sortBy.
* Stateless
* Framework Independent (can be used with react or react-redux applications).

## Upcoming Features
* CSS classes.
* Infinite list.
* Datalist from promise.
* Remove keyName.
* Paging
* Filter

## Installation

`npm install react-listing`

## Usage 

Importing

`
 import Listing from 'react-listing';
`

JSX 

`
  <Listing items={<DATA | ARRAY>} keyName="KEYNAME" item={ITEM | COMPONENT}/>
`

Example 

`
  <Listing items={listingData} keyName={"name"} item={listItem}/>
`


## Component Properties

### items

List of items. 

### item 

Component for each item in the list


### keyName

Unique key in data set to help react identify component in the list.

### sort 

Handler for lodash's `sortBy` function. 


