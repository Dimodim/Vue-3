const app = Vue.createApp({
    data: function(){
        return {
            cart:[],
            premium: true
        };
    },
    methods: { 
        LogCart(){
            console.log(this.cart);
        },
        addSocksToCart(incomingProduct) {
                this.cart.push(
                    {
                        product: {
                            name: incomingProduct.name,
                            color: incomingProduct.variants[incomingProduct.selectedVariant].color, 
                            details:incomingProduct.details,
                            image: incomingProduct.variants[incomingProduct.selectedVariant].image,
                            description:incomingProduct.description,
                        }
                    }
                );
            
        },
        removeSocksToCart(){
            this.cart.pop();
        }
    },
});