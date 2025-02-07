<template>
  <div class="hero flex p-12 flex-col items-center">
    <Header></Header>
    <div class="flex items-center flex-col my-12 gap-6">
      <h2 class="text-style-bigger text-pretty text-c-6 font-bigger">
        UN’ ESPERIENZA A <span class="text-c-4">CERVINIA</span> COME NON L’AVETE
        MAI VISTA
      </h2>
    </div>
  </div>
  <div class="bg-c-3 flex flex-col items-center justify-between p-6 lg:p-24">
    <h3 class="font-bigger text-pretty text-c-1 text-style-bigger">
      SCOPRI I NOSTRI SERVIZI
    </h3>
    <div
      class="flex flex-col lg:flex-row w-full items-center mt-12 justify-between"
    >
      <a
        href="/moto"
        class="flex flex-col items-center hover:bg-c-6 hover:text-c-2 text-c-1 cursor-pointer transition-all duration-500 p-6 ease-[cubic-bezier(0.8, 0.12, 0.05, 0.88)]"
      >
        <img
          class="w-[50vw] lg:w-[25vw] aspect-square"
          src="../assets/home/home1.jpg"
          alt=""
        />
        <h5 class="font-bigger text-style-big mt-12">NOLEGGIO MOTO</h5>
      </a>

      <a
        href="/gatto"
        class="flex flex-col items-center hover:bg-c-6 hover:text-c-2 text-c-1 cursor-pointer transition-all duration-500 p-6 ease-[cubic-bezier(0.8, 0.12, 0.05, 0.88)]"
      >
        <img
          class="w-[50vw] lg:w-[25vw] aspect-square"
          src="../assets/home/home2.png"
          alt=""
        />
        <h5 class="font-bigger text-style-big mt-12">CENA IN QUOTA</h5>
      </a>

      <div
        class="flex flex-col items-center hover:bg-c-6 hover:text-c-2 text-c-1 cursor-pointer transition-all duration-500 p-6 ease-[cubic-bezier(0.8, 0.12, 0.05, 0.88)]"
      >
        <img
          class="w-[50vw] lg:w-[25vw] aspect-square"
          src="../assets/home/home3.png"
          alt=""
        />
        <h5 class="font-bigger text-style-big mt-12">PRENOTA SUBITO</h5>
      </div>
    </div>
  </div>
  <Footer color="3" hidden></Footer>
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

.hero {
  background-image: url("../assets/hero.png");
  background-position: center center;
  height: 120svh;
  width: auto;
}

@media screen and (max-width: 1024px) {
  .hero {
    height: 90svh;
  }
}
</style>
