<template>
  <div class="section">
    <h2>窗口操作测试</h2>

    <div class="card">
      <h3>打开新窗口</h3>
      <div class="form-group">
        <input
          v-model="windowUrl"
          placeholder="URL (如: https://example.com)"
          class="input"
        />
        <select v-model="windowTarget" class="input">
          <option value="_blank">新窗口 (_blank)</option>
          <option value="_self">当前窗口 (_self)</option>
          <option value="_parent">父窗口 (_parent)</option>
          <option value="_top">顶级窗口 (_top)</option>
        </select>
      </div>
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="windowNoopener" />
          <span>noopener (默认开启)</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="windowNoreferrer" />
          <span>noreferrer (默认开启)</span>
        </label>
      </div>
      <div class="buttons">
        <button @click="openWindow">打开窗口</button>
      </div>
      <div v-if="windowResult" class="result">
        {{ windowResult }}
      </div>
    </div>

    <div class="card">
      <h3>在新窗口打开路由</h3>
      <div class="form-group">
        <input
          v-model="routePath"
          placeholder="路由路径 (如: /settings)"
          class="input"
        />
      </div>
      <div class="info-box">
        <strong>当前 URL:</strong> {{ currentUrl }}
      </div>
      <div class="buttons">
        <button @click="openNewWindowRoute">在新窗口打开路由</button>
      </div>
      <div v-if="routeResult" class="result">
        {{ routeResult }}
      </div>
    </div>

    <div class="card">
      <h3>窗口信息</h3>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">窗口宽度:</span>
          <span class="value">{{ windowWidth }} px</span>
        </div>
        <div class="info-item">
          <span class="label">窗口高度:</span>
          <span class="value">{{ windowHeight }} px</span>
        </div>
        <div class="info-item">
          <span class="label">视口宽度:</span>
          <span class="value">{{ viewportWidth }} px</span>
        </div>
        <div class="info-item">
          <span class="label">视口高度:</span>
          <span class="value">{{ viewportHeight }} px</span>
        </div>
        <div class="info-item">
          <span class="label">滚动 X:</span>
          <span class="value">{{ scrollX }} px</span>
        </div>
        <div class="info-item">
          <span class="label">滚动 Y:</span>
          <span class="value">{{ scrollY }} px</span>
        </div>
      </div>
      <div class="buttons">
        <button @click="updateWindowInfo">刷新信息</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { openWindow as openWindowFn, openRouteInNewWindow } from '@longmo-utils/browser/window'

const windowUrl = ref('https://example.com')
const windowTarget = ref('_blank')
const windowNoopener = ref(true)
const windowNoreferrer = ref(true)
const windowResult = ref('')

const routePath = ref('/settings')
const routeResult = ref('')

const windowWidth = ref(0)
const windowHeight = ref(0)
const viewportWidth = ref(0)
const viewportHeight = ref(0)
const scrollX = ref(0)
const scrollY = ref(0)
const currentUrl = ref('')

const openWindow = () => {
  if (!windowUrl.value) {
    windowResult.value = '请输入 URL'
    return
  }

  try {
    openWindowFn(windowUrl.value, {
      target: windowTarget.value as any,
      noopener: windowNoopener.value,
      noreferrer: windowNoreferrer.value
    })
    windowResult.value = `正在打开: ${windowUrl.value} (目标: ${windowTarget.value})`
  } catch (error) {
    windowResult.value = `打开失败: ${error}`
  }
}

const openNewWindowRoute = () => {
  if (!routePath.value) {
    routeResult.value = '请输入路由路径'
    return
  }

  try {
    openRouteInNewWindow(routePath.value)
    routeResult.value = `正在在新窗口打开路由: ${routePath.value}`
  } catch (error) {
    routeResult.value = `打开失败: ${error}`
  }
}

const updateWindowInfo = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  viewportWidth.value = window.document.documentElement.clientWidth
  viewportHeight.value = window.document.documentElement.clientHeight
  scrollX.value = window.scrollX
  scrollY.value = window.scrollY
  currentUrl.value = window.location.href
}

const handleResize = () => {
  updateWindowInfo()
}

const handleScroll = () => {
  scrollX.value = window.scrollX
  scrollY.value = window.scrollY
}

onMounted(() => {
  updateWindowInfo()
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.section h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.card {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
}

.card h3 {
  margin-bottom: 12px;
  color: #555;
  font-size: 16px;
}

.form-group {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: #1890ff;
}

.select {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.checkbox-label span {
  font-size: 14px;
  color: #555;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.buttons button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.buttons button:hover {
  background: #40a9ff;
}

.result {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  color: #52c41a;
  font-size: 14px;
}

.info-box {
  padding: 12px;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 4px;
  font-size: 14px;
  color: #1890ff;
  margin-bottom: 12px;
  word-break: break-all;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
}

.info-item .label {
  font-size: 13px;
  color: #666;
}

.info-item .value {
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
}
</style>
