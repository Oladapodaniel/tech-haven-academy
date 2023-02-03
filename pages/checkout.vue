<template>
    <div class="container container-top">
        <div class="inter-semi-bold text-3xl">Checkout</div>
        <div class="grid md:grid-cols-3 gap-10 my-14">
            <div class="md:col-span-2">
                <div class="inter-medium text-2xl mb-5">Payment method</div>
                <div class="inter-regular mb-4">Select payment method</div>
                <div id="paypal-button-container"></div>
                <button
                    @click="clickRadio"
                    class="w-full block px-6 py-4 font-medium text-left text-gray-700 leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../static/images/credit-card.svg" class="inline-block ml-3 mr-2" />
                    Credit card
                </button>

                <div class="collapse" id="collapseExample">
                    <div class="block p-6 rounded-lg shadow-lg bg-white">
                        <div class="grid md:grid-cols-12 md:gap-4">
                            <div class="md:col-span-6">
                                <div>
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">First Name</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div>
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Last Name</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-12">
                                <div class="inter-medium">
                                    Billing Address
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Street</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">City</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">State</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Zip</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-12">
                                <div class="inter-medium">
                                    Credit Card Information
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Card Number</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">Expiry Date</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                            <div class="md:col-span-6">
                                <div class="">
                                    <label for="exampleFormControlInput1"
                                        class="form-label inline-block mb-2 text-gray-700">CVV</label>
                                    <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleFormControlInput1" placeholder="**** **** **** *****" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                @click="clickRadio"
                    class="w-full block mt-6 px-6 py-4 font-medium text-left leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="button">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../static/images/paypal.svg" class="inline-block ml-3 mr-2" />
                    Paypal
                </button>
                <button
                @click="clickRadio"
                    class="w-full block mt-6 px-6 py-4 font-medium text-left leading-tight border border-solid border-primary rounded bg-white focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="button">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="../static/images/flutterwave_logo.svg" class="inline-block ml-3 mr-2" />
                    Flutterwave
                </button>
            </div>
            <div>
                <img src="../static/images/checkoutbanner.png" />
                <div class="px-3 rounded-bl-xl rounded-br-xl bg-[#f5f6f6] border border-solid border-[#e4e4e4]">
                    <div class="flex w-3/4 border mx-auto p-2 relative -top-7 bg-white sub-banner-shadow rounded-md">
                        <img src="../static/images/sub-banner.png" class="w-1/3 rounded-md" />
                        <div class="pl-2">
                            <div class="text-gray-700 inter-medium">Business Analysis</div>
                            <div class="inter-bold text-2xl mt-2">5,000</div>
                        </div>

                    </div>
                    <ul class="font-bold text-xs w-3/4 mx-auto">
                        <li>Full access to course materials</li>
                        <li>Full access to graded assignment</li>
                        <li>Certificate of completion</li>
                    </ul>
                    <div @click="pay" 
                        class="w-full mt-10 mb-7 block px-6 py-2 border border-primary bg-primary text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out inter-medium">Make Payment</div>
                </div>
            </div>
        </div>
        <!-- <div class="inter-medium text-2xl">Billing Address</div> -->
    </div>
</template>

<script>
export default {
    head () {
        return {
            script: [
                {
                    src: 'https://www.paypal.com/sdk/js?client-id=test&currency=EUR'
                }
            ],
        }
    },
    data () {
        return {}
    },
    methods: {
        clickRadio (e) {
            if (e.target.children.length > 0) {
                e.target.children[0].checked = true
            }
        },
        pay () {
           
        }
    },
    // mounted () {
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
    // }
}
</script>

<style>
.sub-banner-shadow {
    box-shadow: 0px 4px 34px rgba(9, 44, 76, 0.16);
}

</style>