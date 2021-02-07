<template>
  <el-container>
    <!-- 列表 -->
    <el-aside>
      <List :items="menuList" />
    </el-aside>
    <el-main>
      <!-- 操作 -->
      <el-header>
        <Handle />
      </el-header>
      <!-- 展示 -->
      <div class="page-content" :style="{height:contentHei+'px'}">
        <router-view />
      </div>
    </el-main>
    <!-- 组件设置 -->
    <el-aside>
      <!-- 设置 -->
      <Setting />
    </el-aside>
  </el-container>
</template>

<script>
import List from './list'
import Setting from './setting'
import Handle from './handle'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  components: {
    List,
    Setting,
    Handle
  },
  setup () {
    onMounted(() => {
      // 默认执行一次
      getHeight()
      // 改变窗口大小时执行
      window.onresize = () => getHeight()
    })
    // 定义默认值
    const data = reactive({
      contentHei: 0,
      menuList: [
        {
          id: 1,
          label: '组件1',
          preview: () => '<el-button>按钮</el-button>'
        },
        {
          id: 2,
          preview: () => '<el-radio v-model="radio" label="1">备选项</el-radio>'
        }
      ]
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
.page-content,
.el-header,
.el-aside {
  background-color: #fff;
}

.page-content {
  margin-top: 20px;
}

</style>
