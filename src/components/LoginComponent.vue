<template>
     <div id="app">
          <section class="auth-section">
               <div class="container">
                    <div class="row">
                         <div class="auth-box">
                              <div class="col-md-4 offset-md-4 col-12">
                                   <h4>Login Here</h4>
                                   <form action="" method="">
                                        <div class="form-group">
                                             <label>Email</label>
                                             <input type="email" class="form-control" placeholder="Enter your email address" required>
                                        </div>
                                        <div class="form-group">
                                             <label>Password</label>
                                             <input type="password" class="form-control" placeholder="Enter your password" required>
                                        </div>
                                        <div class="form-group"> 
                                             <button type="button" class="auth-submit">Login</button>
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
     </div>
</template>

<script>
export default {
     
}
</script>