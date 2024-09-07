import Conta from '../../../../public/Contact/Image (1).png'

export default function Contact() {
  return (
    <section className='flex xl:flex-row flex-col justify-center items-center my-12'>
        <article className='bg-[#E3F0FF] h-[30rem] rounded-l-3xl p-6'>
            <h2 className='bg-yellow px-6 py-2 rounded-3xl font-bold'>Join our newsletter</h2>
            <h1 className='text-black font-bold text-[2rem] my-6'>Subscribe to see secret deals <br />
                prices drop the moment you sign <br />
                up!</h1>
            <section>
                <input type="text" placeholder="Your Email" className="rounded-3xl p-4 xl:w-[80%] lg:w-[90%] " />
                <input type="text" placeholder="Submit" className="bg-black text-white p-4 w-[6rem] rounded-3xl -ml-6" />
            </section>
            <p className='mt-6'>No ads. No trails. No commitments</p>
        </article>
        <img src={Conta} alt="" className='xl:w-[38rem] lg:w-full w-[90%]' />
    </section>
  )
}
