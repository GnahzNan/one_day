<template>
  <div class="main">
    <el-row :gutter="0" class="main-top">
      <div style="width: 100%">
        <div class="input-area">
          <span>目 标 内 容 :</span>
          <el-input v-model="inputTitle" type="text" size="large" placeholder="请输入内容" />
          <span>时 长（H）: </span>
          <el-input v-model="inputTime" type="text" size="large" placeholder="请输入内容" />
        </div>
        <div class="option-area">
          <el-button type="primary" @click="add">添 加</el-button>
        </div>
      </div>
    </el-row>
    <div class="main-content">
      <Timer v-for="(value, index) in showItem" :key="index" :timer="value" />
    </div>
  </div>
</template>

<script setup>
import Timer from './Timer.vue'
import { ref, reactive, computed } from 'vue'
import moment from 'moment'
const inputTitle = ref('')
const inputTime = ref(0)
const today = moment().format('YYYY-MM-DD')

const values = ref(
  localStorage.getItem(today) == null ? [ reactive({
      title: "看视频",
      totle_time: 7200,
      remainder_time: 7200,
      isShow: true
    }), 
    reactive({
      title: "做视频",
      totle_time: 10800,
      remainder_time: 10800,
      isShow: true
    }),
    reactive({
      title: "gp",
      totle_time: 7200,
      remainder_time: 7200,
      isShow: true
    })] : JSON.parse(localStorage.getItem(today))
)
if (localStorage.getItem(today) == null){
  localStorage.setItem(today, JSON.stringify(values.value))
}
console.log(values.value)
const add = () => {
  const setting_time = inputTime.value * 3600
  values.value.push(
    reactive({
      title: inputTitle.value,
      totle_time: setting_time,
      remainder_time: setting_time,
      isShow: true
    })
  )
  localStorage.setItem(today, JSON.stringify(values.value))
}

const showItem = computed(() => {
  if (values.value != null) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    values.value = values.value.filter((item) => item.isShow == true)
    localStorage.setItem(today, JSON.stringify(values.value))
    return values.value
  }
  return []
})
</script>

<style scoped>
.main {
  background-color: #f2f3f5;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-self: start;
}
.main-top {
  border: 1px solid #dcdfe6;
  border-radius: 5px !important;
  margin: 0px 2px 10px 2px;
}
.main-content {
  border: 1px solid #dcdfe6;
  border-radius: 5px !important;
  margin: 0px 2px 10px 2px;
  padding: 5px 5px 10px 5px;
}
.input-area {
  border: 1px solid #dcdfe6;
  border-radius: 5px !important;
  display: flex;
  margin: 10px 10px 0px 10px;
}

.input-area span {
  border-radius: 5px !important;
  width: 50%;
  margin-left: 10px;
  align-items: center;
  display: flex;
}
.option-area {
  border: 1px solid #dcdfe6;
  border-radius: 5px !important;
  display: flex;
  float: right;
  margin: 10px 10px 10px 10px;
}
.main-config-page {
  width: 100%;
  height: calc(100vh - 102px);
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  overflow: hidden;
}
.table-tool {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  height: 68px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menu .el-menu {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  height: 30px;
}
:deep(.el-upload-list) {
  display: none;
}
:deep(.el-textarea__inner) {
  height: calc(100vh - 130px);
  resize: none;
  border-radius: 5px !important;
}
:deep(textarea::-webkit-scrollbar) {
  width: 5px;
}
:deep(textarea::-webkit-scrollbar-thumb) {
  width: 5px;
  position: relative;
  display: block;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgb(183, 192, 201);
  transition: 0.3 background-color;
  opacity: 0.3;
}
.doc-frame {
  width: 100%;
  height: 100%;
  border: medium none;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
