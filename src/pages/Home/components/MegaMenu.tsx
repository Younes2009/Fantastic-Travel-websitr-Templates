import { Button } from "primereact/button";
import Travel from "../../../../public/Travel.svg"; // استيراد الصورة
import { Menubar } from "primereact/menubar";
import Item from '../data/Megamenu.json'

export default function MegaMenuComponent() {

  const icons = ["pi pi-globe", "pi pi-dollar", "pi pi-sun", "pi pi-th-large"]; // تعريف الأيقونات بشكل ديناميكي

  return (
    <section className="flex lg:flex-row flex-col-reverse justify-aroundbg-[#FFFFFF] shadow-sm xl:px-6">
      <div className="flex items-center flex-1 space-x-4">
        <span className="flex items-center">
          <img
            src={Travel}
            alt="Travel"
            className="bg-yellow-300 rounded-full"
          />
          <p className="font-bold p-1">Travlia</p>
        </span>
        <Menubar className="bg-[#FFFFFF] lg:w-full w-[90%] left-[-32]" model={Item} />
        {""} {/* تمرير خصائص MegaMenu بشكل صحيح */}
      </div>

      <div className="flex items-center justify-between gap-4">
        {icons.map((icon, index) => (
          <i key={index} className={`${icon} text-[black] text-[18px]`}></i>
        ))}
        <Button className="py-1 px-3" label="Sign in" rounded />
      </div>
    </section>
  );
}
