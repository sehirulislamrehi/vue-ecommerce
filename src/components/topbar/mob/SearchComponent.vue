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
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-1"> <i class="fas fa-shopping-bag"></i> Electronics &amp; Home
                        Appliance <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-1">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-2"> <i class="fas fa-shopping-bag"></i> Women's Fashion <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-2">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-3"> <i class="fas fa-shopping-bag"></i> Gadget Items <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-3">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-4"> <i class="fas fa-shopping-bag"></i> Consumer Promotions <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-4">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-5"> <i class="fas fa-shopping-bag"></i> Cooking Products <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-5">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-6"> <i class="fas fa-shopping-bag"></i> Food Products <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-6">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-7"> <i class="fas fa-shopping-bag"></i> Organic Fruits &amp;
                        Vegetables <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-7">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-8"> <i class="fas fa-shopping-bag"></i> Health &amp; Beauty <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-8">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-9"> <i class="fas fa-shopping-bag"></i> Home &amp; Cleaning <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-9">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-10"> <i class="fas fa-shopping-bag"></i> Office &amp; Stationary
                        <i class="fas fa-angle-right"></i>
                    </p>
                    <div class="nav-dropdown-child nav-item-mob-10">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- dropdown nav end -->
                <!-- dropdown nav start -->
                <div class="nav-dropdown">
                    <p class="nav-click" id="nav-item-mob-11"> <i class="fas fa-shopping-bag"></i> Medinice <i class="fas fa-angle-right"></i> </p>
                    <div class="nav-dropdown-child nav-item-mob-11">
                        <ul>
                            <li>
                                <a href="">Item One</a>
                            </li>
                            <li>
                                <a href="">Item Two</a>
                            </li>
                        </ul>
                    </div>
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
                                        <option>Electronics &amp; Home Appliance </option>
                                        <option>Women's Fashion</option>
                                        <option>Gadget Items </option>
                                        <option>Consumer Promotions </option>
                                        <option>Cooking Products </option>
                                        <option>Food Products </option>
                                        <option>Organic Fruits &amp; Vegetables </option>
                                        <option>Health &amp; Beauty </option>
                                        <option>Home &amp; Cleaning </option>
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
export default {
    methods: {
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