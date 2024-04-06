import { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomSelectInput } from "../components/CustomSelectInput";
import { SelectButton } from "../components/pay/SelectButton";

export function Pay() {

  const [selected, setSelected] = useState('')

  return (
    <section className="w-full min-h-svh flex justify-center mt-14">
      <div className="flex flex-col items-center gap-10 pb-10" >

        <div className="bg-black bg-opacity-5 p-5 rounded-xl w-fit">
          <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-5"> Informacion personal </h1>
          <div className="flex flex-col gap-3 w-fit relative">
            <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
              <CustomInput label="Nombres" />
              <CustomInput label="Apellidos" />
            </div>

            <CustomInput className="max-sm:w-[300px]" label="Correo electronico" width="100%" type="email" />

            <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
              <CustomSelectInput label="Tipo de documento" options={['cedula ciudadania', 'visa', 'cedula extranjeria']} />
              <CustomInput label="Numero de documento" type="number" min={0} />
            </div>
          </div>
        </div>

        <div className="bg-black bg-opacity-5 p-5 rounded-xl w-fit">
          <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-5"> Informacion de envio </h1>
          <div className="flex flex-col gap-3 w-fit">
            <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
              <CustomInput label="Departamento" />
              <CustomInput label="Ciudad" />
            </div>

            <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
              <CustomInput label="Barrio" />
              <CustomInput label="Direccion" />
            </div>

            <CustomInput className="max-sm:w-[300px]" label="Torre/ Apartamento/ Conjunto/" width="100%" />

          </div>
        </div>

        <div className="bg-black bg-opacity-5 p-5 rounded-xl w-full">
          <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-5"> Metodo de pago </h1>
          <div className="flex flex-col gap-3 w-full">
            <SelectButton label="Targeta debito / credito" selected={selected} setSelected={setSelected} />
            <SelectButton label="PSE" selected={selected} setSelected={setSelected} />
            <SelectButton label="Mercado pago" selected={selected} setSelected={setSelected} />
            <SelectButton label="Nequi" selected={selected} setSelected={setSelected} />
            <SelectButton label="Paypal" selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </section>
  )
}