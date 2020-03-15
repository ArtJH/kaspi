<template>
    <div class="product-wrapper">
       <div class="productLeft">
           <img class="productLeft-img" src="../assets/img/product.png" alt="">
       </div>
        <div class="productRight">
            <p class="productRight-title">Название продукта</p>
            <p class="productRight-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div class="productFooter">
                <div class="productFooter-counter">
                    <i class="fas btn-counter fa-minus"></i>
<!--                    <button class="btn-counter">-</button>-->
                    <p class="productFooter-number">1</p>
<!--                    <button class="btn-counter">+</button>-->
                    <i class="fas btn-counter fa-plus"></i>
                </div>
                <div class="productFooter-price">
                    <p class="productFooter-price__p">$390.50</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product"
    }
</script>

<style scoped>

</style>