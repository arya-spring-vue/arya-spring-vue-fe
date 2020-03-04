// 监听消息
onmessage = function(evt) {
  // 工作线程收到主线程的消息
  console.log("test.worker.js:", evt);
  postMessage({
    value: "工作线程向主线程发送消息"
  });
};
