import GooglePlay from '../../../../public/Company/googleplay.png'
import Appstore from '../../../../public/Company/appstore.png'

import CompanyData from '../data/Company.json'
import ContexData from './ContexData'

export default function Company() {
  return (
<section className="xl:p-12 flex xl:flex-row flex-col justify-between gap-y-12 xl:mx-0 lg:mx-0 mx-6">
  <article className="space-y-12">

    <article className='space-y-6 my-4  px-4'>
      <ContexData spa='Why Choose Us' 
                  heading='Dare to live the lift you’ve always wanted'
                  paragraph='Discover how you can offset your adventures carbon  emissions
                  and support the sustainable initiatives practiced by our
                  operators worldwide.' />
    </article>

    <div className="flex xl:flex-row flex-col items-center gap-4 ">
      <img src={GooglePlay} alt="" />
      <img src={Appstore} alt=""  />
    </div>
  </article>

  <section className="grid xl:grid-cols-2 grid-cols-1 gap-4 item-center">
    {CompanyData.map((data) => (
      <article
        key={data.id}
        className={`xl:w-[18rem] rounded-3xl flex flex-col justify-center items-center text-center 
        ${data.state === "imagin" ? "border-2 border-#E4E6E8" : ""} 
        ${data.num === "two" ? "mb-12" : ""}`}
        style={{ backgroundColor: data.backColor || 'transparent' }} // تطبيق اللون إن وجد
      >
        <img
          src={data.img}
          className={`w-[9.188rem] ${data.state === "imagin" ? "rounded-3xl" : ""}`}
          alt="This Is Imageing"
        />
        <h1 className="text-[1.5rem] font-bold my-4">{data.heading}</h1>
        <p className="mb-6 text-[#8E8E8E]">{data.Pargagraph}</p>
      </article>
    ))}
  </section>
</section>

  
  )
}
