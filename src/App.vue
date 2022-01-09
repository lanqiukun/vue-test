<template>
  <div id="app">
    <keep-alive>
      <router-view  :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
      return this.$route.fullPath;
    },
  },
};
</script>