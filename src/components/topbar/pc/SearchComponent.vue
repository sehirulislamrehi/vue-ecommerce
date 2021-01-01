<template>
<!-- top logo section start -->
        <section class="top-logo">
            <div class="container-fluid">
                <div class="row">

                    <!-- logo start -->
                    <div class="col-md-1">
                        <div class="logo">
                            <router-link to="/">
                                <img src="/images/logo.png" class="img-fluid" alt="">
                            </router-link>
                                
                        </div>
                    </div>
                    <!-- logo end -->

                    <!-- search field start -->
                    <div class="col-md-5" style="position: relative;">
                        <div class="topbar-search">
                            <form action="">
                                <div class="form-group cat_block">
                                    <select name="" class="form-control" required>
                                        <option>All Categories</option>
                                        <option>Electronics & Home Appliance </option>
                                        <option>Women's Fashion</option>
                                        <option>Gadget Items </option>
                                        <option>Consumer Promotions </option>
                                        <option>Cooking Products </option>
                                        <option>Food Products </option>
                                        <option>Organic Fruits & Vegetables </option>
                                        <option>Health & Beauty </option>
                                        <option>Home & Cleaning </option>
                                        <option>Office & Stationary </option>
                                        <option>Medinice </option>
                                    </select>
                                </div>
                                <div class="form-group search_block">
                                    <input type="search" class="form-control" placeholder="Search..." required>
                                    <button type="submit" class="search-button">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- search field end -->

                    <!-- free shipping start -->
                    <div class="col-md-6 free-shipping-col" style="position: relative;">
                        <div class="free-shipping">
                            <div class="row">

                                <!-- free shipping start -->
                                <div class="col-md-12" style="position: relative;">
                                    <div class="cart_block">
                                        <ul>
                                            <li class="cart_box" id="cart_box" @mouseover="cart_show" @mouseout="cart_hide">
                                                <!-- cart count start -->
                                                <div class="cart_count">
                                                    <p>5</p>
                                                </div>
                                                <!-- cart count end -->
                                                <i class="fas fa-shopping-basket"></i>

                                                <!-- cart item list -->
                                                <div class="cart_list" id="cart_list" ref="cart_list" @mouseover="cart_show" @mouseout="cart_hide">
                                                    <table class="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <img src="images/product-1.jpg" width="50px" alt="">
                                                                </td>
                                                                <td>
                                                                    <router-link to="#">Asparagus - 1 kg / Green</router-link>
                                                                    <p>1 x $229.00 USD</p>
                                                                </td>
                                                                <td>
                                                                    <button class="remove_cart">
                                                                        <i class="fas fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <img src="images/product-1.jpg" width="50px" alt="">
                                                                </td>
                                                                <td>
                                                                    <router-link to="#">Asparagus - 1 kg / Green</router-link>
                                                                    <p>1 x $229.00 USD</p>
                                                                </td>
                                                                <td>
                                                                    <button class="remove_cart">
                                                                        <i class="fas fa-times"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <!-- cart detail -->
                                                    <div class="cart_detail">
                                                        <p class="text-center">Cart Total <span>1000 BDT</span> </p>
                                                        <router-link to="checkout" class="checkout">Checkout</router-link>
                                                    </div>
                                                    <!-- cart detail end-->

                                                </div>
                                                <!-- cart item list end -->

                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <!-- free shipping end -->

                            </div>
                        </div>
                    </div>
                    <!-- free shipping end -->

                </div>
            </div>
        </section>
        <!-- top logo section end -->
</template>

<script>
export default {
     methods: {
         cart_show(){
            this.$refs['cart_list'].style.display = "block"
         },
         cart_hide(){
            this.$refs['cart_list'].style.display = "none"
         }
     }
}
</script>