import {BsCheck2Circle} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'

const CaracteristicasProducto = () => {
  return (
    <div>
    <h2 className="my-6 text-2xl">Características de Samsung T24T35 24"</h2>
    <div className='grid grid-cols-2 space-y-4 px-4'>

        <div className='flex space-x-6 text-lg items-center'>
            <BsCheck2Circle/>
            <p>Tamaño de la pantalla: <span className='font-semibold'>24"</span></p>
        </div>
        <div className='flex space-x-6 text-lg items-center'>
            <BsCheck2Circle/>
            <p>Tamaño de la pantalla: <span className='font-semibold'>24"</span></p>
        </div>
        <div className='flex space-x-6 text-lg items-center'>
            <BsCheck2Circle/>
            <p>Tamaño de la pantalla: <span className='font-semibold'>24"</span></p>
        </div>
        <div className='flex space-x-6 text-lg items-center'>
            <BsCheck2Circle/>
            <p>Tamaño de la pantalla: <span className='font-semibold'>24"</span></p>
        </div>
    </div>
    <button className='flex my-6 items-center text-CelesteML text-lg'>Ver más características <BiChevronDown/> </button>
    </div>
  )
}

export default CaracteristicasProducto