import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neotour.shop/api/v1/',
})

export const getTrips = (page, size) => instance.get(`trips?page=${page}&size=${size}`)
export const getPopular = (page, size) => instance.get(`trips/popular?page=${page}&size=${size}`)
export const getFeatured = (page, size) => instance.get(`trips/featured?page=${page}&size=${size}`)
export const getMostVisited = (page, size) => instance.get(`trips/most-visited?page=${page}&size=${size}`)
export const getAsia = (page, size) => instance.get(`trips?page=${page}&size=${size}&continent=ASIA`)
export const getEurope = (page, size) => instance.get(`trips?page=${page}&size=${size}&continent=EUROPE`)
export const getTourById = (id) => instance.get(`trips/${id}`)
export const getTourReview = (id) => instance.get(`trips/${id}/reviews?page=0&size=1}`)

export const postBooking = (data) => instance.post(`bookings`, data)