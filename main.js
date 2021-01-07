const app = Vue.createApp({
    data: function(){
        return {
            product: {
                name: 'Socks',
                description: 'Crisp socks that you can\'t miss on',
                url: '#',
                brand:'Vue Mastery',
                selectedVariant: 0,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {
                        id: 2234, 
                        color: 'darkblue',
                        image: './assets/images/socks_blue.jpg',
                        quantity: 0
                    },
                    {
                        id: 2235, 
                        color: 'green',
                        image: './assets/images/socks_green.jpg',
                        quantity: 14,
                    }
                ],
                sizes:[
                    '30-36',
                    '37-42',
                    '43-47'
                ]
            },
            cart:[],
        };
    },
    methods: {
        addSocksToCart() {
            if(this.inStock){
                this.cart.push(
                    {
                        product: {
                            name: this.product.name,
                            color: this.product.variants[this.product.selectedVariant].color, 
                            details:this.product.details,
                            image: this.product.variants[this.product.selectedVariant].image,
                            description: this.product.description,
                        }
                    }
                );
                --this.product.variants[this.product.selectedVariant].quantity;
            }
        },
        LogCart(){
            console.log(this.cart);
        },
        updateVariant(index){
            this.product.selectedVariant = index;
            
        }
    },
    computed: {
        title(){
            return this.product.brand + ' ' + this.product.name;
        },
        image(){
            return this.product.variants[this.product.selectedVariant].image;
        },
        inStock(){
            return this.product.variants[this.product.selectedVariant].quantity;
        }

    }
});