import './App.css';
import { useEffect, useState } from 'react';
import { getReservations } from '../ApiCalls/apiCalls';
import Reservations from '../Reservations/Reservations'

function App() {
  const [ reservations, setReservations ] = useState([]);

  useEffect(() => {
    getReservations()
      .then(data => {
        setReservations(data)
      })
  }, [])
// console.log(reservations)

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
      <Reservations />
    </div>
  );
}

export default App; 