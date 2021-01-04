<template>
     <div id="app">
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
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   <tr>
                                        <th scope="row">1</th>
                                        <td>
                                             <img src="images/product-1.jpg" width="32px" alt="">
                                        </td>
                                        <td>6 Blade USB Rechargeable Portable Mini Juicer-Blue</td>
                                        <td>
                                             <p class="badge badge-success">Delivered</p>
                                        </td>
                                        <td>
                                             12/01/2021
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
export default {
     data(){
          return{

          }
     }, 
     methods: {
          logout(){
               localStorage.removeItem('token')
               this.$router
               .push("/login")
               .then()
          }
     }
}
</script>