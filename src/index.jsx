import React, {Component} from 'react';
import _ from 'lodash';
import GUID from 'guid';

export default class Datalist extends Component {

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

        return "list-item " + (this.props.itemClassName ? this.props.itemClassName + " " : "") + systemClasses.join(" ");
    }

    manipulateDataList = (list) => {

        const limit = typeof this.props.limit === "number"
        ? this.props.limit
        : parseInt(this.props.limit, 10);

        if (_.isFunction(this.props.sort)) {
            list = _.sortBy(list, this.props.sort);
        }

        if (_.isArray(this.props.order)) {

            if(_.isFunction(this.props.sort))
                {
                    console.warn("Props for order are available.")
                }

            if(_.isArray(this.props.order[0]) && _.isArray(this.props.order[1]))
                {
                    list = _.orderBy.call(_, list, this.props.order[0], this.props.order[1]);
                }
            else
                {
                    console.warn("Configuration required for order property is correct please check the docs for correct list of configuration required")
                }
            
        }

        if (typeof limit === "number" && limit > 0 && limit < list.length) {
            list = list.splice(0, limit);
        }

        return list;
    }

    createList = () => {

        let dataList = this.manipulateDataList(this.props.items);

        return <ul className={"react-listing list" + (this.props.className ? " " + this.props.className : "")}>
            {
                _.map(dataList, (item, index) => {
                let key = this.props.keyName ? item[this.props.keyName] : GUID.create().value;
                return <li key={key} className={this.cssClasses(item, index, dataList.length)}>{this.props.item(item)}</li>
                })
            }
        </ul>
    }

    render() {
        if (!this.props.item || !this.props.items) {
            console.warn("Required props are not supplied please check the component props.");
            return <ul className="react-listing error-list"></ul>
        }
        return (this.createList());
    }
}