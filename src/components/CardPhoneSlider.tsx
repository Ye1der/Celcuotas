import { useCustomContext } from "../context/Context"

interface Props {
  name?: string
  index: number
  arrayLength: number
}

// el componente recibe el index de el que forma parte y la longitud de el array del que forma parte
// usamos la url para saber que imagen poner y el name es el texto debajo de la imagen
export function CardPhoneSlider({ name, index, arrayLength }: Props) {

  const { sliderItem, hideItem } = useCustomContext() // el item enfocado en el slider y la direccion del item que debe de ocultarse
  arrayLength = arrayLength - 1 // ajutamos la lenght al tamaño de el maximo index para no hacerlo cada vez

  var classCard = hideItem ? "cardHideRight" : "cardHideLeft" // la tarjeta inicia como inactiva
  let zIndex = index // el Zindex (valor de superposicion en css) comienza con el index de la tarjeta

  if (index === sliderItem) {
    classCard = 'cardSelected' // con esta clase la tarjeta pasa a verse activa en el centro
  }

  if (index === sliderItem - 1) classCard = "cardLeft"

  if (index === sliderItem + 1) {
    classCard = "cardRight"
    zIndex = arrayLength - index
  }

  if (sliderItem === 0) { // si el index es cero pasamos los dos ultimos elementos de el arreglo hacia la izquierda
    if (index === arrayLength) classCard = "cardLeft"
  }

  if (sliderItem === arrayLength) { // si el index es igual al index maximo posible pasamos los dos primeros elementos a la derecha
    if (index === 0) {
      classCard = "cardRight"
      zIndex = arrayLength - index
    }
  }

  const url = `/phones/${name?.replace(/ /g, "-")}.webp`

  return (
    <div className={`${classCard} ${classCard !== "cardHideRight" && classCard !== "cardHideLeft" ? "card" : ""} flex flex-col items-center bg-gray-200 p-3 rounded-2xl w-fit absolute transition-all duration-300`}
      style={{ zIndex: zIndex }}>
      <img src={url} alt="phone" className="min-w-[150px] max-w-[150px] min-h-[200px] max-h-[200px] z-[10]" />
      <h1 className="text-center font-semibold mt-3 text-lg"> {name?.slice(0, 16)} </h1>
    </div>
  )
}