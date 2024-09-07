
interface Prop{
    heading:string,
    pargag:string
}

export default function HeaderSection({heading , pargag}:Prop) {
  return (
    <section className="flex xl:flex-row lg:flex-row flex-col items-center justify-between xl:px-12" >
      <article className='my-4 px-6 xl:text-left text-center'>
        <h1 className="font-bold xl:text-5xl text-[1.5rem]  mb-3">{heading}</h1>
        <p className="font-extralight text-2xl xl:text-left text-center">{pargag}</p>
      </article>
        <article className='flex gap-6'>
        <i className="pi pi-arrow-left bg-[#E4E6E8] p-3 rounded-full cursor-pointer"></i>
        <i className="pi pi-arrow-right bg-[#E4E6E8] p-3 rounded-full cursor-pointer"></i>
      </article>
    </section>
  )
}
