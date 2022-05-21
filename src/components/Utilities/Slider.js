import React from "react";

const Slider = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://azcd.harveynorman.com.au/media/catalog/product/6/8/68.010_1_1.jpg"
          class="w-full h-3/4"
          alt="carouselImage"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://i.pinimg.com/originals/0a/8d/cd/0a8dcd12a8aae282b12e3e6e1e895675.jpg"
          class="w-full h-3/4	"
          alt="carouselImage"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://www.desktopbackground.org/download/1600x900/2013/06/17/593211_tools-wrench-ketly-metalic-iron-4k-ultra-hd-wallpapers_2560x1440_h.jpg"
          class="w-full h-3/4	"
          alt="carouselImage"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://www.steinel.net/out/media/blockbild_1/generated/1600__/94695_Feinstaubfilter_Verformen.jpg"
          class="w-full h-3/4"
          alt="carouselImage"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
