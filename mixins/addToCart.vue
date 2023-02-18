<script>
export default {
    data() {
        return {}
    },
    methods: {
        addToCart(item) {
            const localData = localStorage.getItem('course');
            const storedCourses = localData ? JSON.parse(localData) : []
            const index = storedCourses.findIndex(i => i.id == item.id)
            if (index < 0) {
                storedCourses.push(item);
                localStorage.setItem('course', JSON.stringify(storedCourses))
                this.$store.dispatch('cartitems/setCartItems', storedCourses)
                this.$toast.success("Added to cart successfully");
            }   else {
                this.$toast.info("This course have been added already");
            }

        }
    }
}
</script>