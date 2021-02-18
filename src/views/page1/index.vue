<template>
  <div class="page">
    <p>vue3使用css实现主题切换</p>

    <p>
      切换主题:
      <el-switch v-model="value" active-color="#2c3e50" inactive-color="#C0C4CC" @change="changeCut(value)"></el-switch>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'page1',
  setup () {
    const state = reactive({
      value: true,
      changeCut: (val) => {
        if (!val) {
          document.documentElement.setAttribute('theme', 'light')
        } else {
          document.documentElement.removeAttribute('theme')
        }
      }
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: var(--color);
}

</style>
