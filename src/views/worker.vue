<template>
  <div>foo</div>
</template>

<script>
import TestWorker from "../workers/test.worker.js";

export default {
  name: "worker",
  mounted() {
    const worker = new TestWorker();

    worker.postMessage({ a: 1 });
    worker.onmessage = function(event) {
      console.log("worker.vue onmessage", event);
    };

    worker.addEventListener("message", function(event) {
      console.log("worker.vue listener", event);
    });
  }
};
</script>