<template>
  <button class="bg-c-4 p-4 pb-3 text-style-big font-bigger flex">
    <slot></slot>
    <img src="../assets/svg/play.svg" class="icon ml-4" alt="" />
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.icon {
  height: clamp(1.9rem, 4.5vw, 5rem);
}
</style>
