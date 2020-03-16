<template>
    <div class="cart-wrapper">
        <div class="cart-header container">
            <i class="fas exist-ic fa-times"></i>
            <div class="cart-header-title">
                <h2 class="cart-header-title__h2">Your Cart</h2>
            </div>
            <button class="cart-header-btn" @click="reset()">
                Clear All
            </button>
        </div>
        <div class="content container">
            <Product v-for="product of allProducts"
                     v-bind:product="product"
            />
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
                    <p class="row-desc__p">${{this.$store.state.cart_total_price}}</p>
                </div>
                <div class="row-desc">
                    <p class="row-desc__p">Estimates Tax</p>
                    <p class="row-desc__p">${{this.$store.state.tax}}</p>
                </div>
                <hr class="line-hr">
                <div class="row-desc-total">
                    <p class="row-desc-total__p">Total</p>
                    <p class="row-desc-total__p">${{this.$store.state.cart_total_price_with_tax}}</p>
                </div>
                <div class="footer-bootom">
                    <div class="footer-ask">
                        <p class="footer-ask__p">
                            Questions? <a href="tel:(771)8431730" class="blue">(771)843-1730</a>
                        </p>
                    </div>
                    <div class="footer-btn">
                        <button v-bind:class="{ activeBtn: this.$store.state.isActive }" class="footer-btn__btn">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Product from "../components/Product";
    import {mapActions} from 'vuex'
    export default {
        name: "cart",
        computed:{
            allProducts(){
                return this.$store.getters.allProducts;
            }
        },
        components: {
            Product
        },
        methods:{
            ...mapActions([
                'RESET'
            ]),
            reset(){
                this.RESET();
            }
        }
    }
</script>

<style scoped>

</style>