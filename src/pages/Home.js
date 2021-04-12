import React, { useEffect } from "react";
import HomeImg from "../assets/images/home-1.jpg";
import Heading from "../components/Heading";
import Button from "../components/Button";
import slide1 from "../assets/images/project-3.jpg";
import slide2 from "../assets/images/project-4.jpg";
import slide3 from "../assets/images/project-1.jpg";
import slide4 from "../assets/images/project-2.jpg";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Cards from "../components/Cards";
import ImgCards from "../components/ImgCards";
import Blog1 from "../assets/images/blog-1.jpg";
import Blog2 from "../assets/images/blog-2.jpg";
import Blog3 from "../assets/images/blog-3.jpg";
import Blog4 from "../assets/images/blog-4.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const cardData = {
    how_work: [
      {
        id: 1,
        title: "Analysis",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
      {
        id: 2,
        title: "Layout",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
      {
        id: 3,
        title: "Concept",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
      {
        id: 4,
        title: "Sketches",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
      {
        id: 5,
        title: "Supervision",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
      {
        id: 6,
        title: "Design",
        sublines:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
      },
    ],
    ImgCard: [
      {
        id: 1,
        title: "Baahaus",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
        img: Blog1,
      },
      {
        id: 2,
        title: "Minimalism",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
        img: Blog2,
      },
      {
        id: 3,
        title: "Skandi",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
        img: Blog3,
      },
      {
        id: 4,
        title: "Hi-Tech",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit vero quis numquam mollitia reiciendis voluptates incidunt distinctio atque eaque adipisci deserunt, natus fugiat esse ducimus tempora consequatur a. Totam?",
        img: Blog4,
      },
    ],
  };
  useEffect(() => {
    var slides = document.getElementById("slider-item").childNodes;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 0;
    var totalSlides = slides.length;

    next.addEventListener("click", () => {
      index++;
      if (index == totalSlides) {
        index = 0;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[index].classList.add("active");
    });

    prev.addEventListener("click", () => {
      if (index == 0) {
        index = totalSlides - 1;
      } else {
        index--;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[index].classList.add("active");
    });
  });
  return (
    <div>
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 left">
            <div className="content">
              <h3>Interior design</h3>
              <p>
                We provide an exclusive comprehensive home interior design.When
                designing a house design project,we will take into account all
                the features of the object-architecture,location,views from the
                windows and illumination.
              </p>

              <Button name="Create a project" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 right">
            <img src={HomeImg} alt="homeimg" />
          </div>
        </div>
      </div>

      <div className="container-fluid viewpoint">
        <div className="container-fluid">
          <div className="row">
            <Heading title="Special viewpoint" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            We believe that interior design should be such that even after many
            years it remains relavant, thoughtful and fresh. It doesn't matter
            what style the interior is made in - what matters am good taste
            ,thoughtful layout,excellent functionality and ergonomics.
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            We work with any style direction, but we do it without resorting to
            templates and try to bring our own unique flavor to each project.
          </div>
        </div>
      </div>

      <div className="container-fluid our-project">
        <div className="container-fluid">
          <div className="row">
            <Heading title="Our projects" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 left">
            <div class="slider">
              <div class="slider-item" id="slider-item">
                <div class="item active">
                  <img src={slide1} />
                </div>
                <div class="item">
                  <img src={slide2} />
                </div>
                <div class="item">
                  <img src={slide3} />
                </div>
                <div class="item">
                  <img src={slide4} />
                </div>
              </div>
              <div id="prev">
                <BsArrowLeft />
              </div>
              <div id="next">
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 right">
            <p>
              The first and most important reason to order an interior design
              project in our studio is a magnificent modern design that does not
              lose its relevance.For many years of work in the field of interior
              design,we have developed our own unique and recognizable
              style,which is our business card.
            </p>
            <p className="mt-3">
              The first and most important reason to order an interior design
              project in our studio is a magnificent modern design that does not
              lose its relevance.For many years of work in the field of interior
              design,we have developed our own unique and recognizable
              style,which is our business card.
            </p>
            <Button name="View all" />
          </div>
        </div>
      </div>

      <div className="how-work-project">
        <div className="container-fluid how-work-head">
          <div className="row">
            <Heading title="How is the work on the project carried out" />
          </div>
        </div>
        <Cards value={cardData.how_work} />
      </div>

      <div className="blog">
        <div className="container-fluid blog-head">
          <div className="row">
            <Heading title="Blog" />
          </div>
        </div>
        <ImgCards value2={cardData.ImgCard} />
      </div>

      <div className="contact">
        <div className="container-fluid contact-head">
          <div className="row">
            <Heading title="Let's talk about your project" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-3 left">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-4 right">
              <label for="exampleInputPhone">Phone</label>
              <input
                type="tel"
                class="form-control"
                id="exampleInputPhone"
                aria-describedby="PhoneHelp"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-3">
              <Button name="Send" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
