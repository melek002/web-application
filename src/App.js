import logo from './logo.svg';
import product1 from './images/product1.jpg';
import product3 from './images/product2.jpg';
import product2 from './images/product3.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to Our Phone Store</h1>
        <p>Discover amazing products at great prices.</p>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
          <img src={product1}  alt="product1" />
            <h3>Iphone 14</h3>
            <p>Price: $1400</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
          <img src={product2}  alt="product2" />
            <h3>Samsung S23</h3>
            <p>Price: $1299</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
          <img src={product3}  alt="product3" />

            <h3>Google Pixel 7 Pro</h3>
            <p>Price: $899</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
