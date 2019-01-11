import React, { Component } from 'react'

class AddItem extends Component {

    render() {
        return (
        <div className="AddItem container">        
            <form onSubmit={this.props.handleSubmit} >
                <div className="form-group mt-2">
                    <label htmlFor="select-item">Select Item</label>
                        <select className="form-control col-md-8" 
                                id="select">
                            <option disabled defaultValue>Select an option...</option>
                            {this.props.productList.map(item => <option>{item.name}</option>)}
                        </select>
                </div>
                <div className="form-group needs-validation" noValidate>
                    <label htmlFor="quantity">Quantity</label>
                        <input type="number" 
                            className="form-control col-md-2" 
                            id="quantity" required/>
                        <div className="invalid-feedback">Please provide quantity</div>
                </div>         
                    <button className="btn btn-primary mb-2" type="submit" value="Submit" >Submit</button>
            </form>
        </div>
        );
    }
}

export default AddItem