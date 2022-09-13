import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';


function App() {
    const dataElements = Data.map(newData => {
          return <Card 
                  key={newData.id}
                  img={newData.coverImg}
                  rating={newData.stats.rating}
                  reviewCount={newData.stats.reviewCount}
                  location={newData.location}
                  price={newData.price}
                  title={newData.title}
                  // description={newData.description}
                  openSpots={newData.openSpots}
                />
    })


  return (
    <div>

      <Navbar/>
      <Hero/>
      <div className='section'>
        {dataElements}  
      </div>

    </div>
  );
}

export default App;

