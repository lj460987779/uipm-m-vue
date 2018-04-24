<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <navlist />
  </div>
</template>

<script>
import Header from './components/common/header'
import navlist from './components/common/nav'

export default {
  name: 'App',
  components: {
    Header,
    navlist
  }
}
</script>

<style lang="scss">
@import "./css/index.scss";
</style>
