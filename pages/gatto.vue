<template>
  <div class="hero flex p-12 flex-col items-center">
    <Header></Header>
    <div class="mt-[30svh] flex items-start flex-col my-12 gap-6">
      <h2 class="text-style-bigger text-balance text-c-6 font-bigger">
        A CENA COL GATTO DELLE NEVI A <span class="text-c-4">CERVINIA</span>
      </h2>
      <!-- <MainButton>PRENOTA ORA</MainButton> -->
    </div>
  </div>
  <div class="p-12 flex flex-col lg:flex-row">
    <div class="lg:w-3/5 flex flex-col gap-6 lg:gap-24">
      <h3 class="font-bigger text-c-3 text-style-big">
        DISPONIBILE SU PRENOTAZIONE
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
      src="../assets/gatto/gatto4.png"
      class="hidden lg:block relative right-0 lg:-right-12 lg:-bottom-12 w-[75%]"
      alt=""
    />
  </div>
  <div class="bg-c-3">
    <div class="w-full">
      <div class="flex flex-col items-center gap-12 px-12 py-20">
        <h5 class="font-bigger text-center text-c-1 text-style-big-plus">
          UN VIAGGIO MAGICO VERSO LA VETTA
        </h5>
        <p
          class="text-style-3 lg:w-3/4 leading-relaxed text-c-1 italic text-center font-medium"
        >
          Benvenuti da MCXperience, centro di noleggio moto da cross elettriche
          a Cervinia, dove la passione per l’avventura si incontra con il
          rispetto per la natura. Con le nostre moto elettriche, puoi esplorare
          percorsi mozzafiato senza rumore né emissioni, immergendoti
          completamente nella bellezza delle Alpi valdostane.
        </p>
        <div
          class="flex flex-col-reverse lg:flex-row justify-between gap-12 my-12"
        >
          <div class="flex flex-col gap-6">
            <h6 class="font-bigger text-c-1 text-style-big">CENE ROMANTICHE</h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Un viaggio suggestivo a bordo del gatto delle nevi tra i paesaggi
              innevati di Cervinia. Raggiungi l'Hotel Lo Stambecco per una cena
              esclusiva sotto le stelle.
            </p>
            <h6 class="font-bigger text-c-1 text-style-big mt-6">
              ESPERIENZE IN QUOTA
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Salite ad alta quota tra paesaggi mozzafiato. Fermati per un
              brindisi sulla neve e goditi la vista delle cime illuminate dalla
              luna.
            </p>
            <h6 class="font-bigger text-c-1 text-style-big mt-6">
              APERITIVI AL TRAMONTO E CENE IN STRUTTURA
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Goditi un aperitivo indimenticabile in alta quota, con vista
              mozzafiato sulle montagne illuminate dalle ultime luci del giorno.
              Un'esperienza unica per celebrare momenti speciali presso l'Hotel
              Lo Stambecco.
            </p>
          </div>
          <img src="../assets/gatto/gatto3.png" class="lg:w-[55vw]" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div
      class="lg:bg-c-5 lg:w-3/5 p-12 lg:absolute lg:right-12 lg:-translate-y-12"
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
  <Footer color="5"></Footer>
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
  background-image: url("../assets/gatto/gatto5.png");
  background-size: cover;
  background-position: bottom;
  height: 140svh;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

.section {
  background-image: url("../assets/gatto/section.png");
  background-size: cover;
  background-position: bottom;
  height: 80svh;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

@media screen and (max-width: 1024px) {
  .hero {
    height: 100svh;
  }

  .section {
    height: 80svh;
  }
}
@media screen and (max-width: 640px) {
  .hero {
    height: 90svh;
  }
  .section {
    height: 100svh;
  }
}
</style>
