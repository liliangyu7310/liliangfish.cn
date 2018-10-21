<template>
  <div class="index">
      <!-- 侧边栏 -->
      <div class="side-menu">
          <h2 class="side-menu__tt">极客猿梦导航</h2>
        
          <el-menu background-color="#30333c" text-color="#6b7386" active-text-color="#fff"> 

          <el-menu-item :index=index v-for="(item,index) in navData" :key="index">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </el-menu>
      </div>
      

      <!-- 主内容 -->
      <div class="content">
        <ClassifyItem :classifyData="navData"></ClassifyItem>
      </div>

      <GoTop></GoTop> 

      <!-- 侧边btn组 -->
      <div class="side-btn__group">
        <el-tooltip class="side-btn__item item" effect="dark" content="提交网站" placement="left-start">
          <el-button @click="dialogFormVisible = true"><i class="side-btn__icon el-icon-upload2"></i></el-button>
        </el-tooltip>
        <el-tooltip class="side-btn__item item" effect="dark" content="留言反馈" placement="left-start">
          <el-button><i class="side-btn__icon el-icon-edit-outline"></i></el-button>
        </el-tooltip>

      </div>

      <el-dialog title="填写网站信息" :visible.sync="dialogFormVisible">
        <el-form label-position="left" label-width="80px" :model="form">


        <el-form-item label="网站分类">
          <el-select v-model="form.title" placeholder="网站分类">
            <el-option label="技术社区" value="技术社区"></el-option>
            <el-option label="技术文档" value="技术文档"></el-option>
            <el-option label="技术博客" value="技术博客"></el-option>
            <el-option label="UI设计" value="UI设计"></el-option>
            <el-option label="图片资源" value="图片资源"></el-option>
            <el-option label="软件资源" value="软件资源"></el-option>
            <el-option label="网站教程" value="网站教程"></el-option>
            <el-option label="视频教程" value="视频教程"></el-option>
            <el-option label="在线工具" value="在线工具"></el-option>
            <el-option label="SEO优化" value="SEO优化"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="网站名字">
          <el-input v-model="form.subData.name"></el-input>
        </el-form-item>
        <el-form-item label="网站描述">
          <el-input v-model="form.subData.des"></el-input>
        </el-form-item>
        <el-form-item label="网站链接">
          <el-input v-model="form.subData.href"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitData">确 定</el-button>
      </div>
    </el-dialog>

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
      dialogFormVisible: false,
      form: {
        title: '',
        subData: {
          name: '',
          href: '',
          des: '',
          logo: ''
        }
      },
      navData: [
       
      ]
    };
  },
  methods:　{
    submitData() {
      var _this = this
      // 有链接的话就存logo
      if(this.form.subData.href) this.form.subData.logo = this.form.subData.href + 'favicon.ico'

      this.$http.post('/api/data', this.form).then((res) => {
        console.log(res)
        _this.getAllData()
      })
      this.dialogFormVisible = false
    },

    getAllData() {
      this.$http.get('/api/data').then((res) => {
        console.log(res)
        this.navData = res.data
      })
    }
  },
  created: function() {
    this.getAllData()
    console.log(this.href)
  }
};
</script>



<style lang="scss">
.index {
  height: 100%;
}

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
  transition: all 0.5s;
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

// 侧边btn
.side-btn__group {
  position: fixed;
  right: 0;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  .side-btn__item:first-child {
    position: absolute;
    right: 0;
    top: -50px;
  }
  .side-btn__item {
    display: block;
    margin-bottom: 5px;
    margin-left: 0;
    padding: 10px;
    width: 25px;
    height: 25px;
    box-sizing: unset;
    border-radius: 0;
    box-shadow: 0 0 5px #ddd;
  }
  .side-btn__icon {
    font-size: 20px;
  }
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
  .classify-item {
    padding: 0;
  }
}
</style>



