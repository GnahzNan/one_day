<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><document /></el-icon>
          <span>历  史</span>
        </template>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
        <el-menu-item index="1-1">2024-1-16</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title></template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Setting,
  } from '@element-plus/icons-vue'
   
  const isCollapse = ref(true)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 1000px;
  }
  .el-menu-vertical-demo{
    height: auto;
  }
  </style>