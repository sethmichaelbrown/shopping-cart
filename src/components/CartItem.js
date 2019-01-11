import React, { Component } from 'react'

class CartItem extends Component {
  render() {
    return (
      <div className="CartItem">
        <div className="container">
            <div className="collection-item">
                <div className="row" key={this.props.id}>
                    <div className="col-md-8">
                        {this.props.product.product.name}
                    </div>
                    <div className="col-md-2">
                        {`$${this.props.product.product.priceInCents/100}`}
                    </div>
                    <div className="col-md-2">
                        {this.props.product.quantity}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CartItem;