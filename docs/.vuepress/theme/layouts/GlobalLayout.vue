<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue';
import Header from '@theme/components/Header.vue';
import MobileHeader from '@theme/components/MobileHeader.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  },
};
</script>

<style lang="stylus">
#vuepress-theme-blog__global-layout
  word-wrap break-word

.content-wrapper
  font-size calc(0vw + 1rem)
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 30px - 110px)
  max-width $contentWidth
  margin 0 auto

  @media (min-width: $MQMobile)
    &
      width: 50%

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>
