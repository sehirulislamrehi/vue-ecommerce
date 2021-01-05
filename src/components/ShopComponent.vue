<template>
     <div id="app">
          <section class="shop-section">
               <div class="container">
                    <div class="row" style="margin-bottom: 30px;">
                         <div class="col-md-12">
                              <h4>Shop Page</h4>
                         </div>
                    </div>

                    <div class="row">

                         <!-- product start -->
                         <div class="col-md-2 col-6" v-for="item in product" :key="item.id">
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
                                        <p class="offer_price">{{ item.price }} BDT</p>
                                   </router-link >
                                   <button class="add_cart" @click="addToCart(item.id)" ref="addToCart">Add To Cart</button>
                              </div>
                         </div>
                         <!-- product end -->

                    </div>

               </div>
          </section>
     </div>
</template>

<script>
import axios from "axios"
export default {
     data(){
          return{
               product: []
          }
     },
     created(){
          this.initialize()
     },
     methods: {
          initialize(){
               axios.get("http://127.0.0.1:8000/api/product",{})
               .then( res => {
                    this.product = res.data.product.data
               })
          },
          addToCart(id){
               this.$root.$emit('addToCart', id) 
          }
     }
}
</script>