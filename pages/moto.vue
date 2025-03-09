<template>
  <div class="hero flex p-12 flex-col items-center">
    <Header></Header>
    <div class="mt-[30svh] flex items-start flex-col my-12 gap-6">
      <h2 class="text-style-bigger text-balance text-c-6 font-bigger">
        NOLEGGIO SNOWCROSS <span class="text-c-4">ELETTRICHE</span> A CERVINIA
      </h2>
      <a href="https://mcx-app.vercel.app/">
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
      src="../assets/moto/moto1.png"
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
          Benvenuti da MCXperience, centro di noleggio moto da cross elettriche
          a Cervinia, dove la passione per l’avventura si incontra con il
          rispetto per la natura. Con le nostre moto elettriche, puoi esplorare
          percorsi mozzafiato senza rumore né emissioni, immergendoti
          completamente nella bellezza delle Alpi valdostane.
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
              Tecnologia avanzata: moto silenziose, potenti e progettate per
              affrontare ogni tipo di terreno. Percorsi personalizzati a
              Cervinia.
            </p>
            <h6 class="font-bigger text-c-1 text-style-big mt-6">
              SOSTENIBILITA’
            </h6>
            <p class="text-style-3 text-c-1 italic font-medium leading-relaxed">
              Guida senza lasciare tracce, rispettando l’ambiente montano tra
              percorsi panoramici nel cuore di Cervinia.
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
        Raggiungeteci in macchina, con la moto, in bici percorrendo la strada
        statale n.26 del Colle Piccolo San Bernardo o in escursione a piedi.
        Scoprite la strada romana, antica strada per le Gallie, che parte dal
        paese di La Thuile. ll giardino dello Chalet Lo Riondet è un rifugio
        sereno e riservato, perfetto per i nostri ospiti che cercano un momento
        di quiete. Qui, accanto a un incantevole laghetto, potete concedervi una
        pausa rilassante, immersi in un ambiente tranquillo. Avrete la
        possibilità di ordinare un calice dalla nostra selezione di vini
        pregiati, gustare un fresco gelato o sorseggiare un cocktail. Inoltre,
        la nostra champagneria è sempre disponibile per offrirvi un’esperienza
        rilassante, circondati dalla natura incontaminata e dalle viste
        mozzafiato del Monte Bianco.
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
  background-image: url("../assets/moto/hero.png");
  background-size: cover;
  background-position: bottom;
  height: 140svh;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

.section {
  background-image: url("../assets/moto/section.png");
  background-size: cover;
  background-position: bottom;
  height: 150svh;
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
