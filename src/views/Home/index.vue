<template>
  <p>count的值为：{{count}}</p>
  <p>double的值为：{{double}}</p>
  <el-button @click="add">增加count值</el-button>
  <p>title的值为：{{title}}</p>
  <el-button @click="edit">修改title的值</el-button>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watchEffect } from 'vue'
export default {
  name: 'Home',
  setup () {
    const count = ref(0)
    const add = () => count.value++

    const state = reactive({
      title: 'vue3.0',
      edit: () => {
        state.title = 'vue3.0+JS'
      }
    })

    const double = computed(() => count.value * 2)

    onMounted(() => {
      console.log('onMouted')
    })

    watchEffect(() => { console.log('watchEffect', count.value) })

    setTimeout(() => {
      count.value++
    }, 100)

    return {
      ...toRefs(state),
      count,
      add,
      double
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
