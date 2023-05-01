import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// if the parent forget to assign a function on delete, it will show a message "onDelete not assigned."
//OnChangeDefault takes id, key and value, when it is called it indicates that the function wasn't assigned 
//yet values to the parameters. If onChange wouldn't be used here , the form will not be able to handle the input, so it's
//good to have a default function.
const onDeleteDefault = (id) => console.log("onDelete not assigned", 'id:', id)
const onUpdateDefault = (id) => console.log("onUpdate not assigned", 'id:', id)
const onChangeDefault = (id, key, value) => console.log("onChange not assigned", 'id:', id, 'key:', key, 'value:', value)


/*this HotelCard functioanl component takes several props: name, address, availability, price, id, onDelete, onUpdate and onChange.
It renders the bootstrap card component with hotel info, it includes the properties and form control.
On the browser it shows the Hotel card with name, address, availability and price, Update and Delete button */



function HotelCard({
    name,
    address,
    availability,
    price,
    id,
    onDelete = onDeleteDefault,
    onUpdate = onUpdateDefault,
    onChange = onChangeDefault
}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hotel Name"
                            value={name}
                            onChange={(e) => {
                                e.preventDefault()
                                onChange(id, "name", e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address"
                            value={address}
                            onChange={(e) => {
                                e.preventDefault()
                                onChange(id, "address", e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" key={Math.random()}>
                        <Form.Label>Availability</Form.Label>
                        {/* based on checked, it will indicate if the checkbox will be checked or not */}
                        <Form.Check type="checkbox"
                            checked={availability}
                            onChange={(e) => {
                                e.preventDefault()
                                onChange(id, "availability", e.target.checked)
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" min={0}
                            value={price}
                            onChange={(e) => {
                                e.preventDefault()
                                onChange(id, "price", Number(e.target.value))
                            }}
                        />
                    </Form.Group>

                    <Button onClick={(e) => {
                        e.preventDefault()
                        onDelete(id)
                    }} variant="danger">Delete</Button>
                    {" "}
                    <Button onClick={(e) => {
                        e.preventDefault()
                        onUpdate(id)
                    }} variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div >
    );
}

export default HotelCard;