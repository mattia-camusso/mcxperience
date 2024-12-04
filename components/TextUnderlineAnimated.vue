<template>
  <div>
    <h4
      :class="[extraStyle, `text-c-${color}`, `after:bg-c-${color}`]"
      class="under"
    >
      <slot></slot>
    </h4>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  extraStyle: String,
  color: String,
});
</script>

<style scoped>
.under {
  cursor: pointer;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.under::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 3px;
  height: 3px;
}

.under:hover > .under:not(:hover) {
  transition: all 800ms ease;
}

.under:hover {
  transition: all 800ms ease;
}

.under:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

.under:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
