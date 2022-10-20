import { ISystemState } from './main/system/types'
import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithMoudle
