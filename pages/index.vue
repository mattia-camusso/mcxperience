<template>
  <Header></Header>
  <div class="m-6 flex flex-col items-center">
    <img src="/hero.png" class="w-full" alt="" />
    <div class="flex items-center flex-col my-12 gap-6">
      <p class="uppercase text-style-1">presso</p>
      <h2 class="uppercase text-style-bigger traking-wider font-biosphere">
        hotel lo stambecco
      </h2>
      <p class="uppercase text-style-1">plan-maison cervinia</p>
    </div>
    <div class="relative m-12">
      <img src="../assets/cat.png" alt="" class="" />
      <img src="../assets/mountain.svg" class="absolute bottom-0 centered" />
    </div>
    <div class="flex flex-col items-center m-6 gap-6">
      <h2 class="uppercase text-style-bigger traking-wider font-biosphere">
        solo su prenotazione
      </h2>
      <p class="uppercase text-style-1">stagione 2024/2025</p>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.centered {
  left: 0;
  right: 0;
  bottom: 0;
  margin-inline: auto;
  width: fit-content;
}
</style>
