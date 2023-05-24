import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ConfirmBookingPage = (props) => {
  const [bookingInfo, setBookingInfo] = useState({});

  useEffect(() => {
    setBookingInfo(JSON.parse(window.localStorage.getItem("bookingInfo")));
  }, [setBookingInfo]);

  return (
    <Container className="reservation-page">
      <h1>We've reserved a table for your {bookingInfo.occasion}!</h1>
      <dl style={{ color: "#495e57" }}>
        <dt>Date:</dt>
        <dd>{bookingInfo.date}</dd>
        <dt>Time:</dt>
        <dd>{bookingInfo.time}</dd>
        <dt>Guests:</dt>
        <dd>{bookingInfo.guests}</dd>
      </dl>
      <p className="abstract">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        pariatur debitis sed deleniti minus quos facilis voluptate atque
        temporibus quod. Laborum recusandae a asperiores perferendis suscipit
        possimus, blanditiis sunt dolor.
      </p>
      <p className="abstract">
        Adipisicing elit. Sequi libero veritatis neque. Aliquid nulla ex dicta,
        veritatis quod cum ratione voluptas eum dignissimos inventore facilis.
        Quam ipsa qui odit, rerum aspernatur voluptatibus, veniam quibusdam amet
        hic corrupti, ratione maiores assumenda?
      </p>
      <p className="abstract">
        Aut illo excepturi magni iste accusamus dolorum suscipit, iusto sunt
        optio vel veniam error voluptas velit quia quo maiores laudantium eaque
        incidunt cupiditate molestiae. Quo voluptas doloribus perferendis hic,
        esse incidunt nihil laudantium dolorem voluptatum quisquam officiis qui
        similique nostrum, assumenda magnam veniam ipsum eveniet natus. Suscipit
        nihil laboriosam doloribus adipisci fuga?
      </p>
    </Container>
  );
};

export default ConfirmBookingPage;
