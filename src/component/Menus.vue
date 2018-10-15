<template>
      <ul class="side-menu__list">
        <li
        v-for="(item,index) in menuData.data"
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
</template>


<script>

export default {
    name: "menus",
    props: ['menuData'],
    data: function() {
        return {
           activeIndex: 0,
        }
    },
    methods: {
      toggle(indexs) {
          this.activeIndex = indexs;
      }

  }


}
</script>



<style lang="scss">

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
  font-size: 18px;
  margin-bottom: 0;
}
.side-menu__list {
    overflow-y: auto;
    height: 100vh;
}
.side-menu__item {
  font-size: 12px;
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



</style>
