import { ListFilter } from "lucide-react";
import { Modal } from "../Modal";
import { useState } from "react";
import { FilterBy } from "./FilterBy";

export function FilterButton() {

  const [activeModal, setActiveModal] = useState(false)

  const closeModal = () => {
    setActiveModal(false)
  }

  return (
    <>
      <button onClick={() => { setActiveModal(!activeModal) }} className="flex items-center gap-5 h-12 px-4 bg-[#FFEFDB] rounded-2xl text-xl hover:bg-[#ffe0b9] transition-all duration-300">
        <h1 className="font-semibold"> Filtrar </h1>
        <ListFilter strokeWidth={2.5} />
      </button>

      <Modal active={activeModal} setActive={setActiveModal} method={() => { }}>
        <FilterBy closeModal={closeModal}/>
      </Modal>
    </>
  )
}