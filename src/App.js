import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import DesignArtworks from './Components/DesignArtworks/DesignArtworks'
import SoftwareServices from './Components/SoftwareServices/SoftwareServices'
import GuitarBookings from './Components/GuitarBookings/GuitarBookings'
import Contact from './Components/Contact/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          <div className="content">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/DesignArtworks" component={DesignArtworks} />
              <Route exact path="/SoftwareServices" component={SoftwareServices} />
              <Route exact path="/GuitarBookings" component={GuitarBookings} />
              <Route exact path="/Contact" component={Contact} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
