import { UserFinded } from "../ViewModel/UserFinded"
import { AuthUser } from "../ViewModel/AuthUser";

import Api from "./ApiConfig"

const postLogin: (login: AuthUser) => Promise<UserFinded | boolean> = async (login: AuthUser) => {
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



export const RequestsClient = {
   postLogin
}