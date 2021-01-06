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
                                   <h4>Login Here</h4>
                                   <form action="" method="">
                                        <div class="form-group" style="position: relative; margin-top: 20px;">
                                             <label>Email</label>
                                             <input type="email" class="form-control" v-model="email" placeholder="Enter your email address" required>
                                             <small v-if="errors.email" class="text-red">{{ errors.email[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px;">
                                             <label>Password</label>
                                             <input type="password" class="form-control" v-model="password" placeholder="Enter your password" required>
                                             <small v-if="errors.password" class="text-red">{{ errors.password[0] }}</small>
                                        </div>
                                        <div class="form-group" style="position: relative; margin-top: 20px;"> 
                                             <button type="button" class="auth-submit" @click="doLogin" >
                                                  <div class="spinner-border" role="status" ref="spinner-border">
                                                       <span class="sr-only">Loading...</span>
                                                  </div>
                                                  Login
                                             </button>
                                        </div>
                                   </form>
                              </div>

                              <div class="col-md-4 offset-md-4 col-12">
                                   <p>Not registered yet? Go to <router-link to="register">register</router-link> page</p>
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
               email: "",
               password: "",
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
          doLogin(){
               this.errors = []
               this.$refs['spinner-border'].style.display = "inline-block"
               let form = new FormData()
               form.append('email', this.email)
               form.append('password', this.password)
               axios.post("http://127.0.0.1:8000/api/visitor/signin", form)
               .then( res =>  {
                    if( res.data.invalid ){
                         this.$refs['snackbar'].style.display = "block"
                         this.$refs['snackbar'].innerHTML = res.data.invalid
                         this.$refs['spinner-border'].style.display = "none"
                    }
                    
                    if( res.data.token ){
                         localStorage.setItem('token', res.data.token)
                         this.$router
                         .push("/profile")
                         .then()
                    }
               })
               .catch( error => {
                    
                    
                    
                    this.$refs['spinner-border'].style.display = "none"
                    let singleError = error.response.data.error
                    this.errors = {...singleError}
               })
          }
     }
}
</script>