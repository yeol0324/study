<template>
  <div>
    <!-- <a-scene stats>
        <a-assets>
          <a-mixin
            id="cube"
            geometry="primitive: box"
            material="color: red"
            rotation="0 45 0"
          ></a-mixin>
          <a-mixin
            id="sphere"
            geometry="primitive: sphere"
            material="color: blue"
          ></a-mixin>
          <a-mixin id="camera" camera="active: false"></a-mixin>
        </a-assets>
  
        <a-entity
          mixin="cube"
          position="-3.5 1 -4"
          material="color: yellow"
        ></a-entity>
        <a-entity mixin="cube" position="0 1 -4"></a-entity>
        <a-entity mixin="cube" position="3.5 1 -4"></a-entity>
        <a-entity mixin="camera"></a-entity>
      </a-scene> -->
    <a-scene background="color: #FBE0D8">
      <a-assets>
        <audio
          id="blip1"
          src="../../showcase/anime-UI/audio/321103__nsstudios__blip1.wav"
        ></audio>
        <audio
          id="blip2"
          src="../../showcase/anime-UI/audio/321104__nsstudios__blip2.wav"
        ></audio>
        <audio id="shot" src="shot.ogg"></audio>
        <a-mixin id="cube" geometry="primitive: box"></a-mixin>
        <a-mixin
          id="hoverColor"
          event-set__mouseenter="material.color: #CC435F"
        ></a-mixin>
        <a-mixin
          id="selectColor"
          event-set__click="material.color: #876A96"
        ></a-mixin>
        <a-mixin
          id="leaveColor"
          event-set__mouseleave="material.color: #9DE0AD"
        ></a-mixin>
        <a-mixin id="red" material="color: #F35F5F"></a-mixin>
        <a-mixin id="green" material="color: #9DE0AD"></a-mixin>
        <a-mixin id="blue" material="color: #36A3EB"></a-mixin>
        <a-mixin id="yellow" material="color: #F1EA65"></a-mixin>
        <a-mixin id="sphere" geometry="primitive: sphere"></a-mixin>
      </a-assets>

      <a-entity
        id="mouseCursor"
        cursor="rayOrigin: mouse"
        raycaster="objects: .intersectable"
      ></a-entity>

      <a-entity position="0 .6 4">
        <a-camera>
          <a-entity
            raycaster="far: 30; objects: .intersectable"
            cursor
            geometry="primitive: ring; radiusOuter: 0.015;
                                radiusInner: 0.01; segmentsTheta: 32"
            material="color: #283644; shader: flat"
            position="0 0 -0.75"
          ></a-entity>
        </a-camera>
      </a-entity>

      <a-entity position="-3.5 1 0">
        <a-entity
          mixin="red cube"
          class="intersectable"
          animation="startEvents: click; property: position; from: 0 0 0; to: 0 0 -10; dur: 2000"
        >
        </a-entity>
      </a-entity>

      <a-entity position="0 1 1">
        <a-entity
          id="invisibleCube"
          mixin="cube"
          material="color: grey; opacity: 0.3; transparent: true"
          scale="1 1 0.1"
          animation="startEvents: click; property: rotation; to: 0 360 0; easing: linear; dur: 2000"
        >
        </a-entity>
      </a-entity>

      <a-entity position="0 1 0">
        <a-entity
          id="foregroundCube"
          class="intersectable"
          mixin="green cube hoverColor selectColor leaveColor"
          sound__1="on: click; src: #blip1"
          sound__2="on: mouseenter; src: #blip2"
          animation="startEvents: click; property: rotation; to: 0 360 0; easing: linear; dur: 2000"
        >
        </a-entity>
      </a-entity>

      <a-entity position="1 1 0">
        <a-entity
          mixin="yellow cube"
          sound__1="on: click; src: #shot; poolSize: 6"
          sound__2="src: #blip2; autoplay: true"
          animation="startEvents: click; property: scale; to: 1.2 1.2 1.2; easing: linear; dur: 200"
        >
        </a-entity>
      </a-entity>

      <a-entity position="0 1 -3">
        <a-entity
          id="backgroundCube"
          class="intersectable"
          mixin="green cube"
          animation="startEvents: click; property: rotation; to: 0 360 0; easing: linear; dur: 2000"
        >
        </a-entity>
      </a-entity>

      <a-entity position="3.5 1 0" rotation="0 45 0">
        <a-entity
          mixin="blue cube"
          class="intersectable"
          animation="startEvents: click; loop: 1; dir: alternate; property: position; from: 0 0 0; to: 15 0 0; dur: 2000"
        >
        </a-entity>
      </a-entity>

      <a-entity
        mixin="yellow cube"
        position="0 3 -3"
        class="intersectable clickable"
        rotation="0 45 0"
        scale=".5 .5 .5"
      ></a-entity>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
      <a-videosphere
        material="src:#video"
        rotation="0 -90 0"
        scale="-1 1 1"
      ></a-videosphere>
      <a-entity camera position="0 1.6 -10" near="1" fov="60"></a-entity>
      <video id="video" autoplay loop muted playsinline></video>
    </a-scene>
    <!-- <a-scene>
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
        <a-videosphere
          material="src:#video"
          rotation="0 -90 0"
          scale="-1 1 1"
        ></a-videosphere>
        <a-entity camera position="0 1.6 -10" near="1" fov="60"></a-entity>
        <video id="video" autoplay loop muted playsinline></video>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
      </a-scene> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
// import * as AR from 'ar.js'
import "aframe";
import "aframe-ar";
import "aframe-extras";
// XR globals.
console.log(AFRAME);
// let xrButton = null
// let xrImmersiveRefSpace = null
// let inlineViewerHelper = null

// // WebGL scene globals.
// let gl = null
// let renderer = null
// let scene = new Scene()
// let solarSystem = new Gltf2Node({ url: 'media/gltf/space/space.gltf' })
// // The solar system is big (citation needed). Scale it down so that users
// // can move around the planets more easily.
// solarSystem.scale = [0.1, 0.1, 0.1]
// scene.addNode(solarSystem)
// // Still adding a skybox, but only for the benefit of the inline view.
// let skybox = new SkyboxNode({ url: 'media/textures/milky-way-4k.png' })
// scene.addNode(skybox)

// function initXR() {
//   xrButton = new WebXRButton({
//     onRequestSession: onRequestSession,
//     onEndSession: onEndSession,
//     textEnterXRTitle: 'START AR',
//     textXRNotFoundTitle: 'AR NOT FOUND',
//     textExitXRTitle: 'EXIT  AR'
//   })
//   document.querySelector('header').appendChild(xrButton.domElement)

//   if (navigator.xr) {
//     // Checks to ensure that 'immersive-ar' mode is available, and only
//     // enables the button if so.
//     navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
//       xrButton.enabled = supported
//     })

//     navigator.xr.requestSession('inline').then(onSessionStarted)
//   }
// }

// function onRequestSession() {
//   // Requests an 'immersive-ar' session, which ensures that the users
//   // environment will be visible either via video passthrough or a
//   // transparent display. This may be presented either in a headset or
//   // fullscreen on a mobile device.
//   return navigator.xr.requestSession('immersive-ar').then((session) => {
//     xrButton.setSession(session)
//     session.isImmersive = true
//     onSessionStarted(session)
//   })
// }

// function initGL() {
//   if (gl) return

//   gl = createWebGLContext({
//     xrCompatible: true
//   })
//   document.body.appendChild(gl.canvas)

//   function onResize() {
//     gl.canvas.width = gl.canvas.clientWidth * window.devicePixelRatio
//     gl.canvas.height = gl.canvas.clientHeight * window.devicePixelRatio
//   }
//   window.addEventListener('resize', onResize)
//   onResize()

//   renderer = new Renderer(gl)

//   scene.setRenderer(renderer)
// }

// function onSessionStarted(session) {
//   session.addEventListener('end', onSessionEnded)

//   if (session.isImmersive) {
//     // When in 'immersive-ar' mode don't draw an opaque background because
//     // we want the real world to show through.
//     skybox.visible = false
//   }

//   initGL()

//   session.updateRenderState({ baseLayer: new XRWebGLLayer(session, gl) })

//   let refSpaceType = session.isImmersive ? 'local' : 'viewer'
//   session.requestReferenceSpace(refSpaceType).then((refSpace) => {
//     if (session.isImmersive) {
//       xrImmersiveRefSpace = refSpace
//     } else {
//       inlineViewerHelper = new InlineViewerHelper(gl.canvas, refSpace)
//     }
//     session.requestAnimationFrame(onXRFrame)
//   })
// }

// function onEndSession(session) {
//   session.end()
// }

// function onSessionEnded(event) {
//   if (event.session.isImmersive) {
//     xrButton.setSession(null)
//     // Turn the background back on when we go back to the inlive view.
//     skybox.visible = true
//   }
// }

// // Called every time a XRSession requests that a new frame be drawn.
// function onXRFrame(t, frame) {
//   let session = frame.session
//   let refSpace = session.isImmersive
//     ? xrImmersiveRefSpace
//     : inlineViewerHelper.referenceSpace
//   let pose = frame.getViewerPose(refSpace)

//   scene.startFrame()

//   session.requestAnimationFrame(onXRFrame)

//   scene.drawXRFrame(frame, pose)

//   scene.endFrame()
// }

// // Start the XR application.
// initXR()
//
//
//
//
//
//
//  카메라 듸우기
// const video = document.querySelector('#video')
// navigator.mediaDevices
//   .getUserMedia({ video: { facingMode: { exact: 'environment' } } })
//   .then((stream) => {
//     video.srcObject = stream
//   })
</script>
<style>
.home_btn {
  z-index: 100;
}
</style>
