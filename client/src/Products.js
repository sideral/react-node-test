import React from 'react';
import Product from './Product';

class Products extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.fetchProducts().then((products) => {
      this.setState({
        products: products
      });
    }).catch((err) => {
      console.error(err);
      this.setState({
        hasError: true
      });
    });
  }

  fetchProducts(){
    const options = {
      headers: {
        'X-Requester': 'ScalablePathTest'
      }
    };
    return fetch('/products', options).then((response) => {
      if(response.status !== 200){
        throw new Error(`Unexpected status ${response.status}`);
      }
      return response.json();
    });
  }

  render(){
    if(this.state.hasError){
      return <p>Sorry, there was an error.</p>
    }

    if(this.state.products.length === 0){
      return <p>Fetching products...</p>
    }

    const header = (
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Description</td>
        <td>Price</td>
      </tr>
    );

    const productRows = this.state.products.map((product) => {
      return <Product key={product.id} details={product}/>
    });

    return <table><thead>{header}</thead><tbody>{productRows}</tbody></table>;
  }
}

export default Products;