
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
    legend: "Hong Kong",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
    legend: "Macao",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
    legend: "Kyoto, Japan",
  },
  {
    src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
    legend: "Las Vegas",
  },
];

export default function CarouselGallery() {
  return (
    <div className="container mt-4 p-4">
      <Carousel
        showThumbs
        thumbWidth={80}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus
        useKeyboardArrows
        dynamicHeight={false}
      >
        {slides.map(({ src, legend }, idx) => (
          <div key={idx}>
            <img src={src} alt={legend} />
            <p className="legend">{legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
