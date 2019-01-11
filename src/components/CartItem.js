import React from 'react'

const CartItem = (props) => {
    const item = props.product

    return(
        <div className="CartItem">
        <div className="container">
            <div className="collection-item">
                <div className="row" key={item.id}>
                    <div className="col-md-8">{item.product.name}</div>
                    <div className="col-md-2">{`$${item.product.priceInCents/100}`}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        </div>
      </div> 
    )
}

export default CartItem;