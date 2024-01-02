import './SingleReservation.css'

export default function SingleReservation({name, date, time, number}) {
    return (
        <div className='single-res'>
            <h3>{name}</h3>
            <h4>{date}</h4>
            <h4>{time}</h4>
            <h4>{number}</h4>
        </div>
    )
}