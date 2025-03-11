<template>
  <div class="hero flex p-12 flex-col items-center">
    <Header></Header>
    <div class="mt-[0svh] flex items-start flex-col my-12 gap-6">
      <h2 class="text-style-bigger text-balance text-c-6 font-bigger">
        NOLEGGIO SNOWCROSS <span class="text-c-4">ELETTRICHE</span> A CERVINIA
      </h2>
      <a class="mt-[20svh]" href="https://mcx-app.vercel.app/">
        <MainButton>PRENOTA ORA</MainButton>
      </a>
    </div>
  </div>
  <div class="p-12 flex flex-col lg:flex-row">
    <div class="flex flex-col gap-12 lg:gap-24">
      <h3 class="font-bigger text-c-3 text-style-big">
        AVVENTURE UNICHE IN MONTAGNA
      </h3>
      <p
        class="text-style-3 italic font-medium leading-relaxed text-center lg:text-left"
      >
        Scopri il brivido della velocità su due ruote nel cuore della natura,
        rispettando l'ambiente. Le nostre moto da cross elettriche combinano
        prestazioni straordinarie e sostenibilità per un’esperienza
        indimenticabile.
      </p>
    </div>
    <img
      src="../assets/moto/moto3.png"
      class="hidden lg:block relative right-0 lg:-right-12 -bottom-20 w-[50%]"
      alt=""
    />
  </div>
  <div class="bg-c-5">
    <div class="w-full">
      <div class="flex flex-col items-center gap-12 pl-12 py-20">
        <h5
          class="font-bigger text-center text-c-1 text-style-big-plus pr-12 lg:pr-0"
        >
          SILENZIO POTENZA LIBERTA’
        </h5>
        <p
          class="text-style-3 lg:w-3/4 leading-relaxed text-c-1 italic text-center font-medium pr-12 lg:pr-0"
        >
          Benvenuti da mcxperience centro noleggio snowcross elettriche a
          cervinia! Con le nostre moto potrai godere dell unico tracciato
          dedicato, ai piedi del Cervino (2600mt), senza rumore né emissioni
          immergendoti completamente nella bellezza della natura.
        </p>
        <div
          class="flex flex-col-reverse lg:flex-row justify-between gap-12 my-12"
        >
          <div class="flex flex-col gap-6 pr-12 lg:pr-0">
            <h6 class="font-bigger text-c-1 text-style-big">
              ASSISTENZA PROFESSIONALE
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Briefing iniziale e consigli tecnici. Casco e protezioni
              omologate. Assistenza durante il percorso.
            </p>
            <h6 class="font-bigger text-c-1 text-style-big mt-6">
              PERCORSI MOZZAFIATO
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Prenota direttamente dal sito. Al punto di ritrovo riceverai un
              sottocasco monouso casco da cross e maschera protettiva. Dopo un
              brevissimo briefing sul funzionamento delle moto sarai
              accompagnato al tracciato dove potrai, vivere un esperienza unica
              nel suo genere.
            </p>
            <h6 class="font-bigger text-c-1 text-style-big mt-6">
              ESPERIENZA PERSONALIZZATA
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Su richiesta sono disponibili pacchetti personalizzati con
              possibilità di pernottamento in struttura Pack aziendali, ecc...
            </p>
          </div>
          <img src="../assets/moto/moto2.png" class="lg:w-[55vw]" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div
      class="lg:bg-c-3 lg:w-3/5 p-12 lg:absolute lg:right-12 lg:translate-y-12"
    >
      <h6
        class="font-bigger text-center lg:text-left text-pretty text-c-1 text-style-big mb-6"
      >
        COME RAGGIUNGERCI D’ESTATE E D’INVERNO
      </h6>
      <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
        Potrai raggiungerci comodamente con la tua auto fino a Breuil-Cervinia.
        Passato il centro paese arriverai alla partenza della seggiovia Cretaz,
        Li ci sará il nostro gattto delle nevi pronto ad accoglierti.
      </p>
    </div>
  </div>
  <Footer color="3"></Footer>
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
  background-image: url("../assets/moto/moto4.png");
  background-size: cover;
  background-position: bottom;
  height: 140svh;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

.section {
  background-image: url("../assets/moto/section.png");
  background-size: cover;
  background-position: bottom;
  height: 100svh;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

@media screen and (max-width: 1024px) {
  .hero {
    height: 100svh;
  }

  .section {
    height: 100svh;
  }
}
@media screen and (max-width: 640px) {
  .section {
    height: 120svh;
  }
}
</style>
