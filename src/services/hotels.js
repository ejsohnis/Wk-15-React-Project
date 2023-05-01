//Here are the CRUD operations

//Endpoint is the variable that stores the url API for hotels.

const ENDPOINT = 'https://644b0318a8370fb3215bfd3a.mockapi.io/hotels';


/*Fetch API send get request for data about Hotels list from server via HTTP request in JSON format. 
Then it returns a promise that resolve into the response. In other words it will send a response if promise is successful.
The object that contains the response data needs to be converted into required format, meaning the data will be converted into a javaSpript object. if promise don't resolve,it catch an error. */


const getHotels = () => {
    return fetch(ENDPOINT, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).catch(error => {
        console.log(error)
    })
}
//Creation- Post reguest of new data for a new hotel and setHotelData will set the data for the new hotel

const postHotel = (newData) => {
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(newData)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).catch(error => {
        console.log(error)
    })

}
//Updating-  sending PUT reguest to update new data for a new hotel and setHotelData will set the data for the new hotel


const putHotel = (id, data) => {
    return fetch(`${ENDPOINT}/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {

        console.log(task);
    }).catch(error => {
        console.log(error);
    })

}

//Deletion- sending an id for the Delete reguest which causes the API to delete a record associated with that id.



const deleteHotel = (id) => {
    return fetch(`${ENDPOINT}/${id}`, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).catch(error => {
        console.log(error);
        // handle error
    })

}

export { getHotels, postHotel, putHotel, deleteHotel }


