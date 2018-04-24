<template>
  <div>
    <div slot="uipmpe"></div>
    <div class="structure contextmenu main-top">
      <!--导航栏-->
      <div class="pmNav">
        <swiper class="swiperbox" :options="swiperOption" ref="mySwiper">
          <swiper-slide class="slides" :class="{bar: index === itemIndex}" v-for="(item, index) in liItems" :key="index">
            <a @click="toggleTab(index)" ref="myDiv">{{item}}</a>
          </swiper-slide>
        </swiper>
        <!-- <div class="slideBar">
          <div class="bar"></div>
        </div> -->
      </div>
      <div class="section-container">
        <!--历史-->
        <section id="sections" v-show="itemIndex === 0">
          <div class="history">
            <div class="history-old">             
              <h3>希腊奥运上的古代五项</h3>
              <div class="img1">
                <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/ancient-greece-pentathlon.jpg" alt="">
              </div>
              <p>古代五项运动（包括体育场总长的跑步，跳高，投掷矛，投掷铁饼和摔跤）于公元前708年第一次在第十八届奥林匹克运动会上首次推出，在奥运会上具有独特的重要地位。整场比赛的高潮出现在获胜者被推崇为“Victor Ludorum”之时。</p>
              <p>现代奥运创始人皮埃尔·德·顾拜旦男爵广为分享了对他古代五代的热爱，并从1909年起，他试图将赛事重新纳入奥运计划。两年后，布达佩斯（匈牙利）国际奥委会第十四届会议的时刻，男爵当时说：“运动的圣灵照亮了我的同事，他们接受了我非常重视的这项比赛”</p>
            </div>
            <div class="history-new">
              <h3>现代五项</h3>
              <div class="img1">
                <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/running1912-458x294_1.jpg" alt="">
              </div>
              <p>现代五项自1912年被引入斯德哥尔摩（瑞典）第五届奥运会，包括了现代项目的射击、击剑、游泳、马术和跑步，沿袭了古代五项的精神。</p>
              <p>这也是顾拜旦先生所坚信的，这项运动比其它项目更能“测试一个人精神和身体的机能和技巧，从而产生最理想的、完美的运动员。”</p>
              <p>这种新的体育活动被热烈采纳，它的本质便是在不断变化的环境下，对自身勇气、协调性、身体素质、自律和灵活性的内在要求。一个年轻的美国中尉，后来成为着名的二战将军乔治·巴顿，在第一届的奥运现代五项竞赛中排名第五。</p>
              <p>五项运动所需要的身体和智力技能的双重要求，也意味着运动员能够在三至四次奥运会中竞争。 这是因为虽然游泳和跑步的时间将随着年龄的增长而下降，技巧性项目的经验和技能往往会增加。迄今为止，现代五项中最古老的奥运金牌得主（团体赛中）是莫斯科1980年奥运会时的37岁的帕维尔·莱德涅夫（前苏联）。在同一届奥运会上，个人金牌得主（前苏联）Anatoly Starostin是20岁。</p>
            </div>
            <div class="century">
              <h3>21世纪的运动项目</h3>
              <p>今天，无论男子还是女子都在同一天内完成五个项目，对于例如东京2020年奥运会这样的重大赛事，所有项目将在同一个体育场内举行，让观众拥有完整观赛的体验。</p>
              <p>每个小项的积分系统都是基于标准表现获得1000分。 最后一个小项的开始顺序是有时间差的让步跑形式，这意味着比赛的胜者是第一名穿过终点线的运动员。 联合了跑步和射击为一体，2009年被作为比赛的高潮推出，两年以后，激光枪被引入比赛，代替了气手枪。</p>
              <p>国际现代五项联盟现在每年都为少年、青年、成年运动员举办世界锦标赛以及世界杯系列赛，包括了四场分站赛和世界杯总决赛。除了同一赛场竞技之外，其他的创新还包括激光跑擂台赛，从观众的角度看今天的现代五项，已经和顾拜旦时期的现代五项运动大相径庭。但这项运动的宗旨，价值观以及本质的挑战性，并未随着时间的变迁而改变。</p>
            </div>
            <div class="evolution">
              <h3>一百年间的演变</h3>
              <div class="evolution-year" v-for="(itemdata, index) in evolution" :key="index">
                <p>{{itemdata.year}}</p>
                <p>{{itemdata.text}}</p>
              </div>
            </div>
          </div>
        </section>
        <!--主席-->
        <section id="sections" v-show="itemIndex === 1">
          <div class="chairman">
            <div class="main-img">
              <img src="https://ohc5vthqm.qnssl.com/uipmImg/2017-6-29/president-schormann-web_3.jpg" alt="">
            </div>
            <h4>克劳斯·舒曼博士</h4>
            <div class="discripts">
              <p>从1993年开始担任国际现代五项联盟（UIPM）主席的职位。他同时也担任国际现代五项暨冬季两项联盟主席，一直到1993年这两项运动分开各自独立。</p>
              <p>在他早前的职业生涯中，舒曼博士曾接受教师的训练，专注于艺术，地理和运动。他对于发展这项运动的兴趣使得他作为成员参与了黑森的许多代表团和部门，包括了：黑森文化部，黑森室内&运动部以及经济部。他目前仍是黑森室内&运动部的代表。</p>
              <p>从1965年开始，舒曼博士就以各种角色参与现代五项运动，始终展示出高水平的对于这项运动的自发认同。最值得一提的是他从1984开始担任德国现代五项协会主席。2005年，舒曼博士被授予美因茨约翰内斯•古登堡大学 的运动科学荣誉博士学位。他在德国，中国台北、中国，哈萨克斯坦，立陶宛和摩纳哥收到了数不清的奖项和荣誉和奖励，对他服务于这项运动的予以认同。在2007年，他也成为了德国奥运学院的执委。</p>
              <p>舒曼博士曾发表过多篇关于现代五项的文章和著作，以及关于奥林匹克运动发展的论文。他同时也与曼弗雷德·梅辛格教授、诺伯特·缪勒教授一起，合作研究和出版了“顾拜旦对运动和艺术统一的假设及悉尼奥运旅游业产生的共振—2012年申办奥运的后果”。</p>
              <p>在国际奥林匹克运动中，舒曼博士自1994年开始成为国际奥委会文化和奥运教育工作组的一员和协调人员。在2008年他成为了国际奥委会青奥会小组委员会的主任，同时也是教育事务特设工作组的一员，联系国际奥委会各个委员会的文化和奥林匹克教育以及所有运动项目。</p>
              <p>舒曼博士目前已婚，育有两个孩子，一个孙子。</p>
            </div>
          </div>
        </section>
        <!--执行董事会-->
        <section id="sections" v-show="itemIndex === 2">
          <div class="board">
            <div class="board-box">
              <div class="person" v-for="(boardItem, index) in boardJson" :key="index">
                <div class="comm-img">
                  <img :src="boardItem.imgUrl" alt="">
                </div>
                <div class="img-discript">
                  <div class="name">{{boardItem.name}}</div>
                  <p>{{boardItem.job}}</p>
                  <p>{{boardItem.discript}}</p>
                  <p>
                    <span>{{boardItem.span}}</span>
                    <span>{{boardItem.langague}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--委员会-->
        <section id="sections" v-show="itemIndex === 3">
          <div class="committee">              
            <div class="committee-box">
              <div class="committee-box-section" v-for="(items, index) in committee" :key="index">
                <h3>{{items.title}}</h3>
                <div class="committee-box-section-chairman">
                  <span>主席：</span>
                  <span>{{items.chairman}}</span>
                </div>
                <div class="committee-box-section-member">
                  <p>成员：</p>
                  <p v-for="mItem in items.member.m">{{mItem}}</p>
                </div>
                <div class="committee-box-section-coordinator">
                  <span>协调员：</span>
                  <span>{{items.coordinator}}</span>
                </div>
                <div class="committee-box-section-description">
                  {{items.description}}
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--总部-->
        <section id="sections" v-show="itemIndex === 4">
          <div class="headquarters">
            <div class="headquarters-box">
              <div class="headquarters-box-member" v-for="(item, index) in quarters" :key="index">
                <div class="img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <h3>{{item.name}}</h3>
                <span>{{item.job}}</span>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide  } from 'vue-awesome-swiper'
import { mapActions, mapGetters} from 'vuex'
import store from 'store.js'

export default ({
  name: 'uipmpe',
  data: function () {
    return {
      itemIndex: 0,
      liItems: ['历史', '主席', '执行董事会', '委员会', '总部'],
      notNextTick: true,
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto'
      },
      evolution: [],
      boardJson: [],
      committee: [],
      quarters: []
    }
  },
  computed: {
    ...mapGetters([
      'getCount',
      'changeMove'
    ]),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created: function () {
    // console.log(this.$route.meta.title)
    //console.log(this)
  },
  mounted: function () {
    this.getEvolData()
    this.getBoardData()
    this.getCommitData()
    this.getHeadquartersData()
  },
  methods: {
    toggleTab(index) {
      this.itemIndex = index
      // console.log(this.$refs.myDiv)
    },
    getEvolData() {
      this.$http.get('./static/json/evolution.json')
        .then(res => {
          this.evolution = res.data
        })
    },
    getBoardData() {
      this.$http.get('./static/json/board.json')
        .then(res => {
          this.boardJson = res.data
        })
    },
    getCommitData() {
      this.$http.get('./static/json/committee.json')
        .then(res => {
          this.committee = res.data
        })
    },
    getHeadquartersData() {
      this.$http.get('./static/json/headquarters.json')
        .then(res => {
          this.quarters = res.data
        })
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
