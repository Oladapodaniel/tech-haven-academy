<template>
    <div class="container mt-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="col-span-2 md:col-span-1">
                <div class="text-primary inter-bold text-3xl md:text-5xl leading-snug">Grow your skills with online
                    courses from
                    Tech Haven</div>
                <div class="mt-3 text-lg">Tech Haven is a global training provider based across the UK that specializes
                    in accredited and bespoke training courses. We crush the barriers of getting
                    a degree.
                </div>
                <NuxtLink to="/courses">
                    <button type="button"
                        class=" inline-block px-8 py-3 mt-4 border border-primary bg-primary text-white font-medium leading-tight rounded shadow-md hover:bg-primarydeep hover:shadow-lg focus:bg-primarydeep focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarydeep active:shadow-lg transition duration-150 ease-in-out inter-regular">View
                        courses
                    </button>
                </NuxtLink>
                <button type="button"
                    class="inline-block px-8 py-3 font-medium rounded border border-transparent hover:border-primary transition duration-150 ease-in-out">Sign
                    up</button>
            </div>
            <div class="col-span-2 md:col-span-1">
                <img data-src="../../static/images/Hero_Image.png" alt="Learning online made easy"
                    class="rounded-3xl mx-auto" title="" v-lazy-load />
            </div>
            <div class="col-span-2 inter-semi-bold text-4xl text-center leading-snug mt-6">
                Over <span class="text-primary">1M+</span> Students Using are using <span class="text-primary">Tech
                    Haven</span><br />What are you waiting for ?</div>
        </div>
    </div>
</template>