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

          <section class="profile-section">
               <div class="container">

                    <div class="row">
                         <div class="col-md-1">
                              <img src="images/user.png" class="img-fluid" alt="">
                         </div>
                         <div class="col-md-11">
                              <h4>Sehirul Islam Rehi</h4>
                              <p style="margin:10px 0">mdsehirulislamrehi@gmail.com</p>
                              <button @click="logout">Logout</button>
                         </div>
                    </div>

                    <!-- previous order history -->
                    <div class="row" style="margin-top:30px;">
                         <div class="col-md-12">
                              <h4>Previous order history</h4>
                         </div>
                         <div class="col-md-12 table-responsive">
                              <table class="table table-striped">
                                   <thead>
                                   <tr>
                                        <th scope="col">#Invoice No</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Paid By</th>
                                        <th scope="col">Is payment done?</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   <tr v-for="item in invoice" :key="item.id">
                                        <th scope="row">#{{ item.id }}</th>
                                        <td>{{ item.status }}</td>
                                        <td>
                                             {{ item.paid_by }}
                                        </td>
                                        <td v-if="item.is_payment_done == 0">
                                             No
                                        </td>
                                        <td v-if="item.is_payment_done == 1">
                                             Yes
                                        </td>
                                        <td>
                                             {{ item.total }}
                                        </td>
                                        <td>
                                             {{ item.created_at }}
                                        </td>
                                        <td>
                                             <router-link :to='{
                                                  path: "/invoice-detail/:id",
                                                  name: "invoice-detail",
                                                  params: {
                                                       id: item.id
                                                  }
                                             }'>
                                                  <button>View</button>
                                             </router-link>
                                             <button @click="deleteInvoice(item.id)">Delete Invoice</button>
                                        </td>
                                   </tr>
                                   </tbody>
                              </table>
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
               snackbar: "",
               text: "",
               invoice: [],
          }
     }, 
     created(){
          let token = localStorage.getItem('token')
          axios.get(`http://127.0.0.1:8000/api/profile/order/${token}`,)
          .then( res => {
               this.invoice = res.data.invoice
          })
          .catch( err => {
               console.log(err.response)
          })
     },
     mounted(){
        this.snackbar = false
        if( localStorage.getItem('orderSuccess') ){
               
               this.snackbar = true
               this.text = "Order placed successfully"
          }
    },
     
     
     methods: {
          closeSnackbar(){
               this.snackbar = false
               localStorage.removeItem('orderSuccess')
          },
          logout(){
               localStorage.removeItem('token')
               this.$router
               .push("/login")
               .then()
          },
          deleteInvoice(id){
               this.snackbar = false
               this.text = "Please wait"
               axios.get(`http://127.0.0.1:8000/api/invoice/delete/${id}`)
               .then((res) => {
                    this.invoice.filter((value, index) => {
                         if( res.data.invoice ){
                              if( value.id == id ){
                                   this.invoice.splice(index, 1)
                                   this.snackbar = false
                                   this.text = "Invoice removed successfully"
                              }
                         }
                    })
               })
               .catch( () => {
                    this.snackbar = false
                    this.text = "Something went wrong"
               })
          }
     }
}
</script>