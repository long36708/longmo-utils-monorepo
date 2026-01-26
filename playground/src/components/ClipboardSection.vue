<template>
  <div class="section">
    <h2>剪贴板测试</h2>

    <div class="card">
      <h3>复制文本到剪贴板</h3>
      <textarea
        v-model="textToCopy"
        placeholder="输入要复制的文本..."
        class="textarea"
      ></textarea>
      <div class="buttons">
        <button @click="handleCopy">复制到剪贴板</button>
      </div>
      <div v-if="copyResult" class="result" :class="copyResult.success ? 'success' : 'error'">
        {{ copyResult.message }}
      </div>
    </div>

    <div class="card">
      <h3>粘贴板测试区域</h3>
      <textarea
        v-model="pastedText"
        placeholder="在这里粘贴文本测试..."
        class="textarea"
        @paste="handlePaste"
      ></textarea>
      <div v-if="pasteInfo" class="result">
        {{ pasteInfo }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { copyToClipboard } from '@longmo-utils/browser/clipboard'

const textToCopy = ref('这是一段测试文本，将被复制到剪贴板')
const pastedText = ref('')
const copyResult = ref<{ success: boolean; message: string } | null>(null)
const pasteInfo = ref('')

const handleCopy = () => {
  if (!textToCopy.value) {
    copyResult.value = { success: false, message: '请输入要复制的文本' }
    return
  }

  try {
    const success = copyToClipboard(textToCopy.value)
    copyResult.value = {
      success,
      message: success ? '复制成功！请按 Ctrl+V 粘贴测试' : '复制失败'
    }

    if (success) {
      setTimeout(() => {
        copyResult.value = null
      }, 3000)
    }
  } catch (error) {
    copyResult.value = { success: false, message: `复制出错: ${error}` }
  }
}

const handlePaste = (event: Event) => {
  const pasteEvent = event as ClipboardEvent
  const text = pasteEvent.clipboardData?.getData('text') || ''
  pasteInfo.value = `粘贴了 ${text.length} 个字符: "${text.slice(0, 50)}${text.length > 50 ? '...' : ''}"`
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

.textarea {
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 12px;
}

.textarea:focus {
  outline: none;
  border-color: #1890ff;
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
</style>
