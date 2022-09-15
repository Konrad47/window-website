<template>
  <div>
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">Serwis</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <span id="path" style="font-weight: bold">Serwis</span>
      </div>
    </div>
    <div id="element">
      <!-- <b-card> -->
      <div class="blink_me">
        <h1 class="blink">SERWIS CZYNNY 24h/7 DNI W TYGODNIU</h1>
      </div>
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row>
          <b-col align-self="baseline">
            <p>
              Zakres usług działalności serwisowej naszej firmy jest bardzo
              rozległy. Nasza firma w usługach serwisowych działa na terenie
              woj. Lubelskiego wiele lat, z naszych usług skorzystało bardzo
              wiele firm, osób prywatnych czy deweloperów którzy cieszą się
              teraz pełnowartościowym produktem jakim jest stolarka otworowa.
              Działamy na wielu płaszczyznach oraz jesteśmy profesjonalistami w
              tej dziedzinie.
            </p>
          </b-col>
        </b-row>
        <h2>Wykonujemy:</h2>
        <b-row>
          <b-col align-self="baseline">
            <ul>
              <li>Wymiany uszkodzonych i zerwanych okuć.</li>
              <li>Regulacje okien PCV, DREWNO, ALUMINIUM</li>
              <li>
                Modyfikacje okuć PCV, ALUMINIUM, DREWNO: hamulec w klamce,
                dołożenie uchyłu do okien otwieranych na oścież, hamulec cierny,
                zatrzask balkonowy, ogranicznik otwarcia 90 stopni.
              </li>
              <li>Montaż okuć antywłamaniowych.</li>
              <li>
                Awaryjne otwieranie, rozblokowanie okna po zerwaniu okucia
              </li>
              <li>Wymiana uszczelek, PCV, ALU, DREWNO</li>
              <li>Wymiana pakietów szybowych w PCV, ALUMINIUM, DREWNIE</li>
              <li>
                Zmiana kierunku otwierania skrzydeł z prawych na lewe i na
                odwrót.
              </li>
              <li>
                Renowacja starych okien PCV, DREWNIANYCH, ALU, Odnowienie
                starych oklein, powłok lakierniczych, wymiana lakieru na oknach
                drewnianych.
              </li>
            </ul>
          </b-col>
          <b-col align-self="stretch">
            <ul>
              <li>
                Możliwość dołożenia przycisku otwarcia do nowoczesnych drzwi z
                pochwytem rurowym.
              </li>
              <li>
                Montaż automatyki okiennej i drzwiowej: siłowniki do okien,
                drzwi, sterowanie okien drzwi na pilot lub z przycisku.
              </li>
              <li>
                Montaż osprzętu przeciw pożarowego do ciągów ewakuacyjnych na
                inwestycjach, wyposażenie w samozamykacze, automatyczne
                ryglowanie skrzydeł.
              </li>
              <li>
                Zmiana otwierania drzwi wejściowych z klamki na elektrozaczep
              </li>
              <li>Naprawa dużych okien HS, PSK</li>
              <li>
                Naprawa Uszkodzeń okleiny, pęknięć profili, wypełnianie ubytków
                okleiny
              </li>
              <li>Naprawa/Renowacja SPALONYCH, NADPALONYCH okien</li>
              <li>Zmiana koloru okien PCV/ DREWNO na kolor jednolity RAL.</li>
              <li>
                Czyszczenie okien z PIANY montażowej, świeżej i zaschniętej.
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col align-self="baseline">
            <p>
              Wykonujemy szereg innych usług serwisowych, jeśli są Państwo
              zainteresowani naszą ofertą lub nie znaleźliście tutaj
              interesującego zagadnienia proszę o zapytanie mailowe lub kontakt
              telefoniczny, chętnie doradzimy oraz przyjedziemy do bezpłatnej
              wyceny u Państwa na miejscu.
            </p>
          </b-col>
        </b-row>
        <h2>Nasze realizacje:</h2>
        <b-row class="row-rel">
          <h3>Frezowanie nawiewników</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image" width="423"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image" width="423"></b-img>
          </b-col>
          <!-- <b-col align-self="stretch"> -->
          <p class="img-p">
            Nasza firma zajmuje się również frezowaniem otworów pod nawiewniki,
            oraz montażem nawiewników. Realizujemy najtródniejsze zlecenia nawet
            w bardzo ciężkich warunkach. Jesteśmy w stanie odfrezować otwory w
            każdym oknie.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Frezowanie nawiewników</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image" width="423"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image" width="423"></b-img>
          </b-col>
          <!-- <b-col align-self="stretch"> -->
          <p class="img-p">
            Nasza firma zajmuje się również frezowaniem otworów pod nawiewniki,
            oraz montażem nawiewników. Realizujemy najtródniejsze zlecenia nawet
            w bardzo ciężkich warunkach. Jesteśmy w stanie odfrezować otwory w
            każdym oknie.
          </p>
        </b-row>
      </b-container>
      <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/aboutUs/aboutus2.png"),
    };
  },
};
</script>

<style scoped>
.card {
  max-width: 600px;
}
#img1 {
  max-width: 500px;
}
/* .img-p {
  margin-top: 100px;
} */
#element {
  padding: 1rem 1rem;
}
.blink_me {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.blink {
  color: #a7171a;
  font-weight: bold;
  letter-spacing: 0.3rem;
  font-size: 3rem;
}
#col-1 {
  justify-content: left;
  padding-right: 100px;
}
p {
  /* opacity: none; */
  font-size: 20px;
  text-decoration: none;
  color: black;
  text-align: justify;
  text-indent: 1.5em;
  margin-top: 0;
  margin-bottom: 5px;
}
h2,
h4 {
  text-align: left;
  color: #2e8b57;
  font-weight: bold;
}
h3 {
  color: #2e8b57;
  font-weight: bold;
}
li {
  font-size: 18px;
  text-align: left;
  color: black;
  /* margin: -10px; */
}
.row-rel {
  margin-top: 20px !important;
}
hr {
  color: #2e8b57;
}
hr:not([size]) {
  height: 3px;
}
</style>