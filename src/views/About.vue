<template>
  <div class="about">
    <button @click="to_article">我要去看看文章</button>
  </div>
</template>

<script>
export default {
  methods: {
    to_article() {
      this.$router.replace({ name: 'Article', params: { id: 12 }})
    }
  }
}
</script>