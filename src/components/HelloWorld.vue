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
      // 랜드마크를 사용하여 양쪽 눈에 대한 포인트 추출
      const landmarks = detection.landmarks;
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();

      // 눈 평균값 계산
      const leftEyeAvg = getAveragePosition(leftEye);
      const rightEyeAvg = getAveragePosition(rightEye);

      // 각 눈의 세로축 길이 계산
      const leftEyeDist = getDistance(leftEye[1], leftEye[5]);
      const rightEyeDist = getDistance(rightEye[1], rightEye[5]);

      // 눈을 감았는지 여부 판단
      const eyeClosedThreshold = 0.1; // 눈을 감은 상태임을 나타내는 임계값 (0.0 ~ 1.0)
      const isLeftEyeClosed = leftEyeDist / leftEyeAvg.y < eyeClosedThreshold;
      const isRightEyeClosed =
        rightEyeDist / rightEyeAvg.y < eyeClosedThreshold;
      const isEyeClosed = isLeftEyeClosed && isRightEyeClosed;
      console.log(isEyeClosed);
      // 눈 평균 위치 계산 함수
      function getAveragePosition(points) {
        const numPoints = points.length;
        const sum = points.reduce(
          (acc, { x, y }) => ({ x: acc.x + x, y: acc.y + y }),
          { x: 0, y: 0 }
        );
        return { x: sum.x / numPoints, y: sum.y / numPoints };
      }

      // 두 점 사이의 거리 계산 함수
      function getDistance(point1, point2) {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    });
    // detections.forEach((detection) => {
    //   const landmarks = detection.landmarks;

    //   // 얼굴에서 눈의 좌표를 가져옵니다.
    //   const leftEye = landmarks.getLeftEye();
    //   const rightEye = landmarks.getRightEye();

    //   // 눈의 좌표를 기반으로 눈 감긴 정도를 계산합니다.
    //   const leftEyeClosed = isEyeClosed(leftEye);
    //   // const rightEyeClosed = isEyeClosed(rightEye);
    //   console.log(leftEyeClosed);
    //   // 뜬거
    //   const 뜬거 = {
    //     0: {
    //       _x: 393.2918021631358,
    //       _y: 79.72209472767634,
    //       x: 393.2918021631358,
    //       y: 79.72209472767634,
    //     },
    //     1: {
    //       _x: 405.3112018656848,
    //       _y: 76.91677491180224,
    //       x: 405.3112018656848,
    //       y: 76.91677491180224,
    //     },
    //     2: {
    //       _x: 421.3150096488116,
    //       _y: 80.295701755207,
    //       x: 421.3150096488116,
    //       y: 80.295701755207,
    //     },
    //     3: {
    //       _x: 433.8293493342517,
    //       _y: 92.61911447159571,
    //       x: 433.8293493342517,
    //       y: 92.61911447159571,
    //     },
    //     4: {
    //       _x: 420.2630740952609,
    //       _y: 94.68016223422808,
    //       x: 420.2630740952609,
    //       y: 94.68016223422808,
    //     },
    //     5: {
    //       _x: 403.3584625077365,
    //       _y: 90.05189220420641,
    //       x: 403.3584625077365,
    //       y: 90.05189220420641,
    //     },
    //   };
    //   const 감은거 = {
    //     0: {
    //       _x: 254.0875784599416,
    //       _y: 113.83481171753485,
    //       x: 254.0875784599416,
    //       y: 113.83481171753485,
    //     },
    //     1: {
    //       _x: 265.58614323970005,
    //       _y: 108.90412727024633,
    //       x: 265.58614323970005,
    //       y: 108.90412727024633,
    //     },
    //     2: {
    //       _x: 281.3355995261304,
    //       _y: 107.31917181637365,
    //       x: 281.3355995261304,
    //       y: 107.31917181637365,
    //     },
    //     3: {
    //       _x: 295.8113599860303,
    //       _y: 112.77394858028967,
    //       x: 295.8113599860303,
    //       y: 112.77394858028967,
    //     },
    //     4: {
    //       _x: 284.1262377345197,
    //       _y: 120.0096847715624,
    //       x: 284.1262377345197,
    //       y: 120.0096847715624,
    //     },
    //     5: {
    //       _x: 267.49521802302525,
    //       _y: 120.3824327888735,
    //       x: 267.49521802302525,
    //       y: 120.3824327888735,
    //     },
    //   };
    //   // 양쪽 눈 중 하나라도 감겨 있으면 눈 감긴 것으로 판단합니다.
    //   if (leftEyeClosed) {
    //     console.log("눈이 감겨 있습니다.");
    //   } else {
    //     console.log("눈이 떠져 있습니다.");
    //   }
    // });

    // // 눈이 감겨 있는지 여부를 판단합니다.
    // function isEyeClosed(eyeLandmarks) {
    //   console.log(eyeLandmarks);
    //   // console.log(eyeLandmarks[1].y + eyeLandmarks[2].y);
    //   // console.log(eyeLandmarks[4].y + eyeLandmarks[5].y);
    //   const topEyelid = (eyeLandmarks[1].y + eyeLandmarks[2].y) / 2;
    //   const bottomEyelid = (eyeLandmarks[4].y + eyeLandmarks[5].y) / 2;
    //   const eyeHeight = bottomEyelid - topEyelid;

    //   // 눈 크기의 25% 이상이 감겨 있으면 눈 감긴 것으로 판단합니다.
    //   if (eyeHeight < eyeHeight * 0.25) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
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
  // // requestAnimationFrame(recognize);

  Promise.all([loadModels(), startVideo()]).then(() => {
    video.value.addEventListener("play", recognize);
  });
});
</script>
