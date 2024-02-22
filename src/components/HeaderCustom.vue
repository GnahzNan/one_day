<template>
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">文 件</el-menu-item>
      <el-sub-menu index="2">
        <template #title> 统 计</template>
        <el-menu-item index="2-1">历 史</el-menu-item>
        <el-menu-item index="2-2">达 成</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">关 于</el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  <style scoped>
  .el-menu {
    width: 100%;
  }
  </style>
  