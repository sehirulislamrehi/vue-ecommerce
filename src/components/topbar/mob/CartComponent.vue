<template>
    <div id="app">
        <section class="cart-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <router-link to="/">
                            <img src="/images/logo.png" class="img-fluid" width="60px" alt="">
                        </router-link>
                    </div>
                    <div class="col-8">
                        <ul>
                            <li class="cart_box" id="cart_box" v-if="this.$route.name != 'checkout' " @mouseover="cartListMobShow()" @mouseout="cartListMobHide()">
                                <!-- cart count start -->
                                <div class="cart_count">
                                    <p>{{ cart_length }}</p>
                                </div>
                                <!-- cart count end -->
                                <i class="fas fa-shopping-basket"></i>

                                <!-- cart list mob start -->
                                <div class="cart_list_mob" id="cart_list_mob" ref="cart_list_mob" @mouseover="cartListMobShow()" @mouseout="cartListMobHide()">

                                    <!-- cart empty start -->
                                    <div id="cart_empty" v-if="cart_empty == true">
                                        <img src="/images/cart_empty.png" width="200px" alt="">
                                    </div>
                                    <!-- cart empty end -->

                                    <table class="table table-striped">
                                        <thead>
                                        </thead><tbody>
                                            <tr v-for="(item, index) in cart_product" :key="index">
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
                                <!-- cart list mob end -->
                            </li>
                            <li>
                                <router-link to="/profile">
                                        <i class="fas fa-user"></i>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- snackbar start -->
        <div class="snackbar" ref="snackbar" v-if="snackbar == true" @click="closeSnackbar">
            {{ text }}
        </div>
        <!-- snackbar end -->


    </div>
</template>

<script>

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

        
    
    },
    mounted(){
        this.snackbar = false

        this.$root.$on('addToCart', () => {
    
                if( localStorage.getItem('token') ){
                    this.snackbar = true
                    this.text = "Product added to the cart"
                }else{
                     this.snackbar = true
                    this.text = "Please login first"
                }
        })
        
    },
    methods: {
        closeSnackbar(){
               this.snackbar = false
          },
        cartListMobShow(){
           this.$refs['cart_list_mob'].style.display = "block"
           let cart_add = JSON.parse(localStorage.getItem('cart')) 
                    this.cart_product = cart_add
                    this.cart_length = this.cart_product.length

                    if( this.cart_product.length == 0 ){
                        this.cart_empty = true
                        this.checkout = false
                    }else{
                        this.cart_empty = false
                        this.checkout = true
                    }
        },
        cartListMobHide(){
            this.$refs['cart_list_mob'].style.display = "none"
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

         }
    }
}
</script>