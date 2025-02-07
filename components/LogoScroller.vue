<template>
  <section class="scroller">
    <div class="marquee marquee--fit-content">
      <ul class="marquee__content">
        <li v-for="el in elems">
          <img
            class="img aspect-square object-contain"
            :src="`/${el}.png`"
            alt="cliente"
          />
        </li>
      </ul>

      <ul aria-hidden="true" class="marquee__content">
        <li v-for="el in elems">
          <img
            class="img aspect-square object-contain"
            :src="`/${el}.png`"
            alt="cliente"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js" setup>

const elems = [1, 2, 3, 4,1,2,3,4];
</script>

<style scoped>
.img {
  padding: 0 2rem;
  width: 250px;
  height: 250px;
}

@media screen and (max-width: 768px) {
  .img {
    width: 170px;
    height: 170px;
  }
}

.scroller {
  max-width: 100%;
  overflow: hidden;
}

/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  bottom: 0;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: var(--gap);
  animation: scroll 20s linear infinite;
  -webkit-animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
@-webkit-keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Attempt to size parent based on content. Keep in mind that the parent width is equal to both content containers that stretch to fill the parent. */
.marquee--fit-content {
}

/* Other page demo styles */
.marquee__content > * {
  flex: 0 0 auto;
}
</style>
