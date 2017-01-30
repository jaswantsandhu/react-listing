# React Listing
Simple react listing component.

React listing is component usefull for doing iteration on the array based data and provding custom template for list item. 

check put the example by running npm start. 

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
