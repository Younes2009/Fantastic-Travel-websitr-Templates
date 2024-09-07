import Slider from './Slider'

export default function Hotiels() {
  return (
    <section className='py-12 bg-[#FFF0EC]'>
      <section className='xl:px-12 lg:px-12 flex items-center justify-between flex-col xl:flex-row px-4'>
      <article>
        <h1 className='text-bacl xl:text-[3.25rem] text-[1.25rem] font-bold'>Top Rated Hotels</h1>
        <p className='xl:text-[1.25rem] text-[#737373] text-[1rem]'>Quality as judged by customers. Book at the ideal price!</p>
      </article>
      <article className='px-4'>
        <button className='bg-black text-white px-4 py-2 rounded-3xl'>View More
          <i className="pi pi-arrow-right ml-4"></i>
        </button>        
        
      </article>
      </section>

      <section className='pl-12'>
        <Slider />
      </section>
    </section>
  )
}
