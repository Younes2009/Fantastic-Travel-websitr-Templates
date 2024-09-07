import HeaderSection from "./HeaderSection";
import FlighOfferData from '../data/FlighOfferData.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


export default function FlightOffer() {
  return (
    <>
        <HeaderSection heading="Flight Offer Deals" pargag="Competitive fares for your route-specific searches." />

      <section className="my-12 flex gap-4">
      <Swiper
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
            // الشاشات الصغيرة
            0: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            // الشاشات المتوسطة
            640: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            // الشاشات الكبيرة
            1024: {
                slidesPerView: 2,
                spaceBetween: -150,
            },
        }}
    >
          {FlighOfferData.map((flig) => (
          <SwiperSlide key={flig.id}>

            <article key={flig.id} className="flex xl:px-12">
              <img src={flig.imag} alt={flig.Alt} className="xl:w-[17.097] xl:h-[19.438rem] rounded-3xl" />
              <section className="bg-white xl:w-[23.688rem] rounded-3xl p-4 border-2 border-[#E4E6E8] -ml-14 flex flex-col justify-between">
                <article className="flex items-center justify-between text-[#737373]">
                  <i className="pi pi-clock"></i>
                  <p className="xl:text-[1rem] text-[0.550rem]">{flig.Data1}</p>
                  -
                  <i className="pi pi-clock"></i>
                  <p className="xl:text-[1rem] text-[0.550rem]">{flig.Data2}</p>
                </article>

                <article className="flex items-center justify-between">
                  <h1 className="xl:text-[1.5rem] text-[0.800rem] font-bold">{flig.count1}</h1>
                  <i className="pi pi-directions text-1rem"></i>
                  <h1 className="xl:text-[1.5rem] text-[0.800rem] font-bold">{flig.count2}</h1>
                </article>

                <article className="flex items-center justify-between text-[#737373]">
                  <p className="text-[1rem]">Business</p>
                  -
                  <p className="text-[1rem]">Business</p>
                </article>

                <article className="flex items-center justify-between">
                  <h1 className="xl:text-[1.5rem] text-[0.900rem] font-bold">{flig.Business1}</h1>
                  |
                  <h1 className="xl:text-[1.5rem] text-[0.900rem] font-bold">{flig.Business1}</h1>
                </article>

                <article className="flex items-center justify-between">
                  <h1 className="xl:text-[1.5rem] text-[0.900rem] text-[#737373]">{flig.Business1}</h1>
                  <button className="bg-[#dbdbdb] xl:px-4 px-2 py-2 rounded-3xl font-bold cursor-pointer">BookNow</button>
                </article>

              </section>
            </article>
    </SwiperSlide>
          ))}

    </Swiper>

      </section>



    </>
  )
}
