import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptionsFull"
        className="carousel slide carousel-fade relative h-screen"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators carrousel-indicator ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to={0}
            className="active"
            aria-current={true.toString()}
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner relative w-full overflow-hidden h-screen">
          <div className="carousel-item active relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
            <img
              className="h-full w-full object-fit-cover"
              src="https://i.ibb.co/vBT7xnQ/bg-1.jpg"
              alt="img"
            />
            <div className="absolute top-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
              <div className="flex justify-center items-center h-full">
                <div className="text-white text-center px-14 px-md-0"></div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
            <video
              className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className
                src="https://mdbootstrap.com/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                  <h2 className="text-3xl font-semibold mb-4">
                    You can place here any content
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
            <video
              className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className
                src="https://mdbootstrap.com/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
              }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                  <h2 className="text-3xl font-semibold mb-4">
                    And cover it with any mask
                  </h2>
                  <a
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    href="#!"
                    role="button"
                    data-mdb-ripple={true.toString()}
                    data-mdb-ripple-color="light"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
