<template>
  <div>
    <video ref="video" autoplay style="width: 640px; height: 480px"></video>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as faceapi from "face-api.js";
const video = ref("video");
onMounted(async () => {
  console.log(faceapi);
  const displaySize = {
    width: 640,
    height: 480,
  };

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
  };
  const startVideo = () => {
    navigator.getUserMedia(
      { video: {} },
      (stream) => (video.value.srcObject = stream),
      (err) => console.error(err)
    );
  };

  // const recognize = async () => {
  //   const detections = await faceapi
  //     .detectAllFaces(video.value, new faceapi.TinyFaceDetectorOptions())
  //     .withFaceLandmarks()
  //     .withFaceExpressions();
  //   const resizedDetections = await faceapi.resizeResults(
  //     detections,
  //     displaySize
  //   );
  //   canvas.value
  //     .getContext("2d")
  //     .clearRect(0, 0, canvas.value.width, canvas.value.height);
  //   faceapi.draw.drawDetections(canvas.value, resizedDetections);
  //   faceapi.draw.drawFaceLandmarks(canvas.value, resizedDetections);
  //   faceapi.draw.drawFaceExpressions(canvas.value, resizedDetections);
  //   // requestAnimationFrame(recognize);
  // };

  const recognize = async () => {
    const detections = await faceapi
      .detectAllFaces(video.value, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withFaceDescriptors();
    detections.forEach((detection) => {
      const landmarks = detection.landmarks;

      // 얼굴에서 눈의 좌표를 가져옵니다.
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();

      // 눈의 좌표를 기반으로 눈 감긴 정도를 계산합니다.
      const leftEyeClosed = isEyeClosed(leftEye);
      // const rightEyeClosed = isEyeClosed(rightEye);
      console.log(leftEyeClosed);
      // 양쪽 눈 중 하나라도 감겨 있으면 눈 감긴 것으로 판단합니다.
      if (leftEyeClosed) {
        console.log("눈이 감겨 있습니다.");
      } else {
        console.log("눈이 떠져 있습니다.");
      }
    });

    // 눈이 감겨 있는지 여부를 판단합니다.
    function isEyeClosed(eyeLandmarks) {
      console.log(eyeLandmarks[1].y + eyeLandmarks[2].y);
      console.log(eyeLandmarks[4].y + eyeLandmarks[5].y);
      const topEyelid = (eyeLandmarks[1].y + eyeLandmarks[2].y) / 2;
      const bottomEyelid = (eyeLandmarks[4].y + eyeLandmarks[5].y) / 2;
      const eyeHeight = bottomEyelid - topEyelid;

      // 눈 크기의 25% 이상이 감겨 있으면 눈 감긴 것으로 판단합니다.
      if (eyeHeight < eyeHeight * 0.25) {
        return true;
      } else {
        return false;
      }
    }
    //   const resizedDetections = faceapi.resizeResults(detections, displaySize);
    //   canvas.value
    //     .getContext("2d")
    //     .clearRect(0, 0, canvas.value.width, canvas.value.height);

    //   resizedDetections.forEach((detection) => {
    //     const box = detection.detection.box;
    //     const drawBox = new faceapi.draw.DrawBox(box, { label: "Face" });
    //     drawBox.draw(canvas.value);

    //     const landmarks = detection.landmarks;
    //     const rightEye = landmarks.getRightEye();
    //     const leftEye = landmarks.getLeftEye();
    //     console.log(faceapi.round);
    //     const round = (num, places) => {
    //       const multiplier = 10 ** places;
    //       return Math.round(num * multiplier) / multiplier;
    //     };

    //     const rightEyeBlinking = round(
    //       (rightEye[0].y - rightEye[3].y) / (rightEye[2].x - rightEye[0].x),
    //       2
    //     );
    //     const leftEyeBlinking = round(
    //       (leftEye[0].y - leftEye[3].y) / (leftEye[2].x - leftEye[0].x),
    //       2
    //     );

    //     const blinkingThreshold = 0.25; // 설정한 임계값
    //     console.log(rightEye);
    //     console.log(leftEye);
    //     console.log(rightEyeBlinking);
    //     console.log(leftEyeBlinking);
    //     if (
    //       rightEyeBlinking < blinkingThreshold &&
    //       leftEyeBlinking < blinkingThreshold
    //     ) {
    //       // 눈 감김 감지
    //       console.log("Eyes closed!");
    //     }
    //   });
    //   // 1초 후에 recognizeSlowly 함수를 호출
    //   setTimeout(() => {
    //     requestAnimationFrame(recognize);
    //   }, 1000);
  };
  requestAnimationFrame(recognize);

  Promise.all([loadModels(), startVideo()]).then(() => {
    video.value.addEventListener("play", recognize);
  });
});
</script>
