import { Percent, Search, ShieldCheck, Truck } from "lucide-react";
import { Slider } from "../components/Slider";

export function Dashboard() {

  return (
    <>
      <section className="flex flex-wrap w-full mt-10 justify-center items-center gap-20">
        <div>
          <h2 className="text-smokyBlack opacity-80 text-3xl ml-1">
            Explora nuetra <br />
            Amplia gama de smartphones.
          </h2>

          <h1 className="text-smokyBlack text-5xl font-semibold">
            ¡Encuentra el tuyo!
          </h1>

          <button className={`font-semibold text-xl bg-darkOrange text-white py-2 px-5 rounded-xl mt-7 ml-2 hover:scale-110 transition-all duration-300`}>
            Ver catalogo
          </button>
        </div>

        <Slider />
      </section>

      <section className="w-full h-36 bg-[#EE6618] mt-10 mb-10 flex justify-center items-center gap-16">
        <div className="text-white text-center flex flex-col items-center hover:bg-[#EB7D2E] w-[205px] py-3 rounded-2xl transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 border-2 mb-2 border-white rounded-full flex justify-center items-center">
            <Percent strokeWidth={2.3} />
          </div>
          <h3 className=" font-semibold"> Ofertas Exclusivas </h3>
          <p className="text-xs"> Aprovecha los descuentos pagando <br />  Con bancos aliados </p>
        </div>

        <div className="text-white text-center flex flex-col items-center hover:bg-[#EB7D2E] w-[205px] py-3 rounded-2xl transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 border-2 mb-2 border-white rounded-full flex justify-center items-center">
            <ShieldCheck strokeWidth={2.3} />
          </div>
          <h3 className=" font-semibold"> Compra Segura </h3>
          <p className="text-xs"> utilizando nuestros medios <br /> de pago </p>
        </div>

        <div className="text-white text-center flex flex-col items-center hover:bg-[#EB7D2E] w-[205px] py-3 rounded-2xl transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 border-2 mb-2 border-white rounded-full flex justify-center items-center">
            <Truck strokeWidth={2.3} />
          </div>
          <h3 className=" font-semibold"> Envio Gratis </h3>
          <p className="text-xs"> Envio gratis de dispositivos <br /> a todo colombia </p>
        </div>

        <div className="text-white text-center flex flex-col items-center hover:bg-[#EB7D2E] w-[205px] py-3 rounded-2xl transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 border-2 mb-2 border-white rounded-full flex justify-center items-center">
            <Search strokeWidth={2.3} />
          </div>
          <h3 className=" font-semibold"> Segumiento </h3>
          <p className="text-xs"> Rastrea tu pedido en tiempo <br /> real 24/7 </p>
        </div>
      </section>

      <section className="flex w-full justify-center mb-10 gap-7">
        <div className="w-[40%] h-[380px] flex flex-col justify-between">
          <div className="w-full h-[46%] bg-[#FF8F00] bg-opacity-40 rounded-xl pl-8 flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300">
            <div>
              <h2 className="text-black font-semibold text-xl mb-4"> En descuento </h2>
              <p className="text-black text-lg"> Lleva tu celular a un precio <br /> ¡Increible! </p>
            </div>

            <img src="phonesCard1.png" alt="imagen" className="w-[45%]" />
          </div>

          <div className="w-full h-[46%] bg-[#EE6618] bg-opacity-40 rounded-xl pl-8 flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300">
            <div>
              <h2 className="text-black font-semibold text-xl mb-4"> En tendencia </h2>
              <p className="text-black text-lg"> Mira los smartphones <br /> Mas vendidos </p>
            </div>

            <img src="phonesCard2.png" alt="imagen" className="w-[45%]" />
          </div>

        </div>

        <div className="bg-[#FFC700] bg-opacity-40 w-[40%] h-[380px] rounded-xl relative cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-black font-semibold text-xl mt-8 ml-8"> ¿Aún no sabes cual elegir? </h2>
          <p className="text-black text-xl ml-8"> Descubre los nuevos lanzamientos </p>

          <img src="phonesCard3.png" alt="imagen" className="w-[50%] absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </section >
    </>
  )
}