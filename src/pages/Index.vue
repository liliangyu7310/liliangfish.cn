<template>
  <div class="index">
      <!-- 侧边栏 -->
      <div class="side-menu">
          <h2 class="side-menu__tt">极客猿梦导航</h2>

          <ul class="side-menu__list">
              <li
                v-for="(item,index) in navData"
                :key="item.id"
                class="side-menu__item"
                :class="{active: index === activeIndex}"

              ><i class="iconfont icon-zixun side-menu__icon"></i><a
              class="side-menu__text"
              :href="['#'+item.title]"
              @click="toggle(index)"
              >{{item.title}}</a>
            </li>
          </ul>
      </div>


      <!-- 主内容 -->
      <div class="content">
        <div class="classify-item"
         v-for="(item,index) in navData"
         :key="item.id"
         :id="item.title"
         >
          <h4 class="classify-item__tt">
            <i class="iconfont icon-zixun"></i>
            <span>{{item.title}}</span>  
          </h4>

          <div class="classify-item__ct">
            <div class="nav-item"
            v-for="(navItem,indexs) in item.subData"
            :key="navItem.id"
            
            >
              <a :href=navItem.href>
                <div class="nav-item__main">
                  <div class="nav-item__logo">
                    <img :src=navItem.logo>
                  </div>
                  <span class="nav-item__tt">{{navItem.title}}</span>
                </div>
                <p class="nav-item__des">{{navItem.des}}</p>
              </a>

            </div>
          </div>   
        </div>
      </div>
  </div>

</template>

<script>
import data from '../api/index.js'


export default {
  name: "index",
  data: function() {
    return {
      activeIndex: 0,
      navData: [],
    }
  },

  methods: {
    
      toggle(indexs) {
          this.activeIndex = indexs;
      }

  },
  created: function() {
    this.$http.get('http://test.cn/api')
      .then(res => {
        this.navData = res.data;
        console.log(res.data);
      })
  }

};
</script>



<style lang="scss">
// 变量

// 颜色
$white: #fff;
$sideBgColor: #30333c;
$menuTxtColor: #6b7386;
$blue: #3668bd;

// 字体大小
$titleSize: 18px;
$menuTxtSize: 12px;

.index,
.side-menu {
  height: 100%;
}
.side-menu {
  position: fixed;
  background: #30333c;
  color: #6b7386;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  width: 248px;
  transition: all .5s;
  top: 0;
}
.side-menu__tt {
  color: #fff;
  text-align: center;
  font-weight: 500;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.04);
  font-size: $titleSize;
  margin-bottom: 0;
}
.side-menu__list {
    overflow-y: auto;
    height: 100vh;
}
.side-menu__item {
  font-size: $menuTxtSize;
  padding-left: 40px;
  height: 40px;
  line-height: 40px;
}
.side-menu__text {
  text-decoration: none;
  display: inline-block;
}
.side-menu__text,
.side-menu__icon {
  color: #6b7386;
  
}

.side-menu__item.active,
.side-menu__item:hover {
  .side-menu__text,
  .side-menu__icon { color: #fff}
}
i.iconfont {
  padding-right: 5px;
}



// 主要内容

.content {
  margin: 20px;
  margin-left: calc(248px + 20px);

}
.classify-item {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
}
.classify-item__ct {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.nav-item {
  width: 25%;
  box-sizing: border-box;
  padding-right: 15px;
  padding-top: 15px;
  transition: all .3s;


  >a {
    padding: 25px 15px;
    display: inherit;
    text-decoration: none;
    height: 70px;
    border: 1px solid #e4ecf3;
    box-shadow: 1px 2px 3px #f2f6f8;
    border-radius: 3px;
  }
}
.nav-item__main {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}
.nav-item__des {
  font-size: 12px;
  color: gray;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.nav-item__logo {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
    min-width: 40px;
}


// 响应式
@media (max-width: 1024px) {
  .nav-item {width: 33.3%}
}
@media (max-width: 780px) {
  .nav-item {
    width:50%;
    &:nth-child(even) {padding-right: 0}
  }

}

</style>



