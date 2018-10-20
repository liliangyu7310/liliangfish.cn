<template>
    <div>
        <div class="classify-item"
         v-for="item in classifyData"
         :key="item.id"
         :id="item.title">
        <h4 class="classify-item__tt">
        <i class="iconfont icon-zixun"></i>
        <span>{{item.title}}</span>  
        </h4>

        <ul class="classify-item__ct">
          <li class="nav-item"
          v-for="navItem in item.subNav"
          :key="navItem.id">
              <a :href=navItem.href>
              <div class="nav-item__main">
                  <div class="nav-item__logo">
                  <img :src="navItem.logo">
                  </div>
                  <span class="nav-item__tt">{{navItem.title}}</span>
              </div>
              <p class="nav-item__des multi-line-hide">{{navItem.des}}</p>
              </a>
            </li>
        </ul>
        </div>
    </div>
</template>


<script>
export default {
  name: "classifyItem",
  props: ["classifyData"],
  data: function() {
    return {
      websiteLogo: ''
    }
  },

  
};
</script>



<style lang="scss">
.classify-item {
  padding: 20px;
  margin-bottom: 15px;
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
  transition: all 0.3s;
  
  > a {
    padding: 25px 15px;
    display: inherit;
    text-decoration: none;
    height: 70px;
    border: 1px solid #e4ecf3;
    box-shadow: 1px 2px 3px #f2f6f8;
    border-radius: 3px;
    background: #fff;
    &:hover {
      box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
      transition: all 0.3s ease;
      transform: translateY(-6px);
    }
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
}
.nav-item__logo {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
  min-width: 40px;
}

.multi-line-hide {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
