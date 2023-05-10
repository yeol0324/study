<template>
  <h1>{{ eyeOut }}</h1>
  <button @click="startEvent">시작</button>
  <button @click="removeEvent">멈춤</button>
  left :: {{ leftEyeClose }} right :: {{ rightEyeClose }}
  <div style="position: relative">
    <video
      ref="video"
      autoplay
      playsInline
      muted
      style="
        width: 300px;
        height: 480px;
        position: absolute;
        left: 0;
        opacity: 0;
      "
    ></video>
    <canvas
      ref="canvas"
      style="width: 300px; height: 480px; position: absolute; left: 0"
    ></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as faceapi from "face-api.js";
let myReq;
let timerVar;
const leftEyeClose = ref(0);
const rightEyeClose = ref(0);
const eyeOut = ref(0);
const reqTime = ref(true);
const video = ref("video");
const canvas = ref("canvas");
const displaySize = {
  width: 300,
  height: 480,
};
onMounted(async () => {
  const loadModels = async () => {
    console.log(faceapi);
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
      // faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
      // faceapi.nets.faceExpressionNet.loadFromUri("./models"),
    ]);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.value.srcObject = stream;
        video.value.onloadedmetadata = function (e) {
          video.value.play();
        };
      })
      .catch(function (err) {
        console.log("getUserMedia 에러:", err);
      });
  };

  Promise.all([loadModels(), startVideo()]).then(() => {
    video.value.addEventListener("play", recognize);
  });
});
// const cancelAnimationFrame = alert();
const recognize = async () => {
  const detections = await faceapi
    .detectAllFaces(video.value, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks(); // 랜드마크 추가
  // .withFaceDescriptors(); // 안면 인식 프레임 인식된 얼굴에 주석을 설정
  // .withFaceExpressions() // 감정 분석
  if (eyeOut.value >= 3) {
    alert("화면 안봄");
    eyeOut.value = 0;
  } else if (detections.length < 1) {
    eyeOut.value++;
  } else {
    eyeOut.value = 0;
  }
  detections.forEach((detection) => {
    // 랜드마크를 사용하여 양쪽 눈에 대한 포인트 추출
    const landmarks = detection.landmarks;
    const leftEye = landmarks.getLeftEye();
    const rightEye = landmarks.getRightEye();
    // 각 눈의 세로축 길이 계산
    const leftEyeCloses =
      (leftEye[4].y - leftEye[1].y + (leftEye[5].y - leftEye[2].y)) / 2;
    const rightEyeCloses =
      (rightEye[4].y - rightEye[1].y + (rightEye[5].y - rightEye[2].y)) / 2;
    leftEyeClose.value = leftEyeCloses;
    rightEyeClose.value = rightEyeCloses;
  });

  // canvas 사이즈를 맞춤
  faceapi.matchDimensions(canvas.value, displaySize);
  const resizedDetections = faceapi.resizeResults(detections, displaySize);
  canvas.value
    .getContext("2d")
    .clearRect(0, 0, canvas.value.width, canvas.value.height);
  faceapi.draw.drawFaceLandmarks(canvas.value, resizedDetections);
  if (!reqTime.value) {
    clearTimeout(timerVar);
    return;
  }
  timerVar = setTimeout(() => {
    console.log("준비");
    recognize();
  }, 800);
};
const startEvent = () => {
  reqTime.value = true;
  myReq = window.requestAnimationFrame(recognize);
};

const removeEvent = () => {
  reqTime.value = false;
  clearTimeout(timerVar);
};

onUnmounted(() => {
  removeEvent();
});
</script>
