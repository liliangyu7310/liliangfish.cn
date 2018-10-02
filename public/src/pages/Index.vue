<template>
  <div class="index">
      <!-- 侧边栏 -->
      <div class="side-menu">
          <h2 class="side-menu__tt">极客猿梦导航</h2>

          <ul class="side-menu__list">
              <l class="side-menu__item"></l>
          </ul>
      </div>
  </div>

</template>

<script>
export default {
    name: 'index',
    data: function() {
        return {
            navData: [],
        }
    },
    methods: {
        getData: function() {
            this.navData = this.$http.get('http://localhost:8080/data.json');
        }
    },
    mounted: function() {
        this.getData();
    }

}
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
}
.side-menu__tt {
    color: #fff;
    text-align: center;
    font-weight: 500;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(255,255,255,.04);
    font-size: $titleSize;
}

.side-menu__item {
    padding: 15px 0;
    font-size: $menuTxtSize;
}


</style>



