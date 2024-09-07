import DropDownMenu from "./DropDownMenu";
import Categories from '../data/CategoriesData.json'

export default function Popular() {
  return (
    <>
        <section className="flex flex-col lg:flex-row md:flex-row items-center justify-between lg:pl-12">
            <section className="flex flex-col gap-y-4">
                <h1 className="font-bold xl:text-[2.2rem] text-xl mb-3">Popular Destinations</h1>
                <p  className="font-extralight lg:text-2xl text-l">Favorite destinations based on customer reviews</p>
            </section>
            <article className="flex-1">
                <DropDownMenu />
            </article>
        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 justify-items-center gap-4 my-12 xl:px-12">
          {Categories.map((data) => (
            <article key={data.id} className={`border-2 border-[#E4E6E8] ${data.State === "imaging" ? "bg-white" : "bg-[#F2F4F6]" }  p-4 rounded-3xl w-full mt-4`}>
             <section>{data.State === "imaging" ?
             <img src={data.images} className="w-full mx-auto rounded-3xl" alt="" /> : <h1 className="text-[#737373] text-[1.5rem] font-bold">{data.images}</h1> }</section>
              <h1 className={`mt-4 ${data.State} ${data.State === "Texting" ? "mt-20"  : "" } `}>{data.head}</h1>
              <article className={`flex justify-between mt-2 ${data.State} ${data.State === "Texting" ? "bg-black text-white bottom-0 rounded-lg p-2 flex items-center"  : "" } `}>
                <p>{data.Data}</p>
                <i className={`pi pi-arrow-right p-2 rounded-full ${`mt-4 ${data.State} ${data.State === "Texting" ? "text-black bg-white"  : "text-black bg-[#F2F4F6]" } `}`}></i>
              </article>
            </article>
          ))}
        </section>
    </>
  )
}
