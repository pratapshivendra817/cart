import React from "react";
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

 /// class Cart extends React.Component {
    
    constructor () {
        super();
        this.state = {
            products:[
                {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHzjpuFkxrPhj1GpBT3bil3cwR0TPb53nMA&usqp=CAU',
            id: 1
            
        },
        {
            price: 999,
            title: 'Mobile phone',
            qty: 10,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvu2SYXUWfjJRBKeWLB6EGzPBb_bXyAShKg&usqp=CAU',
            id: 2
            
        },
        {
            price: 999,
            title: 'Laptop',
            qty: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiJvKDAmwKdDPq36UyjP-NF_uo7DyPq862Q&usqp=CAU',
            id: 3
            
        }
    ]
}
        // this.increaseQuantity = this.increaseQuantity.bind(this);
       // this.testing();
    }
    handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
          products: products
      })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Heyy please inc the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
      }
    
      handleDeleteProduct = (id) => {
          const {products} = this.state;
          const items = products.filter((item) => item.id !== id); //[{}]
          this.setState({
              products: items

          })
      }

      getCartCount = () => {
        const { products } = this.state;

        let count = 0;

        products.forEach((product) => {
          count += product.qty;
        })
        return count;
      }

      getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;

        products.map((product) => {
          cartTotal = cartTotal + product.qty * product.price
        })

        return cartTotal;
      }

render () {
  const { products } = this.state;
  return (
    <div className="App">
    <Navbar count={this.getCartCount()} />
     <Cart 
     products={products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct}
     />
     <div style={ {padding:10, fontSize: 20}}>Total: {this.getCartTotal()} </div>
    </div>
  );
}
}

export default App;
