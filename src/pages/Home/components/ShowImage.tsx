import showImage from '../data/ShowImag.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ShowImage() {
  return (
    <section className='flex gap-4 my-12'>
          <Swiper
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
            // الشاشات الصغيرة
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
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

      {showImage.map((ima) => (
        <SwiperSlide key={ima.id} className='my-12'>
            <img src={ima.image} alt="" className='w-[25.625rem] h-[15.3755rem]' />
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
  )
}
