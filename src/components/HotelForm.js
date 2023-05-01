import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// this is the Hotel Form which I can add the hotel name, address, availability and price, and I can submit

// const emptyHotel is a variable that has empty fields of name, address, availability and price

const emptyHotel = {
    name: "",
    address: "",
    availability: false,
    price: null
}


//A default prop is used when the props wasn't assigned by the parent to the child
// For example if a child has a prop "title" and the parent doesn't assign it any value, the child could use the default value "N/A"

//the HotelForm takes the property onSubmit function that will be called when the form is submitted.

export default function HotelForm({
    onSubmit = (h) => console.log("onSubmit not assigned", "hotel", h) }
) {
    //const variable has hotel object  and setHotel method that updates the hotel, then it adds the empty hotel to the hotel 
    const [hotel, setHotel] = React.useState({ ...emptyHotel })

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    {/* adding a hotel */}
                    <Card.Title>Add Hotel</Card.Title>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(hotel);
                        setHotel({ ...emptyHotel })
                    }}>
                        {/* we add a Hotel Name */}
                        <Form.Group className="mb-3" controlId="Hotel-Name">
                            <Form.Label>Hotel Name</Form.Label>
                            <Form.Control type="text" placeholder="Hotel Name"
                                value={hotel.name}
                                onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                            />
                        </Form.Group>

                        {/* we add an address */}
                        <Form.Group className="mb-3" controlId="Address">
                            <Form.Label>Hotel address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address"
                                value={hotel.address}
                                onChange={(e) => setHotel({ ...hotel, address: e.target.value })}
                            />
                        </Form.Group>

                        {/* we add availability */}

                        <Form.Group className="mb-3" controlId="Availability">
                            <Form.Label>Availability</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={hotel.availability}
                                onChange={(e) => {
                                    setHotel({ ...hotel, availability: !hotel.availability })
                                }} />
                        </Form.Group>

                        {/* we add price */}
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Control type="number" label="Price" min={0}
                                value={hotel.price === null ? "" : hotel.price}
                                onChange={(e) => setHotel({ ...hotel, price: e.target.value === "" ? null : Number(e.target.value) })} />
                        </Form.Group>

                        {/* the Submit button on the Form */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>



                </Card.Body>
            </Card>

        </div>
    )
}

