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

    <!-- all pages are here -->
    <router-view></router-view>
    <!-- all pages are here -->

    <!-- footer start -->
    <Footer />
    <!-- footer end -->

  </div>
</template>

<script>

import Ad from "./components/topbar/AdComponent";

//for pc start
import Info from "./components/topbar/pc/InfoComponent";
import SearchPc from "./components/topbar/pc/SearchComponent";
import Footer from "./components/include/footerComponent";
//for pc end

//for mob start
import Sidebar from "./components/topbar/mob/SidebarComponent";
import Search from "./components/topbar/mob/SearchComponent";
import Cart from "./components/topbar/mob/CartComponent"
//for mob end



export default {
  components: {
    Ad,
    Info,
    SearchPc,
    Sidebar,
    Search,
    Cart,
    Footer,
  },
   
};
</script>

