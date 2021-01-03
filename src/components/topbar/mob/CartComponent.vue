<template>
    <div id="app">
        <section class="cart-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <router-link to="/">
                            <img src="/images/logo.png" class="img-fluid" width="60px" alt="">
                        </router-link>
                    </div>
                    <div class="col-8">
                        <ul>
                            <li>
                                <a href="">
                                    <i class="far fa-heart"></i>
                                </a>
                            </li>
                            <li class="cart_box" id="cart_box" @mouseover="cartListMobShow()" @mouseout="cartListMobHide()">
                                <!-- cart count start -->
                                <div class="cart_count">
                                    <p>5</p>
                                </div>
                                <!-- cart count end -->
                                <i class="fas fa-shopping-basket"></i>

                                <!-- cart list mob start -->
                                <div class="cart_list_mob" id="cart_list_mob" ref="cart_list_mob" @mouseover="cartListMobShow()" @mouseout="cartListMobHide()">
                                    <table class="table table-striped">
                                        <thead>
                                        </thead><tbody>
                                            <tr>
                                                <td>
                                                    <img src="images/product-1.jpg" width="50px" alt="">
                                                </td>
                                                <td>
                                                    <a href="#">Asparagus - 1 kg / Green</a>
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
                                                    <a href="#">Asparagus - 1 kg / Green</a>
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
                                        <a href="" class="checkout">Checkout</a>
                                        <a href="" class="cart_view">Cart View</a>
                                    </div>
                                    <!-- cart detail end-->

                                </div>
                                <!-- cart list mob end -->
                            </li>
                            <li>
                                <a href="">
                                    <i class="fas fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        cartListMobShow(){
           this.$refs['cart_list_mob'].style.display = "block"
        },
        cartListMobHide(){
            this.$refs['cart_list_mob'].style.display = "none"
        }
    }
}
</script>