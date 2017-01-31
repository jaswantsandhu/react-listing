import React, {Component} from 'react';
import _ from 'lodash';

export default class Datalist extends Component {

    dataList = this.props.items;
    keyName = this.props.keyName;
    listItemTemplate = this.props.item;
    sort = this.props.sort;

    createList = (list) => {
        return <ul className="react-listing list">
            {_.map(list, (item) => {
                return <li key={item[this.keyName]} className="react-listing-item list-item">{this.listItemTemplate(item)}</li>;
            })
}
        </ul>
    }

    render() {

        if (!this.keyName || !this.listItemTemplate || !this.dataList) {
            console.warn("Required props are not supplied please check the component props.");
            return <ul className="react-listing error-list"></ul>
        }

        if (_.isFunction(this.sort)) {
            this.dataList = _.sortBy(this.dataList, this.sort);
        }

        return (this.createList(this.dataList));
    }
}