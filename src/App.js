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
    ]
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleItem = (event) => {
    let newState = {...this.state}
    newState.itemAdd = event.target.value
    this.setState(newState)
  }

  handleQuantity = (event) => {
    let newState = {...this.state}
    newState.quantity = event.target.value
    this.setState(newState)
  } 


  render() {

    return (
      <div className="App">
        <Header title="Shopping Cart"/>
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <AddItem 
          productList={this.state.products} 
          handleQuantity={this.state.handleQuantity} 
          handleItem={this.state.handleItem} 
          handleSubmit={this.state.handleSubmit}/>
        <Footer copyright="2019"/>
      </div>
    );
  }
}

export default App
