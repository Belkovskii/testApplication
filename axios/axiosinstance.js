import axios from 'axios'

const axiosInstance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    withCredentials :  true,
    // headers : {
    //     'API-KEY' : 'b1ca6844-f250-48bd-b5d1-3114674bb8e8'
    // }
})

export const getFriends = (currentPage, pageSize) => {
    return axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
}