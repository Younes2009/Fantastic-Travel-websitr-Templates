import Destinstion from '../data/DestinationsData.json'
import ContexData from './ContexData'
import ima1 from '../../../../public/Flight/flight2.png.png'
import ima2 from '../../../../public/Destinstion/pay2.png.png'
import ima3 from '../../../../public/Destinstion/pay3.png.png'
import { Key } from 'react'

export default function Destinations() {
  return (
    <section className='xl:px-12 lg:px-12 flex xl:flex-row lg:flex-row flex-col justify-between my-12'>
        <article className='flex xl:flex-row lg:flex-row flex-col xl:w-[32rem] lg:w-[32rem] w-[12rem] mb-12 xl:mx-0 lg:mx-0 mx-auto text-center gap-2'>
            <img src={ima1} alt="This Is My Project" className='rounded-2xl xl:w-[20rem] lg:w-[20rem]' />
            <article className='xl:w-[31rem] lg:w-[31rem] w-[12rem] space-y-4'>
              <img src={ima2} alt="This Is Image 2" />
              <img src={ima3} alt="This Is Image 3" />
            </article>
        </article>
        <article className='space-y-12 xl:mx-0 lg:mx-0 mx-auto'>
        <ContexData spa='Why Choose Us' 
                heading='Dare to live the lift you’ve always wanted'
                 paragraph='Discover how you can offset your adventures carbon  emissions
                and support the sustainable initiatives practiced by our
                operators worldwide.' />

        <section className='flex xl:flex-row lg:flex-row flex-col justify-between gap-4'>
            {Destinstion.map((imagin: { id: Key | null | undefined; imag: string | undefined }) => (
              <img key={imagin.id} src={imagin.imag} alt="" className='border-2 border-black px-4 py-2 cursor-pointer w-[8rem]' />
            ))}
        </section>

        </article>
    </section>
  )
}
