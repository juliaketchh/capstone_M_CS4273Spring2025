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
    <div style={{ paddingBottom: '50px', position: 'relative', width: '100%' }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        renderDotsOutside={true}
        responsive={responsive}
        ssr={false}
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
            key={item.id || index} 
            className="carousel-item" 
            role="button"
            tabIndex={0}
            onClick={() => console.log(`Clicked on: ${item.title}`, item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                console.log(`Clicked on: ${item.title}`, item);
              }
            }}
            style={{ cursor: "pointer", width: "100%" }}
          >
            <img 
              src={item.thumbnail || "placeholder-thumbnail.jpg"} 
              alt={item.title || "Story Thumbnail"} 
              className="carousel-thumbnail"
              style={{ width: "80%", height: "auto", borderRadius: "16px" }}
            />
            <div style={{ color: "black" }}>{item.title}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}