import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { ProductProvider } from './data/ProductContext';
import { OrderProvider } from './data/OrderContext';
import { CartProvider } from './data/CartContext';
import { CategoryProvider } from './data/CategoryContext';

function App() {
  const [state, setState] = useState({
    error: '',
  });

  return (
    <div className="App">
      <ProductProvider>
        <OrderProvider>
          <CartProvider>
            <CategoryProvider>
              <Header />
              <Main />
            </CategoryProvider>
          </CartProvider>
        </OrderProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
