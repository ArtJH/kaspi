import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/products";
Vue.use(Vuex)

export default new Vuex.Store({
    actions:{
        RESET({commit}){  //Очистить все
            commit('RESET_FORM');
        },
        DECREASE({commit}, index){ //уменьшение количества товара
            commit('DECREASE_NUMBER', index);
        },
        INCREASE({commit}, index){ //увеличение количества товара
            commit('INCREASE_NUMBER', index);
        },
        COUNT({commit},index){ //считает общую цену одного вида товара
            commit('COUNT_PRICE', index);
        },
        COUNT_TOTAL({commit}){ //считает общую цену с налогом и со всеми товарами
            commit('COUNT_TOTAL_PRICE');
        }
    },
    mutations: {
        RESET_FORM(state){ //Очистить все к 0
            for (let index = 0; index < state.products.length; ++index) {
                state.products[index].totalPrice = 0;
                state.products[index].number = 0;
            }
            state.cart_total_price_with_tax = 0;
            state.cart_total_price = 0;
        },
        DECREASE_NUMBER (state, index) { //уменьшение количества товара
            if(state.products[index].number<=0){
                state.products[index].number = 0;
            }else{
                state.products[index].number--;
            }
        },
        INCREASE_NUMBER(state, index) { //увеличение количества товара
            state.products[index].number++;
        },
        COUNT_PRICE(state, index){ //считает общую цену одного вида товара
            state.products[index].totalPrice =  state.products[index].price * state.products[index].number;
        },
        COUNT_TOTAL_PRICE(state){ //считает общую цену с налогом и со всеми товарами
            state.cart_total_price = 0;
            for (let index = 0; index < state.products.length; ++index) {
                state.cart_total_price +=  state.products[index].totalPrice; //общая цена всех товаров без налога
            }
            state.cart_total_price_with_tax = state.tax + state.cart_total_price; //общая цена с налогом и товарами
            if(state.cart_total_price_with_tax > 5000){
                state.isActive = false;
            } else{
                state.isActive = true;
            }

            //Округление до 2-ой дроби
            state.cart_total_price = state.cart_total_price.toFixed(2);
            state.cart_total_price_with_tax = state.cart_total_price_with_tax.toFixed(2);
        }

    },
    state:{
        isActive: true,
        cart_total_price_with_tax: 0,
        cart_total_price: 0,
        tax: 10.87,
        products:[
            {
                id: 0,
                img: 'product1.png',
                title: 'Bjorg chair White Plastic',
                desc: 'Armchair in polypropylene. Seat and legs in solid natural beech wood.',
                price: 349.99,
                totalPrice: 0,
                number: 0
            },
            {
                id: 1,
                img: 'product2.png',
                title: 'Decorative Tray Adenor',
                desc: 'Bring a touch of charm and elegance to your holiday decoration with...',
                price: 145.50,
                totalPrice: 0,
                number: 0
            }
        ]
    },
    getters: {
        allProducts(state){
            return state.products
        }
    }
})