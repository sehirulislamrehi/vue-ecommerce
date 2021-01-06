<template>
  <div id="app">
  
    <!-- all pages are here -->
    <router-view></router-view>
    <!-- all pages are here -->

    <!-- footer start -->
    <Footer />
    <!-- footer end -->

  </div>
</template>

<script>

import Footer from "./components/include/footerComponent";


export default {
  components: {
    Footer,
  },
  methods: {
    
  }
   
};
</script>

