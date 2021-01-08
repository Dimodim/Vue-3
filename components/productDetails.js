app.component('product-details',{
    props:{
      details:{
        required: true
      }
    },
    template:
    /*html*/
    `<ul>
         <li v-for="detail in productDetails">
            {{detail}}
          </li>
    </ul>`,
    computed:{
        productDetails(){
            return this.details;
        }
    }
});