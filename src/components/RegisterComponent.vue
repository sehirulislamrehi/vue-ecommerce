<template>
     <div id="app">
          <section class="auth-section">
               <div class="container">
                    <div class="row">
                         <div class="auth-box">
                              <div class="col-md-4 offset-md-4 col-12">
                                   <h4>Register Here</h4>
                                   <form action="" method="">
                                        <div class="form-group">
                                             <label>Email</label>
                                             <input type="email" class="form-control" placeholder="Enter you email address" required>
                                        </div>
                                        <div class="form-group">
                                             <label>Password</label>
                                             <input type="password" class="form-control" placeholder="Enter you password" required>
                                        </div>
                                        <div class="form-group">
                                             <label>Re-type Password</label>
                                             <input type="password" class="form-control" placeholder="Enter you password again" required>
                                        </div>
                                        <div class="form-group"> 
                                             <button type="button" class="auth-submit">Register</button>
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
     </div>
</template>

<script>
export default {
     
}
</script>