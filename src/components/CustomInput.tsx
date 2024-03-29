export function CustomInput() {
  return (
    <div className="relative flex items-center w-fit h-fit">
      <input autoComplete="off" spellCheck={false} required type="text" className="peer valid:border-opacity-70 focus:border-opacity-70 text-center px-2 w-[200px] h-12 outline-none bg-transparent border-2 border-black border-opacity-40 rounded-2xl text-lg font-semibold transition-colors duration-300" />
      <label className="bg-white top-1/2 -translate-y-1/2 peer-valid:-top-0 peer-valid:text-opacity-80 peer-focus:-top-0 peer-focus:text-opacity-80 p-1 absolute left-1/2 -translate-x-1/2 cursor-text font-semibold text-black text-opacity-60 transition-all duration-300 pointer-events-none" htmlFor="input"> Name </label>
    </div>
  )
}