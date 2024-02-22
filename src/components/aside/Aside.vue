<template>
    <div class="aside">
      <el-menu
        :default-active="1"
        class="el-menu-vertical-demo"
  
      >
        <el-menu-item index="1">
          <el-icon><document /></el-icon>
          <span>2024-1-16</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Files /></el-icon>
          <span>2024-1-16</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Setting /></el-icon>
          <span>2024-1-16</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Notebook /></el-icon>
          <span>2024-1-16</span>
        </el-menu-item>
      </el-menu>
      <Version />
    </div>
  </template>
  
  <style scoped>
  .aside {
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #dcdfe6;
    border-top: 1px solid #dcdfe6;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 5px;
  }
  .el-menu {
    border-right: unset !important;
  }
  .el-menu-item {
    box-sizing: border-box;
    border-color: var(--el-menu-active-color);
  }
  .is-active {
    border-left: 2px solid;
  }
  </style>
  