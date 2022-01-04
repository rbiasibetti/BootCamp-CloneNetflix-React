import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LoginPath } from "../../../screens/login/login.types";
import { useLocation, useNavigate } from "react-router-dom";
import { isAutenticated } from "../../../store/user/user.selector";

export default function UserGuard({ children }: any) {
  const isUserAuthenticated = useSelector(isAutenticated)
  //const isUserAuthenticated = useSelector((state: State) => !!state.user.data)
  const navigate = useNavigate()
  const from = useLocation()

  useEffect(
    () => {
      if (!isUserAuthenticated) {
        console.log('não autenticado')
        navigate(LoginPath, {
          state: { from }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isUserAuthenticated]
  )

  if (isUserAuthenticated) return children

  return <></>
}