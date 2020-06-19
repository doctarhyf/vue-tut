const app = new Vue({

    el : '#app',
    data : {
        brand: "Vue Mastery",
        product : 'Socks',
        selectedVariant: 0,
        inventory : 100,
        details : ["60% cotton", "20% polyester", "Gender-neutral"],
        cart : 0,
        variants : [
            {
                variantId: 2234,
                variantColor: "white",
                variantImage: './assets/socks-white.jpg',
                variantQuantity: 10
            },
            {
                varitantId: 2235,
                variantColor: "black",
                variantImage: './assets/socks-black.jpg',
                variantQuantity: 0
            }
        ],
        
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity > 0
        }
    },
    methods : {
        addToCart() {

        

            this.cart += 1
            //this.variants[this.selectedVariant].variantQuantity -= 1
        },
        updateProduct(idx){
            this.selectedVariant = idx
            //console.log(idx)
            
        }
    }

})