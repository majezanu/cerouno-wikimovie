import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo, faTicketAlt, faClock, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import RouterSwitch from './components/organisms/Router/Router';

library.add(faVideo, faTicketAlt, faClock, faFileInvoiceDollar);
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className='App-header'>
          <RouterSwitch></RouterSwitch>
      </div>
      
    </div>
  );
}

export default App;
