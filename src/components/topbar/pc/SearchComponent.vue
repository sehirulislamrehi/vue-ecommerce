<template>
    <div id="app">
        <!-- top logo section start -->
        <section class="top-logo">
            <div class="container-fluid">
                <div class="row">

                    <!-- logo start -->
                    <div class="col-md-1">
                        <div class="logo">
                            <router-link to="/">
                                <img src="/images/logo.png" class="img-fluid" alt="">
                            </router-link>
                                
                        </div>
                    </div>
                    <!-- logo end -->

                    <!-- search field start -->
                    <div class="col-md-5" style="position: relative;">
                        <div class="topbar-search">
                            <form action="">
                                <div class="form-group cat_block">
                                    <select name="" class="form-control" required>
                                        <option>All Categories</option>
                                        <option>Electronics & Home Appliance </option>
                                        <option>Women's Fashion</option>
                                        <option>Gadget Items </option>
                                        <option>Consumer Promotions </option>
                                        <option>Cooking Products </option>
                                        <option>Food Products </option>
                                        <option>Organic Fruits & Vegetables </option>
                                        <option>Health & Beauty </option>
                                        <option>Home & Cleaning </option>
                                        <option>Office & Stationary </option>
                                        <option>Medinice </option>
                                    </select>
                                </div>
                                <div class="form-group search_block">
                                    <input type="search" class="form-control" placeholder="Search..." required>
                                    <button type="submit" class="search-button">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- search field end -->

                    <!-- free shipping start -->
                    <div class="col-md-6 free-shipping-col" style="position: relative;">
                        <div class="free-shipping">
                            <div class="row">

                                <!-- free shipping start -->
                                <div class="col-md-12" style="position: relative;">
                                    <div class="cart_block">
                                        <ul>
                                            <li class="cart_box" v-if="this.$route.name != 'checkout'"  id="cart_box" @mouseover="cart_show" @mouseout="cart_hide">

                                                <!-- cart count start -->
                                                <div class="cart_count" v-if="this.cart_length > 0">
                                                    <p>{{ cart_length }}</p>
                                                </div>
                                                <!-- cart count end -->
                                                <i class="fas fa-shopping-basket"></i>

                                                <!-- cart item list -->
                                                <div class="cart_list" v-if="this.cart_length > 0" id="cart_list" ref="cart_list" @mouseover="cart_show" @mouseout="cart_hide">

                                                    <!-- cart empty start -->
                                                    <div id="cart_empty" v-if="cart_empty == true">
                                                        <img src="/images/cart_empty.png" width="200px" alt="">
                                                    </div>
                                                    <!-- cart empty end -->

                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr v-for="item in cart_product" :key="item.id">
                                                                <td>
                                                                    <img :src="item.image" width="50px" alt="">
                                                                </td>
                                                                <td>
                                                                    <router-link to="#" >{{ item.name }}</router-link>
                                                                    <p>{{ item.qty }} x {{ item.price }} USD</p>
                                                                </td>
                                                                <td>
                                                                    <button class="remove_cart" @click="removeCart(item.id)">
                                                                        <i class="fas fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <!-- cart detail -->
                                                    <div class="cart_detail">
                                                        <router-link to="/checkout" class="checkout" v-if="checkout == true">Checkout</router-link>
                                                    </div>
                                                    <!-- cart detail end-->

                                                </div>
                                                <!-- cart item list end -->

                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <!-- free shipping end -->

                            </div>
                        </div>
                    </div>
                    <!-- free shipping end -->

                </div>
            </div>

        </section>
        <!-- top logo section end -->

        <!-- snackbar start -->
        <div class="snackbar" ref="snackbar" v-if="snackbar == true" @click="closeSnackbar">
            {{ text }}
        </div>
        <!-- snackbar end -->

    </div>
</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
            cart_product: [],
            questions: [],
            cart_length: 0,
            cart_empty: "",
            checkout: "",
            snackbar: "",
            text: "",
            cartsample: {
                id: "",
                name: "",
                image: "",
                qty: "",
                price: "",
            },
        }
    },
    
    created(){

        let cart_add = JSON.parse(localStorage.getItem('cart')) || 0
        
        this.cart_product = cart_add
        this.cart_length = this.cart_product.length
        if( this.cart_product.length == 0 ){
            this.cart_empty = true
            this.checkout = false
        }else{
            this.cart_empty = false
            this.checkout = true
        }

        this.$root.$on('addToCart', (id) => {
        
            this.snackbar = true
            this.text = "Please wait"

            if( localStorage.getItem('token') ){
                axios.get(`http://127.0.0.1:8000/api/addtocart/${id}`)
                .then( res  => {

                        let cart = JSON.parse(localStorage.getItem('cart')) || [];

                        let exist = false

                        this.cartsample.id = res.data.product.id
                        this.cartsample.name = res.data.product.name
                        this.cartsample.image = res.data.product.image
                        this.cartsample.qty = 1
                        this.cartsample.price = res.data.product.offer_price ? res.data.product.offer_price : res.data.product.regular_price

                        cart.filter( (value, index) => {
                            if( value.id == res.data.product.id ){
                                cart[index].qty += 1;
                                exist = true
                            }
                        })
                        
                        if( exist == false ){
                            cart.push(this.cartsample)
                        }

                    localStorage.setItem('cart', JSON.stringify(cart))

                    let cart_add = JSON.parse(localStorage.getItem('cart'))
                    this.cart_product = cart_add

                    this.snackbar = true
                    this.text = "Product added to the cart"
                    this.cart_length = this.cart_product.length

                    if( this.cart_product.length == 0 ){
                        this.cart_empty = true
                        this.checkout = false
                    }else{
                        this.cart_empty = false
                        this.checkout = true
                    }
                    
                })
            }else{
                this.snackbar = true
                this.text = "PLease login first"
            } 
        })
        
        
    },
    mounted(){
        this.snackbar = false
    },
     methods: {
        
         closeSnackbar(){
               this.snackbar = false
          },
         cart_show(){
             if( this.cart_length > 0 ){
                 this.$refs['cart_list'].style.display = "block"
             }
            
         },
         cart_hide(){
             if( this.cart_length > 0 ){
                 this.$refs['cart_list'].style.display = "none"
             }
            
         },
         removeCart(id){
        
             let cart = JSON.parse(localStorage.getItem('cart'))
             cart.filter( (value, index) => {
                 if( value.id == id ){
                     cart.splice(index,1)
                     localStorage.setItem('cart', JSON.stringify(cart))

                    let cart_add = JSON.parse(localStorage.getItem('cart'))
                    this.cart_product = cart_add

                    this.snackbar = true
                    this.text = "Product removed from the cart"
                    this.cart_length = this.cart_product.length

                    if( this.cart_product.length == 0 ){
                        this.cart_empty = true
                        this.checkout = false
                    }else{
                        this.cart_empty = false
                        this.checkout = true
                    }
                 }
             })

         },

     },
     
}
</script>