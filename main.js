const app = Vue.createApp({
    data: function(){
        return{
            product: {
                name: 'Socks',
                description: 'These socks are made out of 80% Cotton, 18% Polyfills and 2% Elastins',
                image:'./assets/images/socks_blue.jpg',
                url: '#',
                inStock: true,
                quantity: 0
            }
        }
    }
})