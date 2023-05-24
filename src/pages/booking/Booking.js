import { Container } from "react-bootstrap";
import BookingForm from "../../components/bookingForm/BookingForm";

const BookingPage = () => {
  return (
    <Container className="reservation-page">
      <h1>Reserve a table</h1>
      <p className="abstract">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        pariatur debitis sed deleniti minus quos facilis voluptate atque
        temporibus quod. Laborum recusandae a asperiores perferendis suscipit
        possimus, blanditiis sunt dolor.
      </p>
      <BookingForm />
    </Container>
  );
};

export default BookingPage;
