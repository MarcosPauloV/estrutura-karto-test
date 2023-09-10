import axios, { AxiosInstance, AxiosResponse } from 'axios';
//Axios Instance - Permite que configuremos uma intância personalizada do AXIOS, com URLs especificas ou cabeçalhhos da requisição modificados

//Axios Response - Uma instância que representa a resposta de uma requisição HTTP (dados, status, cabeçalhos, etc)


export default class Controller {
  public static url = 'http://localhost:3000';

  protected get rest(): AxiosInstance {
    return axios.create({
      baseURL: Controller.url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    });
  }
}