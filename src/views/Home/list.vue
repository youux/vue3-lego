<template>
  <div class="menu-wrap">
    <div class="menu-title">
      <i class="el-icon-menu"></i>
      <span class="name">组件列表</span>
    </div>
    <div class="menu-item">
      <u-card class="item" v-for="item in items" :key="item.id" shadow="hover">
        <template #header>{{item.label}}</template>
        {{item.preview()}}
      </u-card>
    </div>
  </div>
</template>

<script>
import uCard from '../../components/u-card'

export default {
  name: 'menu-list',
  components: {
    uCard
  },
  props: ['items'],
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.menu-wrap {
  padding: 20px;
}
.menu-title {
  font-size: 18px;
  .name {
    margin-left: 6px;
  }
}
.menu-item {
  margin-top: 20px;
  .item {
    margin-top: 10px;
  }
}
</style>
