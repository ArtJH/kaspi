<template>
    <div class="product-wrapper">
       <div class="productLeft">
           <img class="productLeft-img" src="../assets/img/product.png" alt="">
       </div>
        <div class="productRight">
            <p class="productRight-title">{{product.title}}</p>
            <p class="productRight-desc">{{product.desc}}</p>
            <div class="productFooter">
                <div class="productFooter-counter">
                    <i class="fas btn-counter fa-minus" @click="decrease(product.id)"></i>
                    <p class="productFooter-number">{{product.number}}</p>
                    <i class="fas btn-counter fa-plus" @click="increase(product.id)"></i>
                </div>
                <div class="productFooter-price">
                    <p class="productFooter-price__p">${{product.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Product",
        data(){
            return{

            }
        },
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        methods:{
            ...mapActions([
                'DECREASE',
                'INCREASE',
                'COUNT',
                'COUNT_TOTAL'
            ]),
            decrease(id){
                this.DECREASE(id);
                this.COUNT(id);
                this.COUNT_TOTAL();
            },
            increase(id){
                this.INCREASE(id);
                this.COUNT(id);
                this.COUNT_TOTAL();
            }

        }
    }
</script>

<style scoped>

</style>