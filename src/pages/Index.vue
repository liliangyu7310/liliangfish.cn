<template>
  <div class="index">
      <!-- 侧边栏 -->
      <div class="side-menu">
          <h2 class="side-menu__tt">极客猿梦导航</h2>
          <Menus :menuData="navData"></Menus>

        <!-- 按钮组 -->
        <div class="btn-group">
          <p class="btn-group__item">
            <i class="iconfont icon-daohang"></i>
            <span>提交网站</span>
            <i class="icon-arrow"></i>

          </p>

          <p class="btn-group__item">
            <i class="iconfont icon-liuyan"></i>
            <span>留言反馈</span>
            <i class="icon-arrow"></i>

          </p>
        </div>
      </div>
      

      <!-- 主内容 -->
      <div class="content">
        <ClassifyItem :classifyData="navData"></ClassifyItem>
      </div>
      <GoTop></GoTop> 

     
  </div>  

</template>

<script>
import Menus from "../component/Menus";
import ClassifyItem from "../component/ClassifyItem";
import GoTop from "../component/GoTop";

export default {
  name: "index",
  components: {
    Menus,
    ClassifyItem,
    GoTop
  },
  data: function() {
    return {
      navData: [],
    };
  },
  created: function() {
    var _this = this
    this.$http.get("/api").then((res) => {
        _this.navData = res.data;
    })

    
  }
};
</script>



<style lang="scss">
// 颜色
$white: #fff;
$sideBgColor: #30333c;
$menuTxtColor: #6b7386;
$blue: #3668bd;

// 主要内容

.content {
  margin: 20px;
  margin-left: calc(248px + 20px);
}

.btn-group__item {
  display: block;
  cursor: pointer;
  line-height: 2.5;
  padding-left: 10px;
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
  &:hover {
    background: #222;
  }
  span {
    font-size: 14px;
    flex: 1;
  }
}
.icon-arrow {
  position: absolute;
  width: 7px;
  height: 7px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transform: rotate(45deg);
  right: 10px;
}

// 响应式
@media (max-width: 1024px) {
  .nav-item {
    width: 33.3%;
  }
}
@media (max-width: 780px) {
  .nav-item {
    width: 50%;
    &:nth-child(even) {
      padding-right: 0;
    }
  }
}
@media (max-width: 680px) {
  .side-menu {
    display: none;
  }
  .content {
    margin-left: 20px;
  }
}
@media (max-width: 540px) {
  .content {
    margin: 10px;
  }
  .nav-item {
    padding-right: 5px;
    padding-top: 10px;
    > a {
      padding: 20px 10px;
    }
  }
  h4.classify-item__tt {
    padding: 5px 0 10px;
  }
}
</style>



