<template>
          <section class="ad-section" id="ad-section" model="adSection" ref="ad-section" style="background-image: url(/images/ad.jpg)" >
               <i class="fas fa-times close-ad" @click="closeAd" ></i>
               <router-link to="" class="ad-shop-btn">Shop Now</router-link>
          </section>
</template>
<script>
export default {
     data:()=>({
          adSection: true,
     }),
     methods:{
          closeAd(){
               this.$refs['ad-section'].remove()
          }
     }
}
</script>