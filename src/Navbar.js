import React from 'react';

const Navbar = (props) => {

         return (
             <div style={styles.nav}>
               
                 <div style={styles.cartIconContainer}>
                     <img style={styles.cartIcon} src="https://t3.ftcdn.net/jpg/03/03/05/78/240_F_303057896_UOqpWEaLAEwRVFlh5OUq0RIB3EfHNnAi.jpg" alt="cart-icon"/>
                     <span style={styles.cartCount}>{ props.count }</span>
                 </div>

                 </div>
         );
    }

    const styles = {
      cartIcon: {
      height:  32,
      marginRight: 20,
      },
      nav: {
        height:70,
        background: '#4267b2',
        display: 'flex',
        justifyConntent: 'flex-end',
        alignItems: 'center'
      },
      cartIconContainer: {
        position: 'relative'
      },
      cartCount: { 
        background : 'yellow',
        borderRadius: '100%',
        padding: '5px 5px',
        position: 'absolute',
        right: 0,
        top: -9
      }
  
  };
export default Navbar;