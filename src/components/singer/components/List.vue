<template>
  <Scroll>
    <div class="list">
      <div class="list-content">
        <div class="area" v-for="item in singers" :key="item.Fsinger_id">
          <div class="title">热门</div>
          <div class="item">
            <img
              src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
              alt=""
            />
            <p>薛之谦</p>
          </div>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "base/scroll/scroll.vue";
export default {
  components: { Scroll },
  props: {
    singers: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    
  }
};
</script>

<style lang="stylus" scoped>
.area
  .title
    height: 30px
    line-height: 30px
    padding-left: 20px
    color: hsla(0,0%,100%,.5)
    font-size: 12px
    background: #333
  .item
    display: flex
    align-items: center
    padding: 20px 0 0 30px
    img
      width 50px
      height 50px
      border-radius 50%
    p
      color: hsla(0,0%,100%,.5)
      font-size: 14px
      margin-left: 20px
</style>
