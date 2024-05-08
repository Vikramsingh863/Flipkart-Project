import express from 'express'
const route = express.Router()
import getNavigation from '../Controller/navigationController.js'
import getBanner from '../Controller/BannerController.js'
import {getSignup, getLogin} from '../Controller/SignupController.js'
import { getProducts, getProductById } from '../Controller/productController.js'


route.get('/navigation', getNavigation)
route.get('/banner', getBanner)
route.post('/signup', getSignup)
route.post('/login', getLogin)
route.get('/products', getProducts)
route.get('/product/:id', getProductById)

export default route
