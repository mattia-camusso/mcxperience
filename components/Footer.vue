<template>
  <img
    v-if="!hidden"
    :src="`/mountain${color}.svg`"
    alt="email mcxperience"
    class="w-48 lg:w-64 center"
  />
  <div class="flex flex-col items-start">
    <div
      :class="`bg-c-${color}`"
      class="w-full p-8 md:p-12 flex items-center gap-6"
    >
      <p class="text-style-bigger text-c-1 font-bigger">CONTATTACI</p>
      <img
        src="../assets/svg/msg.svg"
        alt="email mcxperience"
        class="heio mr-4"
      />
    </div>
    <div class="m-12 flex flex-col items-start gap-6">
      <a
        href="mailto:info@mcx4478.com?subject=Info e Prenotazioni MCXPERIENCE"
        class="text-style-4 text-balance my-2 font-light flex items-center"
      >
        <img
          src="../assets/svg/mobile.svg"
          alt="email mcxperience"
          class="h-6 lg:h-12 mr-3 lg:mr-6"
        />
        <TextUnderlineAnimated color="2" extraStyle="text-style-1 font-medium">
          +39 351 5049075
        </TextUnderlineAnimated>
      </a>
      <a
        href="mailto:info@mcx4478.com?subject=Info e Prenotazioni MCXPERIENCE"
        class="text-style-4 text-balance my-2 font-light flex items-center"
      >
        <img
          src="../assets/svg/email.svg"
          alt="email mcxperience"
          class="h-4 lg:h-8 mr-3 lg:mr-6"
        />
        <TextUnderlineAnimated color="2" extraStyle="text-style-1 font-medium">
          info@mcx4478.com
        </TextUnderlineAnimated>
      </a>
      <a
        href="mailto:info@mcx4478.com?subject=Info e Prenotazioni MCXPERIENCE"
        class="text-style-4 text-balance my-2 font-light flex items-center"
      >
        <img
          src="../assets/svg/map.svg"
          alt="email mcxperience"
          class="h-6 lg:h-12 mr-3 lg:mr-6"
        />
        <TextUnderlineAnimated color="2" extraStyle="text-style-1 font-medium">
          Hotel Lo Stambecco, Cervinia (AO)
        </TextUnderlineAnimated>
      </a>
    </div>
    <div class="flex items-center justify-center my-6 w-full">
      <p class="font-medium text-style-1">MCXPERIENCE | P.IVA 02962160996</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: String,
  hidden: Boolean,
});
</script>

<style scoped>
.heio {
  height: clamp(4rem, 12vw, 12rem);
}

.center {
  position: absolute;
  left: 0;
  right: 0;
  transform: translate(0, -99%);
  margin-inline: auto;
}
</style>
