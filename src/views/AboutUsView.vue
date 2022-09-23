<template>
  <div :style="image1">
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">O nas</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <span id="path" style="font-weight: bold">O nas</span>
      </div>
    </div>
    <div id="element">
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row>
          <b-col align-self="baseline">
            <h1>
              OKNAPRO to firma powstała z pasji do estetyki stolarki otworowej.
            </h1>
            <p>
              Początkowo zajmowaliśmy się serwisem oraz naprawą okien - nawet
              tych najbardziej zniszczonych, które inne firmy uznawały za
              niemożliwe do naprawienia. Widząc zadowolenie naszych klientów
              postanowiliśmy pójść o krok dalej. Wraz z rozwojem potrzeb rynku
              oraz coraz większymi wymaganiami Inwestorów dotyczących zagadnień
              estetyki oraz trwałości stolarki otworowej postanowiliśmy
              przedstawić jej kompleksowy zakres obsługi.
            </p>
            <p>
              Pracownicy naszej firmy posiadają szeroki zakres kompetencji oraz
              wiedzy dotyczącej stolarki otworowej, co umożliwia nam
              dostosowanie oferowanych produktów do potrzeb Klienta. Fachowy i
              wysoce wykwalifikowany zespół naszych montażystów potrafi sprostać
              każdemu wyzwaniu wykonując fachowy oraz autoryzowany montaż.
            </p>
          </b-col>
          <b-col align-self="stretch">
            <div>
              <b-img id="img1" :src="image" width="512"></b-img>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>
              Indywidualne podejście do każdego zlecenia pozwala na dbałość o
              każdy detal oraz estetykę wyrobów, zapewnienie produktów
              cechujących się najwyższą jakością. Wszystkie produkty z naszej
              oferty są wykonane z najlepszych materiałów. Materiały jak i
              gotowy produkt, który sprzedajemy posiadają najlepsze parametry
              energooszczędności. Oferowana przez nas stolarka posiada niezbędne
              certyfikaty i jest poddawana surowym badaniom jakościowym pod
              kątem zmieniających się norm, w wielu ośrodkach badawczych w
              Polsce jak i za granicą.
            </p>
            <!-- <p></p> -->
            <p>
              Decydując się na wybór naszej oferty, otrzymują Państwo
              bezpieczeństwo, estetykę i trwałość wyrobu na długie lata.
              Dodatkowym atutem przemawiającym za wyborem naszej oferty jest
              szeroka gama produktów pozwalająca na dostosowanie zamówienia do
              Państwa potrzeb oraz możliwości finansowych. Prosimy pamiętać, że
              w cenie stolarki znajduje się również jej profesjonalny serwis.
              Zachęcamy do zapoznania się z ofertą firmy. W przypadku pytań lub
              wątpliwości prosimy o kontakt z działem handlowym. Pozostajemy do
              Państwa dyspozycji. Zachęcamy do zamówienia bezpłatnej wizyty na
              Twojej inwestycji naszego fachowca, który przygotuje indywidualnie
              dobraną ofertę stolarki budowlanej.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image1: {
        backgroundImage: `url(${require("@/assets/1.png")})`,
        width: "100%",
        height: "100%",
      },
      image: require("@/assets/aboutUs/aboutus.png"),
    };
  },
};
</script>

<style scoped>
#element {
  padding: 1rem 1rem;
}

#col-1 {
  justify-content: left;
  padding-right: 100px;
}
h1 {
  text-align: left;
  color: #2e8b57;
  font-weight: bold;
}
p {
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  text-align: justify;
  text-indent: 1.5em;
  margin-top: 0;
  margin-bottom: 5px;
}
#img1 {
  padding-top: 10px;
  max-width: 600px;
}
@media (max-width: 750px) {
  #img1 {
    width: 384px;
  }
}
@media (max-width: 400px) {
  #img1 {
    width: 300px;
  }
}
</style>