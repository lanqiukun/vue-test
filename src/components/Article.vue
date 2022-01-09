<template>
  <div>
    <div>这里是ID为：{{ $route.params.id }}的文章</div>
    <button @click="to_article(12)">我要去看id为12的文章</button>
    <button @click="to_article(20)">我要去看id为20的文章</button>
    <button @click="to_about(20)">我要去看关于页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    to_article(id) {
      this.$router.replace({ name: 'Article', params: { id }}).catch(error => {
        // 避免导航到相同的路径报错，比如从 /article/12 跳到 /article/12 
        console.log(error)
      })
    },
    to_about() {
      this.$router.replace({ name: 'About'})
    }
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<style>

</style>