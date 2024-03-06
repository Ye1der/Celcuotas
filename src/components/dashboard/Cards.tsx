export function Cards() {
  return (
    <section className="w-full flex lg:justify-center max-lg:flex-col max-lg:items-center mb-20 gap-7">
      <div className="w-[80%] lg:w-[40%] h-[380px] flex flex-col justify-between">
        <div className="w-full h-[46%] bg-[#FF8F00] bg-opacity-40 rounded-xl pl-8 flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300">
          <div>
            <h2 className="text-black font-semibold text-xl mb-4"> En descuento </h2>
            <p className="text-black text-lg"> Lleva tu celular a un precio <br /> ¡Increible! </p>
          </div>

          <img src="phonesCard1.png" alt="imagen" className="max-w-[45%] max-h-[100%]" />
        </div>

        <div className="w-full h-[46%] bg-[#EE6618] bg-opacity-40 rounded-xl pl-8 flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300">
          <div>
            <h2 className="text-black font-semibold text-xl mb-4"> En tendencia </h2>
            <p className="text-black text-lg"> Mira los smartphones <br /> Mas vendidos </p>
          </div>

          <img src="phonesCard2.png" alt="imagen" className="max-w-[45%] max-h-[100%]" />
        </div>

      </div>

      <div className="bg-[#FFC700] bg-opacity-40 lg:w-[40%] w-[80%] h-[380px] max-lg:flex max-lg:justify-between max-lg:items-center max-lg:pl-8 rounded-xl relative cursor-pointer hover:scale-105  max-lg:h-[175px]  transition-all duration-300">
        <div className="max-sm:w-1/2">
          <h2 className="text-black max-w-full font-semibold text-xl lg:mt-8 lg:ml-8 max-lg:mb-4"> ¿Aún no sabes cual elegir? </h2>
          <p className="text-black text-xl lg:ml-8 max-lg:w-[190px] text-wrap max-w-full"> Descubre los nuevos lanzamientos </p>
        </div>

        <img src="phonesCard3.png" alt="imagen" className="max-w-[30%] lg:max-w-[50%] max-h-[100%] absolute max-sm:bottom-1/2 max-sm:translate-y-1/2 sm:bottom-0 max-lg:right-7 lg:left-1/2 lg:-translate-x-1/2" />
      </div>
    </section >
  )
}