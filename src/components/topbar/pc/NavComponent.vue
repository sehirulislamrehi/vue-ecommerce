<template>
     <div id="app">
          <!-- top navbar start -->
        <section class="top-navbar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="nav-item-list">
                            <ul>
                                <li v-for="item in category" :key="item.id"> 
                                    <router-link :to='{
                                         name: "category",
                                         params: {
                                              name: item.slug
                                         }

                                    }'>{{ item.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- top navbar end -->
     </div>
</template>

<script>
import axios from "axios"
export default {
     data(){
          return{
               category: [],
          }
     },
     
     created(){
          this.initialize()
     },
     methods: {
          initialize(){
               axios.get("https://vuebackend.sehirulislamrehi.com/api/category",{})
               .then( res => {
                    this.category = res.data.category.data
               })
          }
     },
}
</script>