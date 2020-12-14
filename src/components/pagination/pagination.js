import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import {withRouter} from "react-router-dom";


class PaginationPeople extends Component {

    handlePageChange = (pageNumber) => {
        window.scrollTo(0, 0)
        this.props.history.push({search:"?page="+pageNumber})
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.props.page}
                    itemsCountPerPage={10}
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="active"
                    totalItemsCount={this.props.count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default withRouter(PaginationPeople);