<template>
  <div class="nav" :class="{ 'navShow': flag }">
    <div class="menu">
      <h3 class="menu-head"></h3>
      <ul class="olist">
        <li @click="moveLeft">
          <router-link to="/" exact>首页</router-link>
        </li>
        <li @click="moveLeft">
          <router-link to="/news">新闻</router-link>
        </li>
        <li @click="moveLeft">
          <router-link to="/uipm">UIPM旗下运动</router-link>
        </li>
        <li @click="moveLeft">
          <router-link to="/uipmpe">国际现代五项联盟</router-link>
        </li>
        <li @click="moveLeft">
          <router-link to="/match">赛事</router-link>
        </li>
        <li @click="moveLeft">
          <router-link to="/player">运动员</router-link>
        </li>
      </ul>
      <div id="logout" class="logout">
        <button type="button">退出登录</button>
      </div>
      <div class="linkbox">
        <ul id="links" class="links">
          <li><a href="http://v.qq.com/vplus/33727a5748cdcac73af0bd5d16188422"><img src="~assets/tencent.png" alt=""></a></li>
          <li class="wxli" @click="showWxBox"><a href="javascript:;"><img src="~assets/weixin.png" alt=""></a></li>
          <li><a href="http://weibo.com/u/5593447969?topnav=1&wvr=6&topsug=1"><img src="~assets/sina.png" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!-- 蒙层 -->
    <div class="nav-drop" @click="moveLeft"></div>
    <!-- 微信公众号 -->
    <div class="wxmark" id="wxmark" v-if="showWx" @click="closeWXBox">
      <div class="wxmark-box">
        <h3>国际现代五项联盟公众号</h3>
        <div class="qrcode">
          <img src="~assets/uipmWX.jpg" alt="">
        </div>
        <div class="scan">
          <p>扫描二维码关注UIPM公众号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navlist',
  data: function () {
    return {
      flag: false,
      showWx: false
    }
  },
  methods: {
    moveLeft() {
      let show = this.flag
      if (show) {
        this.flag = false
      }
    },
    showWxBox() {
      let showed = this.showWx
      if (!showed) {
        this.showWx = true
      }
    },
    closeWXBox() {
      let closed = this.showWx
      if (closed) {
        this.showWx = false
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      $bus.$on('movenav', (data) => {
        this.flag = data
      })
    })
  }
}
</script>

<style lang="sass">
@import './index.scss';
</style>
