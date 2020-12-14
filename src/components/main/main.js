import React, {Component} from 'react';
import Product from "../product/product";
import {withRouter} from "react-router-dom";

class Main extends Component {
    render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const page = +searchParams.get("page") || 1
        return (
            <main>
                <h2 className='text-center'>Product</h2>
                <Product page={page}/>
            </main>
        );
    }
}

export default withRouter(Main);