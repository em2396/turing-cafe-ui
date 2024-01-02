import './Reservations.css'
import SingleReservation from '../SingleReservation/SingleReservation'

export default function Reservation({reservations}) {
    // console.log(reservations)
    const reservationCards = reservations.map(res => {
        return (
            <SingleReservation
               name={res.name}
               date={res.date}
               time={res.time}
               number={res.number}
               id={res.id}
               key={res.id} 
            />
        )
    })


    return (
        <div className='reservation-card'>
            {reservationCards}
        </div>
    )
}


// {
//     "id": 1,
//     "name": "Christie",
//     "date": "12/29",
//     "time": "7:00",
//     "number": 12
//     },