import { UserFinded } from "../ViewModel/UserFinded"
import { AuthUser } from "../ViewModel/AuthUser";

import Api from "./ApiConfig"
import RegistredFood from "../model/RegistredFood";
import useDate from "../Utils/useData";
import Food from "../model/Food";
import CreateUser from "../ViewModel/CreateUser";

const createUser = async(user: CreateUser) => {
    const jwtStr = localStorage.getItem('token')
    return await Api().post('/api/v1/user/create', user, {
        'headers': {
          'Authorization': 'Bearer ' + jwtStr
        }}).then((res)=> {
            if (res.status == 200) {
                return true;
            } else {
                return false;
            }
        })
};

const postLogin = async (login: AuthUser) => {
    login.date = useDate()
    return await Api().post('/api/v1/user/auth', login)
        .then((res) => {
            if (res.status === 200) {
                return res.data;
            }
            else {
                return false;
            }
        })
        .catch(() => {
            return false;
        })
}

const getLogedUserAsync = async (idUser: number, date?: string) => {
    let resApi;
    const jwtStr = localStorage.getItem('token');
    if (!date) {
        date = useDate()
    }
    await Api().get(`api/v1/user/${idUser}?date=${date}`, {
        'headers': {
          'Authorization': 'Bearer ' + jwtStr
        }}).then((res) => {
            resApi = res.data as UserFinded;
            localStorage.setItem('idUser', resApi.userId.toString());
            localStorage.setItem('token', resApi.token);
        })
        .catch()
    return resApi;
}

const deleteRegisterFood = async (id: number) => {
    const jwtStr = localStorage.getItem('token');
    await Api().delete(`api/v1/registeredfood/${id}`,{
        'headers': {
          'Authorization': 'Bearer ' + jwtStr
        }}).then((res)=> {
            return res.data;
        });
}

const getFood = async () => {
    let resApi: Food[] = [];
    await Api().get('api/v1/food').then((res) =>{
        resApi = res.data;
    });
    return resApi;
}


const postRegisterFood = async (registerFood: RegistredFood) => {
     let resApi;
    const jwtStr = localStorage.getItem('token');
    await Api().post(`api/v1/registeredfood`,registerFood, {
        'headers': {
          'Authorization': 'Bearer ' + jwtStr
        }}).then((res) => {
            if (res.status == 200) {
                RequestsClient.getLogedUserAsync(registerFood.userId).then(() => {
                    resApi = res.data as UserFinded;
                    localStorage.setItem('idUser', resApi.userId.toString());
                    localStorage.setItem('token', resApi.token);
                })
            } 
        })
        .catch()
    return resApi;
}


export const RequestsClient = {
   postLogin,
   getFood,
   getLogedUserAsync,
   postRegisterFood,
   deleteRegisterFood,
   createUser,
}