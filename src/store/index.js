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
        routerName: "AS80US",
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
        routerName: "AS178HS",
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
        image2: require("@/assets/as178hs/AS_178HS_Przekroj-pionowy.png"),
      },
      //AS VGB
      {
        id: 3,
        size: "AS VGB",
        routerName: "ASVGB",
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
        routerName: "AS75",
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
            name: "Karta produktu AS 75 okna: ",
          },
          {
            name: "Karta produktu AS 75 drzwi: ",
          },
        ],
        link: [
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_75_okno.pdf",
          },
          {
            name: "https://www.aluron.pl/wp-content/uploads/2020/03/AS_75_drzwi.pdf",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/as75/AS75_systemy_aluminiowe_okno.jpg"),
        image2: require("@/assets/as75/AS75_systemy_aluminiowe_drzwi.jpg"),
      },
      // AS 75EI
      {
        id: 5,
        size: "AS 75EI",
        routerName: "AS75EI",
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
        routerName: "AS110",
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
    pcv: [
      //Schüco Alu Inside NORDIC
      {
        id: 1,
        size: "Nordic Alu inside",
        routerName: "Nordic-Alu-inside",
        name: "Schüco Alu Inside NORDIC",
        description: [
          {
            name: "Konstrukcja otwieranego na zewnątrz systemu Schüco Alu Inside Nordic została zatwierdzona przez Technologisk Institut Aarhus w Danii, co potwierdza, że sprawdza się doskonale również w ekstremalnych warunkach pogodowych typowych dla krajów skandynawskich. W innowacyjnej konstrukcji zastosowano sprawdzoną, opatentowaną przez firmę Schüco technologię łączenia PVC z ciągłymi, aluminiowymi wzmocnieniami, która pozwala jednocześnie wyeliminować mostki termiczne, jak i zapewnić optymalną stabilność okna. Dużą zaletą rozwiązania z lekkim, aluminiowym wzmocnieniem jest również fakt, że skrzydło jest znacznie lżejsze niż analogiczna konstrukcja ze stalowym kształtownikiem. ",
          },
        ],
        description2: "Opcje systemu  Alu Inside Nordic:",
        dots: [
          {
            name: "Głębokość zabudowy ościeżnicy – 120 mm",
          },
          {
            name: "Głębokość zabudowy skrzydła – 82 mm",
          },
          {
            name: "Możliwe głębokości przeszklenia – od 18mm do 52mm",
          },
          {
            name: "System okien potwierdzony przez Duński Instytut Technologiczny",
          },
          {
            name: "Grubość ścian wg DIN EN 12608 klasa B",
          },
          {
            name: "Konstrukcja ramy bez stali lub z pianka izolacyjna",
          },
          {
            name: "Otwierane na zewnątrz z możliwością wyboru opcji:",
            option1: "odchylane na zewnątrz ",
            option2: "rozwierne na zewnątrz ",
            option3: "odstawne na zewnątrz z okuciami (ASSA  ABLOY) ",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu",
        table: [
          {
            name: "Szerokość czołowa",
            value: "94,5 mm",
          },
          {
            name: "Wartość Uf rama ≥ ",
            value: "0,87 W/(m²·K)",
          },
          {
            name: "Grubość szyby/panelu, maks.",
            value: "52 mm",
          },
          {
            name: "Szerokość skrzydła maks.",
            value: "1500 mm",
          },
          {
            name: "Wysokość skrzydła maks.",
            value: "2300 mm",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "Klasa 4",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "Klasa C3",
          },
          {
            name: "Wodoszczelność",
            value: "E 1200",
          },
          {
            name: "Ciężar skrzydła maks.",
            value: "250 kg",
          },
          {
            name: "Min. – maks. Wysokość skrzydła",
            value: "400.....2300 mm",
          },
          {
            name: "Min. - maks. Szerokość skrzydła",
            value: "400.....1500 mm",
          },
          {
            name: "Grubość szyby/ panelu, min.-maks.",
            value: "18....52 mm",
          },
          {
            name: "Wykończenie powierzchni",
            value: "Folie dekoracyjne, AutomotiveFinish",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://www.schueco.com/resource/blob/1886820/74545225f95279a47c27dab178e68fbb/Prospekt_P3872.pdf?domain=pl",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv1/aluInsideNordic/Alu_Inside_Nordic_offen.jpg"),
        image2: require("@/assets/pcv1/aluInsideNordic/nordic_alu.jpg"),
      },
      //Schüco TopAlu
      {
        id: 2,
        size: "Nakładka aluminiowa",
        routerName: "Nakładka-aluminiowa",
        name: "Schüco TopAlu",
        description: [
          {
            name: "Zewnętrzne nakładki aluminiowe to atrakcyjna opcja projektowa dla systemów okiennych i drzwiowych z PCV-U. ",
          },
        ],
        description2: "Korzyści projektowe:",
        dots: [
          {
            name: "Perfekcyjny wygląd zewnętrzny dzięki szczególnie odpornej, uszlachetnionej powierzchni aluminium",
          },
          {
            name: "Łatwa w pielęgnacji powierzchnia wewnętrzna z PVC-U",
          },
          {
            name: "Wysoka trwałość",
          },
          {
            name: "Kombinacja wszystkich zalet nowoczesnych okien z PVC-U: izolacyjności cieplnej, szczelności, łatwej pielęgnacji i wzornictwa z wyjątkowymi właściwościami aluminium",
          },
          {
            name: "Możliwość perfekcyjnej integracji okien z PCV-U z fasadami aluminiowymi",
          },
          {
            name: "Możliwość zróżnicowania kolorystyki ościeżnicy i skrzydła",
          },
        ],
        isTableHere: false,
        description3:
          "System nakładek aluminiowych Schüco TopAlu łączy doskonałą izolacyjność cieplną, odporność na warunki atmosferyczne i niewielkie wymagania konserwacyjne okien z PVC-U z wyjątkowo wysoką jakością, oryginalnym wyglądem i dużą trwałością powierzchni aluminiowych. Ponadczasowa elegancja aluminium sprawia, że jest ono idealnym materiałem nowoczesnej architektury. Nakładki aluminiowe są mocowane do zewnętrznej strony profilu z wykorzystaniem prostej technologii zatrzaskowej i mogą być lakierowane lub anodowane na niemal dowolny kolor. Kolejną zaletą jest wyjątkowa odporność materiału na wpływ czynników środowiskowych. Technologia Schüco TopAlu nadaje oknom z PCV-U maksymalną trwałość i zapewnia bogate opcje projektowe. Nie ma praktycznie żadnych ograniczeń w realizacji indywidualnych wymagań.",
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://www.schueco.com/resource/blob/1886738/7dd9002a2e4aca7da7b54b1c938db39a/P4431_TopAlu.pdf?domain=pl",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv1/nakładkaAluminiowa/Corona_CT_70_AS_Alu_s.jpg"),
        image2: require("@/assets/pcv1/nakładkaAluminiowa/Corona_TopAlu_e.jpg"),
      },
      //CT 70 Classic
      {
        id: 3,
        size: "CT 70 Classic",
        routerName: "CT-70-Classic",
        name: "Schüco CT 70",
        description: [
          {
            name: "Uniwersalny system okienny Schüco CT 70 AS z dwoma uszczelkami przylgowymi zapewnia dobrą izolacyjność cieplną, dzięki czemu stanowi on atrakcyjną propozycję dla obiektów nowych i modernizowanych. 5-cio komorowa konstrukcja o głębokości zabudowy 70 mm i niewielkiej szerokości czołowej gwarantuje dostęp dużej dawki światła. Dwa poziomy uszczelnienia zapewniają ponadto dobrą izolacyjność akustyczną, a co za tym idzie – podwyższony komfort użytkowania. Elastyczność systemu przejawia się także w jego designie. Dostępne są dwie wersje konturu skrzydła: klasyczna (Classic) oraz z lekkim zaokrągleniem (Rondo). Białe profile systemu Schüco CT 70 są dostarczane z nowoczesnymi, jasnoszarymi uszczelkami, zaś foliowane z uszczelkami w kolorze czarnym",
          },
        ],
        description2: "Opcje systemu CT 70:",
        dots: [
          {
            name: "Głębokość zabudowy ościeżnicy – 70 mm",
          },
          {
            name: "Głębokość zabudowy skrzydła – 70 mm",
          },
          {
            name: "Możliwe głębokości przeszklenia – od 6mm do 40mm",
          },
          {
            name: "Możliwe warianty kształtu skrzydła:",
            option1: "Classic",
            option2: "Rondo",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu ",
        table: [
          {
            name: "Szerokość czołowa",
            value: "120 mm",
          },
          {
            name: "Wartość Uf rama ≥ ",
            value: "1,2 W/(m²·K)",
          },
          {
            name: "Grubość szyby/panelu, maks.",
            value: "40 mm",
          },
          {
            name: "Szerokość skrzydła maks.",
            value: "1500 mm",
          },
          {
            name: "Wysokość skrzydła maks.",
            value: "2600 mm",
          },
          {
            name: "Izolacyjność akustyczna RwP maks.",
            value: "46 dB(A)",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "Klasa 4",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "Klasa C5/B5",
          },
          {
            name: "Wodoszczelność",
            value: "Klasa 9A",
          },
          {
            name: "Odporność na włamanie",
            value: "Do RC 2",
          },
          {
            name: "Ciężar skrzydła maks.",
            value: "250 kg",
          },
          {
            name: "Min. – maks. Wysokość skrzydła",
            value: "400.....2600 mm",
          },
          {
            name: "Min. - maks. Szerokość skrzydła",
            value: "400.....1500 mm",
          },
          {
            name: "Grubość szyby/ panelu, min.-maks.",
            value: "6....40 mm",
          },
          {
            name: "Wykończenie powierzchni",
            value: "TopAlu, Folie dekoracyjne, AutomotiveFinish",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://www.schueco.com/resource/blob/1886814/8836d86a45fb8fd55b0d7140620593bc/Prospekt_P3748.pdf?domain=pl",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv2/schucoCT70/Corona_CT_70_AS_Classic_s.jpg"),
        image2: require("@/assets/pcv2/schucoCT70/ct70przekroj.jpg"),
      },
      //LivIng Alu Inside
      {
        id: 4,
        size: "LivIng Alu Inside ",
        routerName: "LivIng-Alu-Inside ",
        name: "Schüco LivIng Alu Inside ",
        description: [
          {
            name: "W systemie Schüco LivIng Alu Inside zastosowano opatentowaną technologię łączenia aluminium z tworzywem sztucznym. Dzięki zgodności wymiarowej z systemem Schüco LivIng oraz eliminacji wzmocnień stalowych zagwarantowano doskonałą izolacyjność cieplną, ekonomiczną produkcję i montaż. System Schüco LivIng Alu Inside to konsekwentne rozwinięcie systemu Schüco Alu Inside. Podstawą tego rozwiązania jest opatentowana technologia koekstruzji aluminium z tworzywem sztucznym. Ciągłe wzmocnienia aluminiowe gwarantują całej konstrukcji stabilność niemal identyczną z uzyskiwaną za pomocą wzmocnień stalowych. System z tworzywa sztucznego o najwyższej izolacyjności cieplnej bez wzmocnień stalowych pozwala na przemysłową produkcję okien zgodnych z wymogami budownictwa pasywnego.",
          },
        ],
        description2: "Opcje systemu Living Alu Inside:",
        dots: [
          {
            name: "Głębokość zabudowy ościeżnicy – 82 mm",
          },
          {
            name: "Głębokość zabudowy skrzydła – 82 mm",
          },
          {
            name: "Możliwe głębokości przeszklenia – od 24mm do 52mm",
          },
          {
            name: "Szerokość czołowa min. – 120mm",
          },
          {
            name: "Możliwość opcjonalnego wprowadzenia izolatorów termicznych wewnątrz profila",
          },
          {
            name: "Opatentowana technologia łączenia aluminium (patent nr EP 1 196 677 B2)",
          },
        ],
        isTableHere: true,
        descriptionOfTable:
          "Wybrane cechy i parametry systemu  LivIng Alu Inside",
        table: [
          {
            name: "Szerokość czołowa",
            value: "120 mm",
          },
          {
            name: "Wartość Uf rama ≥ ",
            value: "0,79 W/(m²·K)",
          },
          {
            name: "Grubość szyby/panelu, maks.",
            value: "52 mm",
          },
          {
            name: "Szerokość skrzydła maks.",
            value: "1500 mm",
          },
          {
            name: "Wysokość skrzydła maks.",
            value: "2600 mm",
          },
          {
            name: "Izolacyjność akustyczna RwP maks.",
            value: "46 dB(A)",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "Klasa 4",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "Klasa C5/B5",
          },
          {
            name: "Wodoszczelność",
            value: "Klasa 9A",
          },
          {
            name: "Odporność na włamanie",
            value: "Do RC 2",
          },
          {
            name: "Min. – maks. Wysokość skrzydła",
            value: "400.....2600 mm",
          },
          {
            name: "Min. - maks. Szerokość skrzydła",
            value: "400.....1500 mm",
          },
          {
            name: "Grubość szyby/ panelu, min.-maks.",
            value: "24....52 mm",
          },
          {
            name: "Wykończenie powierzchni",
            value: "TopAlu, Folie dekoracyjne, AutomotiveFinish",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://www.schueco.com/resource/blob/1886820/74545225f95279a47c27dab178e68fbb/Prospekt_P3872.pdf?domain=pl",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv2/schucoLivIngAluInside/alu_inside_bez_wypelnienia.jpg"),
        image2: require("@/assets/pcv2/schucoLivIngAluInside/schueco_living_aluinside.jpg"),
      },
      //Schüco LivIng
      {
        id: 5,
        size: "Living MD",
        routerName: "Living-MD",
        name: "Schüco LivIng MD",
        description: [
          {
            name: "System okienny Schüco LivIng, oparty na technologii Twin przekonuje prostotą, wydajnością oraz elastycznością produkcji i montażu. Jednocześnie spełnia on najwyższe wymagania w zakresie komfortu i bezpieczeństwa, a także oferuje szerokie możliwości projektowe oraz wykonawcze. Poprzez system Schüco LivIng firma Schüco wyznacza najwyższe standardy w dziedzinie efektywności energetycznej okien z PVC-U ze stalowymi wzmocnieniami. Bazujący na technologii Twin innowacyjny, 7-komorowy system o głębokości zabudowy 82 mm, umożliwia wykonywanie okien o doskonałej izolacyjności cieplnej z uszczelką przylgową (AS) i środkową (MD). Stosując wariant z uszczelką środkową, można bez dodatkowych kosztów realizować projekty domów pasywnych.",
          },
        ],
        description2: "Opcje systemu Living MD:",
        dots: [
          {
            name: "Głębokość zabudowy ościeżnicy – 82 mm",
          },
          {
            name: "Głębokość zabudowy skrzydła – 82 mm",
          },
          {
            name: "Możliwe głębokości przeszklenia – od 24mm do 52mm",
          },
          {
            name: "Szerokość czołowa min. – 120mm",
          },
          {
            name: "Możliwość wyboru produktu AS (dwie uszczelki) lub MD (trzy uszczelki)",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu  LivIng MD",
        table: [
          {
            name: "Szerokość czołowa",
            value: "120 mm",
          },
          {
            name: "Wartość Uf rama ≥ ",
            value: "0,96 W/(m²·K)",
          },
          {
            name: "Grubość szyby/panelu, maks.",
            value: "52 mm",
          },
          {
            name: "Szerokość skrzydła maks.",
            value: "1500 mm",
          },
          {
            name: "Wysokość skrzydła maks.",
            value: "2600 mm",
          },
          {
            name: "Izolacyjność akustyczna RwP maks.",
            value: "47 dB(A)",
          },
          {
            name: "Przepuszczalnośc powietrza",
            value: "Klasa 4",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "Klasa C5/B5",
          },
          {
            name: "Ciężar skrzydła maks.",
            value: "120 kg",
          },
          {
            name: "Wodoszczelność",
            value: "Klasa 9A",
          },
          {
            name: "Odporność na włamanie",
            value: "Do RC 2",
          },
          {
            name: "Min. – maks. Wysokość skrzydła",
            value: "400.....2600 mm",
          },
          {
            name: "Min. - maks. Szerokość skrzydła",
            value: "400.....1500 mm",
          },
          {
            name: "Grubość szyby/ panelu, min.-maks.",
            value: "24....52 mm",
          },
          {
            name: "Wykończenie powierzchni",
            value: "TopAlu, Folie dekoracyjne, AutomotiveFinish",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://www.schueco.com/resource/blob/1887198/b7470f0fc5fcaab2d874135c07da4b50/Prospekt_P4442.pdf?domain=pl",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv3/schucoLivIngMD/Schueco_LivIng_MD_s.jpg"),
        image2: require("@/assets/pcv3/schucoLivIngMD/Living_MD_rysunek.jpg"),
      },
      //Schüco THERMOSLIDE -  HST SI82
      {
        id: 6,
        size: "Termoslide HST SI82",
        routerName: "Termoslide",
        name: "Schüco thermoslide",
        description: [
          {
            name: "System drzwi podnoszono-przesuwnych z tworzywa sztucznego Schüco ThermoSlide jest konstrukcją opartą na systemie 82 mm Schüco SI 82. Najlepsza izolacja termiczna, zaawansowane detale konstrukcyjne i niezwykle wysoki komfort użytkowania to cechy wyróżniające ten system. System dzięki szerokim szklanym powierzchniom tworzy jasne przestrzenie, a jego obsługa jest łatwa i cicha. Warstwy uszczelnienia zapewniają ponadto doskonałą ochronę przed hałasem, wilgocią, przeciągiem oraz zimnem. Schüco ThermoSlide spełnia najwyższe wymagania energetyczne zapewniając doskonałą izolację termiczną i zoptymalizowany przebieg izoterm dzięki optymalnej geometrii komory, ale również oddzielone termiczne wzmocnienie ościeża i nowo opracowany próg. Ramę skrzydła zamyka profil ościeża o głębokości zabudowy 219 mm. Wszystkie uszczelki są wykonane z kauczuku EPDM.",
          },
        ],
        description2: "Opcje systemu THERMOSLIDE - HST SI82:",
        dots: [
          {
            name: "7 komorowy system profili HS ThermoSlide SI82",
          },
          {
            name: "Niski wielokomorowy próg aluminiowy z trzema przekładkami termoizolacyjnymi wyeliminował problem zimnej strefy przy podłodze",
          },
        ],
        isTableHere: true,
        descriptionOfTable: "Wybrane cechy i parametry systemu ",
        table: [
          {
            name: "Głębokość zabudowy systemu ",
            value: "219 mm",
          },
          {
            name: "Szerokość skrzydła maks.",
            value: "3200 mm",
          },
          {
            name: "Wysokość skrzydła maks.",
            value: "2700 mm",
          },
          {
            name: "Ciężar skrzydła maks.",
            value: "400 kg",
          },
          {
            name: "Szerokość czołowa min.",
            value: "174 mm",
          },
          {
            name: "Grubość szyby/ panelu, maks.",
            value: "52 mm",
          },
          {
            name: "Wartość Uf rama ≥",
            value: "1,1 W/(m²·K)",
          },
          {
            name: "Odporność na włamanie",
            value: "do RC 2",
          },
          {
            name: "Izolacyjność akustyczna RwP maks.",
            value: "45 dB(A)",
          },
          {
            name: "Odporność na obciążenie wiatrem",
            value: "Klasa C1/B2",
          },
          {
            name: "Wodoszczelność",
            value: "Klasa 8A",
          },
        ],
        linkdesc: [
          {
            name: "Karta produktu: ",
          },
        ],
        link: [
          {
            name: "https://schuco-poznan.pl/wp-content/uploads/2014/10/Folder-Schuco-drzwi-tarasowe-przesuwne.pdf",
          },
        ],
        numberofImage: 2,
        image1: require("@/assets/pcv3/thermoslide/ThermoSlide_e.jpg"),
        image2: require("@/assets/pcv3/thermoslide/prog_thermoslide.png"),
      },
    ],
  },
  getters: {
    getWindows: (state, windows) => (state.windows = windows),
    getPcv: (state, pcv) => (state.pcv = pcv),
  },
  mutations: {},
  actions: {},
  modules: {},
});
