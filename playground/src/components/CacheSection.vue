<template>
  <div class="section">
    <h2>缓存管理测试</h2>

    <div class="card">
      <h3>StorageManager 设置</h3>
      <div class="form-group">
        <label>
          <span>存储类型:</span>
          <select v-model="storageType" class="input">
            <option value="localStorage">localStorage</option>
            <option value="sessionStorage">sessionStorage</option>
          </select>
        </label>
        <input
          v-model="prefix"
          placeholder="前缀 (如: app_)"
          class="input"
        />
        <button @click="createManager" class="secondary">创建管理器</button>
      </div>
    </div>

    <div class="card">
      <h3>存储操作</h3>
      <div class="form-group">
        <input
          v-model="key"
          placeholder="键名"
          class="input"
        />
        <input
          v-model="value"
          placeholder="值"
          class="input"
        />
        <input
          v-model.number="ttl"
          type="number"
          placeholder="TTL (毫秒, 可选)"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="setItem">存储 (setItem)</button>
        <button @click="getItem">获取 (getItem)</button>
        <button @click="removeItem">删除 (removeItem)</button>
        <button @click="clearExpired" class="warning">清除过期</button>
        <button @click="clearAll" class="danger">清空所有</button>
      </div>
      <div v-if="operationResult" class="result" :class="resultType">
        {{ operationResult }}
      </div>
    </div>

    <div class="card">
      <h3>当前存储内容</h3>
      <div class="storage-list">
        <div v-if="storageItems.length === 0" class="empty">
          暂无存储数据
        </div>
        <div v-for="item in storageItems" :key="item.key" class="storage-item">
          <div class="item-key">{{ item.key }}</div>
          <div class="item-value">{{ item.value }}</div>
          <div v-if="item.expiry" class="item-expiry">
            过期时间: {{ new Date(item.expiry).toLocaleString() }}
          </div>
          <button @click="removeItemByKey(item.key)" class="remove-btn">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { StorageManager } from '@longmo-utils/browser/cache'

const manager = ref<StorageManager | null>(null)
const storageType = ref<'localStorage' | 'sessionStorage'>('localStorage')
const prefix = ref('app_')
const key = ref('test-key')
const value = ref('test-value')
const ttl = ref<number | undefined>(undefined)
const operationResult = ref('')
const resultType = ref<'success' | 'error' | 'info'>('info')

const storageItems = ref<{ key: string; value: any; expiry?: number }[]>([])

const createManager = () => {
  manager.value = new StorageManager({
    storageType: storageType.value,
    prefix: prefix.value
  })
  updateStorageList()
  operationResult.value = `已创建管理器: ${prefix.value}${storageType.value}`
  resultType.value = 'success'
}

const setItem = () => {
  if (!manager.value) {
    operationResult.value = '请先创建管理器'
    resultType.value = 'error'
    return
  }

  if (!key.value) {
    operationResult.value = '请输入键名'
    resultType.value = 'error'
    return
  }

  try {
    manager.value.setItem(key.value, value.value, ttl.value)
    updateStorageList()
    operationResult.value = `已存储: ${key.value} = ${value.value}${ttl.value ? ` (TTL: ${ttl.value}ms)` : ''}`
    resultType.value = 'success'
  } catch (error) {
    operationResult.value = `存储失败: ${error}`
    resultType.value = 'error'
  }
}

const getItem = () => {
  if (!manager.value) {
    operationResult.value = '请先创建管理器'
    resultType.value = 'error'
    return
  }

  if (!key.value) {
    operationResult.value = '请输入键名'
    resultType.value = 'error'
    return
  }

  const retrievedValue = manager.value.getItem(key.value)
  operationResult.value = retrievedValue !== null
    ? `${key.value} = ${JSON.stringify(retrievedValue)}`
    : `${key.value} 不存在或已过期`
  resultType.value = 'info'
}

const removeItem = () => {
  if (!manager.value) {
    operationResult.value = '请先创建管理器'
    resultType.value = 'error'
    return
  }

  if (!key.value) {
    operationResult.value = '请输入键名'
    resultType.value = 'error'
    return
  }

  manager.value.removeItem(key.value)
  updateStorageList()
  operationResult.value = `已删除: ${key.value}`
  resultType.value = 'info'
}

const removeItemByKey = (itemKey: string) => {
  if (!manager.value) return
  manager.value.removeItem(itemKey)
  updateStorageList()
}

const clearExpired = () => {
  if (!manager.value) {
    operationResult.value = '请先创建管理器'
    resultType.value = 'error'
    return
  }

  manager.value.clearExpiredItems()
  updateStorageList()
  operationResult.value = '已清除过期项'
  resultType.value = 'success'
}

const clearAll = () => {
  if (!manager.value) {
    operationResult.value = '请先创建管理器'
    resultType.value = 'error'
    return
  }

  manager.value.clear()
  updateStorageList()
  operationResult.value = '已清空所有存储'
  resultType.value = 'success'
}

const updateStorageList = () => {
  if (!manager.value) {
    storageItems.value = []
    return
  }

  const storage = storageType.value === 'localStorage' ? localStorage : sessionStorage
  const items: { key: string; value: any; expiry?: number }[] = []

  for (let i = 0; i < storage.length; i++) {
    const fullKey = storage.key(i)
    if (fullKey && fullKey.startsWith(prefix.value)) {
      const shortKey = fullKey.replace(prefix.value, '')
      try {
        const itemStr = storage.getItem(fullKey)
        if (itemStr) {
          const item = JSON.parse(itemStr)
          items.push({
            key: shortKey,
            value: JSON.stringify(item.value),
            expiry: item.expiry
          })
        }
      } catch (e) {
        // 忽略解析错误
      }
    }
  }

  storageItems.value = items
}

onMounted(() => {
  createManager()
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
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-group label span {
  font-size: 14px;
  color: #666;
}

.input, select {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.input:focus, select:focus {
  outline: none;
  border-color: #1890ff;
}

select {
  cursor: pointer;
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

.buttons button.warning {
  background: #faad14;
}

.buttons button.warning:hover {
  background: #ffc53d;
}

.buttons button.danger {
  background: #ff4d4f;
}

.buttons button.danger:hover {
  background: #ff7875;
}

.buttons button.secondary {
  background: #52c41a;
}

.buttons button.secondary:hover {
  background: #73d13d;
}

.result {
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
}

.result.success {
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  color: #52c41a;
}

.result.error {
  background: #fff2f0;
  border: 1px solid #ffccc7;
  color: #ff4d4f;
}

.result.info {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff;
}

.storage-list {
  max-height: 400px;
  overflow-y: auto;
}

.empty {
  padding: 24px;
  text-align: center;
  color: #999;
}

.storage-item {
  position: relative;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 8px;
}

.item-key {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 4px;
}

.item-value {
  font-family: monospace;
  color: #666;
  font-size: 13px;
  word-break: break-all;
  margin-bottom: 4px;
}

.item-expiry {
  font-size: 12px;
  color: #ff4d4f;
}

.remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}

.remove-btn:hover {
  background: #ff7875;
}
</style>
