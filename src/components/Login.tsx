import { EyeIcon, EyeOff, HeartHandshake, MoveRight } from "lucide-react";
import { CustomInput } from "./CustomInput";
import { useEffect, useState } from "react";
import styles from '../components/styles/animationMountInput.module.css'
import { useCustomContext } from "../context/Context";

export function Login () {

  const {modalLogin} = useCustomContext()
  const [showPassword, setShowPassword] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [firstAnimation, setFirstAnimation] = useState(false)

  useEffect(() => {
    if (!firstAnimation && isRegister) {
      setFirstAnimation(true)
    }
  }, [isRegister])

  useEffect(() => {
    setFirstAnimation(false)
    setIsRegister(false)
    setShowPassword(false)
  }, [modalLogin])

  return (
    <section className="bg-cosmicLatte rounded-3xl p-7 max-sm:scale-90 flex flex-row-reverse items-center justify-center gap-20">
      <section>
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-2">
          <CustomInput allClassName={`${firstAnimation ? isRegister ? styles.mount : styles.unmount : 'hidden'}`} label="Nombre" width="100%"/>
          <CustomInput width="100%" type="email" label="Correo electronico"/>
          <div className="relative flex gap-2 place-items-center w-full">
            <CustomInput width="auto" label="Contraseña" type={showPassword ? 'text' : 'password'}/>
            <button onClick={() => {setShowPassword(prev => !prev)}} className={`p-[10px] border-2 border-white ${showPassword ? 'border-opacity-100 bg-black' : 'border-opacity-40'} mt-5 rounded-2xl transition-colors duration-300`}>
              {showPassword ? 
                <EyeIcon className="text-white animate-scale"/>
                :
                <EyeOff className="opacity-50 animate-scale"/>
              }
            </button>
          </div>

          <button className="bg-darkOrange py-[9px] mt-4 text-lg font-semibold text-white rounded-2xl hover:shadow-orange transition-shadow duration-300">  
          {!isRegister ? 'Inicia sesion' : 'Registrate'}
          </button>

          <hr className="w-[40%] mx-auto my-4 border-black border-opacity-70"/> 

          <button className="bg-transparent border-2 border-blue-900 text-blue-900 py-[9px] text-lg mt-0 font-semibold rounded-2xl hover:bg-blue-900 hover:text-white transition-colors duration-300">  
              Iniciar sesion con facebook
          </button>

          <button className="bg-transparent border-2 border-red-600 text-red-600 py-[9px] text-lg mt-1 font-semibold rounded-2xl hover:bg-red-600 hover:text-white transition-colors duration-300">  
            Iniciar sesion con google
          </button>
        </div>

        <div className="font-semibold w-full bg-white p-4 rounded-2xl text-center mt-3">
          <h1 className="flex items-center justify-center"> ¿{isRegister ? 'Ya' : 'No'} tienes una cuenta? <MoveRight className="mx-2" size={18}/>
            <span onClick={() => {setIsRegister(prev => !prev)}} className="text-darkOrange border-b-2 border-transparent hover:border-darkOrange cursor-pointer">
              {isRegister ? ' Inicia sesion' : ' Registrate'}
            </span>
          </h1>
        </div>
      </section>

      <section className="flex flex-col gap-10 max-[770px]:hidden">
        <h1 className="text-[40px] font-semibold text-darkOrange -rotate-[9deg]"> ¡Hola! </h1>

        <p className="animate-fadeIn py-2 px-4 bg-[#FFC700] bg-opacity-10 rounded-xl font-semibold text-smokyBlack text-opacity-85 ml-12 rotate-[6deg]"> 
          Bienvenido a bordo, <br />
          estamos emocionados de <br />
          tenerte como parte de <br />
          nuestra comunidad.
        </p>
        
        <HeartHandshake className="text-[#A30C0C] -mt-5 ml-6 -rotate-[7deg]" size={60}/>
      </section>
    </section>
  )
}