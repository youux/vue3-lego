<template>
  <el-container>
    <el-aside></el-aside>
    <el-main>
      <el-header></el-header>
      <div class="page-content" :style="{height:contentHei+'px'}">
        <router-view />
      </div>
    </el-main>
    <el-aside></el-aside>
  </el-container>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  setup () {
    onMounted(() => {
      // 默认执行一次
      getHeight()
      // 改变窗口大小时执行
      window.onresize = () => getHeight()
    })
    // 定义默认值
    const data = reactive({
      contentHei: 0
    })
    // 获取高度
    const getHeight = () => {
      data.contentHei = window.innerHeight - 120
    }

    // 数据返回给模板
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  background-color: #e9eef3;
}
.el-aside {
  background-color: #fff;
}
.el-header {
  background-color: #fff;
}
.page-content {
  margin-top: 20px;
  background-color: #fff;
}

</style>
