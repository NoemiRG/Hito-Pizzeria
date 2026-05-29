import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext.jsx';
import HomeProvider from './contexts/HomeContext.jsx';
import PizzaProvider from './contexts/PizzaContext.jsx';
import UserProvider from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <HomeProvider>
        <PizzaProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </PizzaProvider>
      </HomeProvider>
    </UserProvider>
  </StrictMode>,
)
