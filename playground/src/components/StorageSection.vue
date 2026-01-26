<template>
  <div class="section">
    <h2>Storage 存储测试</h2>

    <!-- LocalStorage -->
    <div class="card">
      <h3>LocalStorage</h3>
      <div class="form-group">
        <input
          v-model="localKey"
          placeholder="键名"
          class="input"
        />
        <input
          v-model="localValue"
          placeholder="值"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="setLocal">存储</button>
        <button @click="getLocal">获取</button>
        <button @click="removeLocal">删除</button>
        <button @click="clearLocal" class="danger">清空</button>
      </div>
      <div class="result">
        <div>当前值: {{ localResult }}</div>
        <div>所有键值:</div>
        <div class="storage-keys">{{ localKeys.join(', ') || '无' }}</div>
      </div>
    </div>

    <!-- SessionStorage -->
    <div class="card">
      <h3>SessionStorage</h3>
      <div class="form-group">
        <input
          v-model="sessionKey"
          placeholder="键名"
          class="input"
        />
        <input
          v-model="sessionValue"
          placeholder="值"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="setSession">存储</button>
        <button @click="getSession">获取</button>
        <button @click="removeSession">删除</button>
      </div>
      <div class="result">
        <div>当前值: {{ sessionResult }}</div>
        <div>所有键值:</div>
        <div class="storage-keys">{{ sessionKeys.join(', ') || '无' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage
} from '@longmo-utils/browser/storage'

// LocalStorage
const localKey = ref('test-key')
const localValue = ref('test-value')
const localResult = ref<any>(null)
const localKeys = ref<string[]>([])

const setLocal = () => {
  if (localKey.value && localValue.value) {
    const success = setLocalStorage(localKey.value, localValue.value)
    if (success) {
      updateLocalKeys()
      localResult.value = `已存储: ${JSON.stringify({ key: localKey.value, value: localValue.value })}`
    }
  }
}

const getLocal = () => {
  if (localKey.value) {
    localResult.value = getLocalStorage(localKey.value)
  }
}

const removeLocal = () => {
  if (localKey.value) {
    const success = removeLocalStorage(localKey.value)
    if (success) {
      updateLocalKeys()
      localResult.value = '已删除'
    }
  }
}

const clearLocal = () => {
  const success = clearLocalStorage()
  if (success) {
    updateLocalKeys()
    localResult.value = '已清空所有 localStorage'
  }
}

const updateLocalKeys = () => {
  localKeys.value = Object.keys(localStorage).filter(k => !k.startsWith('__'))
}

// SessionStorage
const sessionKey = ref('session-key')
const sessionValue = ref('session-value')
const sessionResult = ref<any>(null)
const sessionKeys = ref<string[]>([])

const setSession = () => {
  if (sessionKey.value && sessionValue.value) {
    const success = setSessionStorage(sessionKey.value, sessionValue.value)
    if (success) {
      updateSessionKeys()
      sessionResult.value = `已存储: ${JSON.stringify({ key: sessionKey.value, value: sessionValue.value })}`
    }
  }
}

const getSession = () => {
  if (sessionKey.value) {
    sessionResult.value = getSessionStorage(sessionKey.value)
  }
}

const removeSession = () => {
  if (sessionKey.value) {
    const success = removeSessionStorage(sessionKey.value)
    if (success) {
      updateSessionKeys()
      sessionResult.value = '已删除'
    }
  }
}

const updateSessionKeys = () => {
  sessionKeys.value = Object.keys(sessionStorage).filter(k => !k.startsWith('__'))
}

onMounted(() => {
  updateLocalKeys()
  updateSessionKeys()
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
  margin-bottom: 12px;
}

.input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: #1890ff;
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

.buttons button.danger {
  background: #ff4d4f;
}

.buttons button.danger:hover {
  background: #ff7875;
}

.result {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  color: #52c41a;
  font-size: 14px;
}

.storage-keys {
  margin-top: 8px;
  padding: 8px;
  background: white;
  border-radius: 4px;
  font-family: monospace;
  color: #666;
}
</style>
