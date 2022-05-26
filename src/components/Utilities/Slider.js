import React from "react";

const Slider = () => {
  return (
    <div className="carousel ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://wallpaperaccess.com/full/1880053.jpg"
          className="w-full h-screen "
          alt="carouselImage"
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://housegrail.com/wp-content/uploads/2021/08/types-of-hammers.png"
          className="w-full  h-screen"
          alt="carouselImage"
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://engineeringlearn.com/wp-content/uploads/2021/02/Types-of-Hammer.jpg"
          className="w-full h-screen	"
          alt="carouselImage"
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://www.steinel.net/out/media/blockbild_1/generated/1600__/94695_Feinstaubfilter_Verformen.jpg"
          className="w-full  h-screen"
          alt="carouselImage"
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
