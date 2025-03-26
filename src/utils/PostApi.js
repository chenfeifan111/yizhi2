import axios from "axios";

export const postApi = (path, data) => {
    console.log(import.meta.env.VITE_ENV)
    if (import.meta.env.VITE_ENV==="prod"){
        return axios.post('/public', {
            path: "/web_client" + path,
            env: import.meta.env.VITE_ENV,
            data: data
        })
    }else if (import.meta.env.VITE_ENV==="dev"){
        return axios.post('http://localhost:8787', {
            path: "/web_client" + path,
            env: import.meta.env.VITE_ENV,
            data: data
        })
    }
};