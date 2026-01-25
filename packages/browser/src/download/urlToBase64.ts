/**
 * 将图片 URL 转换为 Base64 编码
 *
 * @param url - 图片 URL 地址
 * @param mineType - 指定输出的 MIME 类型，默认为 'image/png'
 *
 * @returns 返回 Base64 编码的图片数据
 *
 * @example 转换为 PNG
 * ```typescript
 * const base64 = await urlToBase64('https://example.com/image.jpg');
 * console.log(base64); // 'data:image/png;base64,...'
 * ```
 *
 * @example 指定 MIME 类型
 * ```typescript
 * const jpegBase64 = await urlToBase64(
 *   'https://example.com/image.png',
 *   'image/jpeg'
 * );
 * ```
 *
 * @example 下载图片
 * ```typescript
 * const base64Data = await urlToBase64('https://example.com/photo.jpg');
 * downloadFileFromBase64({
 *   source: base64Data,
 *   fileName: 'photo.jpg'
 * });
 * ```
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    const img = new Image();
    img.crossOrigin = '';
    img.addEventListener('load', () => {
      if (!canvas || !ctx) {
        return reject(new Error('Failed to create canvas.'));
      }
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL(mineType || 'image/png');
      canvas = null;
      resolve(dataURL);
    });
    img.src = url;
  });
}
