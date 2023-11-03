import BaseService from './base-service';
const BASE_URL_API = 'https://localhost:8080';

export default class LoginService extends BaseService {
  login(param){
    return this.api('post',BASE_URL_API + '/v1/auth/login', param, null)
  }
  getSSOURL(){
    return this.api('get',BASE_URL_API + '/v1/auth/get-urlsso', null, null)
  }
  SSOVerifikasiToken(param) {
    return this.api('post',BASE_URL_API + '/v1/auth/verifikasi-token', param, null)
  }
  redirectVerification(param) {
    return this.api('post',BASE_URL_API + '/v1/auth/verifikasi-apk2', param, null)
  }
}