<template>
     <div id="app">
          <section class="checkout-section">
               <div class="container">

                    <!-- cart product start -->
                    <div class="row">
                         <div class="col-md-8 table-responsive">
                              <table class="table table-striped">
                                   <thead>
                                   <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   <tr>
                                        <td>
                                             <img src="images/product-1.jpg" width="32px" alt="">
                                        </td>
                                        <td>6 Blade USB Rechargeable Portable Mini Juicer-Blue</td>
                                        <td>
                                             <button @click="minus">-</button>
                                             <input type="number" v-model="quantity" readonly>
                                             <button @click="plus">+</button>
                                        </td>
                                        <td>
                                             100 BDT
                                        </td>
                                   </tr>
                                   </tbody>
                              </table>
                         </div>

                         <!-- order summary start -->
                         <div class="col-md-4">
                              <div class="order-summary">
                                   <h4>Order Summary</h4>
                                   <p>Delivery Charge 50 BDT</p>
                                   <p>Total: <span>1000BDT</span> </p>
                                   <button>Place Order</button>
                              </div>
                         </div>
                    </div>
                    <!-- cart product end -->

               </div>
          </section>
     </div>
</template>

<script>
export default {
     
     data(){
          return{
               quantity: 1,
          }
     },
     methods: {
          plus(){
               this.quantity+= 1
          },
          minus(){
               if(this.quantity != 1){
                    this.quantity-= 1
               }
          }
     }
     
}
</script>