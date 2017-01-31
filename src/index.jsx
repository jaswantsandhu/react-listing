import React, {Component} from 'react';
import _ from 'lodash';
import GUID from 'guid';

export default class Datalist extends Component {

    dataList = this.props.items;
    keyName = this.props.keyName;
    listItemTemplate = this.props.item;
    sort = this.props.sort;
    limit = typeof this.props.limit === "number"
        ? this.props.limit
        : parseInt(this.props.limit, 10);

    cssClasses = (item, index, maxItems) => {

        let systemClasses = [];

        if (index === 0) {
            systemClasses.push("first")
        }

        if (index === maxItems - 1) {
            systemClasses.push("last")
        }

        if (index % 2) {
            systemClasses.push("even");
        } else {
            systemClasses.push("odd");
        }

        return "list-item " + systemClasses.join(" ");
    }

    manipulateDataList = (list) => {

        if (_.isFunction(this.sort)) {
            list = _.sortBy(list, this.sort);
        }

        if (typeof this.limit === "number" && this.limit > 0 && this.limit < list.length) {
            list = list.splice(0, this.limit);
        }

        return list;
    }

    createList = () => {

        let dataList = this.manipulateDataList(this.dataList);

        return <ul className="react-listing list">
            {
                _.map(dataList, (item, index) => {
                let key = this.keyName ? item[this.keyName] : GUID.create().value;
                return <li key={key} className={this.cssClasses(item, index, dataList.length)}>{this.listItemTemplate(item)}</li>
                })
            }
        </ul>
    }

    render() {
        if (!this.listItemTemplate || !this.dataList) {
            console.warn("Required props are not supplied please check the component props.");
            return <ul className="react-listing error-list"></ul>
        }
        return (this.createList());
    }
}