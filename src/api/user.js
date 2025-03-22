import request from '@/utils/request'

export const userRigisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })
export const userGetInfoService = () => request.get('/my/userinfo')
