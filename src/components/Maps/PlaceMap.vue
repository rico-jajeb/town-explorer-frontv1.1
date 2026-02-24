<template>
  <div id="map" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

// Global map cache
let cachedMap = null

function loadMapboxScript() {
  return new Promise((resolve, reject) => {
    if (window.mapboxgl) return resolve(window.mapboxgl)

    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.js'
    script.onload = () => resolve(window.mapboxgl)
    script.onerror = reject
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  })
}

onMounted(async () => {
  try {
    const mapboxgl = await loadMapboxScript()
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

    if (!cachedMap) {
      cachedMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jajeb/cmlxuu05e000q01ptdtg27n1t',
        projection: 'globe',
        zoom: 16,
        center: [124.886215, 11.136365],
      })

      cachedMap.addControl(new mapboxgl.NavigationControl())
      cachedMap.scrollZoom.disable()

      cachedMap.on('style.load', () => {
        cachedMap.setFog({})
      })
    } else {
      // If map is already created, just reattach it to the container
      cachedMap.getContainer().id = 'map' // reattach container
    }
  } catch (err) {
    console.error('Failed to load Mapbox GL JS', err)
  }
})

onBeforeUnmount(() => {
  // don't remove the map completely, just detach from DOM
  if (cachedMap) cachedMap.getContainer().remove()
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 70vh;
  border-radius: 1%;
}
</style>
