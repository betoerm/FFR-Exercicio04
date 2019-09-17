import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{
    render(){
        let productsList = this.props.ites.map(item => {
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.image} alt={item.name}/>                    
                        <span className="cart-title">{item.name}</span>
                        <span to="/"className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                    </div>
                    <div className="card-content">
                        <p>{item.description}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })
        
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps) (Home);