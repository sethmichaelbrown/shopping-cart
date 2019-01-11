import React, { Component } from 'react'
import Header from  './components/Header'
import Footer from  './components/Footer'
import CartItems from  './components/CartItems'
import AddItem from  './components/AddItem'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state = {cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    total: 0
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let quantity = parseInt(event.target.quantity.value)
    let select = event.target.select.value

      const productFind = this.state.products.find(item => item.name === select)
      const newItem = {
        id: this.state.cartItemsList.length,
        product:{
          id: productFind.id,
          name: productFind.name,
          priceInCents: productFind.priceInCents
        },
        quantity: quantity
      }
      
      const newState = {...this.state} 
      const findItemNS = this.state.cartItemsList.find(item => (item.product.name === select))

      if(!findItemNS){
        newState.cartItemsList.push(newItem)
      }
      else{
        const updateItem =  this.state.cartItemsList.find(item => (item.product.name === select))
        let newQuantity = updateItem.quantity + quantity
        updateItem.quantity = newQuantity
      }

      const subTotal = this.state.cartItemsList.map(item => {
        let price = parseInt(item.product.priceInCents)
        let quantity = parseInt(item.quantity)
        return ((price * quantity)/100)
      })
      
      const cartTotal = subTotal.reduce((accum, el) => accum + el, 0)
      newState.total = cartTotal.toFixed(2)


      this.setState(newState)

  }


  render() {
    return (
      <div className="App">
        <Header title="Shopping Cart"/>
        <CartItems 
          cartItemsList={this.state.cartItemsList} total={this.state.total}/>
        <AddItem 
          productList={this.state.products} 
          handleSubmit={this.handleSubmit}/>
        <Footer copyright="2019"/>
      </div>
    );
  }
}

export default App
