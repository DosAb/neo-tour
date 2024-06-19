import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neotour.shop/api/v1/',
})

export const getTrips = (page, size) => instance.get(`trips?page=${page}&size=${size}`)
// export const getMealDetails = (id) => instance.get(`lookup.php?i=${id}`)
// export const searchMeals = (search) => instance.get(`search.php?s=${search}`)
// export const getCategories = () => instance.get(`categories.php`)