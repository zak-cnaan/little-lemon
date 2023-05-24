import MainImage from "../../assets/images/pexels-fauxels-3184183.jpg";

import { Container } from "react-bootstrap";




const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>Tel Aviv</h2>
          <p>
            Welcome to our new family own restaurant, where you will enjoy great
            foods. Memories are made when we come together, share a bottle of
            wine and a couple of stories, add to this a thoughtfully prepared
            meal and the memory become unforgetable, this is what inspire us at
            The Little Lemon. The Little lemon offers delicious and
            traditional italian dishes with a little touch of modern cuisine
            whether you're looking for a romantic night out or a dine out with
            your family or friends.
          </p>
          <a className="btn btn-main2 btn-lg" href="/booking">
            Reserve a Table
          </a>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img
              src={MainImage}
              alt="Serving delicious dish"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
