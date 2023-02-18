<template>
  <div>
    <HeroSection />
    <BodySection />
    <SubscribeSection />
    <Footer />
  </div>
</template>

<script>
import HeroSection from '../components/landingpage/HeroSection.vue';
import BodySection from '../components/landingpage/BodySection.vue';
import SubscribeSection from '../components/landingpage/SubscribeSection.vue';
import Footer from '../components/landingpage/Footer.vue';
export default {
  components: {
    HeroSection,
    BodySection,
    SubscribeSection,
    Footer
  }
  // middleware: ['mymiddleware']
}
</script>