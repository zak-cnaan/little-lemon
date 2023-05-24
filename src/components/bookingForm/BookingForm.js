import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const ReservationForm = (props) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="res-date" className="mb-4">
        <Form.Label>Choose date</Form.Label>
        <Form.Control required type="date" />
        <Form.Control.Feedback type="invalid">
          Please choose a date.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="res-time" className="mb-4">
        <Form.Label>Choose time</Form.Label>
        <Form.Select aria-label="Choose time">
          {props.availableTimes.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please choose the time.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="guests" className="mb-4">
        <Form.Label>Number of guests</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Number of guests"
          min="1"
          max="10"
        />
        <Form.Control.Feedback type="invalid">
          Please choose 1 - 10 guests.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="occasion" className="mb-4">
        <Form.Label>Choose Occasion</Form.Label>
        <Form.Select aria-label="Choose Occasion">
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please choose the occasion.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="btn-main1">
        Make Reservation
      </Button>
    </Form>
  );
};

export default ReservationForm;
