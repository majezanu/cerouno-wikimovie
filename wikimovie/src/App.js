import React from 'react';
import './App.css';
import Navbar from './components/molecules/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo);
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
        
      </div>

    </div>
  );
}

export default App;
