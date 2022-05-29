import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windows: [
      //AS 80US
      {
        id: 1,
        size: "AS 80US",
        name: "System okienny z ukrytym skrzydłem",
        description: [
          {
            name: "System AS 80US (ukryte skrzydło) przeznaczony jest do okien jedno i wielokwaterowych, w których pożądanym efektem estetycznym jest uzyskanie widoku niewidocznego skrzydła okna z zewnętrznej strony zabudowy. Wszystkie sąsiadujące ze sobą okna stałe i otwierane sprawiają, że widok wszystkich kwater jest taki sam. System AS 80US jest kompatybilny ze wszystkimi systemami aluminiowymi Aluron.",
          },
        ],
        description2: "OKNA:",
        dots: [
          {
            name: "Parametry termiczne konstrukcji spełniają wymagania do 2021 roku",
          },
          {
            name: "3 warianty termiczne",
          },
          {
            name: "Ukryta uszczelka skrzydła",
          },
          {
            name: "Konstrukcje łukowe, w tym spawane",
          },
          {
            name: "Aluminiowe zaślepki odwodnień",
          },
          {
            name: "Przystosowane do współpracy z inteligentnymi budynkami",
          },
          {
            name: "Integracja z pozostałymi systemami Aluron",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Głębokość ościeżnicy okna",
            value: "80 mm",
          },
          {
            name: "Zakres szklenia do",
            value: "68 mm",
          },
          {
            name: "Głębokość skrzydeł okna",
            value: "84 mm",
          },
          {
            name: "Konstrukcja 3-komorowa",
            value: "TAK",
          },
          {
            name: "Izolacyjność termiczna Uw okna",
            value: "od 0,71 W/m2K",
          },
          {
            name: "Wodoszczelność",
            value: "E 1950",
          },
          {
            name: "Przepuszczalność powietrza",
            value: "4 klasa",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "C3",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu AS 80US: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_80US.pdf",
          },
        ],
        numberofImage: 3,
        image1: require("@/assets/as80us/AS-80US.jpg"),
        image2: require("@/assets/as80us/AS-80-US_ukryta-uszczelka-skrzydla.png"),
        image3: require("@/assets/as80us/AS80US_systemy_aluminiowe_ukryte_skrzydlo.jpg"),
      },
      // AS 178HS
      {
        id: 2,
        size: "AS 178HS",
        name: "Drzwi podnoszono-przesuwne",
        description: [
          {
            name: "System AS 178HS to połączenie nowatorskich rozwiązań z nowoczesnym designem, tworzące system całoszklanych drzwi podnoszono – przesuwnych nowej generacji. System daje możliwość budowania dużych ruchomych przeszkleń tarasowych z niskim i ciepłym progiem. Jego mechanizmy konstrukcyjne umożliwiają bezpieczne i komfortowe przesuwanie ciężkich skrzydeł, ręcznie lub automatycznie. Zastosowanie okuć renomowanych dostawców pozwala na komfortowe przesuwanie nawet bardzo ciężkich skrzydeł.",
          },
          {
            name: "System AS 178HS sprawdza się w budynkach z dużymi przeszkleniami, restauracjach, ogrodach zimowych, gdzie istotną rolę ogrywa łatwość przemieszczania się z wnętrza pomieszczenia na zewnątrz, łatwość obsługi, design oraz estetyka. Ważnym atutem tego rozwiązania jest fakt, iż nie zajmuje powierzchni wnętrza i dobrze komponuje się w każdej aranżacji. Innowacyjna konstrukcja pozwala na uzyskanie najwyższych parametrów izolacyjności termicznej.",
          },
          {
            name: "W systemie AS 178HS możliwe jest całkowite zabudowanie futryny w warstwie ocieplenia, pozwala to na podkreślenie walorów dekoracyjnych elewacji i nadaje indywidualny i niepowtarzalny charakter budynku. Możliwe jest wykonywanie konstrukcji we wszystkich dostępnych na rynku schematach zabudowy (rozwiązanie z bieżnią dwu i trzytorową, rozwiązanie z możliwością stosowania szklenia stałego w skrzydłach biernych itp.).",
          },
        ],
        description2: "SYSTEM AS 178HS WYRÓŻNIA:",
        dots: [
          {
            name: "Możliwość uzyskania zabudowy bezprogowej",
          },
          {
            name: "Połączenia zagniatane ram aluminiowych",
          },
          {
            name: "Wąskie profile zabudowy",
          },
          {
            name: "Duże przeszklenia",
          },
          {
            name: "Możliwość szklenia od wewnątrz i od zewnątrz",
          },
          {
            name: "Możliwe do wykonania kombinacje dwu, trzy, cztero i sześcioelementowe na bazie ościeżnicy dwu lub trzytorowej",
          },
          {
            name: "Maksymalna szerokość konstrukcji – dzięki zastosowaniu systemowego łączenia futryn",
          },
          {
            name: "Bogata kolorystyka, nowoczesny design",
          },
          {
            name: "Kompatybilność z pozostałymi systemami Aluron",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Głębokość skrzydła",
            value: "78 mm",
          },
          {
            name: "Maksymalna grubość pakietu szybowego",
            value: "59 mm",
          },
          {
            name: "Maksymalna wysokość konstrukcji",
            value: "3300 mm",
          },
          {
            name: "Maksymalny ciężar skrzydła ruchomego",
            value: "400 kg",
          },
          {
            name: "Wariant z łączeniem skrzydeł ruchomych pod kątem 90 stopni",
            value: "TAK",
          },
          {
            name: "Izolacyjność termiczna Ud",
            value: "od 0,7 W/m2K",
          },
          {
            name: "Wodośczelność",
            value: "E 1350 Pa",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "4 klasa",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "C3/B3",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu AS 178HS: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_178HS.pdf",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/as178hs/AS178HS_drzwi-_podnoszono_przesuwne.jpg"),
        image2: require("@/assets/as178hs/AS_178HS_Przekrój-pionowy.png"),
      },
      //AS VGB
      {
        id: 3,
        size: "AS VGB",
        name: "System balustrad szklanych",
        description: [
          {
            name: "AS VGB to nowoczesny system balustrad szklanych znanych jako balkony francuskie. Charakteryzuje się wszechstronnością i bardzo wysokimi właściwościami użytkowymi. Balustrady systemu AS VGB możliwe są do zastosowania z oknami aluminiowymi oraz systemami fasadowymi. Świetnie łączą doskonałą funkcjonalność konstrukcji z nowoczesnym designem.",
          },
        ],
        description2:
          "System AS VGB pozwala projektować balustrady zróżnicowane wg sposobu montażu oraz ich wzornictwa:",
        dots: [
          {
            name: "balustrada zewnętrzna z oszkleniem mocowanym na krawędziach",
          },
          {
            name: "pionowych z lub bez słupka balustrada zewnętrzna z profilem dolnym",
          },
          {
            name: "balustrada zewnętrzna z profilem dolnym oraz słupkiem",
          },
          {
            name: "balustrada zewnętrzna połączona z fasadą",
          },
        ],
        isTableHere: false,
        description3:
          "System AS VGB jest przyjazny wykonawcy poprzez swoją prostotę montażu. Prefabrykacja ograniczona jest do niezbędnego minimum. Estetykę zapewniają ukryte wkręty montażowe, odwodnienia oraz łączniki. Aktualne trendy i nowoczesność nie ograniczają wariantowości konstrukcji, wizji projektanta, a przede wszystkim wymagań i potrzeb użytkownika. Szkło laminowane hartowane ESG w grubościach od 10,8mm (55.2) do 20,8 mm (1010.2) gwarantuje bezpieczeństwo, a komfort poprawia pochwyt, nakładany na górną krawędź szyby w wariancie aluminium lakierowanym lub stali nierdzewnej.",
        linkdesc: [
          {
            name: "Karta produktu AS VGB: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2022/04/AS-VGB_PL.pdf",
          },
        ],
        numberofImage: 3,
        image1: require("@/assets/asvgbBalustrada/AS_VGB.jpg"),
        image2: require("@/assets/asvgbBalustrada/AS_IGB_slupek-w-fasadzie_564_PL.jpg"),
        image3: require("@/assets/asvgbBalustrada/AS-IGB-slupek-jednoprofilowy_PL.png"),
      },
      // AS 75
      {
        id: 4,
        size: "AS 75",
        name: "Innowacyjny system okienno-drzwiowy",
        description: [
          {
            name: "Trzykomorowy System AS 75 przeznaczony do produkcji izolowanych termicznie konstrukcji okien i drzwi z zastosowaniem innowacyjnej technologii ANTI-BI-METAL, która zapobiega odkształcaniu się skrzydeł drzwiowych podczas nagrzania promieniami słonecznymi, jak i również przy bardzo niskich temperaturach. System spełnia wymagania wszystkich aktualnych i przyszłych norm izolacji termicznej.",
          },
        ],
        description2: "OKNA:",
        dots: [
          {
            name: "3 warianty konstrukcji okien",
          },
          {
            name: "Przystosowane do współpracy z inteligentnymi budynkami",
          },
          {
            name: "Integracja z pozostałymi systemami Aluron",
          },
          {
            name: "Aluminiowe zaślepki odwodnień",
          },
          {
            name: "Konstrukcje łukowe, w tym spawane",
          },
          {
            name: "Niski próg balkonowy",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Głębokość ościeżnicy okna",
            value: "75 mm",
          },
          {
            name: "Zakres szklenia do",
            value: "66 mm",
          },
          {
            name: "Głębokość skrzydeł okna",
            value: "84 mm",
          },
          {
            name: "Izolacyjność termiczna Uw okna",
            value: "od 0,67 W/m2K",
          },
          {
            name: "Możliwe typy okuć",
            value: "aluminiowe",
          },
          {
            name: "Możliwe typy okuć",
            value: "PCV",
          },
          {
            name: "Wodoszczelność",
            value: "E 1950",
          },
          {
            name: "Przepuszczalność powietrza",
            value: "4 klasa",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "C3",
          },
          {
            name: "Odporność na włamanie",
            value: "RC2, RC3",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu AS 75 drzwi: ",
          },
          {
            name: "Karta produktu AS 75 okna: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_75_drzwi.pdf",
          },
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_75_okno.pdf",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/as75/AS75_systemy_aluminiowe_drzwi.jpg"),
        image2: require("@/assets/as75/AS75_systemy_aluminiowe_okno.jpg"),
      },
      // AS 75EI
      {
        id: 5,
        size: "AS 75EI",
        name: "System drzwi przeciwpożarowych",
        description: [
          {
            name: "Trzykomorowy System AS 75EI przeznaczony jest do produkcji izolowanych termicznie drzwi o odporności ogniowej klasy EI30 i EI60 do zastosowań wewnętrznych i zewnętrznych. Nowoczesne wkłady ogniochronne zapewniają odporność ogniową, a jednocześnie swoją konstrukcją gwarantują prostą i czystą prefabrykację.",
          },
        ],
        description2: "ZALETY SYSTEMU AS 75EI:",
        dots: [
          {
            name: "Pełna kompatybilność asortymentowa, funkcjonalna i wizualna z systemem AS 75.",
          },
          {
            name: "Szklenie jednostronne jak w typowych drzwiach.",
          },
          {
            name: "Wielowariantowe szyby koncernu Saint-Gobain – Vetrotech.",
          },
          {
            name: "Okucia drzwi znanych marek: Wala, Master, Wilka, Fuhr, Geze.",
          },
          {
            name: "Szybka i sprawna certyfikacja producenta.",
          },
          {
            name: "Regulowane systemowe kątowniki do mocowanie szkła ułatwiają szklenie różnych pakietów szybowych.",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Głębokość profili drzwiowych",
            value: "75 mm",
          },
          {
            name: "Zakres szklenia do",
            value: "56 mm",
          },
          {
            name: "Dostępne typy zawiasów",
            value: "nawierzchniowe",
          },
          {
            name: "Dymoszczelność drzw",
            value: "klasa Sa, Sm",
          },
          {
            name: "Maksymalna wysokość skrzydła",
            value: "2300 mm",
          },
          {
            name: "Grubość szkła w konstrukcjach - zakresy możliwych zespoleń",
            value: "34-56 mm",
          },
          {
            name: "Grubość szkła w konstrukcjach - zakresy możliwych szyb pojedynczych EI 30",
            value: "15 i 16 mm",
          },
          {
            name: "Grubość szkła w konstrukcjach - zakresy możliwych szyb pojedynczych EI 60",
            value: "27 mm",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu AS 75EI: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2022/01/Ulotka-AS-75EI-drzwi-przeciwpo%C5%BCarowe.pdf",
          },
        ],
        numberofImage: 1,
        image1: require("@/assets/as75ei/AS-75EI_naroznik.jpg"),
      },
      // AS 110
      {
        id: 6,
        size: "AS 110",
        name: "Pięciokomorowe pasywne okna aluminiowe",
        description: [
          {
            name: "System AS 110 jest przeznaczony do produkcji okien, drzwi balkonowych i witryn o z najwyższym na rynku poziomie izolacji termicznej, również dla budownictwa pasywnego. Jest to nowoczesna konstrukcja przeznaczona do szklenia ciężkimi pakietami 3-komorowymi. Pozwala na zachowanie doskonałych parametrów statycznych skrzydła. System posiada bardzo wysoką izolacyjność akustyczną.",
          },
        ],
        description2: "ZALETY SYSTEMU AS 110:",
        dots: [
          {
            name: "System AS 110 to najnowocześniejsze rozwiązanie pasywnych okien, drzwi balkonowych, drzwi PSK.",
          },
          {
            name: "Pięciokomorowa budowa profili gwarantuje wieloletnią wytrzymałość i estetykę.",
          },
          {
            name: "System spełnia wymagania wszystkich aktualnych i przyszłych norm izolacji termicznej, w tym budownictwa pasywnego.",
          },
          {
            name: "Ponadnormatywna izolacyjność termiczna potwierdzona certyfikatem Passive House Institute Darmstadt.",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Głębokość ościeżnicy okna",
            value: "110 mm",
          },
          {
            name: "Głębokość skrzydła okna",
            value: "119 mm",
          },
          {
            name: "Zakres szklenia",
            value: "48 do 72 mm",
          },
          {
            name: "Izolacyjność termiczna Uw okna",
            value: "od 0,4 W/m2K",
          },
          {
            name: "Wodośczelność",
            value: "E 1950 Pa",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "4 klasa",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "C5/B5",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu AS 110: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_110.pdf",
          },
        ],
        numberofImage: 3,
        image1: require("@/assets/as110/AS_110.jpg"),
        image2: require("@/assets/as110/AS_110_okno-otwierane_duze_PL.jpg"),
        image3: require("@/assets/as110/ikonka_passive_house_institute.png"),
      },
    ],
  },
  getters: {
    getWindows: (state, windows) => (state.windows = windows),
  },
  mutations: {},
  actions: {},
  modules: {},
});
