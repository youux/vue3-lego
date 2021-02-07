<template>
  <div class="menu-wrap">
    <div class="menu-title">
      <i class="el-icon-menu"></i>
      <span class="name">组件列表</span>
    </div>
    <div class="menu-item">
      <u-card class="item" v-for="item in menuList" :key="item.id" shadow="hover">
        <template #header>{{item.title}}</template>
        <p>1111</p>
      </u-card>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import uCard from '../../components/u-card'

export default {
  name: 'menu-list',
  components: {
    uCard
  },
  setup () {
    const data = reactive({
      menuList: [
        {
          id: 1,
          title: '组件1'
        },
        {
          id: 2
        }
      ]
    })
    return {
      ...toRefs(data)
    }
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
