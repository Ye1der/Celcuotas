import { useForm } from "react-hook-form";
import { CustomInput } from "../components/CustomInput";
import { useState } from "react";

type FormValues = {
  quantity: number
  fees: number
}

type Fee = {
  capital: number
  interest: number
  fee: number
}

export function SimulateCredit () {
  const {handleSubmit, register} = useForm<FormValues>()
  const [tableFees, setTableFees] = useState<Fee[]>([])

  function submit (data: FormValues) {
    const fee = data.quantity / data.fees
    let interest = data.quantity * 0.0652
    const fees: Fee[] = []

    for (let i = 1; i <= data.fees; i++) {
      let currentiInterest
      i == data.fees ? currentiInterest = interest : currentiInterest = interest * 0.5
      interest = interest * 0.5

      const newFee: Fee = {
        fee: fee, 
        capital: fee - currentiInterest,
        interest: currentiInterest
      }


      fees.push(newFee)
    }

    setTableFees(fees)
  }

  return (
    <main className="min-h-svh w-full">
      <section className="w-full flex flex-wrap justify-center mt-10 gap-10">
        <img src="/simulateCredit.png" alt="" className="rounded-2xl max-sm:w-[300px] sm:w-[400px]"/>
        <div className="mt-5 max-sm:px-5">
          <h1 className="text-3xl font-semibold text-darkOrange"> ¡Simula tu crédito! </h1>
          <p className="sm:w-[400px] text-smokyBlack font-semibold text-opacity-80 mt-5"> 
            Calcula el valor de la cuota o el monto que puedes 
            solicitar de acuerdo con las necesidades de crédito 
            y capacidad de pago (2.52% de interes).
          </p>

          <p className="sm:w-[400px] text-smokyBlack font-semibold text-opacity-80 mt-5"> 
            Tambien puedes consultar tu historial de credito y reportes en data credito 
            <a href="https://www.midatacredito.com/?gad_source=1#!/perfilcredito/?utm_source=Google&utm_medium=extensionanuncio&utm_campaign=perfildecredito"
              target="_blank"
              className="text-darkOrange text-opacity-100 cursor-pointer border-b-2 border-transparent hover:border-darkOrange"> aqui. </a>
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <section className="flex gap-3 mt-5">
              <div className="w-[50%]">
                <CustomInput {...register('quantity', {required: true})} label="Cantidad" width="100%" type="number" min={800000}/>
                <h3 className="text-sm font-semibold text-smokyBlack text-opacity-80 ml-4"> Desde $800.000 pesos </h3>
              </div>
              <div className="w-[50%]">
                <CustomInput {...register('fees', {required: true})} label="No. Cuotas" width="100%" type="number" min={4} max={18}/>
                <h3 className="text-sm font-semibold text-smokyBlack text-opacity-80 ml-4">De 4 a 18 cuotas </h3>
              </div>
            </section>

            <button type="submit" className="font-semibold text-xl text-white bg-darkOrange py-2 px-4 mt-8 rounded-xl"> Simular credito</button>
          </form>
        </div>
      </section>

      {tableFees.length > 0 && 
      <section className="flex flex-col flex-wrap items-center mb-16 pb-4 mx-5 overflow-auto full px-10 scrollbar-thin scrollbar-thumb-transparent">
        <h1 className="mt-20 mb-5 text-3xl font-semibold text-smokyBlack text-opacity-70"> Plan de pago </h1>

        <div className="my-1 py-2 bg-gray-100 min-w-[100%] grid grid-cols-[0.5fr_1fr_1fr_1fr] text-center font-semibold text-smokyBlack rounded-xl">
          <h1 className="min-w-[50px]"> MES </h1>
          <h1 className="mx-5 min-w-[150px]"> CAPITAL </h1>
          <h1 className="mx-5 min-w-[150px]"> INTERES </h1>
          <h1 className="mx-5 min-w-[150px]"> VALOR TOTAL </h1>
        </div>

        {tableFees.map((fee, index) => {
          return (
            <div className="my-1 py-2 bg-gray-100 min-w-[100%] grid grid-cols-[0.5fr_1fr_1fr_1fr] text-center font-semibold text-smokyBlack text-opacity-80 rounded-xl">
              <h1 className="min-w-[50px]"> {index + 1} </h1>
              <h1 className="mx-5 min-w-[150px]"> ${fee.capital.toLocaleString('co')} </h1>
              <h1 className="mx-5 min-w-[150px]"> ${fee.interest.toLocaleString('co')} </h1>
              <h1 className="mx-5 min-w-[150px]"> ${fee.fee.toLocaleString('co')} </h1>
            </div>
          )
        })}
      </section>}
    </main>
  )
}