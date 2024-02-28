import { Percent, Search, ShieldCheck, Truck } from "lucide-react";

export function BenefitBar() {
  return (
    <section className="w-full min-h-36 bg-[#EE6618] mt-20 mb-20 max-lg:py-5 max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-10 max-lg:justify-items-center lg:flex lg:justify-center lg:items-center lg:gap-16">
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
  )
}