import { Building2, MapPin, Redo, Undo } from "lucide-react";
import {SimpleMap} from '../components/Map.js'

export function AboutUs () {
  return (
    <main className="min-h-svh w-full flex flex-col items-center">
      <h1 className="text-[40px] font-semibold flex items-center gap-5 mt-12"> Sobre nosotros <Building2 size={45}/> </h1>

      <section className="max-md:text-center">
        <div className="flex items-center gap-14 mt-20">
          <div>
            <h2 className="text-[25px] md:text-3xl text-darkOrange font-semibold"> Que hacemos en celcuotas? </h2>
            <p className="text-[19px] md:text-[22px] text-smokyBlack font-semibold text-opacity-60 leading-[28px] mt-2 md:w-[600px]"> 
              En Celcuotas, nos enorgullece ofrecer una solución 
              innovadora para aquellos que desean adquirir un celular sin 
              comprometer su presupuesto. 
            </p>
          </div>
          <Redo size={100} strokeWidth={1.7} className="rotate-[60deg] max-md:hidden"/>
        </div>

        <div className="flex items-center gap-14 mt-20">
          <Undo size={100} strokeWidth={1.7} className="-rotate-[60deg] max-md:hidden"/>
          <div>
            <h2 className="text-[25px] md:text-3xl text-darkOrange font-semibold md:text-end"> Transparencia, Confianza y Servicio </h2>
            <p className="text-[19px] md:text-[22px] text-smokyBlack font-semibold md:text-end text-opacity-60 leading-[28px] mt-2 md:w-[600px]"> 
              La transparencia y la confianza son pilares fundamentales de 
              nuestro negocio. Nos comprometemos a brindar a nuestros 
              clientes una experiencia de compra clara y honesta
            </p>
          </div>
        </div>

        <div className="flex items-center gap-14 mt-20">
          <div>
            <h2 className="text-[25px] md:text-3xl text-darkOrange font-semibold"> Transparencia, Confianza y Servicio </h2>
            <p className="text-[19px] md:text-[22px] text-smokyBlack font-semibold text-opacity-60 leading-[28px] mt-2 md:w-[600px]"> 
              La transparencia y la confianza son pilares fundamentales de 
              nuestro negocio. Nos comprometemos a brindar a nuestros 
              clientes una experiencia de compra clara y honesta
            </p>
          </div>
          <Undo size={100} strokeWidth={1.7} className="-rotate-[60deg] scale-0 max-md:hidden"/>
        </div>
      </section>

      <section className="mt-20 flex flex-wrap items-center gap-10 max-md:justify-center">
        <div className="flex flex-col gap-1 max-md:items-center max-md:text-center">
          <h1 className="text-3xl font-semibold"> Conoce la direccion de <br /> Nuestra tienda </h1>
          <p className="text-xl font-semibold text-smokyBlack text-opacity-70"> Nos encontramos en Cabecera <br /> Cra 35a #12-16 </p>
          <a href="https://google.com/maps/@7.1187844,-73.1118111,19.24z?entry=ttu" target="_blank" className="flex items-center gap-2 text-xl font-semibold mt-7 py-2 px-4 bg-[#EE6618] bg-opacity-40 rounded-xl w-fit text-smokyBlack text-opacity-80 hover:text-red-500 hover:text-opacity-100 transition-colors duration-300"> Google Maps <MapPin/> </a>
        </div>

        <div className="rounded-2xl w-[100%] h-[250px] md:w-[500px] md:h-[300px]">
          <SimpleMap/>
        </div>
      </section>

      <section className="w-full flex flex-wrap justify-center bg-[#FFC700] bg-opacity-20 mt-20">
        <div className="h-[250px] flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-darkOrange"> ¡Inicia sesion ahora! </h1>

          <p className="text-smokyBlack font-semibold text-opacity-70">
            Y recibe un 10% de descuento en tu próxima compra
          </p>

          <p className="text-smokyBlack font-semibold text-opacity-70">
            Junto a un 20% de descuento en tu cumpleaños
          </p>

          <button className="w-fit bg-darkOrange text-white text-xl py-1 px-3 rounded-xl font-semibold mt-7 hover:shadow-orange transition-shadow duration-300"> Iniciar sesion </button>
        </div>

        
        <img src="/womanAboutUs.png" alt="photo" className="h-[250px]"/>
      </section>
    </main>
  )
}