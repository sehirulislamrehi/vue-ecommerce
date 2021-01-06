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

          <section class="checkout-section">
               <div class="container">

                    <!-- cart product start -->
                    <div class="row">
                         <div class="col-md-9 table-responsive">
                              <table class="table table-striped">
                                   <thead>
                                   <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   <tr v-for="item in cart_product" :key="item.id">
                                        <td>
                                             <img :src="item.image" width="32px" alt="">
                                        </td>
                                        <td>{{ item.name }}</td>
                                        <td>
                                             <button @click="minus">-</button>
                                             <input type="number" class="quantity" v-model="quantity" readonly>
                                             <button @click="plus">+</button>
                                        </td>
                                        <td>
                                             {{item.price}} BDT
                                        </td>
                                        <td>
                                             <button @click="removeCart(item.id)">Remove Cart</button>
                                        </td>
                                   </tr>
                                   </tbody>
                              </table>
                         </div>

                         <!-- order summary start -->
                         <div class="col-md-3">
                              <div class="order-summary">
                                   <h4>Order Summary</h4>
                                   <p>Delivery Charge {{ delivery_charge }} BDT</p>
                                   <p>Total: <span>{{total}} BDT</span> </p>
                                   <button>Place Order</button>
                              </div>
                         </div>
                    </div>
                    <!-- cart product end -->

               </div>
          </section>

          <!-- snackbar start -->
        <div class="snackbar" ref="snackbar" @click="closeSnackbar">
            
        </div>
        <!-- snackbar end -->


     </div>
</template>

<script>

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
               quantity: '',
               total: 0,
               delivery_charge: 50,
               cart_product: [],
          }
     },
     created(){
        this.cart()
     },
     mounted(){
          this.$refs['snackbar'].style.display = "none"
     },
     methods: {
          closeSnackbar(){
               this.$refs['snackbar'].style.display = "none"
          },
          cart(){
               let cart = JSON.parse(localStorage.getItem('cart'))
               this.cart_product = cart
               this.total = this.delivery_charge
               for( let x in cart){
                    this.quantity = cart[x].qty
                    this.total += cart[x].price * cart[x].qty
               }
          }, 
          plus(){
               this.$refs['quantity'].value = 0
          },
          minus(){
               if(this.$refs['quantity'] != 1){
                    this.$refs['quantity']+= 1
               }
          },
          removeCart(id){
               let cart = JSON.parse(localStorage.getItem('cart'))
               cart.filter( (value, index) => {
                    if( value.id == id ){
                         this.total -= cart[index].price * cart[index].qty
                         
                         cart.splice(index,1)
                         localStorage.setItem('cart', JSON.stringify(cart))

                         let cart_add = JSON.parse(localStorage.getItem('cart'))
                         this.cart_product = cart_add

                         this.$refs['snackbar'].style.display = "block"
                         this.$refs['snackbar'].innerHTML = "Product removed from the cart"
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