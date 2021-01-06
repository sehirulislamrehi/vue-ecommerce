<template>
     <div id="app">

          <!-- topbar ad start -->
          <Ad />
          <!-- topbar ad end -->

          <!-- for pc start -->
          <div class="for-pc">
               <!-- topbar information start -->
               <Info />
               <!-- topbar information start -->

               <!-- search section start -->
               <SearchPc />
               <!-- search section end -->

               <!-- nav bar start -->
               <Nav />
               <!-- navbar end -->
          </div>
          <!-- for pc end -->


          <!-- for mob start -->
          <div class="for-mob">

               <!-- sIdeBaR start -->
               <Sidebar /> 
               <!-- sIdeBaR end -->

               <!-- search mob start -->
               <Search />
               <!-- search mob end -->

               <!-- cart section start -->
               <Cart />
               <!-- cart section end -->

          </div>
          <!-- for mob end -->

          <section class="shop-section">
               <div class="container">
                    <div class="row" style="margin-bottom: 30px;">
                         <div class="col-md-12">
                              <h4>{{category_name}}</h4>
                         </div>
                    </div>

                    <div class="row" v-if="product.length > 0">

                         <!-- product start -->
                         <div class="col-md-2 col-6" v-for="item in product" :key="item.id" >
                              <div class="product-box">
                                   <router-link :to='{
                                             name: "productdetails",
                                             params: {
                                                  slug: item.slug
                                             }
                                        }'>
                                        <div class="image">
                                             <img :src="item.image" class="img-fluid" alt="">
                                        </div>
                                        <p class="name">{{ item.name }}</p>
                                        <!-- <p class="regular_price">100 BDT</p> -->
                                        <p class="offer_price">{{ item.regular_price }}</p>
                                   </router-link >
                                   <button class="add_cart" @click="addToCart(item.id)" ref="addToCart">Add To Cart</button>
                              </div>
                         </div>
                         <!-- product end -->
                    </div>

                    <div class="row" v-if="product.length == 0">
                         <div class="col-md-12 alert alert-warning">
                              <p>No product found in this category</p>
                         </div>
                    </div>

               </div>
          </section>
     </div>
</template>

<script>
import axios from "axios";


import Ad from "./topbar/AdComponent";
//for pc start
import Info from "./topbar/pc/InfoComponent";
import SearchPc from "./topbar/pc/SearchComponent";
import Nav from "./topbar/pc/NavComponent"
//for pc end
//for mob start
import Sidebar from "./topbar/mob/SidebarComponent";
import Search from "./topbar/mob/SearchComponent";
import Cart from "./topbar/mob/CartComponent"
//for mob end

export default {
     components: {
          Ad,
          Info,
          SearchPc,
          Nav,
          Sidebar,
          Search,
          Cart,
     },

     data(){
          return{
               product: [],
               category_name:"",
          }
     },
     watch: {
          '$route.params.name': function () {
               this.initialize()
          }
     },
     created(){
          this.initialize()
     },
     methods:{
          initialize(){
               let category_slug = this.$route.params.name
               axios.get(`http://127.0.0.1:8000/api/category/${category_slug}`,{})
               .then( res => {
                    this.category_name = res.data.category
                    this.product = res.data.product.data
               })               
          },
          addToCart(id){
               this.$root.$emit('addToCart', id) 
          }
     }
}
</script>