

import Travel from "../../../../public/Travel.svg"; // استيراد الصورة
import ContentFooter from '../data/ContentFooter.json'

export default function Footer() {
  return (
    <section className="bg-black text-white xl:p-12 flex xl:flex-rwo lg:flex-row gap-12 flex-col">
    <section className="">
        <article className="flex xl:flex-row lg:flex-row flex-col justify-between items-center">
         
         <span className="flex items-center pb-8">
             <img
                 src={Travel}
                 alt="Travel"
                 className="bg-yellow-300 rounded-full"
             />
             <p className="font-bold p-1">Travlia</p>
         </span>
         <div className="flex justify-center items-center gap-4">
             <i className="pi pi-whatsapp" ></i>
             <p>Need help? Call us</p>
             <h2 className="text-[#F09814] font-bold">1-800-222-8888</h2>
         </div>
    </article>
      <hr />
      <section className="flex flex-col">
        <h1>Contact Use</h1>
        <FooterContut icon="pi-map-marker" name="4517 Washington Ave. Manchester, Kentucky 39495" />
        <FooterContut icon="pi-clock" name="Hours: 8:00 - 17:00, Mon - Sat" />
        <FooterContut icon="pi-envelope" name="support@travila.com" />
        <h1>Floow</h1>
        <div className="flex">
            <FooterContut icons="pi-envelope"  />
            <FooterContut icons="pi-envelope"  />
            <FooterContut icons="pi-facebook"  />
            <FooterContut icons="pi-whatsapp"  />
        </div>
      </section>
    </section>
    <section className="mt-2 flex xl:flex-row lg:flex-row flex-col justify-center xl:justify-evenly lg:justify-evenly xl:flex-1 xl:text-left text-center">
        <FooterItemsing />
        <FooterItemsing />
        <FooterItemsing />
        <FooterItemsing />
    </section>
    </section>
  )
}



export function FooterItemsing() {
  return (
    <>
        <article className="space-y-4">
        <h1 className="mb-12">Support</h1>
        {ContentFooter.map((Cont) => (
            <p key={Cont.id}>{Cont.cont1}</p>
        ))}
        </article>
    </>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FooterContut({icon, icons,name}:any) {
  return (
    <div className="flex items-start gap-4 my-4">
        <i className={`pi ${icon}`}></i>
        <h1>{name}</h1>
        <i className={`pi ${icons} cursor-pointer`}></i>
    </div>
  )
}
