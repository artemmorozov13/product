import { UserActions, UserReducer } from './model/slice/UserSlice'
import { getUserInited } from './model/selectors/getUserInited/getUserInited'
import { getUserAuthData, getUserId } from './model/selectors/getUserAuthData/getUserAuthData'

export {
  UserActions,
  UserReducer,
  getUserInited,
  getUserAuthData,
  getUserId
}
