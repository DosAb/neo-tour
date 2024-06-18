import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://neotour.shop/api/v1/'
})

export const getTrips = () => instance.get('trips')
// export const getMealDetails = (id) => instance.get(`lookup.php?i=${id}`)
// export const searchMeals = (search) => instance.get(`search.php?s=${search}`)
// export const getCategories = () => instance.get(`categories.php`)