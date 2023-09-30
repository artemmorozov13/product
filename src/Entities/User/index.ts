import { UserActions, UserReducer } from './model/slice/UserSlice'
import { getUserInited } from './model/selectors/getUserInited/getUserInited'
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { getUserId } from './model/selectors/getUserAuthData/getUserAuthData'

export {
  UserActions,
  UserReducer,
  getUserInited,
  getUserAuthData,
  getUserId
}
