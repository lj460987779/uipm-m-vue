import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => { 
  require(['../components/home/index.vue'], (data) => {
    resolve(data)
  })
}
const News = resolve => {
  require(['../components/news/index.vue'], (data) => {
    resolve(data)
  })
}
const Uipm = resolve => {
  require(['../components/uipm/index.vue'], (data) => {
    resolve(data)
  })
}
const Uipmpe = resolve => {
  require(['../components/uipmPE/index.vue'], (data) => {
    resolve(data)
  })
}
const Match = resolve => {
  require(['../components/match/index.vue'], (data) => {
    resolve(data)
  })
}
const Player = resolve => {
  require(['../components/player/index.vue'], (data) => {
    resolve(data)
  })
}

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      auth: false,
      module: ['index']
    }
  },
  {
    name: 'news',
    path: '/news',
    component: News,
    meta: {
      auth: false,
      module: ['news'],
    }
  },
  {
    name: 'uipm',
    path: '/uipm',
    component: Uipm,
    meta: {
      auth: false,
      module: ['uipm'],
      title: 'UIPM旗下运动'
    }
  },
  {
    name: 'uipmpe',
    path: '/uipmpe',
    component: Uipmpe,
    meta: {
      auth: false,
      module: ['uipmpe'],
      title: '国际现代五项联盟'
    }
  },
  {
    name: 'match',
    path: '/match',
    component: Match,
    meta: {
      auth: false,
      module: ['match']
    }
  },
  {
    name: 'player',
    path: '/player',
    component: Player,
    meta: {
      auth: false,
      module: ['player']
    }
  }
]
const router = new Router({
  routes,
  linkActiveClass: 'router-active',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router