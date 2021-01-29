<template>
  <div>singer</div>
</template>

<script>
import { getSingerList } from "src/api/singer";
import { ERR_OK } from "src/api/config";
export default {
  name: "Singer",
  data() {
    return {
      singers: [],
    }
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list;
          console.log(this.singers);
        }
      });
    }
  }
};
</script>

<style></style>
