import React from 'react'

export default function axios() {
  return (
    <div>axios</div>
  )
}


// import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// let refresh = false;

// axios.interceptors.response.use(resp => resp, async error => {
//     console.log(error.response)
//     if (error.response.statusCode === 401 && !refresh) {
//         refresh = true;

//         const response = await axios.post('refresh', {}, {withCredentials: true});

//         if (response.status === 200) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });
