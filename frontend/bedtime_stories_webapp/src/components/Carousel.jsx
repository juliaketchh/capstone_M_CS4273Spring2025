import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

export default function CustomCarousel({ items }) {
  return (
    <div style={{ paddingBottom: '50px', position: 'relative' }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        renderDotsOutside={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="carousel-item" 
            onClick={() => console.log(`Clicked on: ${item.title}`, item)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src={item.thumbnail || "placeholder-thumbnail.jpg"} 
              alt={item.title || "Story Thumbnail"} 
              className="carousel-thumbnail"
              style={{ width: "80%", height: "50%", borderRadius: "16px" }}
            />
            <div>{item.title}</div>
          </div>
        ))}
      </Carousel>
    </div>
    
  );
}