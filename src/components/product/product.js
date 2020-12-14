import React, {Component} from 'react';
import {getProduct} from "../actions";
import {connect} from "react-redux";
import ProductItems from "./product-items/product-items";
import Loader from "../loader/loader";
import PaginationPeople from "../pagination/pagination";


class Product extends Component {
    componentDidMount() {
        this.getPage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.getPage()
        }
    }

    getPage = () => {
        const {page} = this.props
        this.props.getProduct(page)
    }



    render() {
        const content = this.props.loading ? <Loader/> : (
            <ul className="row products">
                {this.props.data.results.map((item) => (
                    <ProductItems key={item.name} {...item} deleteProduct={this.props.deleteProduct}/>
                ))}
            </ul>
        )
        return (
            <section>
                <h2>Products</h2>
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
                {content}
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
            </section>
        );
    }
}

const mapStateToProps = ({listProduct: {data, loading}}) => {
    return {data, loading}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: getProduct(dispatch),
    }
}

export default connect(mapActionsToProps, mapStateToProps)(Product);