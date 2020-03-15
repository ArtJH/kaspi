<template>
    <div class="cart-wrapper">
        <div class="cart-header container">
            <i class="fas exist-ic fa-times"></i>
            <div class="cart-header-title">
                <h2 class="cart-header-title__h2">Your Cart</h2>
            </div>
            <button class="cart-header-btn">
                Clear All
            </button>
        </div>
        <div class="content container">
            <Product/>
            <Product/>
            <div class="miniDesc">
                <p class="miniDesc-p">Lorem Ipsum is simply dummy text of the printing and typesetting indu</p>
                <p class="miniDesc-p">Lorem Ipsum is simply dummy text of the printing and typesetting indu 1-4 days</p>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-footer-wrapper container">
                <div class="row-desc">
                    <p class="row-desc__p">Subtotal</p>
                    <p class="row-desc__p">$495.49</p>
                </div>
                <div class="row-desc">
                    <p class="row-desc__p">Estimates Tax</p>
                    <p class="row-desc__p">$10.87</p>
                </div>
                <hr class="line-hr">
                <div class="row-desc-total">
                    <p class="row-desc-total__p">Total</p>
                    <p class="row-desc-total__p">$506.36</p>
                </div>
                <div class="footer-bootom">
                    <div class="footer-ask">
                        <p class="footer-ask__p">
                            Questions? <a href="tel:(771)8431730" class="blue">(771)843-1730</a>
                        </p>
                    </div>
                    <div class="footer-btn">
                        <button class="footer-btn__btn">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Product from "../components/Product";
    export default {
        name: "cart",
        components: {
            Product
        }
    }
</script>

<style scoped>

</style>