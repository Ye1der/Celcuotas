import { CheckCircle2, CreditCard, Loader2Icon, MoveRight, X } from "lucide-react";
import { CustomInput } from "../components/CustomInput";
import { CustomSelectInput } from "../components/CustomSelectInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";

export function Credit() {
  const [check, setCheck] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  type FormValues = {
    maritalStatus: string
    phoneNumber: number
    income: number
    laborContract: string
  }

  const {handleSubmit, register, control} = useForm<FormValues>({
    defaultValues: {
      maritalStatus: '',
      laborContract: ''
    },
    mode: 'onChange'
  })

  function submit () {
    setCheck(true)

    setTimeout(() => {
      setCheck(false)
      setShowModal(true)
    }, 1500)
  }

  function finishCredit () {
    setShowModal(false)
    localStorage.removeItem('cartPhones')
    navigate('/store', {unstable_viewTransition: true})
  }


  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className="">
        <h2 className="text-2xl font-semibold ml-1"> Solicita tu credito </h2>
        <h1 className="text-4xl font-semibold text-darkOrange"> ¡Sin salir de casa! </h1>

        <img src="/creditImage.png" alt="image" className="w-[350px] mb-2 mt-3" />

        <p className="font-semibold w-[400px] ml-1 flex items-center">
          Simplemente completa el formulario <MoveRight className="mt-1 ml-3" />
        </p>
      </section>
      <section>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
          <CustomInput {...register('phoneNumber', {required: true})} label="Numero de telefono / celular" type="number" min={0}/>
          <CustomInput {...register('income', {required: true})} label="Ingresos mensuales" type="number" min={0}/>
          <CustomSelectInput control={control} rules={{required: true}} name="laborContract" label="Contrato laboral" options={['temporal', 'tiempo indefinido', 'ninguno']}/>
          <CustomSelectInput control={control} rules={{required: true}} name="maritalStatus" label="Estado civil" options={['soltero', 'casado', 'union libre']}/>
        
          <button type="submit" className="text-white font-semibold bg-darkOrange w-fit px-5 py-2 rounded-xl mx-auto mt-10 flex items-center">
            <span className="mr-3"> Solicitar credito </span> 
            {check ? <span className="animate-fadeIn"> <Loader2Icon className="animate-fastSpin" size={20} strokeWidth={2.5}/> </span> : <CreditCard className="animate-fadeIn" size={20}/>}
          </button>
        </form>
      </section>

      <Modal active={showModal} setActive={finishCredit}>
        <div className="bg-white rounded-2xl pt-10 pb-5 px-10 flex flex-col items-center">
          <button onClick={finishCredit} className="absolute top-3 right-3 p-1 rounded-full bg-gray-200 hover:bg-red-200 transition-colors duration-300">
            <X size={20}/>
          </button>

          <CheckCircle2 size={80}  className="text-darkOrange animate-bounce" />
          <h1 className="text-darkOrange font-semibold"> ¡Felicidades! </h1>
          <h1 className="text-2xl text-smokyBlack font-semibold text-opacity-90"> Tu credito fue aprovado </h1>
        </div>
      </Modal>
    </main>
  )
}