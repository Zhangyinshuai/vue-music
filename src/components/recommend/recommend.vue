<template>
  <div class="recommend">
    <Scroll :data="discList" class="recommend-content" ref="scroll">
      <div>
        <div class="slider-wrapper">
          <Slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="" />
              </a>
            </div>
          </Slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" :key="item.dissid" class="item">
              <div class="icon">
                <img
                  width="60"
                  height="60"
                  v-lazy="item.imgurl"
                  @load="loadImage"
                  alt=""
                />
              </div>
              <div class="text">
                <h2 class="name">{{ item.creator.name }}</h2>
                <p class="desc">{{ item.dissname }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <Loading title="载入ing"></Loading>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from "src/api/recommend";
import { ERR_OK } from "src/api/config";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
export default {
  name: "Recommend",
  data() {
    return {
      recommends: [
        {
          id: 1,
          picUrl:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3550532.jpg",
          linkUrl: "https://y.qq.com/n/yqq/album/000M9wDN3XGJGc.html"
        },
        {
          id: 2,
          picUrl:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3551776.jpg",
          linkUrl: "https://y.qq.com/n/yqq/album/001PEgrz02yT4N.html"
        },
        {
          id: 3,
          picUrl:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3555150.jpg",
          linkUrl: "https://y.qq.com/n/yqq/album/003yT1CT2b6Iqn.html"
        },
        {
          id: 4,
          picUrl:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3551793.jpg",
          linkUrl: "https://y.qq.com/n/yqq/album/000pr1SZ2fEnn9.html"
        },
        {
          id: 5,
          picUrl:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3556606.png",
          linkUrl: "https://y.qq.com/n/yqq/album/001qnBtD39LcRP.html"
        }
      ],
      discList: []
    };
  },
  created() {
    console.log("recommend create");
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend()
        .then(res => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getDiscList() {
      getDiscList()
        .then(res => {
          if (res.code === ERR_OK) {
            // console.log(res.data.list);
            this.discList = res.data.list;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
        console.log("图片加载完成了");
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
};
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
        height: 100%
        overflow: hidden
        .slider-wrapper
            position: relative
            width: 100%
            overflow: hidden
        .recommend-list
            .list-title
                height: 65px
                line-height: 65px
                text-align: center
                font-size: $font-size-medium
                color: $color-theme
            .item
                display: flex
                box-sizing: border-box
                align-items: center  // 侧轴(垂直)方向居中
                padding: 0 20px 20px 20px
                .icon
                    flex: 0 0 60px
                    width: 60px
                    padding-right: 20px
                .text
                    display: flex
                    flex-direction: column
                    justify-content: center
                    flex: 1
                    line-height: 20px
                    overflow: hidden
                    font-size: $font-size-medium
                    .name
                        margin-bottom: 10px
                        color: $color-text
                    .desc
                        color: $color-text-d
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
</style>
