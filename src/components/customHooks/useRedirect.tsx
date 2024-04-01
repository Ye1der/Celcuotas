import { useNavigate } from "react-router-dom"

export function useRedirect() {
  const navigate = useNavigate()

  const redirect = (phoneName: string) => {
    navigate(`/phone/${phoneName?.replace(/ /g, '-')}`, { unstable_viewTransition: true })
  }

  return redirect
}