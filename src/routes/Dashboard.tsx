import { NavBar } from "../components/NavBar";
import { useContextStyles } from "../context/Context";

export function Dashboard() {
  const { buttonStyles } = useContextStyles()

  return (
    <>
      <NavBar />

      <section className="flex w-full mt-10 justify-center">
        <div>
          <h2 className="text-smokyBlack opacity-80 text-2xl">
            Explora nuetra <br />
            Amplia gama de smartphones.
          </h2>

          <h1 className="text-smokyBlack text-4xl font-semibold">
            ¡Encuentra el tuyo!
          </h1>

          <button className={`${buttonStyles} font-semibold text-xl`}>
            Ver catalogo
          </button>
        </div>

      </section>
    </>
  )
}