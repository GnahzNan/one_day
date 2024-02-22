<template>
  <div class="timer-div" ref="root">
    <div class="time-title"><span>{{ timer.title }}: </span></div>
    <div> <el-text class="time-text">{{ showTime }}</el-text></div>
    <div class="option">
      <el-button type="primary" class="button" @click="removeComponent">删 除</el-button>
      <el-button type="primary" class="button" @click="stopTimer">停止计时器</el-button>
      <el-button type="primary" class="button" @click="startTimer">开始计时器</el-button>
    </div>
   
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  timer: {
    type: Object,
    default: null,
    required: true
  }
})
console.log(props.timer.timer)
const h = ref(0)
const m = ref(0)
const s = ref(0)
const showTime = ref('')
const timerId = ref()
const time = ref(props.timer.remainder_time)

const pad = (num: number) => `${num}`.padStart(2, '0')
const removeComponent = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.timer.isShow = false
}

const startTimer = () => {
  if (timerId.value) return
  timerId.value = setInterval(() => {
    if(time.value > 0){
      time.value -= 1
    }
    
    // eslint-disable-next-line vue/no-mutating-props
    props.timer.remainder_time = time.value
    h.value = Math.floor(time.value / 3600)
    m.value = Math.floor((time.value - h.value * 3600) / 60)
    s.value = time.value - h.value * 3600 - m.value * 60
    showTime.value = pad(h.value) + ':' + pad(m.value) + ':' + pad(s.value)
  }, 1000)
}

const showTimeFun = () =>{
    h.value = Math.floor(time.value / 3600)
    m.value = Math.floor((time.value - h.value * 3600) / 60)
    s.value = time.value - h.value * 3600 - m.value * 60
    showTime.value = pad(h.value) + ':' + pad(m.value) + ':' + pad(s.value)
} 
const stopTimer = () => {
  if (timerId.value) {
    clearInterval(timerId.value)
    timerId.value = null
  }
}

const chromeVersion = /Chrome\/([0-9.]+)/.exec(window?.navigator?.userAgent)?.[1]?.split('.')[0]
if (chromeVersion && parseInt(chromeVersion, 10) >= 88 && true) {
  const videoDom = document.createElement('video')
  const hiddenCanvas = document.createElement('canvas')
  videoDom.setAttribute('muted', '')
  videoDom.muted = true
  videoDom.setAttribute('autoplay', '')
  videoDom.autoplay = true
  videoDom.setAttribute('playsinline', '')
  videoDom.setAttribute('style', 'display:none')
  hiddenCanvas.setAttribute('style', 'display:none')
  hiddenCanvas.setAttribute('width', '1')
  hiddenCanvas.setAttribute('height', '1')
  hiddenCanvas.getContext('2d')?.fillRect(0, 0, 1, 1)
  videoDom.srcObject = hiddenCanvas?.captureStream()
}

onMounted(showTimeFun)
onUnmounted(stopTimer)
</script>

<style>
.timer-div {
  border: 1px solid #dcdfe6;
  border-radius: 5px !important;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  margin: 5px 5px 5px 5px;
}
.button {
  display: flex;
  float: right;
  margin: 5px 10px 10px 10px;
}
.time-title{
  width: 100px;
}
.time-text{
-webkit-box-sizing: content-box;
-moz-box-sizing: content-box;
box-sizing: content-box;
float: none;
margin: 0;
padding: 0;
border: none;
-webkit-border-radius: 0;
border-radius: 0;
font: normal normal bold 26px/2 Impact, Charcoal, sans-serif;
color: black;
text-align: center;
-webkit-transform-origin: 50% 50% 0;
transform-origin: 50% 50% 0;
}
.option {
  align-items: center;
  width: 100%;
}
</style>
