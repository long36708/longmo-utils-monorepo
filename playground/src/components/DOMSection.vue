<template>
  <div class="section">
    <h2>DOM 操作测试</h2>

    <!-- 元素选择器 -->
    <div class="card">
      <h3>选择器 ($/$$)</h3>
      <div id="test-element" ref="testElement" class="test-box">测试元素</div>
      <div class="buttons">
        <button @click="testSelector">$</button>
        <button @click="testSelectorAll">$$</button>
      </div>
      <div v-if="selectorResult" class="result">{{ selectorResult }}</div>
    </div>

    <!-- 类名操作 -->
    <div class="card">
      <h3>类名操作</h3>
      <div ref="classElement" class="test-box">类名测试元素</div>
      <div class="buttons">
        <button @click="addClass">addClass</button>
        <button @click="removeClass">removeClass</button>
        <button @click="toggleClass">toggleClass</button>
      </div>
      <div class="result">当前类名: {{ currentClasses }}</div>
    </div>

    <!-- 样式操作 -->
    <div class="card">
      <h3>样式操作</h3>
      <div ref="styleElement" class="test-box">样式测试元素</div>
      <div class="buttons">
        <button @click="setStyleColor">设置颜色</button>
        <button @click="getStyle">获取样式</button>
      </div>
      <div v-if="styleResult" class="result">{{ styleResult }}</div>
    </div>

    <!-- 视口和滚动 -->
    <div class="card">
      <h3>视口和滚动</h3>
      <div id="scroll-target" ref="scrollTarget" class="scroll-box">
        <div class="scroll-content"></div>
      </div>
      <div class="buttons">
        <button @click="checkViewport">检查是否在视口</button>
        <button @click="scrollToTarget">滚动到元素</button>
      </div>
      <div v-if="viewportResult" class="result">{{ viewportResult }}</div>
    </div>

    <!-- 元素创建 -->
    <div class="card">
      <h3>元素创建</h3>
      <div ref="createElementContainer" class="createElement-container"></div>
      <div class="buttons">
        <button @click="createElement">createElement</button>
        <button @click="clearCreatedElements">清除</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { $, $$, addClass, removeClass, toggleClass, getStyle, setStyle, isInViewport, scrollIntoView, createElement } from '@longmo-utils/browser/dom'

// 选择器测试
const testElement = ref<HTMLElement | null>(null)
const selectorResult = ref('')

const testSelector = () => {
  const element = $('#test-element')
  selectorResult.value = `选中元素: ${element?.textContent}`
}

const testSelectorAll = () => {
  const elements = $$('.test-box')
  selectorResult.value = `选中 ${elements.length} 个 .test-box 元素`
}

// 类名操作测试
const classElement = ref<HTMLElement | null>(null)
const currentClasses = ref('test-box')

const addClass = () => {
  if (classElement.value) {
    addClass(classElement.value, 'active', 'highlight')
    currentClasses.value = classElement.value.className
  }
}

const removeClass = () => {
  if (classElement.value) {
    removeClass(classElement.value, 'active', 'highlight')
    currentClasses.value = classElement.value.className
  }
}

const toggleClass = () => {
  if (classElement.value) {
    toggleClass(classElement.value, 'active')
    currentClasses.value = classElement.value.className
  }
}

// 样式操作测试
const styleElement = ref<HTMLElement | null>(null)
const styleResult = ref('')

const setStyleColor = () => {
  if (styleElement.value) {
    setStyle(styleElement.value, {
      color: '#1890ff',
      fontSize: '18px',
      fontWeight: 'bold'
    })
  }
}

const getStyle = () => {
  if (styleElement.value) {
    const color = getStyle(styleElement.value, 'color')
    const fontSize = getStyle(styleElement.value, 'fontSize')
    styleResult.value = `颜色: ${color}, 字体: ${fontSize}`
  }
}

// 视口和滚动测试
const scrollTarget = ref<HTMLElement | null>(null)
const viewportResult = ref('')

const checkViewport = () => {
  if (scrollTarget.value) {
    const inViewport = isInViewport(scrollTarget.value)
    viewportResult.value = `元素${inViewport ? '在' : '不在'}视口中`
  }
}

const scrollToTarget = () => {
  if (scrollTarget.value) {
    scrollIntoView(scrollTarget.value, { behavior: 'smooth' })
    viewportResult.value = '已滚动到目标元素'
  }
}

// 元素创建测试
const createElementContainer = ref<HTMLElement | null>(null)

const createElement = () => {
  if (createElementContainer.value) {
    const newElement = createElement('div', {
      className: 'created-element',
      innerHTML: '动态创建的元素'
    })
    createElementContainer.value.appendChild(newElement)
  }
}

const clearCreatedElements = () => {
  if (createElementContainer.value) {
    createElementContainer.value.innerHTML = ''
  }
}
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

.test-box {
  padding: 16px;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 12px;
}

.test-box.active {
  background: #e6f7ff;
  border: 2px solid #1890ff;
}

.test-box.highlight {
  color: #1890ff;
  font-weight: bold;
}

.buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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
  padding: 8px 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  color: #52c41a;
  font-size: 14px;
}

.scroll-box {
  height: 200px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  margin-bottom: 12px;
}

.scroll-content {
  height: 500px;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
}

.createElement-container {
  min-height: 60px;
  padding: 12px;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  margin-bottom: 12px;
}

.created-element {
  padding: 8px 12px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
