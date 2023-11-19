import axios from 'axios'
import { UserAccessTokenKey } from 'Shared/consts/AppConsts'

export const API = axios.create({
  baseURL: 'http://localhost:1488',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(UserAccessTokenKey)}`
  }
})
