Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    template: `
    <div class="product">
    <div class="product-image" uk-lightbox>
        <a :href="image"><img :src="image" uk-img></a>
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <div>
        <span v-if="inventory > 10" class="uk-label uk-label-success">In stock</span>
        <span v-else-if="inventory <= 10 && inventory > 0"  class="uk-label uk-label-warning">Almost out of stock</span>
        <span v-else  class="uk-label uk-label-danger">Out of stock</span>
        <span class="uk-label uk-label-warning">Shipping : {{ shipping }}</span>
        </div>

        <h5>Details</h5>

        <ol class="uk-list uk-list-divider uk-list-striped">
            <li v-for="detail in details">{{ detail }}</li>
        </ol>

        <h5>Colors</h5>

        <div v-for="(variant, idx) in variants" 
             :key="variant.variantId"
             class="color-box"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(idx)"
             >
           
        </div>

        <button @click="addToCart" 
                class="uk-button uk-button-primary"
                :disabled="!inStock"
                >Add to Cart</button>

        
    </div>

</div>
    `,
    data() {
        return {
            brand: "Vue Mastery",
            product : 'Socks',
            selectedVariant: 0,
            inventory : 100,
            details : ["60% cotton", "20% polyester", "Gender-neutral"],
            
            variants : [
                {
                    variantId: 2234,
                    variantColor: "white",
                    variantImage: './assets/socks-white.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "black",
                    variantImage: './assets/socks-black.jpg',
                    variantQuantity: 0
                }
            ],
            
        }
    } ,
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity 
        },
        shipping() {
            if(!this.premium){
                return "Free"
            }

            return 2.99
        }
    },
    methods : {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(idx){
            this.selectedVariant = idx
            
        }
    }
})

var app = new Vue({

    el : '#app',
    data : {
        premium : true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }

})