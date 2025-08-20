import { Carousel } from "flowbite-react";
import { Link } from "react-router";


function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
        <div className="Brazil">
          <img src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="Jordan">
          <img src='https://images.pexels.com/photos/17912318/pexels-photo-17912318.jpeg' alt="" />
        </div>
        <div className="India">
          <img src="https://images.pexels.com/photos/18722577/pexels-photo-18722577.jpeg" alt="" />
        </div>
        <div className="Italy">
          <img src="https://images.pexels.com/photos/18471692/pexels-photo-18471692.jpeg" alt="" />
        </div>
        <div className="Mexico">
          <img src='https://images.pexels.com/photos/8742890/pexels-photo-8742890.jpeg' alt="" />
        </div>
        <div className="China">
          <img src='https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg' alt="" />
        </div>
        <div className="Egypt">
          <img src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

      </Carousel>

      <div className="welcome">
      <h1>Fly with WonderFly</h1>
      <p>To the new seven wonders !</p>
      <Link to="/flights">Explore Flights</Link>
      </div>
    </div>
  );
}

export default Home