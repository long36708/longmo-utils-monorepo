<template>
  <div class="section">
    <h2>文件下载测试</h2>

    <div class="card">
      <h3>下载文件 (URL)</h3>
      <div class="form-group">
        <input
          v-model="downloadUrl"
          placeholder="文件 URL"
          class="input"
        />
        <input
          v-model="downloadFileName"
          placeholder="文件名"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="downloadFromUrl">从 URL 下载</button>
      </div>
    </div>

    <div class="card">
      <h3>下载文本文件</h3>
      <textarea
        v-model="textContent"
        placeholder="输入文件内容..."
        class="textarea"
      ></textarea>
      <div class="form-group">
        <input
          v-model="textFileName"
          placeholder="文件名 (如: test.txt)"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="downloadTextFile">下载文本文件</button>
      </div>
    </div>

    <div class="card">
      <h3>下载图片 (URL)</h3>
      <div class="form-group">
        <input
          v-model="imageUrl"
          placeholder="图片 URL"
          class="input"
        />
        <input
          v-model="imageFileName"
          placeholder="文件名 (如: image.png)"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="downloadImage">下载图片</button>
      </div>
    </div>

    <div class="card">
      <h3>从 Base64 下载</h3>
      <textarea
        v-model="base64Content"
        placeholder="Base64 数据 (data:image/png;base64,...)"
        class="textarea"
      ></textarea>
      <div class="form-group">
        <input
          v-model="base64FileName"
          placeholder="文件名 (如: file.png)"
          class="input"
        />
      </div>
      <div class="buttons">
        <button @click="downloadFromBase64">从 Base64 下载</button>
        <button @click="setSampleBase64" class="secondary">使用示例 Base64</button>
      </div>
    </div>

    <div v-if="downloadResult" class="result">
      {{ downloadResult }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  downloadFileFromUrl,
  downloadFileFromBlob,
  downloadFileFromImageUrl,
  downloadFileFromBase64
} from '@longmo-utils/browser'

const downloadUrl = ref('/sample.pdf')
const downloadFileName = ref('sample.pdf')
const downloadResult = ref('')

const textContent = ref('这是一段测试文本内容\n第二行内容\n第三行内容')
const textFileName = ref('test.txt')

const imageUrl = ref('https://yes-file.uc.cn/file/1764037058939_2002488053_9389.png')
const imageFileName = ref('image.png')

const base64Content = ref('')
const base64FileName = ref('file.png')

const sampleBase64 = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==')

const downloadFromUrl = async () => {
  if (!downloadUrl.value || !downloadFileName.value) {
    downloadResult.value = '请填写完整的 URL 和文件名'
    return
  }

  try {
    await downloadFileFromUrl({
      source: downloadUrl.value,
      fileName: downloadFileName.value
    })
    downloadResult.value = `正在下载: ${downloadFileName.value}`
  } catch (error) {
    downloadResult.value = `下载失败: ${error}`
  }
}

const downloadTextFile = () => {
  if (!textContent.value || !textFileName.value) {
    downloadResult.value = '请填写文件内容和文件名'
    return
  }

  try {
    const blob = new Blob([textContent.value], { type: 'text/plain;charset=utf-8' })
    downloadFileFromBlob({
      source: blob,
      fileName: textFileName.value
    })
    downloadResult.value = `正在下载: ${textFileName.value}`
  } catch (error) {
    downloadResult.value = `下载失败: ${error}`
  }
}

const downloadImage = async () => {
  if (!imageUrl.value || !imageFileName.value) {
    downloadResult.value = '请填写图片 URL 和文件名'
    return
  }

  try {
    downloadResult.value = '正在下载图片...'
    await downloadFileFromImageUrl({
      source: imageUrl.value,
      fileName: imageFileName.value
    })
    downloadResult.value = `下载成功: ${imageFileName.value}`
  } catch (error) {
    downloadResult.value = `下载失败: ${error}`
  }
}

const downloadFromBase64 = () => {
  if (!base64Content.value || !base64FileName.value) {
    downloadResult.value = '请填写 Base64 数据和文件名'
    return
  }

  try {
    downloadFileFromBase64({
      source: base64Content.value,
      fileName: base64FileName.value
    })
    downloadResult.value = `正在下载: ${base64FileName.value}`
  } catch (error) {
    downloadResult.value = `下载失败: ${error}`
  }
}

const setSampleBase64 = () => {
  base64Content.value = sampleBase64.value
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

.textarea {
  width: 100%;
  min-height: 80px;
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

.buttons button.secondary {
  background: #52c41a;
}

.buttons button.secondary:hover {
  background: #73d13d;
}

.result {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  color: #52c41a;
  font-size: 14px;
  position: sticky;
  bottom: 20px;
}
</style>
