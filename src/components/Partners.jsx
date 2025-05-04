import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PartnerLogos.css"; // Ensure this file contains relevant CSS for styling

const Partners = () => {
  const [deviceType, setDeviceType] = useState("desktop"); // Adjust according to actual device type detection

  // Define the responsive settings for different screen sizes
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Change items per slide if needed
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="partner-logos-section">
      <h2 className="heading">Our Partners</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false} // Adjust autoplay based on device type
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_b90688850b49412d8a93d73742de6359~mv2.png"
            alt="Partner 1"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_367751c3c955450e8dae2368b6d03f40~mv2.png"
            alt="Partner 2"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_ef9db93750804f20b4e16ea58b509916~mv2.png"
            alt="Partner 3"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_4d43899df23b4dd08c93b54c239ed354~mv2.png"
            alt="Partner 4"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_a821992e320a469f925f2bb92baa5494~mv2.jpg"
            alt="Partner 5"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_cd1e251858164793a71c0b5cc9c76fe8~mv2.png"
            alt="New Partner"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_be9a8ae54aec4ac6aee97d21b4729c54~mv2.jpg"
            alt="New Partner"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_8f8ddac293d64bd88cde6093033a86b1~mv2.jpg"
            alt="New Partner"
            className="logo"
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/df6cc5_0137091b394e4571b1cf8de18a3db0cb~mv2.png"
            alt="New Partner"
            className="logo"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Partners;
