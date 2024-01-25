import {TypeAnimation} from "react-type-animation"
import toko from '../assets/image/bannertoko.jpg'

const Banner = () => {
  return (
<div className='section bg-black/40' id='home'>
      <div className='flex container mx-auto justify-between'>
        <div className='flex flex-col gap-y-8'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left py-8'>
          <h1 className='text-4xl font-bold text-white'>Bulor Market</h1>
          <div className='mb-6 text-[36px]'>
            {/* <span>I am a </span> */}
            <TypeAnimation sequence={[
              'Bagus Barangnya', 
              2000,
              'Murah Harganya',
              2000
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
          <p>
                Toko yang sudah berdiri sejak 1983 ini menyediakan berbagai macam kebutuhan anda
          </p>
          </div>
        </div>
          <img src={toko} alt='' className='w-80' />
      </div>
    </div>
  )
}

export default Banner