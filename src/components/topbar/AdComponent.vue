<template>
          <section class="ad-section" id="ad-section" model="adSection" style="background-image: url(images/ad.jpg)" >
               <i class="fas fa-times close-ad" onclick="closeAd()" ></i>
               <a href="index.html" class="ad-shop-btn">Shop Now</a>
          </section>
</template>
<script>
export default {
     data:()=>({
          adSection: true,
     }),
     methods:{
          
     }
}
</script>