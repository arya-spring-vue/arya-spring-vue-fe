/**
 * desc: base64字符串图片 -> blob链接
 * reason：消除浏览器对标签属性长度的限制，方便进行下载
 * demo:
    dataURIToBlob(canvasDataBase64, (blobUrl) => {
        blobStr = blobUrl;
    });
*/

function dataUrlToBlobUrl(dataURI, callback) {
  const binStr = atob(dataURI.split(",")[1]);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  callback(URL.createObjectURL(new Blob([arr])));
}

/**
 * desc: 图片 -> base64字符串图片
 * demo:
    toDataURL('http://foo.bar.com/baz.png', (dataUrl) => {
        base64Str = dataUrl;
    });
 */

function imageToDataUrl(src, callback, outputFormat) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    const canvas = document.createElement("CANVAS");
    const ctx = canvas.getContext("2d");
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
}

export default {
  dataUrlToBlobUrl,
  imageToDataUrl
};
