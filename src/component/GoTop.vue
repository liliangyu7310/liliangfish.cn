<template>
    <div v-if="isShow" id="fixedBar" @click="goTop"><svg class="Zi Zi--BackToTop" title="回到顶部" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path></svg></div>
</template>


<script>
export default {
  name: "GoTop",
  data() {
      return {
          isShow: false,
          scrollDis: 0,
      }
  },

  methods: {
      goTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
      handleScroll() {
            var selfScrollDis = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(selfScrollDis < this.scrollDis) {
                this.isShow = true;
                // 马上到达顶部隐藏
                if(selfScrollDis <= 300) {
                    this.isShow = false;
                    this.scrollDis = 0;
                }
            } else {

                this.scrollDis = selfScrollDis;
                this.isShow = false;
            }

      }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
};
</script>



<style lang="scss">
    #fixedBar {
        padding: 10px;
        background: #fff;
        width: 25px;
        height: 25px;
        position: fixed;
        right: 10px;
        bottom: 30px;
        z-index: 9999;
        box-shadow: 0 0 20 #eee;
        box-shadow: 0 0 5px #ddd;
        cursor: pointer;
        svg{
            color: #9e9e9e;
        }
    }
</style>
