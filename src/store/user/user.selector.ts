import { State } from "../store/store.types"
export const isAutenticated = (state: State)=> !!state.user.data