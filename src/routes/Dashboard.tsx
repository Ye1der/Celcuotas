import { Slider } from "../components/Slider";
import { Marcas } from "../components/dashboard/Marcas";
import { Cards } from "../components/dashboard/Cards";
import { BenefitBar } from "../components/dashboard/BenefitBar";

export function Dashboard() {

  return (
    <>
      <section className="flex flex-wrap w-full mt-10 justify-center items-center max-md:gap-10 gap-20">
        <div>
          <h2 className="text-smokyBlack opacity-80 text-3xl ml-1 max-sm:text-2xl">
            Explora nuetra <br />
            Amplia gama de smartphones.
          </h2>

          <h1 className="text-smokyBlack text-5xl font-semibold max-sm:text-4xl">
            ¡Encuentra el tuyo!
          </h1>

          <button className={`font-semibold text-xl bg-darkOrange text-white py-2 px-5 rounded-xl mt-7 ml-2 hover:scale-110 transition-all duration-300`}>
            Ver catalogo
          </button>
        </div>

        <Slider />
      </section>

      <BenefitBar />
      <Cards />
      <Marcas />
    </>
  )
}
