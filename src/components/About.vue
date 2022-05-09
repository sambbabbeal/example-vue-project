<template>
  <div><input type="text" v-model="task" />{{ task }}</div>
</template>
<script>
export default {
  name: 'About',

  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      task: ''
    }
  },

  methods: {
    change: () => {
      this.task = 'hello'
    }
  }
}
</script>
<style></style>
