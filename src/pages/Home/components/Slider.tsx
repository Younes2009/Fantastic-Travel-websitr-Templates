import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import HeroDatajson from '../data/HeroDataJson.json';
import { Button } from 'primereact/button';


export default function Slider() {
  return (
    <>
    <Swiper
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
            // الشاشات الصغيرة
            0: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
            // الشاشات المتوسطة
            640: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            // الشاشات الكبيرة
            1024: {
                slidesPerView: 3,
                spaceBetween: -100,
            },
        }}
    >
{HeroDatajson.map((Hero) => (
    <SwiperSlide key={Hero.id}>
        <article className="flex flex-col xl:gap-[-4] gap-12 box w-100 relative my-12 w-[10rem] h-[10rem] xl:w-[25.063rem] xl:h-[34.813rem]">
            <i className="pi pi-heart absolute top-4 right-4 bg-white p-2 rounded-full z-10 cursor-pointer"></i>
            <img src={Hero.img} alt={Hero.Text} className='rounded-t-3xl xl:w-full xl:h-[20.375rem]' />

            <section className='-mt-16 relative'>
                <span className="border border-gray-200 rounded-3xl p-2 font-bold text-gray-600 bg-white absolute right-4 -top-5 z-20 flex items-end gap-2">
                    <i className="pi pi-star-fill text-yellow-300"></i>
                    <span className="font-light">{Hero.valstar}</span>
                </span>

                <section className="w-full border border-gray-200 rounded-3xl p-6 shadow-sm bg-white absolute">
                    <h2 className="font-bold lg:text-2xl mt-2">{Hero.Text}</h2>
                    <p className="text-gray-500 mb-4">{Hero.Data}</p>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">{Hero.price} Price</h3>
                        <Button label="Book Now" severity="info" rounded className='bg-[#f0f2f5] p-2 font-bold' />
                    </div>
                </section>
            </section>

        </article>
    </SwiperSlide>
))}
    </Swiper>
    </>
  )
}
