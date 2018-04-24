<template>
  <div class="structure contextmenu main-top">
    <!--导航栏-->
    <div class="list-box">
      <swiper class="swiperbox" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <swiper-slide class="slides" :class="{bar: index === itemIndex}" v-for="(item, index) in liItems" :key="index">
          <a @click="toggleTab(index)">{{item}}</a>
        </swiper-slide>
      </swiper>
    </div>
    <!--详情内容-->
    <div class="sectionbox">
      <section id="uipmSection" v-show="itemIndex === 0">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/halle-maigrot.jpg" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/subsport-pentathlon-300x150.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 现代五项</h1>
            <div class="discript-content">
              <p>现代五项是国际现代五项联盟的标志性运动，它是运动员在健康、勇气和技能方面的终极考验。 一天的比赛内包括了5种传统的运动形式，现代五项自1912年成为奥运会的核心项目。
              </p>
              <p>国际现代五项联盟每年都会为成人、青年、少年运动员组织世界锦标赛，同时也有世界杯系列赛，包括了4站比赛和世界杯决赛</p>
              <p>每四年，迎来一次终极挑战：奥运会。</p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 1">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/img_2925.jpg" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/to_be_used.jpg" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 激光跑</h1>
            <div class="discript-content">
              <p>激光跑是国际现代五项联盟最新的原创赛事，由跑射联项演化而来。2015年作为最后一名成员加入现代五项大家庭 。上至80岁下至8岁的运动员都可以参加，比赛可以在沙滩，城市和乡村举办。
              </p>
              <p>激光跑由快节奏和动感十足的跑步和射击组成，包括了4轮10米激光枪射击，4次800米跑步。 运动员需要射中5次靶子才能继续跑步。总命中靶子数量是20次，总的跑步距离是3200米。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 2">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/img_0061.jpg" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/subsport-tetrathlon-300x150.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 四项赛</h1>
            <div class="discript-content">
              <p>这是通往全能五项运动员的最后一步。它包括了现代五项5个小项中的4项：游泳， 跑步，射击和击剑。所有的4项比赛在一天内进行。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 3">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/captura-de-tela-2016.png" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/subsport-triathle-300x150.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 三项赛</h1>
            <div class="discript-content">
              <p>三项赛是由现代五项联盟创立的全新运动形式。运动员们按以下顺序进行比赛:射击-游泳-跑步。 三项赛在国际舞台的首秀是在2013年两项-三项世界锦标赛。 从2014年开始，它作为两项赛世界巡回赛的一部分，加入到了两项-三项世界巡回赛中。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 4">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/img_0536.jpg" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/2_biathle.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 两项赛</h1>
            <div class="discript-content">
              <p>国际现代五项联盟两项赛是现代五项的一个单项，创建这一项目是为在实战中训练五项运动的跑步和游泳部分创造机会。</p>
              <p>它同时也可以被视作一个单独的运动。它与铁人游跑两项赛有及其相似处， 后者同样包括了游泳和跑步，从铁人三项赛演变而来的。它也不能和冬季两项赛混淆。
              </p>
              <p>两项赛包括了如下的顺序：跑步-游泳-跑步。它是世界级的运动，但不是奥运比赛项目。</p>
              <p>它和铁人三项一样，腿部在不断地转换。赛道距离一般是200米的游泳和3.2公里的跑步，比与铁人游跑两项赛要短。</p>
              <p>一种演变形式是冬季两项赛，包括了室内游泳，不包括持续不断的转换。</p>
              <p>国际现代五项联盟希望看到更多的国家组织两项比赛，加入两项世界巡回赛或者独立办赛， 我们的目标是联合更多的国家，同时也感谢能在全球范围内推广这项运动。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 5">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/captura-de-tela-2015-05-08-as-11.19.32.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 大师赛</h1>
            <div class="discript-content">
              <p>国际现代五项联盟大师锦标赛鼓励竞技者继续从事现代五项，由此促进这项运动的发展。 国际现代五项联盟大师锦标赛包括了大师赛，大师世界锦标赛和大师洲际锦标赛。
              </p>
              <p>大师赛有两种形式：五项和四项。</p>
              <p>大师赛由马术，击剑，游泳，射击和跑步（经典形式）或是马术，击剑，游泳和激光跑 （跑步和射击结合）组成。四项赛由不包括马术在内的相同的小项组成。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 6">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/cah.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 残奥五项</h1>
            <div class="discript-content">
              <p>国际现代五项联盟安排了一组残奥五项的工作人员，致力于扩 大残奥运动社群以及国际观众来从事现代五项，进入这一非常特殊的有挑战性的残疾人领域。
              </p>
              <p>我们的目标是使残奥运动成为国际现代五项联盟发展项目中的关键部分，同时加强与国际和各国残奥组织的联系。感谢国家奥委会和残奥协会的鼎力支持， 感谢现代五项国家协会和任何外部和内部的利益相关者关注我们项目的推广和稳定发展。
              </p>
              <p>残奥工作组的目标是联合知名的现代五项专家，专家们均衡分布到各个大洲层面是确保能使得每一个国际现代五项联盟的每一个联盟能得到支持的关键。 同时它也是一座桥梁，连接了国际体育运动、现代五项大家庭，巩固了未来运动员的多样化。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uipmSection" v-show="itemIndex === 7">
        <div class="contextmenu-main">
          <div class="banner-box">
            <div class="banner-box-bImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/captura-de-tela-2016-02.png" alt="">
            </div>
            <div class="banner-box-sImg">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/subsport-ws-biathlon-300x150.png" alt="">
            </div>
          </div>
          <div class="discript">
            <h1>国际现代五项联盟 世界学校两项赛</h1>
            <div class="discript-content">
              <p>世界学校两项赛既有趣又易于组织，它能帮助国家协会增加会员的数量，同时甄选优秀人才，为国际比赛招募适合的运动员。</p>
              <p>它同时也是向成千上万年轻人展示国际现代五项联盟现代五项运动的绝佳机会。尝试通过计分系统来平衡不同运动的表现。这是一个允许全球运动员参 与角逐的竞赛体系，由他们的国家协会向国际现代五项联盟发送比赛成绩，进而纳入并维持现有的世界排名。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide  } from 'vue-awesome-swiper'

export default ({
  name: 'uipm',
  data: function () {
    return {
      itemIndex: 0,
      liItems: ['现代五项', '激光跑', '四项赛', '三项赛', '两项赛', '大师赛', '残奥五项', '世界学校两项赛'],
      notNextTick: true,
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto'
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    toggleTab(index) {
      this.itemIndex = index
    }
  },
  components: {
    swiper,
    swiperSlide
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>

