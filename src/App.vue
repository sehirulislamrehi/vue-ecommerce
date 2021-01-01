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

      <!-- navbar start -->
      <NavPc />
      <!-- navbar end -->

    </div>
    <!-- for pc end -->

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
import Info from "./components/topbar/pc/InfoComponent";
import SearchPc from "./components/topbar/pc/SearchComponent";
import NavPc from "./components/topbar/pc/NavComponent";
import Footer from "./components/include/footerComponent"

export default {
  components: {
    Ad,
    Info,
    SearchPc,
    NavPc,
    Footer,
  },
};
</script>

