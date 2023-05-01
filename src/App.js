import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import { getHotels, deleteHotel, postHotel, putHotel } from './services/hotels';
import HotelCard from './components/HotelCard';
import HotelForm from './components/HotelForm';

//Using url mockApi I created a single page  that allows 
//for 4 CRUD operations to be performed on a resource from the mockAPI. 
//and React components to represent the resource.


/* Function App defines a variable named allHotels using the useState hook. 
The useState hook returns an array of two elements: the current value of the state variable (allHotels) 
and a function (setAllHotels) that will update its value.  */

function App() {
  const [allHotels, setAllHotels] = useState([])

  /*  useEffect hook has 2 arguments: getHotels().then(setAllHotels), and  [] empty array, the first argument
   is used to fetch data from the API using the getHotels() function, and then using setAllHotels() to set
   the state of allHotels to the data received from the API.  The second argument which is the empty array
   that will pass into useEffect, but will execute only once the component mounts, will be filled in.*/

  useEffect(() => {
    getHotels().then(setAllHotels)

  }, [])


  /* This function updates oldHotels. it updates a specific index (idx) in the oldallHotels array, and a specific property (key) of a hotel object . It first gets the hotel object from oldallHotels at the specified index, updates the specified property with the provided value, creates a copy of the updated hotel object using the spread operator, creates a new copy of the oldallHotels array with the updated hotel object, and returns the new array with the updated hotel object. */


  const handleChange = (idx, key, value) => {
    setAllHotels(oldAllHotels => {
      const hotel = oldAllHotels[idx];
      hotel[key] = value;
      oldAllHotels[idx] = { ...hotel };
      const newAllHotels = [...oldAllHotels]

      return newAllHotels
    })
  }

  //delete a specific hotel

  const handleDelete = (id) => {
    // Delete the specific hotel and then refresh the list of hotels minus the one deleted, 
    //then it will update the list of hotels
    deleteHotel(id)
      .then(getHotels)
      .then(setAllHotels)
  }
  //Update a specific hotel and specific id in the hotel

  const handleUpdate = (id, idx) => {
    putHotel(id, allHotels[idx])
      .then(getHotels)
      .then(setAllHotels)
  }


  /* handleAddHotel is a variable decleration with function expression that assigned to it. 
  it takes hotelData as a parameter. Inside this function, it calls the postHotel function with 
  hotelData as an argument to create a new hotel data on the API. After that, it calls 
  getHotels function to retrieve all the hotels from the API, then it updates the allHotels state
   with the new data by calling setAllHotels.  */


  const handleAddHotel = (hotelData) => {

    postHotel(hotelData) //create a new hotel
      .then(getHotels) //retreive all hotels from the api
      .then(setAllHotels) //update allHotels with new data


  }
  //return of the HotelForm and HotelCard

  return (
    <div className="bg-light container">
      <h1>Hotels</h1>
      {/* <HotelForm /> */}
      <HotelForm onSubmit={handleAddHotel} />


      {allHotels.length > 0 &&
        allHotels.map((hotel, idx) => {  //if the length of the array is greater then zero, it will map over the list of hotels
          return (
            <div className='pb-4 mr-4 row gx-4 gy-4' key={idx}>
              <HotelCard
                className="col"
                name={hotel.name}
                address={hotel.address}
                availability={hotel.availability}
                price={hotel.price}
                id={hotel.id}
                onDelete={handleDelete}
                onUpdate={(id) => handleUpdate(id, idx)}
                onChange={(_id, k, v) => handleChange(idx, k, v)}>



              </HotelCard>
            </div>
          )
        }).reverse()

      }
    </div>
  );
}

export default App;
