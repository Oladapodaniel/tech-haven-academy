<template>
    <div class="container container-top">
        <div class="inter-semi-bold text-3xl">Checkout</div>
        <div class="grid md:grid-cols-3 gap-10 my-14">
            <div class="md:col-span-2">
                <div class="inter-medium text-2xl mb-5">Payment method</div>
                <div class="inter-regular mb-4">Select payment method</div>
                <div id="paypal-button-container"></div>
                <button @click="clickRadioCard"
                    class="w-full block px-6 py-4 font-medium text-left text-gray-700 leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample">
                    <input
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../../static/images/credit-card.svg" class="inline-block ml-3 mr-2" />
                    Credit card
                </button>

                <div class="collapse" id="collapseExample">
                    <div class="block p-6 shadow-sm bg-white">
                        <div class="grid md:grid-cols-12 md:gap-4">
                            <div class="md:col-span-12">
                                <div class="inter-medium">
                                    Billing Address
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div>
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">First Name</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter first name" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div>
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Last Name</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter last name" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Address</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter address" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">City</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter city" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">State/Province</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter province" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Postal Code</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter postal code" />
                                </div>
                            </div>
                            <div class="md:col-span-12 mt-4 md:mt-0">
                                <div class="inter-medium">
                                    Credit Card Information
                                </div>
                            </div>
                            <div class="md:col-span-12 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Card Number</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter card number" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Expiry Date</label>
                                    <input type="date"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div class="md:col-span-6 mt-2">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">CVV</label>
                                    <input type="text"
                                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleFormControlInput1" placeholder="Enter CVV" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="clickRadioPaypal"
                    class="w-full block mt-6 px-6 py-4 font-medium text-left leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="button">
                    <input
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../../static/images/paypal.svg" class="inline-block ml-3 mr-2" />
                    Paypal
                </button>
                <button @click="clickRadioFlutter"
                    class="w-full block mt-6 px-6 py-4 font-medium text-left leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="button">
                    <input
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../../static/images/flutterwave_logo.svg" class="inline-block ml-3 mr-2" />
                    Flutterwave
                </button>
            </div>
            <div>
                <img src="../../static/images/checkoutbanner.png" class="w-full rounded-t-lg" />
                <div class="px-3 rounded-bl-xl rounded-br-xl bg-[#f5f6f6] border border-solid border-[#e4e4e4]">
                    <div class="flex w-3/4 border mx-auto p-2 relative -top-7 bg-white sub-banner-shadow rounded-md">
                        <img src="../../static/images/sub-banner.png" class="w-1/3 rounded-md object-cover" />
                        <div class="pl-2">
                            <div class="text-gray-700 inter-medium">Total</div>
                            <div class="inter-bold text-2xl mt-2">CAD ${{ decode.toLocaleString() }}</div>
                        </div>

                    </div>
                    <ul class="font-bold text-xs w-3/4 mx-auto">
                        <li>Full access to course materials</li>
                        <li>Full access to graded assignment</li>
                        <li>Certificate of completion</li>
                    </ul>
                    <button @click="pay" data-mdb-ripple="true" data-mdb-ripple-color="light"
                        class="w-full mt-10 mb-7 block px-6 py-2 border border-primary bg-primary text-white font-medium leading-tight rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out inter-medium">Make
                        Payment</button>
                </div>
                <button type="button"
                    class="hidden px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal" data-bs-target="#exampleModalCenter" ref="successbuttonref">
                    Vertically centered modal
                </button>
            </div>

            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
                role="dialog">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div
                        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">

                            </h5>
                            <button type="button" ref="closepaymentmodal"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4">
                            <img src="../../static/images/successful_payment.png" class="w-1/2 mx-auto" />
                            <div class="inter-bold text-center text-3xl mt-5 text-[#70c043]">Thank you</div>
                            <div class="radian-medium text-center text-lg text-gray-700 mt-1">Payment completed
                                successfully</div>
                            <div class="text-gray-600 text-center leading-tight text-sm mt-1">You will be redirected to
                                the home page or <br />click here to go to the home page</div>
                            <div class="flex justify-center mb-9">
                                <button type="button"
                                    class="mt-5 px-9 py-2 bg-[#70c043] text-white rounded-full mx-auto inter-medium"
                                    @click="homeAfterPayement">Home</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    head() {
        return {
            script: [
                {
                    src: 'https://www.paypal.com/sdk/js?client-id=test&currency=EUR'
                }
            ],
        }
    },
    data() {
        return {
            show: false,
            selectedPaymentType: ''
        }
    },
    computed: {
        decode() {
            return this.$injectProp.decode(this.$route.params.id)
        },
    },
    methods: {
        clickRadioCard(e) {
            if (e.target.children.length > 0) {
                e.target.children[0].checked = true
            }
            this.selectedPaymentType = 'credit_card'
        },
        clickRadioFlutter(e) {
            if (e.target.children.length > 0) {
                e.target.children[0].checked = true
            }
            this.selectedPaymentType = 'flutterwave'
        },
        clickRadioPaypal(e) {
            if (e.target.children.length > 0) {
                e.target.children[0].checked = true
            }
            this.selectedPaymentType = 'paypal'
        },
        pay() {
            if (this.selectedPaymentType === 'flutterwave') {
                window.FlutterwaveCheckout({
                    public_key: 'FLWPUBK_TEST-3b4228a6798c5aecc801b291ef6be683-X',
                    // public_key: process.env.VUE_APP_FLUTTERWAVE_PUBLIC_KEY_LIVE,
                    tx_ref: Math.random(),
                    amount: this.decode,
                    currency: 'USD',
                    country: 'US',
                    payment_options: 'card,ussd',
                    customer: {
                        // name: props.name,
                        email: 'oladapodaniel10@gmail.com'
                    },
                    callback: () => {
                        console.log(this.$refs)
                        this.$refs.successbuttonref.click()

                    },
                    onclose: () => console.log('Payment closed'),
                    customizations: {
                        title: 'Business Analysis Course',
                        description: "Business Analysis Course",
                        logo: '',
                    },
                });
            }
        },
        homeAfterPayement() {
            localStorage.removeItem('course')
            this.$store.dispatch('cartitems/clearcart')
            this.$refs.closepaymentmodal.click()
            this.$router.push('/')
        }
    },
    created() {
        //     paypal.Buttons({
        //   // Sets up the transaction when a payment button is clicked
        //   createOrder: (data, actions) => {
        //     return actions.order.create({
        //       purchase_units: [{
        //         amount: {
        //           value: '77.44' // Can also reference a variable or function
        //         }
        //       }]
        //     });
        //   },
        //   // Finalize the transaction after payer approval
        //   onApprove: (data, actions) => {
        //     return actions.order.capture().then(function(orderData) {
        //       // Successful capture! For dev/demo purposes:
        //       console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        //       const transaction = orderData.purchase_units[0].payments.captures[0];
        //       alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
        //       // When ready to go live, remove the alert and show a success message within this page. For example:
        //       // const element = document.getElementById('paypal-button-container');
        //       // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        //       // Or go to another URL:  actions.redirect('thank_you.html');
        //     });
        //   }
        // }).render('#paypal-button-container');

        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}
</script>

<style scoped>
.sub-banner-shadow {
    box-shadow: 0px 4px 34px rgba(9, 44, 76, 0.16);
}

/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
  opacity: 1;
} */

.fade-enter-from {
    /* transform: translateX(30px); */
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.fade-leave-to {
    /* transform: translateX(30px); */
    opacity: 1;
    transition: all 0.3s ease-in-out;
}
</style>