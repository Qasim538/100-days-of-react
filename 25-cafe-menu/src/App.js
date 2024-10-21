import './App.css';
import Category from './Components/Category';
import Menu from './Components/Menu';

function App() {
  return (
    <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Category />
        <Menu />

      </div>
    </section>
    </main>
  );
}

export default App;
