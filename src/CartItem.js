import React from 'react';
const CartItem = (props) => {
    

        const { price, title, qty } = props.product;
        const { 
            product,
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteProduct
            } = props;
        return (
            <div className="cart-item"> 
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
        <div style= { { fontSize: 25} }>{title}</div>
        <div style= { { color: '#777'} }>Rs {price}</div>
        <div style= { { color: '#777' } }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img
                     alt="increase" 
                     className="action-icons"
                    src="https://www.flaticon.com/svg/static/icons/svg/1237/1237946.svg"
                    onClick={() => onIncreaseQuantity(product)} 
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1828/1828901.svg"
                    onClick={() => onDecreaseQuantity(product)} 
                     />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"
                    onClick={() => onDeleteProduct(product.id)} 
                    />
                </div>
            </div>
            </div>
        );
    }

const styles = {
    image: {
      height: 110,
      width:  110,
      borderRadius: 4,
      background: '#ccc'
    }
  
  }
export default CartItem;