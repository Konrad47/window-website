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
            <b-img id="img1" :src="image1" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image2" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Nasza firma zajmuje się również frezowaniem otworów pod nawiewniki,
            oraz montażem nawiewników. Realizujemy najtródniejsze zlecenia nawet
            w bardzo ciężkich warunkach. Jesteśmy w stanie odfrezować otwory w
            każdym oknie.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Malowanie całych okien</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image3" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image4" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Przedstawiamy realizację bardzo tródnego zlecenia. Stolarka okienna
            została zabrudzona tynkiem żywicznym podczas wykonywania prac
            elewacyjnych. Firma sprzątająca wyczyściła okna środkiem z kwasem,
            który spowodował czerwone wżery i odbarwienia. Konieczne było
            malowanie całej stolarki, skrzydła oraz ramy. Zastosowano lakiery
            dwuskładnikowe w kolorze okleiny oraz zabezpieczenie lakierem
            bezbarwnym.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Moskitiery</h3>
          <b-col align-self="baseline">
            <h4>Po wykonaniu:</h4>
            <b-img id="img1" :src="image5" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po wykonaniu:</h4>
            <b-img id="img1" :src="image6" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Zajmujemy się również montażem moskitier. Montujemy moskitiery
            balkonowe otwierane na zawiasach aluminiowych oraz moskitier
            wkładanych w okna na sprężynkach. Wszystkie moskitiery wykonane są z
            profili aluminiowych malowanych proszkowo, lub oklejane na wzór
            stolarki okiennej.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Naprawa pęknięcia obok zgrzewu</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image7" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image8" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Pęknięcie skrzydła obok zgrzewu - Naprawa polegała na rozfrezowaniu
            pękniętego miejsca w celu wpuszczenia w szczelinę kleju
            dwuskładnikowego. Po wpuszczeniu i utwardzeniu kleju została
            naniesiona warstwa wyrównująca, następnie położono lakier
            dwuskładnikowy w kolorze okleiny.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Odtworzenie okleiny</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image9" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image10" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Rysa z całkowitym ubytkiem okleiny - Naprawa uszkodzenia polegała na
            wypełnieniu ubytku, rekonstrukcji słoi na okleinie złoty dąb, oraz
            zabezpieczeniu naprawionego miejsca tak aby naprawa była trwała na
            lata.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Prostowanie wygięcia</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image11" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image12" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Wgniecenie profilu skrzydła powstałe w skutek puszczenia przewodów w
            trakcie budowy. Naprawa polegała na wyciągnięciu wgniecenia na
            gorąco oraz ponownym ukształtowaniu uszkodzonego elementu.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Rekonstrukcja narożnika skrzydła</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image13" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image14" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Rekonstrukcja uszkodzonego narożnika skrzydła okiennego. Nprawa
            polegała na przywróceniu kształtu narożnika do oryginału. Następnie
            położono dwuskładnikowe lakiery w kolorze oraz lakier bezbarwny.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Rysy i ubytki</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image15" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image16" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Dostaliśmy zgłoszenie od klienta do naprawy uszkodzonej okleiny na
            ramie. Wypełniono rysy tworzywem w kolorze okleiny oraz
            zabezpieczono lakierem UV
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Spalona rama po grzaniu papy</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image17" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image18" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Dostaliśmy zgłoszenie do usługi naprawy Spalonego Okna. Właściciel
            domku, zastał takie okno po wygrzewaniu papy na balkonie. Nasza
            naprawa polegała na wyczyszczeniu spalonych miejsc, zerwaniu
            spalonej okleiny, zeszlifowaniu ubytków oraz wypełnieniem ubytków i
            deformacji. Położono kilka warstw lakieru dwuskładnikowego w kolorze
            stolarki okiennej, oraz zabezpieczono całość lakierem bezbarwnym.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Spalona rama po grzaniu papy</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image19" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image20" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Spalona rama na inwestycji, pracownik zostawił palnik do grzania
            papy obok okna. Nasza naprawa polegała na wyczyszczeniu spalonego
            miejsca, zerwaniu spalonej okleiny, zeszlifowaniu ubytków oraz
            wypełnieniem ubytków. Położono kilka warstw lakieru dwuskładnikowego
            w kolorze okleiny, odwzorowano słoje oraz zabezpieczono całość
            lakierem bezbarwnym.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Uszkodzenia okleiny</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image21" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image22" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Dostaliśmy zgłoszenie od firmy która zajmuje się sprzedażą mieszkań,
            aby doprowadzić okna do stanu użyteczności mechanicznej oraz
            wizualnej po porzednich lokatorach. Uszkodzeń było bardzo wiele, od
            przetarć mechanicznych okleiny po całkowite jej ubytki, zabrudzenia
            farbami oraz liczne rysy. Nprawy polegały na wypełnieniu ubytków,
            wyczszczeniu zabrudzonych miejsc, zabezpieczeniu uszkodzonych miejsc
            lakierem bezbarwnym UV dla utrwalenia powłok.
          </p>
        </b-row>
        <hr />
        <b-row class="row-rel">
          <h3>Zerwana przewiązka pozioma skrzydła PCV</h3>
          <b-col align-self="baseline">
            <h4>Przed:</h4>
            <b-img id="img1" :src="image23" width="500"></b-img>
          </b-col>
          <b-col align-self="baseline">
            <h4>Po:</h4>
            <b-img id="img1" :src="image24" width="500"></b-img>
          </b-col>
          <p class="img-p">
            Zgłoszenie do naprawy zerwanej poprzeczki poziomej skrzydła.
            Poprzeczka oderwała się od profilu skrzydła. Naprawa polegała na
            wyciągnięciu pakietów szybowych, ściśnięciu skrzydła, oraz skręceniu
            i sklejeniu oderwanego elementu.
          </p>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image1: require("@/assets/aboutUs/1.jpg"),
      image2: require("@/assets/aboutUs/2.jpg"),
      image3: require("@/assets/aboutUs/3.jpg"),
      image4: require("@/assets/aboutUs/4.jpg"),
      image5: require("@/assets/aboutUs/5.jpg"),
      image6: require("@/assets/aboutUs/6.jpg"),
      image7: require("@/assets/aboutUs/7.jpg"),
      image8: require("@/assets/aboutUs/8.jpg"),
      image9: require("@/assets/aboutUs/9.jpg"),
      image10: require("@/assets/aboutUs/10.jpg"),
      image11: require("@/assets/aboutUs/11.jpg"),
      image12: require("@/assets/aboutUs/12.jpg"),
      image13: require("@/assets/aboutUs/13.jpg"),
      image14: require("@/assets/aboutUs/14.jpg"),
      image15: require("@/assets/aboutUs/15.jpg"),
      image16: require("@/assets/aboutUs/16.jpg"),
      image17: require("@/assets/aboutUs/17.jpg"),
      image18: require("@/assets/aboutUs/18.jpg"),
      image19: require("@/assets/aboutUs/19.jpg"),
      image20: require("@/assets/aboutUs/20.jpg"),
      image21: require("@/assets/aboutUs/21.jpg"),
      image22: require("@/assets/aboutUs/22.jpg"),
      image23: require("@/assets/aboutUs/23.jpg"),
      image24: require("@/assets/aboutUs/24.jpg"),
    };
  },
};
</script>

<style scoped>
#img1 {
  max-width: 600px;
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
  text-align: left;

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
@media (max-width: 600px) {
  #img1 {
    max-width: 400px;
  }
}
@media (max-width: 420px) {
  #img1 {
    max-width: 300px;
  }
}
</style>