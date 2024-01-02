import './App.css';
import { useEffect, useState } from 'react';
import { getReservations } from '../ApiCalls/apiCalls';
import ReservationList from '../Reservations/Reservations'
import Form from '../Forms/Form';


export default function App() {
  const [ reservations, setReservations ] = useState([]);

  useEffect(() => {
    getReservations()
      .then(data => {
        setReservations(data)
      })
  }, [])

  function addRes(newRes) {
    setReservations([...reservations, newRes])
  }
  console.log(reservations)
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
      <Form addRes={addRes}/>
      <ReservationList reservations={reservations}/>
    </div>
  );
}

