import Clien from '../../../../public/Clien/Image.png'
import ClienData from '../data/Clien.json'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Client() {
  return (
  <section className='bg-[#E3F0FF] p-12 flex xl:flex-row flex-col justify-between gap-x-6'>
    <article className='flex flex-col justify-between'>
        <div className='flex justify-between'>
            <div>Testimonials</div>
            <img src={Clien} alt="" className='w-[6rem]' />
        </div>
        <h1 className='xl:text-[3.25rem] text-[2rem] font-bold'>What our clients are <br />
        saying about us?</h1>
        <p>Discover how you can offset your adventure's carbon emissions <br />
            and support the sustainable initiatives practiced by our <br />
            operators worldwide.</p>
    </article>
      <article className='flex xl:flex-row lg:flex-row flex-col flex-1 gap-4'>

        {ClienData.map((Cli) => (
            <article className='bg-white w-full rounded-3xl p-4'>
                <div className='flex justify-between items-center'>
                    <img src={Cli.img} alt="" className='mb-2' />
                    <i className="pi pi-star-fill text-yellow-500"></i>
                    <i className="pi pi-star-fill text-yellow-500"></i>
                    <i className="pi pi-star-fill text-yellow-500"></i>
                    <i className="pi pi-star-fill text-yellow-500"></i>
                    <i className="pi pi-star-fill text-yellow-500"></i>
                </div>
                <hr />
                <p>{Cli.parag}</p>
            </article>
        ))}
      </article>
    </section>
  )
}
