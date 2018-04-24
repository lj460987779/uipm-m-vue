<template>
  <div class="header-container">
    <div class="header">
      <div class="header-btn" @click="navShow">
        <div class="menu-button">
          <img src="~assets/Slide-nav.png">
        </div>
      </div>
      <div class="header-banner">
      </div>
      <div class="reglogin">
        <a href="user.html">
          <img src="~assets/user.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      flag: true
    }
  },
  methods: {
    navShow: function (e) {
      const show = this.flag
      if (show) {
        $bus.$emit('movenav', show)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
