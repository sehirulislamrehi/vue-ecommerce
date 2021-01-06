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
          
          <section class="product-detail">
               <div class="container">
                    <div class="row" style="margin-bottom: 30px;">
                         <div class="col-md-12">
                              <h4>Product Details</h4>
                         </div>
                    </div>

                    <div class="row" v-if="product_detail">

                         <!-- left side product image start -->
                         <div class="col-md-4">
                              <div class="product-detail-image">
                                   <img :src="product_detail.image" class="img-fluid" alt="">
                              </div>
                         </div>
                         <!-- left side product image end -->

                         <!-- right side product detail start -->
                         <div class="col-md-8">
                              <div class="product-detail">
                                   <h3>{{ product_detail.name }}</h3>

                                   <!-- price -->
                                   <p>{{ product_detail.regular_price }} BDT</p>

                                   <!-- description -->
                                   <p>
                                        {{ product_detail.description }}
                                   </p>

                                   <!-- add to cart button -->
                                   <button @click="addToCart(product_detail.id)" ref="addToCart">Add to cart</button>
                              </div>
                         </div>
                         <!-- right side product detail end -->
                         
                    </div>

               </div>
          </section>

     </div>
</template>

<script>
import axios from "axios"

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
               product_detail: [],
          }
     },
     created(){
          this.initialize()
     },
     methods: {
          initialize(){
               let product_slug = this.$route.params.slug
               axios.get(`http://127.0.0.1:8000/api/product/${product_slug}`,{})
               .then( res => {
                    this.product_detail = res.data.product
               })
          },
          addToCart(id){
               this.$root.$emit('addToCart', id) 
          }
     }
}
</script>