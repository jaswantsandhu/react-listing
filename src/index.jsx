import React, { Component } from 'react';
import _ from 'lodash';

export default class App extends Component {
    render() {

        if(!this.props.keyName || !this.props.item || !this.props.items)
            {
                console.warn("Required props are not supplied please check the component props.");
                return <ul className="react-listing error-list"></ul>
            }

        return(
            <ul className="react-listing list">
                {
                    _.map(this.props.items, (item) => {
                        return <li key={item[this.props.keyName]} className="react-listing-item list-item">{this.props.item(item)}</li>;
                    })
                }
            </ul>
        );
    }
}