import { Container } from "react-bootstrap";
import BookingForm from "../../components/bookingForm/BookingForm";
import BookingImg from "../../assets/images/BookingImg.jpg";


const BookingPage = (props) => {
  return (
    <Container className="reservation-page">
      <h1>Reserve a table</h1>
      <p className="abstract">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        pariatur debitis sed deleniti minus quos facilis voluptate atque
        temporibus quod. Laborum recusandae a asperiores perferendis suscipit
        possimus, blanditiis sunt dolor.
      </p>
      <div className="formLayout">
        <BookingForm availableTimes={props.availableTimes} dispatchTimes={props.dispatchTimes} submitData={props.submitData} />
        <div>
          <img src={BookingImg} alt="" className="BookingImg" />
        </div>
      </div>
    </Container>
  );
};

export default BookingPage;
