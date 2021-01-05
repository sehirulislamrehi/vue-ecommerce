<template>
    <div id="app">

        <div class="side_bar_mob" id="side_bar_mob" ref="side_bar_mob">
            <!-- close div start -->
            <div class="close_sidebar">
                <p id="go_back" @click="hideNav"> <i class="fas fa-arrow-left"></i> Back</p>
            </div>
            <!-- close div end -->

            <!-- nav bar list start -->
            <div class="nav-list-mob">

                <!-- dropdown nav start -->
                <div class="nav-dropdown" v-for="item in category" :key="item.id">
                    <router-link :to='{
                                path: "/category/:name",
                                name: "category",
                                params: {
                                    name: item.slug
                                }

                        }'>
                        <p class="nav-click" id="nav-item-mob-1"> <i class="fas fa-shopping-bag"></i> 
                        {{ item.name }} 
                        <i class="fas fa-angle-right"></i> </p>
                    </router-link>
                </div>
                <!-- dropdown nav end -->

            </div>
            <!-- nav bar list end -->
        </div>

        <section class="search-mob">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-1" style="position: relative">
                        <div class="left" id="show_sidebar" @click="showNav">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                    <div class="col-11">
                        <div class="right">
                            <form action="">
                                <div class="form-group cat_block">
                                    <select name="" class="form-control" required="">
                                        <option>All Categories</option>
                                        <option v-for="item in category" :key="item.id">{{ item.name }}</option>
                                    </select>
                                </div>
                                <div class="form-group search_block">
                                    <input type="search" class="form-control" required="" placeholder="Search...">
                                </div>
                                <button type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
               axios.get("http://127.0.0.1:8000/api/category/",{})
               .then( res => {
                    this.category = res.data.category.data
               })
          },
        showNav(){
            this.$refs['side_bar_mob'].style.transform = "translateX(0)"
            document.getElementsByTagName("BODY")[0].style.overflow = "hidden"
        },
        hideNav(){
            this.$refs['side_bar_mob'].style.transform = "translateX(-100%)"
            document.getElementsByTagName("BODY")[0].style.overflow = "auto"
        }
    }
}
</script>