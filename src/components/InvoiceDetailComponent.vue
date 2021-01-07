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

          <section class="invoice-detail" style="padding: 30px 0">
               <div class="container">

                    <div class="row">
                         <div class="col-md-12">
                              <h3>Invoice No : #12</h3>
                         </div>
                    </div>

                    <div class="row">
                         <div class="col-md-12 table-responsive">
                              <table class="table table-striped">
                                   <thead>
                                   <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Total</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                        <tr v-for="(item, index) in product" :key="item.id">
                                             
                                            <td>
                                                 <img :src="item.image" width="32px" alt="">
                                            </td>
                                             <td>{{ item.name }}</td>
                                             <td>
                                                 {{order[index].qty}}
                                             </td>
                                             <td >
                                                 {{order[index].price}}
                                             </td>
                                             <td >
                                                  {{order[index].total}}
                                             </td>
                                        </tr>
                                   </tbody>
                              </table>
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
               order: [],
          }
     },
     created(){
          let id = this.$route.params.id
          axios.get(`http://127.0.0.1:8000/api/profile/invoice/${id}`)
          .then( res => {
               this.product = res.data.product
               this.order = res.data.order
               console.log(res.data)
          })
          .catch( err => {
               console.log(err.response)
          })
     }
}
</script>