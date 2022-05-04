import React from "react";

const TextoPublicacion = ({prod}) => {
  return (
    <div>
      <h2 className="my-6 text-2xl">Desripción</h2>
      <p className="text-gray-700 text-xl">
        Samsung está fielmente comprometida en brindar productos de calidad y
        que contribuyan a crear un mejor futuro para las personas. Como empresa
        líder en la industria tecnológica uno de sus objetivos principales es
        desarrollar avanzadas e innovadoras soluciones. Es por ello que con este
        monitor tendrás y disfrutarás de una gran experiencia visual en todo
        momento.
        <br />
        <br /> Un monitor a tu medida Con tu pantalla LED no solo ahorrás
        energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y
        definidos en tus películas o series favoritas.
        <br />
        <br /> Una experiencia visual de
        calidad Este monitor de 24" te va a resultar cómodo para estudiar,
        trabajar o ver una película en tus tiempos de ocio. Asimismo, su
        resolución de 1920 x 1080 te permite disfrutar de momentos únicos
        gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 4 ms
        lo hace ideal para gamers y cinéfilos porque es capaz de mostrar
        imágenes en movimiento sin halos o bordes borrosos.
      </p>
    </div>
  );
};

export default TextoPublicacion;
