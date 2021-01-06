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

          
          <section class="auth-section">
               <div class="container">
                    <div class="row">
                         <div class="auth-box">
  
                              <div class="col-md-4 offset-md-4 col-12">
                                   <h4>Register Here</h4>
                                   <form action="" method="">
                                        <div class="form-group" style="position: relative; margin-top: 20px">
                                             <label>Name</label>
                                             <input type="name" class="form-control" placeholder="Enter your fullname" v-model="name" required>
                                             <small v-if="errors.name" class="text-red">{{ errors.name[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px">
                                             <label>Email</label>
                                             <input type="email" class="form-control" placeholder="Enter your email address" v-model="email" required>
                                             <small v-if="errors.email" class="text-red">{{ errors.email[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px">
                                             <label>Password</label>
                                             <input type="password" class="form-control" placeholder="Enter your password" v-model="password" required>
                                             <small v-if="errors.password" class="text-red">{{ errors.password[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px">
                                             <label>Re-type Password</label>
                                             <input type="password" class="form-control" placeholder="Enter your password again" v-model="password_confirmation" required>
                                             <small v-if="errors.password_confirmation" class="text-red">{{ errors.password_confirmation[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px"> 
                                             <button type="button" @click="registration" class="auth-submit">
                                                  <div class="spinner-border" role="status" ref="spinner-border">
                                                       <span class="sr-only">Loading...</span>
                                                  </div>
                                                  Register
                                             </button>
                                             
                                        </div>
                                   </form>
                              </div>

                              <div class="col-md-4 offset-md-4 col-12">
                                   <p>Already registered? Go to <router-link to="login">login</router-link> page</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

          <!-- snackbar start -->
          <div class="snackbar" ref="snackbar" @click="closeSnackbar">
               
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
               name: "",
               email: "",
               password: "",
               password_confirmation: "",
               errors: [],
          }
     },
      mounted(){
           this.$refs['snackbar'].style.display = "none"
           this.$refs['spinner-border'].style.display = "none"
     },
     methods: {
          closeSnackbar(){
               this.$refs['snackbar'].style.display = "none"
          },
          registration(){
               this.$refs['spinner-border'].style.display = "inline-block"
               this.errors = []
               let form = new FormData();
               form.append("name", this.name)
               form.append("email", this.email)
               form.append("password", this.password)
               form.append("password_confirmation", this.password_confirmation)
               axios.post("http://127.0.0.1:8000/api/visitor/registration",form)
               .then(res => {
                    if( res.data.visitor ){
                         this.$refs['snackbar'].style.display = "block"
                         this.$refs['snackbar'].innerHTML = "Registration successfull done"
                         this.$refs['spinner-border'].style.display = "none"
                    }
               })
               .catch ( err => {
                    this.$refs['spinner-border'].style.display = "none"
                    let singleError = err.response.data.error
                    this.errors = {...singleError}
               })
          }
     }
}
</script>