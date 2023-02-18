<template>
    <div class="container mt-10">
        <div class="grid md:grid-cols-3 gap-10">
            <div class="md:col-span-2 cart-card">
                <div class="inter-medium text-3xl px-4 py-5 border-b  border-b-[#A4A4A4]">Cart ({{ cartItemsCount }})</div>
                <div v-for="item in cartItems">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center px-4 pt-5">
                        <div>
                            <div class="flex flex-col sm:flex-row md:items-center gap-5">
                                <img :data-src="item.thumbnail" class="w-20 md:w-1/3" alt="Cart_image" title=""
                                    v-lazy-load />
                                <div>
                                    <div class="inter-medium text-xl md:text-2xl">{{ item.name }}</div>
                                    <div>{{ item.author }}</div>
                                    <div class="flex text-gray-600">
                                        <div><img data-src="../static/images/clock.svg" class="inline" v-lazy-load /> {{
                                            item.duration }}</div> &nbsp; &nbsp;
                                        <img data-src="../static/images/Ellipse.svg" class="inline" v-lazy-load /> &nbsp;
                                        &nbsp;
                                        <div>{{ item.category }}</div>&nbsp; &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inter-semi-bold mt-2 md:mt-0">CAD${{ item.price ? item.price.toLocaleString() : 0 }}
                        </div>
                    </div>
                    <div class="px-4 pt-2 pb-5 flex align-items-center cursor-pointer" @click="removeCartItem(item)">
                        <img data-src="../static/images/trash.svg" class="inline" v-lazy-load />
                        <span class="ml-1 text-red-500 inter font-bold">Remove</span>
                    </div>
                </div>
                <div class="flex justify-center mt-7 inter-medium text-xl" v-if="cartItemsCount == 0">No course added yet</div>
            </div>
            <div class="md:col-span-1">
                <div class="cart-card">
                    <div class="inter-medium text-xl px-4 py-5 border-b  border-b-[#A4A4A4]">CART SUMMARY</div>
                    <div class="py-5 px-4">
                        <div class="flex justify-between">
                            <div>Total</div>
                            <div class="inter-semi-bold mt-2 md:mt-0">CAD $ {{ totalPrice ? totalPrice.toLocaleString() : 0
                            }}</div>
                        </div>
                        <NuxtLink :to="`/checkout/${encode}`">
                        <button type="button"
                            class=" inline-block w-full px-8 py-3 mt-4 border border-primary bg-primary text-white font-medium leading-tight rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out inter-regular" :disabled="cartItemsCount == 0">Checkout</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        cartItems() {
            return JSON.parse(localStorage.getItem('course'))
        },
        totalPrice() {
            if (this.cartItems && this.cartItems.length > 0) {
                const sumAmount = this.cartItems.reduce((a, b) => {
                    return a + b.price
                }, 0)
                return sumAmount
            }
        },
        cartItemsCount() {
            if (this.$store.state.cartitems.cartitems.length == 0) return JSON.parse(localStorage.getItem('course')).length
            return this.$store.state.cartitems.cartitems.length
        },
        encode () {
            const converted = this.$injectProp.encode(this.totalPrice)
            return converted
        }
    },
    methods: {
        removeCartItem(item) {
            this.$toast.success('Course removed from cart successfully')
            setTimeout(() => {
                const localData = localStorage.getItem('course');
                let storedCourses = localData ? JSON.parse(localData) : []
                storedCourses = storedCourses.filter(i => i.id !== item.id)
                localStorage.setItem('course', JSON.stringify(storedCourses))
                this.$store.dispatch('cartitems/removecartitem', item)
                location.reload()
                console.log(storedCourses)
            }, 1000);
        }
    }
}
</script>

<style>
.cart-card {
    background: #FFFFFF;
    box-shadow: 0px 4px 17px rgba(9, 44, 76, 0.12);
    border-radius: 10px;
}
</style>