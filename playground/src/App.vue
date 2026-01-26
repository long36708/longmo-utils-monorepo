<template>
  <div class="app">
    <header class="header">
      <h1>Browser Utils Playground</h1>
      <p class="subtitle">测试 @longmo-utils/browser 工具函数</p>
    </header>

    <div class="content">
      <nav class="sidebar">
        <button
          v-for="section in sections"
          :key="section.id"
          :class="['nav-item', { active: activeSection === section.id }]"
          @click="activeSection = section.id"
        >
          {{ section.name }}
        </button>
      </nav>

      <main class="main">
        <DOMSection v-if="activeSection === 'dom'" />
        <StorageSection v-if="activeSection === 'storage'" />
        <ClipboardSection v-if="activeSection === 'clipboard'" />
        <DownloadSection v-if="activeSection === 'download'" />
        <CacheSection v-if="activeSection === 'cache'" />
        <WindowSection v-if="activeSection === 'window'" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DOMSection from './components/DOMSection.vue'
import StorageSection from './components/StorageSection.vue'
import ClipboardSection from './components/ClipboardSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import CacheSection from './components/CacheSection.vue'
import WindowSection from './components/WindowSection.vue'

const activeSection = ref('dom')

const sections = [
  { id: 'dom', name: 'DOM 操作' },
  { id: 'storage', name: 'Storage 存储' },
  { id: 'clipboard', name: '剪贴板' },
  { id: 'download', name: '文件下载' },
  { id: 'cache', name: '缓存管理' },
  { id: 'window', name: '窗口操作' }
]
</script>

<style scoped>
.app {
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  text-align: center;
  padding: 30px 0;
}

.header h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.sidebar {
  position: sticky;
  top: 20px;
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  padding: 12px 16px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  transition: all 0.2s;
  text-align: left;
}

.nav-item:hover {
  background: #e8f4fc;
}

.nav-item.active {
  background: #1890ff;
  color: white;
}

.main {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
