import React, { Component } from 'react';
import _ from 'lodash';

export default class App extends Component {
    render() {
        return(
            <ul>
                {
                    _.map(this.props.items, (item) => {
                        return this.props.item(item);
                    })
                }
            </ul>
        );
    }
}