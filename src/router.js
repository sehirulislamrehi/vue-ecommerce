import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/HomeComponent"
import Login from "./components/LoginComponent"
import Register from "./components/RegisterComponent"
import ProductDetails from "./components/ProductDetailComponent"
import Shop from "./components/ShopComponent"

Vue.use(VueRouter)

const routes = [
     {
          path: "/",
          name: "home",
          component: Home
     },
     {
          path: "/login",
          name: "login",
          component: Login
     },
     {
          path:"/register",
          name: "register",
          component: Register
     },
     {
          path: "/productdetails",
          name: "productdetails",
          component: ProductDetails
     },
     {
          path: "/shop",
          name: "shop",
          component: Shop
     }
]

const router = new VueRouter({
     mode: "history",
     routes 
     })

export default router