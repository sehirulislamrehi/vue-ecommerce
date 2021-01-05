<template>
     <div id="app">
          
          <!-- main website section start -->
          <section class="website_main_section">
               <div class="container-fluid">
                    <div class="row website_main_main_row">

                         <!-- left part start -->
                         <div class="col-md-2 category_desktop">

                              <!-- category part start -->
                              <div class="left">
                                   <div class="title">
                                        <h3>Categories</h3>
                                   </div>
                                   <ul>      
                                        <router-link v-for="item in category" :key="item.id" :to='{
                                             name: "category",
                                             params: {
                                                  name: item.slug
                                             }
                                        }' >
                                        <li class="nav-click-pc" id="cat-id-1"  >
                                             {{ item.name }}
                                        </li>
                                        </router-link> 
                                        
                                   </ul>
                              </div>
                              <!-- category part end -->

                         </div>
                         <!-- left part end -->

                         <!-- middle part start -->
                         <div class="col-md-8 banner_desktop">
                              <div class="middle">

                              <!-- banner start -->
                              <section class="banner_section">
                                   <div class="row">
                                        <carousel
                                        :responsive="{
                                             0:{
                                                  items:1,
                                                  nav:false
                                             },
                                             600:{
                                                  items:1,
                                                  nav:false
                                             }
                                             }"
                                             :nav="false"
                                        >
                                             <img src="images/banner-3.jpeg" class="img-fluid" alt="">

                                             <img src="images/banner-4.png" class="img-fluid" alt="">

                                             <img src="images/banner-5.png" class="img-fluid" alt="">
                                        </carousel>
                                   </div>
                              </section>
                              <!-- banner end -->


                              <!-- horizontal category start -->
                              <section class="horizontal_category">
                                   <div class="row">

                                        <carousel v-if="category.length > 0" class="category-carousel"
                                             :responsive="{0:{
                                                  items:2,
                                                  nav:false
                                             },
                                             600:{
                                                  items:5,
                                                  nav:false
                                             }
                                             }"
                                        >
                                             <!-- item start -->
                                             <div class="item" v-for="item in category" :key="item.id">
                                                  <div class="col-md-12">
                                                       <router-link :to='{
                                                            name: "category",
                                                            params: {
                                                                 name: item.slug
                                                            }
                                                       }' class="horizontal_item">
                                                            <div class="">
                                                                 <div class="icon">
                                                                      <img :src="item.image" alt="">
                                                                 </div>
                                                                 <p>{{ item.name }}</p>
                                                            </div>
                                                       </router-link >
                                                  </div>
                                             </div>
                                             <!-- item end -->

                                        </carousel>

                                   </div>
                              </section>
                              <!-- horizontal category end -->


                              <!-- category wise product section start -->
                              <section class="category-product" v-for="item in category" :key="item.id" >

                                   <!-- title row start -->
                                   <div class="row title-row">
                                        <div class="col-md-6 col-8">
                                             <h4>{{ item.name }}</h4>
                                        </div>

                                        <div class="col-md-6 col-4" style="text-align: right;">
                                             <router-link :to='{
                                                  name: "category",
                                                  params: {
                                                       name: item.slug
                                                  }
                                             }'>View All</router-link >
                                            
                                        </div>
                                   </div>
                                   <!-- title row end -->

                                   <div class="row" v-if="item.product.data.length == 0">
                                        <div class="col-md-12 alert alert-warning">
                                             <p>No product found in this category</p>
                                        </div>
                                   </div>

                                   <div class="row">

                                        <!-- product start -->
                                        <div class="col-md-3 col-6" v-for="product in item.product.data" :key="product.id" >
                                             <div class="product-box">
                                                  <router-link :to='{
                                                            name: "productdetails",
                                                            params: {
                                                                 slug: product.slug
                                                            }
                                                       }'>
                                                       <div class="image">
                                                            <img :src="product.image" class="img-fluid" alt="">
                                                       </div>
                                                       <p class="name">{{ product.name }}</p>
                                                       <!-- <p class="regular_price">100 BDT</p> -->
                                                       <p class="offer_price">{{ product.regular_price }} BDT</p>
                                                  </router-link >
                                                  <button class="add_cart" @click="addToCart(product.id)" ref="addToCart">
                                                       
                                                       Add To Cart
                                                  </button>
                                             </div>
                                        </div>
                                        <!-- product end -->

                                   </div>

                              </section>
                              <!-- category wise product section end -->

                              </div>
                         </div>
                         <!-- middle part end -->

                         <!-- right part start -->
                         <div class="col-md-2 shipping_detail_desktop">

                              <!-- information start -->
                              <div class="right">

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-13.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>Free Shipping</h5>
                                                  <p>Deliver to door</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-14.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>24x7 Support</h5>
                                                  <p>in safe hands</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-15.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>Big Saving</h5>
                                                  <p>at lowest price</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-16.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>Money Back</h5>
                                                  <p>Easy to return</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-17.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>Online Store</h5>
                                                  <p>a huge branding</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                                   <!-- free shipping start -->
                                   <div class="right-item">
                                        <div class="row">
                                             <!-- left -->
                                             <div class="col-md-4">
                                                  <img src="images/icon-18.png" class="img-fluid" alt="">
                                             </div>

                                             <!-- right -->
                                             <div class="col-md-8">
                                                  <h5>Award Winner</h5>
                                                  <p>For best services</p>
                                             </div>
                                        </div>
                                   </div>
                                   <!-- free shipping end -->

                              </div>
                              <!-- information end -->

                         </div>
                         <!-- right part end -->

                    </div>
               </div>
          </section>
          <!-- main website section end -->

          <!-- snackbar start -->
          <div class="snackbar" ref="snackbar" @click="closeSnackbar">
               
          </div>
          <!-- snackbar end -->

     </div>
</template>


<script>
import carousel from 'vue-owl-carousel'
import axios from "axios"


export default {
     props: ['id'],
     data(){
          return{
               category: [],
               cartsample: {
                    id: "",
                    name: "",
                    image: "",
                    qty: "",
                    price: "",
               },
          }
     },
     mounted(){
          this.$refs['snackbar'].style.display = "none"
     },
     components:{ 
          carousel
     },
     created(){
          this.initialize()
     },
     methods: {
          initialize(){
               axios.get("http://127.0.0.1:8000/api/category/",{})
               .then( res => {
                    this.category = res.data.category.data
               })
          },
          closeSnackbar(){
               this.$refs['snackbar'].style.display = "none"
          },
          addToCart(id){
               this.$root.$emit('addToCart', id) 
          }
     },
}
</script>