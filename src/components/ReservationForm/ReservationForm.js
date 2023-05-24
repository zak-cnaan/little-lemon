import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReservationImg from "../../assets/images/reservation form.jpg";

const ReservationForm = () => {
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
    <div className="formLayout">
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
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
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
      <div>
        <img src={ReservationImg} alt="" className="ReservationImg" />
      </div>
    </div>
  );
};

export default ReservationForm;
