import { Phone } from "../../types";

export function PhoneSpecifications({ phone }: { phone: Phone }) {

  const styleKey = "w-[250px] pr-10  sm:border-r-2 border-black border-opacity-10 font-semibold text-lg text-black text-opacity-90"
  const styleValue = "max-sm:w-auto w-[300px] font-semibold text-lg text-black text-opacity-70"
  const styleElement = "flex sm:gap-12 max-sm:flex-col rounded-xl bg-black bg-opacity-[5%] my-2 pl-5 py-2"

  return (
    <section className="w-full flex flex-col items-center mb-10">
      <h1 className="text-4xl font-semibold text-smokyBlack text-opacity-[85%] mt-10 mb-8"> Ficha tecnica </h1>
      <div className="w-fit">
        <div className={styleElement}>
          <h1 className={styleKey}> Marca </h1>
          <h1 className={styleValue}> {phone.brand} </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Nombre </h1>
          <h1 className={styleValue}> {phone.name} </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Sistema operativo </h1>
          <h1 className={styleValue}> {phone.os} </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Tamaño pantalla </h1>
          <h1 className={styleValue}> {phone.screenSize} Pulgadas</h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Bateria </h1>
          <h1 className={styleValue}> {phone.batteryCapacity} mAh</h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Almacenamiento </h1>
          <h1 className={styleValue}> {phone.storage} GB </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> RAM </h1>
          <h1 className={styleValue}> {phone.ram} GB </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Procesador </h1>
          <h1 className={styleValue}> {phone.cpu} </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Camara </h1>
          <h1 className={styleValue}> {phone.cameraMpx} MP</h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Puerto de carga </h1>
          <h1 className={styleValue}> {phone.chargingPortType} </h1>
        </div>

        <div className={styleElement}>
          <h1 className={styleKey}> Lector de huella </h1>
          <h1 className={styleValue}> {phone.fingerprint ? 'Si' : 'Ninguno'} </h1>
        </div>

      </div>

      <div className="w-fit">
      </div>
    </section>
  )
}