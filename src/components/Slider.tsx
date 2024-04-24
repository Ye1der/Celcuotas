import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPhoneSlider } from "./CardPhoneSlider";
import './styles/slider.css'
import { useCustomContext } from "../context/Context";
import { allPhones } from "../data/phones";

export function Slider() {

  const arrayPhones = allPhones
  const { setSliderItem, sliderItem, setHideItem } = useCustomContext()

  const handleNext = () => {
    sliderItem == arrayPhones.length - 1 ? setSliderItem(0) : setSliderItem(sliderItem + 1)
    setHideItem(false)
  };

  const handlePrev = () => {
    sliderItem == 0 ? setSliderItem(arrayPhones.length - 1) : setSliderItem(sliderItem - 1)
    setHideItem(true)
  };

  return (
    <section className="flex flex-col items-center gap-5 max-md:scale-90 max-sm:scale-[70%] z-[0]">
      <div className="slider h-[300px] w-[550px] flex items-center relative">
        {arrayPhones.map((element, index) => (
          <CardPhoneSlider key={index}
            name={`${element.name}`}
            index={index}
            arrayLength={arrayPhones.length} />
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 text-black scale-90">
          <ChevronLeft />
        </button>

        <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 text-black scale-90">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
