<template>
  <div class="container mt-6">
    <div class="text-4xl font-extrabold text-center mt-4 radian-medium">Courses</div>
    <div class="flex justify-center">
      <input type="text"
        class="mt-4 px-3 py-1.5 text-base font-normal text-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border focus:border-primary focus:outline-none search-bar"
        id="exampleFormControlInput1" placeholder="What do you want to learn?" />
    </div>

    <!-- Card -->

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
      <div v-for="(item, index) in courses" :key="index">
        <div class="">
          <NuxtLink :to="`/courses/${item.id}`">
            <div
              class="rounded-lg shadow-lg bg-white max-w-sm mx-auto transition ease-in-out hover:scale-105 duration-300">
              <a href="#!">
                <img class="rounded-t-lg" :src="item.thumbnail" width="100%" alt="" />
              </a>
              <div class="p-2">
                <h5 class="text-gray-900 font-medium mb-2">{{ item.category }}</h5>
                <div class="inter-medium text-lg mb-2 leading-6">{{ item.name }}</div>
                <p class="text-gray-700 text-base mb-4">
                  {{ item.author }}
                </p>
                <div class="flex justify-between">
                  <div>
                    <img src="../../static/images/clock.svg" class="inline" />
                    <span class="text-sm">{{ item.duration }}</span>
                  </div>
                  <div class="font-bold">N{{ item.price }}</div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courses from '../../mixins/courses.vue';
export default {
  name: 'IndexPage',
  mixins: [courses],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.search-bar {
  border-radius: 30px;
  width: 567px;
  height: 48px;
  padding: 9px 4px 9px 40px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgba(0, 147, 221, 0.1) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
}
</style>
