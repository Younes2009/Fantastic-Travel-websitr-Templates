
interface Prop {
    spa:string,
    heading:string,
    paragraph:string
}

export default function ContexData({spa,heading,paragraph}:Prop) {
  return (
    <>
        <span className="bg-[#F2F4F6] py-2 px-4 rounded-3xl font-bold cursor-pointer xl:w-[20rem] ">{spa}</span>
        <h1 className="xl:text-[3rem] text-[1.5rem] font-bold xl:w-[32rem] w-[18rem]">{heading}</h1>
        <p className="text-[#737373] text-[1rem] xl:w-[32rem] w-[20rem]">{paragraph}</p>
    </>
  )
}
