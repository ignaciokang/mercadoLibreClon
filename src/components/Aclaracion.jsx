import {AiFillLinkedin, AiFillMail, AiOutlineUser} from 'react-icons/ai' 

const Aclaracion = () => {
  return (
    <div className="fixed bottom-0 bg-red-500 p-4 text-center justify-self-end w-full items-center text-white">
        <p>
        Este sitio web fue creado por Ignacio Kang con el único fin de demostrar sus habilidades como desarrollador FullStack. 
        </p>
        <p>
        Ninguno de los productos es real. MercadoLibre © no está relacionado al proyecto bajo ningún punto de vista.
        </p>
        <div className='flex absolute bottom-6 text-3xl space-x-2 right-6 '>
        <a href="https://www.linkedin.com/in/ignaciokang/" className='hover:text-white hover:scale-110 transition-all ease-in'>
        <AiFillLinkedin/>
        </a>
        <button onClick={() => window.open("mailto:ignaciokang10@gmail.com")} className='hover:text-white hover:scale-110 transition-all ease-in'>
        <AiFillMail/>
        </button>
        </div>
        <a href="https://ignaciokang.github.io/CV/" className='hover:text-white hover:scale-110 transition-all ease-in absolute bottom-6 text-3xl left-6'>
        <AiOutlineUser/>
        </a>
    </div>
  )
}

export default Aclaracion
