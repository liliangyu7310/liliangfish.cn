<template>
  <div class="index">
      <!-- 侧边栏 -->
      <div class="side-menu">
          <h2 class="side-menu__tt">极客猿梦导航 <i class="el-icon-circle-check"></i></h2>
        
          <el-menu background-color="#30333c" text-color="#6b7386" active-text-color="#fff"> 

          <el-menu-item :index="index" v-for="(item,index) in navData" :key="index">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </el-menu>

          <el-button-group>
            <el-button type="primary" icon="el-icon-edit-outline">提交网站</el-button>
            <el-button type="primary">留言反馈<i class="el-icon-edit el-icon--right"></i></el-button>
          </el-button-group>
      </div>
      

      <!-- 主内容 -->
      <div class="content">
        <ClassifyItem :classifyData="navData"></ClassifyItem>
      </div>
      <GoTop></GoTop> 

     
  </div>  

</template>

<script>
import GoTop from "../component/GoTop";
import ClassifyItem from "../component/ClassifyItem";

export default {
  name: "index",
  components: {
    GoTop,
    ClassifyItem
  },
  data: function() {
    return {
      navData: [
        {
          title: '技术社区',
          icon: '',
          subNav: [
            {
              title: '掘金',
              href: 'www.juejin.com',
              des: '掘金是一个帮助开发者学习的高质量社区'
            },
            {
              title: 'CNDZ',
              href: 'www.juejin.com',
              des: '掘金是一个帮助开发者学习的高质量社区'
            }
          ]
        },
        {
          title: '技术文档',
          icon: '',
          subNav: [
            {
              title: '掘金',
              href: 'www.juejin.com',
              des: '掘金是一个帮助开发者学习的高质量社区'
            },
            {
              title: 'CNDZ',
              href: 'www.juejin.com',
              des: '掘金是一个帮助开发者学习的高质量社区'
            }
          ]
        }
      ],
    };
  },
  created: function() {
    
    
  }
};
</script>



<style lang="scss">
  .index {height: 100%;}

  .side-menu__tt {
    margin: 15px 0;
    text-align: center;
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
    height: 100%;
  }

  .content {
    margin: 20px 20px 20px 270px;
  }

  .el-button-group {
    bottom: 10px;
    left: calc(100% - 15.2em);
    position: absolute;
  }
  .el-button--primary {
    background-color: #2e2f31;
    border-color: #2e2f31;
  }
</style>



