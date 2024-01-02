import './Form.css';
import { useState } from 'react';


export default function Form({addRes}) {
    const [ name, setName ] = useState('')
    const [ date, setDate ] = useState('')
    const [ time, setTime ] = useState('')
    const [ guests, setGuests ] = useState('')

    function makeReservation(event) {
        event.preventDefault()
        const newRes = {
            id: Date.now(),
            name,
            date, 
            time,
            guests
        }
        addRes(newRes)
        setName('')
        setDate('')
        setTime('')
        setGuests('')
    }

    return (
        <form>
            <input 
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Date (mm/dd)'
                name='Date'
                value={date}
                onChange={event => setDate(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Time'
                name='time'
                value={time}
                onChange={event => setTime(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Number of guests'
                name='guests'
                value={guests}
                onChange={event => setGuests(event.target.value)}
            />
            <button className='res-button' onClick={event => makeReservation(event)} >Make Reservation</button>
        </form>
    )
}