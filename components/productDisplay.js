app.component('product-display',{
    props:{
      premium:{
        type: Boolean,
        required: true
      }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :class="{'out-of-stock-img': !inStock }" :src="image"> 
        <!-- {'out-of-stock-img': !product.inStock }  -->
      </div>
      <div class="product-info">
        <h1 class="title">{{ onSale }}</h1>
        <!-- <h3>{{ product.inStock ? 'In Stock' : 'Out of Stock' }}</h3> -->
        <h3 v-if="inStock > 4">In Stock</h3> <!--  we can use only v-if like in angular2 *ngIf -->
        <h3 v-else-if="inStock <=4 && inStock> 0"> Almost Sold Out</h3>  <!-- this works like a normal else if and it seems like these are chained -->
        <h3 v-else>Out of Stock</h3>
        <!-- <h3 v-show>Out of Stock</h3>  this one does not remove the element just sets display: none to hide it -->
        <p>Shipping:{{ shipping }}</p>
        <p>{{ product.description }}</p>
        <product-details :details="product.details"></product-details>
        <div 
          v-for="(variant,index) in product.variants" 
          :key="variant.id" 
          :id="variant.id" 
          :style="{ background: variant.color }"
          @mouseover="updateVariant(index)" 
          class="color-circle">
        </div>
        <div>
          <h3>Sizes:</h3>
          <div v-for="size in product.sizes" :key="size" :id="size">
            {{size}}
          </div>
        </div>
        <button 
          v-on:click="addSocksToCart" 
          :class="{disabledButton: !inStock }"
          :disabled="!inStock" 
          class="button"
          >Add to Cart
        </button>  <!-- short for v-on:click  is @click="" / :class is like [ngClass] in angular-->
        <button 
          v-on:click="removeSocksOffCart" 
          class="button remove-button"
          >Take off of Cart
        </button>  
      </div>
    </div>
    <review-form @review-submitted="addReview"></review-form>
    <review-list v-if="product.reviews.length" :reviews="product.reviews" ></review-list>
  </div>`,
  data: function(){
    return {
        product: {
            name: 'Socks',
            description: 'Crisp socks that you can\'t miss on',
            url: '#',
            brand:'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            reviews: [],
            variants: [
                {
                    id: 2234, 
                    color: 'darkblue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                    onSale: false
                },
                {
                    id: 2235, 
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 14,
                    onSale: true
                }
            ],
            sizes:[
                '30-36',
                '37-42',
                '43-47'
            ]
        }
    };
},
methods: {
    removeSocksOffCart() {
        this.$emit('remove-to-cart');
    },
    addSocksToCart() {
      if(this.inStock){
        this.$emit('add-to-cart',this.product);
        --this.product.variants[this.product.selectedVariant].quantity;
      }
    },
    updateVariant(index){
        this.product.selectedVariant = index;
        
    },
    addReview(review){
      this.product.reviews.push(review);
      console.log(this.product.reviews)
    }
},
computed: {
    image(){
        return this.product.variants[this.product.selectedVariant].image;
    },
    inStock(){
        return this.product.variants[this.product.selectedVariant].quantity;
    },
    title(){
        return this.product.brand + ' ' + this.product.name;
    },
    onSale(){
        if(this.product.variants[this.product.selectedVariant].onSale){

            return this.title + ' is on sale';
        }
        return this.title;
    },
    shipping(){
      if(this.premium){
        return 'Free';
      }
      else{
        return '9.99$';
      }
    }
}
});