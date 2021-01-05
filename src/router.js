import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/HomeComponent"
import Login from "./components/LoginComponent"
import Register from "./components/RegisterComponent"
import ProductDetails from "./components/ProductDetailComponent"
import Shop from "./components/ShopComponent"
import Profile from "./components/ProfileComponent"
import Checkout from "./components/CheckoutComponent"
import Category from "./components/CategoryComponent"

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
          component: Login,
           beforeEnter: (to, from,next) => {
               if( localStorage.getItem("token") ){
                    return false
               }
               next()
           }
           
     },
     {
          path:"/register",
          name: "register",
          component: Register
     },
     {
          path: "/productdetails/:slug",
          name: "productdetails",
          component: ProductDetails
     },
     {
          path: "/shop",
          name: "shop",
          component: Shop
     },
     {
          path: "/profile",
          name: "profile",
          component: Profile,
          beforeEnter: (to, from, next) => {
               if( localStorage.getItem("token") ){
                    next();
               }
               else{
                    next("/login");
               }
          }
     },
     {
          path: "/checkout",
          name: "checkout",
          component: Checkout,
          beforeEnter: (to, from, next) => {
               if( localStorage.getItem("token") ){
                    if( !localStorage.getItem('cart')  ){
                         next("/");
                    }
                    else if( localStorage.getItem('cart').length == 2 ){
                         
                         next("/");
                    }
                    else{
                         next();
                    }
               }
               else{
                    next("/login");
               }
          }
     },
     {
          path: "/category/:name",
          name: "category",
          component: Category
     }
]

const router = new VueRouter({
     mode: "history",
     routes 
     })

export default router