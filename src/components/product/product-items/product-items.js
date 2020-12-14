import React, {Component} from 'react';

class ProductItems extends Component {
    render() {
        const {name} = this.props
        return (
            <div className='col-3'>
                <h3 title={name}>Title: {name}</h3>
            </div>
        );
    }
}

export default ProductItems;