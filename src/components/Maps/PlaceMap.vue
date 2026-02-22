<template>
  <div id="map" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let map = null

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

    const token = import.meta.env.VITE_MAPBOX_TOKEN
    mapboxgl.accessToken = token

    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jajeb/cmlxuu05e000q01ptdtg27n1t',
      projection: 'globe',
      zoom: 16,
      center: [124.886215, 11.136365],
    })

    map.addControl(new mapboxgl.NavigationControl())
    map.scrollZoom.disable()

    map.on('style.load', () => {
      map.setFog({})
    })
  } catch (err) {
    console.error('Failed to load Mapbox GL JS', err)
  }
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 70vh;
  border-radius: 1%;
}
</style>
