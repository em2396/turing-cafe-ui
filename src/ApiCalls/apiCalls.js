
function getReservations() {
   return fetch('http://localhost:3001/api/v1/reservations')
        .then(response => {
            if(!response.ok) {
                console.log('error')
            }
           return response.json()
        });
};










export { getReservations }