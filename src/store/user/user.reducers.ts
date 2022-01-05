import { UserAction, UserState } from "./user.types";

const login = (state: UserState, action: UserAction) => {}

const setData = (state: UserState, action: UserAction) => {
  state.data = action.payload
  console.log('Carregando o login')
}

const reducers = { login, setData }

export default reducers