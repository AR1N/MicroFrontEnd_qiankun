<template>
  <div>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
    <div id="child"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from "qiankun";

export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
  mounted() {
    this.initApp();
  },
  methods: {
    initApp() {
      registerMicroApps([
        {
          name: "vue app",
          entry: "//127.0.0.1:8888/",
          container: "#child",
          activeRule: "/sub_vue/",
        },
        {
          name: "react app",
          entry: "//127.0.0.1:8888/",
          container: "#child",
          activeRule: "/sub_react/",
        },
      ]);
      start();
    },
  },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 50px); */
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
