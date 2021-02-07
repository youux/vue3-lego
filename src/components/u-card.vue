<template>
  <div class="u-card-wrap">
    <div v-if="header" class="u-card-header">
      <slot name="header"></slot>
    </div>
    <div class="u-card-body">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'u-card',
  setup (props, { slots }) {
    const header = slots.header()[0].children
    return {
      header
    }
  }
})
</script>

<style lang="scss" scoped>
.u-card-wrap {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
.u-card-header {
  padding: 10px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.u-card-body {
  padding: 16px;
}
</style>
