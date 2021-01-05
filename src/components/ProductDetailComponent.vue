<template>
     <div id="app">
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
export default {
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