import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginuserInfo = '/users/', //users/1
  UserMenus = '/role/' //role/1/menu
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: false
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginuserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
