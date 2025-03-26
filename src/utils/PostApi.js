import axios from "axios";

export const postApi = (path, data) => {
    console.log(import.meta.env.VITE_ENV)
    return axios.post('/public', {
        path: "/web_client" + path,
        env: import.meta.env.VITE_ENV,
        data: data
    })
};