<template>
    <div class="container container-top">
        <div class="inter-regular">
            <span class="text-primary">Courses</span>
            <img src="../../static/images/angle_right.svg" class="inline-block"/>
            <span class="text-gray-600">Business Analysis</span>
        </div>

        <div class="grid md:grid-cols-3 gap-10 my-14">
            <div class="course-card md:col-span-2">
                <video class="video" width="100%" controls>
                    <source src="../../static/images/BusinessAnalystCertificationCourse.mp4" />
                </video>
                <div class="px-5 pb-5">
                    <div class="inter-medium text-xl mt-5">Lesson 1 : {{ singleCourse.name }}</div>
                    <div class="mt-5 text-[#2B2B2B]">
                        Set yourself up for success and learn the key concepts you’ll need to thrive in your Business
                        Analyst career!
                        With over 10 years working as, hiring, and managing Business Analysts, I’ve gained a lot of
                        valuable
                        experience and knowledge. And today, I want to share that information with you. I’ll help you
                        take
                        the first step in a long and productive career in business analysis.
                    </div>

                    <!-- tabs -->

                    <ul class=" nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                        id="tabs-tabJustify" role="tablist">
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a href="#tabs-homeJustify"
                                class=" nav-link w-full block radian-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                                id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify"
                                role="tab" aria-controls="tabs-homeJustify" aria-selected="true">Teachers note</a>
                        </li>
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a href="#tabs-profileJustify"
                                class=" nav-link w-full block radian-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify"
                                role="tab" aria-controls="tabs-profileJustify" aria-selected="false">Questions</a>
                        </li>
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a href="#tabs-messagesJustify"
                                class=" nav-link w-full block radian-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-messages-tabJustify" data-bs-toggle="pill"
                                data-bs-target="#tabs-messagesJustify" role="tab" aria-controls="tabs-messagesJustify"
                                aria-selected="false">Video transcript</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="tabs-tabContentJustify">
                        <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
                            aria-labelledby="tabs-home-tabJustify">
                            <div class="inter-medium">Notes</div>
                            <div class="mt-3">
                                Set yourself up for success and learn the key concepts you’ll need to thrive in your
                                Business Analyst career!
                            </div>
                            <div class="mt-4 inter-medium">Lesson files</div>
                            <div class="flex mt-3">
                                <img src="../../static/images/zip 1.svg" alt="">
                                <div>Analysis.zip</div>
                            </div>
                            <div class="flex mt-3">
                                <img src="../../static/images/sheets 1.svg" alt="">
                                <div>Analysis.xlxx</div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            Feel free to drop any comment or questions below
                            <textarea
                                class="mt-3 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                id="exampleFormControlTextarea1" rows="6" placeholder="Your comments"></textarea>
                            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out mt-5">Post</button>
                        </div>
                        <div class="tab-pane fade" id="tabs-messagesJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            <div class="px-10 text-justify">
                                With a higher growth rate of 14% than other professions. Business Analysis is a
                                promising
                                career. Business analyst masters program in collaboration with IBM.
                                Endorsed by IIBA Content by Harvard Business Publishing. Build yourself the career
                                you've
                                always wanted. Apply now.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-card p-5">
                <div class="inter-medium text-xl">Course content</div>
                <div>


                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item bg-white" v-for="(item, index) in courseContent" :key="index">
                            <h2 class="accordion-header mb-0" id="headingOne">
                                <button
                                    class="w-full accordion-button collapsed collapse-button inline-block px-3 py-4 mt-3 font-medium text-xs leading-tight focus:bg-[#D0EAF9] rounded-lg focus:rounded-bl-none focus:rounded-br-none border border-[#D0EAF9] focus:border-primary focus:border-solid focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    type="button" data-bs-toggle="collapse" :data-bs-target="`#${item.slug}`"
                                    aria-expanded="true" :aria-controls="item.slug" :disabled="!item.access">
                                    <div class="flex justify-between" :class="{ 'pointer-events-none': !item.access }">
                                        <div>
                                            <div class="inter-medium text-left">{{ item.title }}</div>
                                            <div class="text-left">
                                                <div class="inline-block">{{ item.lessons.length }} videos</div>
                                                <div class="inline-block ml-2 mt-2">
                                                    <img class="inline-block" src="../../static/images/clock.svg" />
                                                    <div class="inline-block">{{ item.duration }}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="../../static/images/angledown.svg" v-if="item.access" />
                                        <img src="../../static/images/lock.svg" class="w-4" v-else />
                                    </div>
                                </button>
                            </h2>
                            <div :id="item.slug" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div
                                    class="accordion-body py-4 px-5 block rounded-lg border border-t-0 border-primary border-solid rounded-tr-none rounded-tl-none bg-white">
                                    <ul class="divide-y">
                                        <li class="py-2" v-for="(lesson, index) in item.lessons" :key="index">
                                            <input
                                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox" value="" id="flexCheckDefault"
                                                :checked="lesson.status" />
                                            {{ lesson.title }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="accordion-item bg-white">
                            <h2 class="accordion-header mb-0" id="headingTwo">
                                <button
                                    class="w-full accordion-button collapsed collapse-button inline-block px-3 py-4 mt-3 font-medium text-xs leading-tight focus:bg-[#D0EAF9] rounded-lg focus:rounded-bl-none focus:rounded-br-none border border-[#D0EAF9] focus:border-primary focus:border-solid focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="inter-medium text-left">The Basics</div>
                                            <div>
                                                <div class="inline-block">3 videos</div>
                                                <div class="inline-block ml-2 mt-2">
                                                    <img class="inline-block" src="../../static/images/clock.svg" />
                                                    <div class="inline-block">5 mins</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="../../static/images/lock.svg" class="w-4"/>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div
                                    class="accordion-body py-4 px-5 block rounded-lg border border-t-0 border-primary border-solid rounded-tr-none rounded-tl-none bg-white">
                                        <ul class="divide-y">
                                            <li class="pb-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" checked />
                                                What is Business Analyst
                                            </li>
                                            <li class="py-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Types of Business Analyst roles
                                            </li>
                                            <li class="pt-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Top Business Analyst skill
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-white">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button
                                    class="w-full accordion-button collapsed collapse-button inline-block px-3 py-4 mt-3 font-medium text-xs leading-tight focus:bg-[#D0EAF9] rounded-lg focus:rounded-bl-none focus:rounded-br-none border border-[#D0EAF9] focus:border-primary focus:border-solid focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="inter-medium text-left">Software Development Lifecycle</div>
                                            <div>
                                                <div class="inline-block">3 videos</div>
                                                <div class="inline-block ml-2 mt-2">
                                                    <img class="inline-block" src="../../static/images/clock.svg" />
                                                    <div class="inline-block">5 mins</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="../../static/images/lock.svg" class="w-4" />
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div
                                    class="accordion-body py-4 px-5 block rounded-lg border border-t-0 border-primary border-solid rounded-tr-none rounded-tl-none bg-white">
                                        <ul class="divide-y">
                                            <li class="pb-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" checked />
                                                What is Business Analyst
                                            </li>
                                            <li class="py-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Types of Business Analyst roles
                                            </li>
                                            <li class="pt-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Top Business Analyst skill
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-white">
                            <h2 class="accordion-header mb-0" id="headingFour">
                                <button disabled
                                    class="w-full accordion-button collapsed collapse-button inline-block px-3 py-4 mt-3 font-medium text-xs leading-tight focus:bg-[#D0EAF9] rounded-lg focus:rounded-bl-none focus:rounded-br-none border border-[#D0EAF9] focus:border-primary focus:border-solid focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    <div class="flex justify-between pointer-events-none">
                                        <div>
                                            <div class="inter-medium text-left">Initiating a project</div>
                                            <div>
                                                <div class="inline-block">3 videos</div>
                                                <div class="inline-block ml-2 mt-2">
                                                    <img class="inline-block" src="../../static/images/clock.svg" />
                                                    <div class="inline-block">5 mins</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="../../static/images/lock.svg" class="w-4" />
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div
                                    class="accordion-body py-4 px-5 block rounded-lg border border-t-0 border-primary border-solid rounded-tr-none rounded-tl-none bg-white">
                                        <ul class="divide-y">
                                            <li class="pb-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" checked />
                                                What is Business Analyst
                                            </li>
                                            <li class="py-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Types of Business Analyst roles
                                            </li>
                                            <li class="pt-2">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                Top Business Analyst skill
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="flex justify-center mt-8">
                        <button type="button"
                        class=" inline-block px-6 py-2 border border-primary bg-primary text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out inter-medium">Buy
                        this course</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import courses from '../../mixins/courses.vue';

export default {
    mixins: [courses],
    data() {
        return {
            courseContent: [
                {
                    title: 'Introduction',
                    duration: '5 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                        {
                            title: 'Top Business Analyst Skills',
                            status: 0
                        },
                    ],
                    id: 0,
                    slug: 'introduction',
                    access: true
                },
                {
                    title: 'The Basic',
                    duration: '7 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                        {
                            title: 'Top Business Analyst Skills',
                            status: 0
                        },
                    ],
                    id: 1,
                    slug: 'the_basic',
                    access: false
                },
                {
                    title: 'Software Development Cycle',
                    duration: '10 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                        {
                            title: 'Top Business Analyst Skills',
                            status: 0
                        },
                    ],
                    id: 2,
                    slug: 'software_development_cycle',
                    access: false
                },
                {
                    title: 'Initiating a Project',
                    duration: '30 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                    ],
                    id: 3,
                    slug: 'initiating_a_project',
                    access: false
                },
                {
                    title: 'Requirements',
                    duration: '10 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                    ],
                    id: 3,
                    slug: 'requirements',
                    access: false
                },
                {
                    title: 'After the Project',
                    duration: '20 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                    ],
                    id: 3,
                    slug: 'after_the_project',
                    access: false
                },
                {
                    title: 'Bonus Section',
                    duration: '20 mins',
                    lessons: [
                        {
                            title: 'What is Business Analyst',
                            status: 1
                        },
                        {
                            title: 'Types of Business Analyst',
                            status: 0
                        },
                    ],
                    id: 3,
                    slug: 'bonus_section',
                    access: false
                },
            ]
        }
    },
    computed: {
        singleCourse () {
            return this.courses.find(i => i.id == this.$route.params.id)
        }
    }
}
</script>
<style scoped>
video.video {
    height: 520px
}

.course-card {
    background: #FFFFFF;
    box-shadow: 0px 4px 17px rgba(9, 44, 76, 0.12);
    border-radius: 10px;
}

.collapse-button {
    /* background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #0093DD;
    border: 0.5px solid #0093DD;
    border-radius: 10px 10px 0 0; */
}
</style>