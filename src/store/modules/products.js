// export default {
//     actions:{
//         DECREASE({commit}, index){
//             commit('DECREASE_NUMBER', index);
//         },
//         INCREASE({commit}, index){
//             commit('INCREASE_NUMBER', index);
//         },
//         COUNT({commit},index){
//             commit('COUNT_PRICE', index);
//         }
//     },
//     mutations: {
//         DECREASE_NUMBER (state, index) {
//             if(state.products[index].number<=0){
//                 state.products[index].number = 0;
//             }else{
//                 state.products[index].number--;
//             }
//             // state.products[index].number--;
//         },
//         INCREASE_NUMBER(state, index) {
//             state.products[index].number++;
//         },
//         COUNT_PRICE(state, index){
//             state.products[index].totalPrice =  state.products[index].price * state.products[index].number;
//         }
//
//     },
//     state:{
//         products:[
//             {
//                 id: 0,
//                 img: 'product1.png',
//                 title: 'Bjorg chair White Plastic',
//                 desc: 'Armchair in polypropylene. Seat and legs in solid natural beech wood.',
//                 price: 349.99,
//                 totalPrice: 349.99,
//                 number: 1
//             },
//             {
//                 id: 1,
//                 img: 'product2.png',
//                 title: 'Decorative Tray Adenor',
//                 desc: 'Bring a touch of charm and elegance to your holiday decoration with...',
//                 price: 145.50,
//                 totalPrice: 145.50,
//                 number: 1
//             }
//         ]
//     },
//     getters: {
//         allProducts(state){
//             return state.products
//         }
//     }
// }