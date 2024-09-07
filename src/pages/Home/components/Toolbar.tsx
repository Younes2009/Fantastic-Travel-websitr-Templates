import DropDownMenu from './DropDownMenu';


export default function Toolbar() {

  return (
    <>
      <section className="flex justify-center lg:flex-row md:flex-row flex-col items-center px-12 my-6">
       <form className="flex-1 relative">
          <i className="pi pi-search absolute lg:top-8 top-3 left-3"></i>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F2F4F6] lg:w-[40rem] md:w-[30rem] w-[20rem] font-bold lg:h-[4.688rem] md:h-[3rem] h-[2.500rem] pl-12 rounded-l-[6.25rem]"
          />
        </form>

      </section>

      <section className="flex justify-between xl:flex-row flex-col items-center gap-6">
      <DropDownMenu />

        <button className="w-fit border-2 border-black px-4 py-2 rounded-3xl mr-4">
          Sort from High to Low
          <i className="pi pi-sort-alt ml-2"></i>
        </button>
      </section>
    </>
  );
}



