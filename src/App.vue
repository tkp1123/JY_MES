<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('keydown', this.KeyDown, true) //监听按键事件
  },
  methods: {
    //阻止11按键
    KeyDown(event) {
      if (event.keyCode === 122) {
        event.returnValue = false
      }
    },
  },
}
</script>

<style>
</style>
