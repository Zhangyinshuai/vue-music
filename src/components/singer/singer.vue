<template>
  <div>
    <List :singers="singers"></List>
  </div>
</template>

<script>
import { getSingerList } from "src/api/singer";
import { ERR_OK } from "src/api/config";
import List from "./components/List";
const HOT_NAME = "热门城市";
const HOT_SINGER_LEN = 10;
export default {
  name: "Singer",
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list;
          console.log(this._normalize(this.singers));
        }
      });
    },
    _normalize(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index <= HOT_SINGER_LEN) {
          map.hot.items.push({
            name: item.Fsinger_name,
            id: item.Fsinger_mid,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
          });
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push({
          name: item.Fsinger_name,
          id: item.Fsinger_mid,
          avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
        });
      });
      return map;
    }
  },
  components: {
    List
  }
};
</script>

<style>
  
</style> 
