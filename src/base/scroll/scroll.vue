<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    data: {
      type: Array,
      default: null
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: this.click
        });
      } else {
        this.scroll.refresh();
      }
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style></style>
