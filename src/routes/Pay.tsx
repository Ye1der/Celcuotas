import { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomSelectInput } from "../components/CustomSelectInput";
import { SelectButton } from "../components/pay/SelectButton";
import { TableTotalPrice } from "../components/ShoppingCart/tableTotalPrice";
import { Phone } from "../types";
import { CheckCircle2, ChevronLeft, Loader2Icon, PackageCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal } from "../components/Modal";

type FormValues = {
  typeDoc: string,
  names: string
  lastnames: string
  email: string
  doc: string
  department: string
  address: string
  tower: string
  city: string
  neighbordhood: string
}

export function Pay() {

  const [selected, setSelected] = useState('')
  const [check, setCheck] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const [phones] = useState(() => {
    const result = localStorage.getItem('cartPhones')
    if (result) {
      const data = JSON.parse(result)
      return data as Phone[]
    }

    return [] as Phone[]
  })

  function submit(data: FormValues) {
    setCheck(true)

    setTimeout(() => {
      setCheck(false)
      setShowModal(true)
    }, 1500)
  }

  function completePayment () {
    localStorage.removeItem('cartPhones')
    navigate("/store")
  }

  // el control se usa para poder manejar el valor del un input de typo readonly o en general para majera cualquier valor
  const {handleSubmit, register, control} = useForm<FormValues>({
    defaultValues: {
      typeDoc: ''
    }, 
    mode: "onChange"
  })

  return (
    <main className="w-full min-h-svh flex justify-center gap-14 mt-8">
      <section className="flex flex-col items-center gap-10 pb-20" >
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(submit)}>

          <div className="p-5 rounded-xl w-fit">
            <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-3"> Informacion personal </h1>
            <div className="flex flex-col gap-3 w-fit relative">
              <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
                <CustomInput {...register('names', { required: true })} label="Nombres" />
                <CustomInput {...register('lastnames', { required: true })} label="Apellidos" />
              </div>

              <CustomInput className="max-sm:w-[300px]" {...register('email', { required: true })} label="Correo electronico" width="100%" type="email" />

              <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
                <CustomSelectInput control={control} name="typeDoc" rules={{required: true}} label="Tipo de documento" options={['cedula ciudadania', 'visa', 'cedula extranjeria']} />
                <CustomInput {...register('doc', { required: true })} label="Numero de documento" type="number" min={0} />
              </div>
            </div>
          </div>

          <div className=" p-5 rounded-xl w-fit">
            <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-3"> Informacion de envio </h1>
            <div className="flex flex-col gap-3 w-fit">
              <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
                <CustomInput {...register('department', { required: true })} label="Departamento" />
                <CustomInput {...register('city', { required: true })} label="Ciudad" />
              </div>

              <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
                <CustomInput {...register('neighbordhood', { required: true })} label="Barrio" />
                <CustomInput {...register('address', { required: true })} label="Direccion" />
              </div>

              <CustomInput {...register('tower', { required: true })} className="max-sm:w-[300px]" label="Torre/ Apartamento/ Conjunto/" width="100%" />

            </div>
          </div>

          <div className=" p-5 rounded-xl w-full">
            <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-5"> Metodo de pago </h1>
            <div className="flex flex-col gap-3 w-full">
              <SelectButton label="Targeta debito / credito" selected={selected} setSelected={setSelected} />
              <SelectButton label="PSE" selected={selected} setSelected={setSelected} />
              <SelectButton label="Mercado pago" selected={selected} setSelected={setSelected} />
              <SelectButton label="Nequi" selected={selected} setSelected={setSelected} />
              <SelectButton label="Paypal" selected={selected} setSelected={setSelected} />
            </div>
          </div>

          <div className="w-full flex justify-between items-center px-5 -mt-3">
            <button type="button" onClick={() => { navigate(-1) }} className="flex items-center justify-center gap-2 text-black hover:gap-4 hover:text-darkOrange rounded-full py-[8px] mt-5 transition-all duration-300" role="pay">
              <ChevronLeft strokeWidth={2.4} />
              <h1 className="text-xl font-bold select-none"> Volver </h1>
            </button>

            <button type="submit" className="hover:shadow-orange flex items-center gap-3 px-6 bg-darkOrange rounded-full py-[6px] mt-5 transition-all duration-300" role="pay">
              <h1 className="text-xl font-bold text-white select-none"> Realizar pedido </h1>
              {!check ? <PackageCheck className="text-white animate-fadeIn" /> :
                <div className="animate-fadeIn">
                  <Loader2Icon strokeWidth={2.4} className="animate-fastSpin text-white" />
                </div>
              }
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-3 w-fit pt-[83px] max-lg:hidden">
        <TableTotalPrice />

        <div className="pt-5 w-full mb-10">
          <h1 className="text-2xl text-smokyBlack text-opacity-80 font-semibold mb-5"> Resumen de compra </h1>

          <div className="flex flex-col gap-6 w-full">
            {phones.map((phone, index) => {
              return (
                <div className="flex w-full pl-2" key={index}>
                  <img className="max-w-[120px]" src={`phones/${phone.name?.replace(/ /g, '-')}.webp`} alt="phone" />
                  <div className="py-5 ml-3">
                    <h2 className="text-smokyBlack text-opacity-70 font-semibold"> {phone.brand} </h2>
                    <h1 className="text-smokyBlack text-lg text-opacity-90 font-semibold"> {phone.name} </h1>
                    <h2 className="text-smokyBlack text-sm text-opacity-70 font-semibold"> {phone.storage} GB | {phone.ram} GB</h2>
                    <h2 className="text-smokyBlack text-sm text-opacity-70 font-semibold"> {phone.os} </h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </section>

      <Modal active={showModal} setActive={completePayment}>
        <div className="bg-white rounded-2xl pt-10 pb-5 px-10 flex flex-col items-center">
          <button onClick={completePayment} className="absolute top-3 right-3 p-1 rounded-full bg-gray-200 hover:bg-red-200 transition-colors duration-300">
            <X size={20}/>
          </button>

          <CheckCircle2 size={80}  className="text-darkOrange animate-bounce" />
          <h1 className="text-darkOrange font-semibold"> ¡Felicidades! </h1>
          <h1 className="text-2xl text-smokyBlack font-semibold text-opacity-90"> Tu compra fue un exito </h1>
        </div>
      </Modal>
    </main>
  )
}