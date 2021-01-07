const app = Vue.createApp({
    data: function(){
        return {
            product: {
                name: 'Socks',
                description: 'These socks are made out of 80% Cotton, 18% Polyfills and 2% Elastins',
                image:'./assets/images/socks_blue.jpg',
                url: '#',
                inStock: true,
                quantity: 0,
                color: 'blue',
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {
                        id: 2234, 
                        color: 'dark blue',
                        image: './assets/images/socks_blue.jpg'
                    },
                    {
                        id: 2235, 
                        color: 'green',
                        image: './assets/images/socks_green.jpg'
                    }
                ],
                sizes:[
                    '30-36',
                    '37-42',
                    '43-47'
                ]
            },
            cart:[],
            methods: {
                addSocksToCart: (color,size)=> {
                    this.cart.push(
                        {
                            product: {
                                name: this.product.name,
                                color, 
                                size,
                                details:this.product.details,
                                image: (color === 'green') ?  './assets/images/green.jpg':'./assets/images/socks_blue.jpg',
                                description: this.product.description,
                                variant:  (color === 'green') ? this.product.variants[1]:this.product.variants[0]
                            }
                        }
                    );
                },
                LogCart: () => {
                    console.log(this.cart);
                },
                changeImage: (image) => {
                    this.product.image = image;
                }
            },
        };
    }
});