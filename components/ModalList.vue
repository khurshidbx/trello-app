<template>
 <div v-if="showModal" class="bg-gray-500/50  flex justify-center items-center absolute top-0 w-full h-screen">
      <div class="w-[500px] h-[400px] bg-white">
            <slot>sdfs</slot>
      </div>
 </div>
</template>

<script>
export default {
  props:['showModal'],
  data() {
    return {
      isOpen: false
    }
  }

}
</script>
<style scoped>

</style>
