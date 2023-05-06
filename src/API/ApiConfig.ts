import axios from "axios";

const Api = () => {
    return axios.create({
        baseURL: "https://localhost:44337"
    })
}

export default Api