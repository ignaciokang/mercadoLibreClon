import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";


const SliderImagen = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const SliderRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const SliderLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  // const Slider1 = () => {
  //   setCurrent(0)
  // };
  
  // const Slider2 = () => {
  //   setCurrent(1)
  // };
  
  // const Slider3 = () => {
  //   setCurrent(2)
  // };

  return (
    <section className="slider overflow-hidden">
      <button type="button" className="rightArrow" onClick={SliderRight}>
        {">"}
      </button>
      <button type="button" className="leftArrow" onClick={SliderLeft}>
        {"<"}
      </button>
      {/* <div className="bg-white absolute bottom-16 z-10 w-16 p-2 rounded-xl flex justify-around left-0 right-0 mx-auto opacity-50">
      <button type="button" className="bg-black w-2 h-2 rounded-full" onClick={Slider1}>
      </button>
      <button type="button" className="bg-black w-2 h-2 rounded-full" onClick={Slider2}>
      </button>
      <button type="button" className="bg-black w-2 h-2 rounded-full" onClick={Slider3}>
      </button>
      </div> */}

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slideActive" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} alt="Imagen1"/>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderImagen;