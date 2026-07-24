// ==========================================
// 1. BAZA DANYCH I ZMIENNE GLOBALNE
// ==========================================

// Tablica obiektów – nasza "baza danych" zawierająca wszystkie modele samochodów.
// Każdy obiekt {} posiada unikalne ID, nazwę, opis, cenę, ratę oraz link do zdjęcia.
const auta = [
    {
        id: 1,
        nazwa: "BMW M3 Competition",
        opis: "Rzędowa 'szóstka' M TwinPower Turbo o mocy 510 KM. Legendarny napęd na tylną oś (lub M xDrive), niezwykle precyzyjny układ kierowniczy i idealny rozkład mas 50:50 na tor i na co dzień.",
        cena: 450000,
        rata: 7500,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-af5d99f6-7570-450b-8032-77b025b9df2a.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://cdn.phototourl.com/free/2026-07-23-af5d99f6-7570-450b-8032-77b025b9df2a.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/free/2026-07-24-663997a5-c8bf-4eea-88c9-4dfbdefb8f4f.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/free/2026-07-24-d80fa905-5ff2-493c-ab6e-aacfa15f0433.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/free/2026-07-24-6ea8df26-d6b7-49bf-8178-3199b5d89f09.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/free/2026-07-24-22971452-04e9-4b03-8aae-536842261057.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/free/2026-07-24-205ba575-56b9-4295-bdcf-40a66a52d027.jpg" }
        ]
    },
    {
        id: 2,
        nazwa: "BMW M5 Competition",
        opis: "Potężny silnik 4.4 V8 TwinPower Turbo (625 KM) z możliwością całkowitego odłączenia napędu przedniej osi (tryb 2WD). Zapewnia przyspieszenie 0-100 km/h  w 3.3 s przy zachowaniu pełnego komfortu biznesowej limuzyny.",
        cena: 680000,
        rata: 11333,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-9b5c89f0-b574-4c1b-ba75-a8690343d3f2.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://cdn.phototourl.com/free/2026-07-23-9b5c89f0-b574-4c1b-ba75-a8690343d3f2.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/free/2026-07-24-03219b0a-65f2-4d35-b8aa-830645d721ca.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/free/2026-07-24-e34164d5-45b8-4ed8-b981-620d09779594.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/free/2026-07-24-c58c9206-a25d-4248-bd72-4341dab66103.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/free/2026-07-24-77b27f9a-b816-486d-8946-3657650b3149.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/free/2026-07-24-3f133e04-ddf6-44dc-b5bf-6897dcba6918.jpg" }
        ]
    },
    {
        id: 3,
        nazwa: "BMW M7 Competition",
        opis: "Szczytowe osiągnięcie luksusu i dynamiki. Topowe wyciszenie wnętrza, pneumatyczne zawieszenie skrojone pod tor i niezrównana przestrzeń w drugim rzędzie siedzeń połączona z brutalnym przyspieszeniem.",
        cena: 820000,
        rata: 13800,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-a127ae8e-62cd-4eeb-b122-774f2e5c6b5f.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://cdn.phototourl.com/free/2026-07-23-a127ae8e-62cd-4eeb-b122-774f2e5c6b5f.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/member/2026-07-24-7a830a4f-7940-414f-92d3-80a9934761e2.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/member/2026-07-24-a87e3d71-b69d-47da-8aca-2cc7382e4f33.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/member/2026-07-24-355601ec-a42c-4b53-aae1-e703374aebf2.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/member/2026-07-24-5dc5c9c7-a620-4792-a0f5-6e9a93c31961.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/member/2026-07-24-595bba3d-c1ce-41ea-a7e8-45f8353eaa72.jpg" }
        ]
    },
    {
        id: 4,
        nazwa: "BMW X3 M Competition",
        opis: "Poręczny i zwinny SUV z potężnym silnikiem z M3 (510 KM). Oferuje wysoką pozycję za kierownicą, pojemny bagażnik oraz aktywne zawieszenie adaptacyjne M, które eliminuje przechyły w zakrętach.",
        cena: 510000,
        rata: 8500,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-a640b562-d1b5-4cd7-b858-17b9025dbd9a.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://cdn.phototourl.com/free/2026-07-23-a640b562-d1b5-4cd7-b858-17b9025dbd9a.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/member/2026-07-24-2e396ab0-e04e-45d8-ae2a-e4618c16bcd8.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/member/2026-07-24-ff03a78e-989e-4836-90cf-cfd6f8eee1bc.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/member/2026-07-24-ddda64ff-664e-4b3f-a215-77d1a60c4707.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/free/2026-07-24-856ef16f-90fb-4d92-b1d3-0cf5110b63a0.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/free/2026-07-24-708fae7d-7b40-47de-894a-d58f826b1295.jpg" }
        ]
    },
    {
        id: 5,
        nazwa: "BMW X5 M Competition",
        opis: "Bezwzględny dominator szos. Połączenie 625-konnego V8 z aktywną stabilizacją poślizgu i sportowym mechanizmem różnicowym M. Mieści całą rodzinę, zachowując oszałamiające osiagi supersamochodu.",
        cena: 720000,
        rata: 12000,
        obraz: "https://mediapool.bmwgroup.com/cache/P9/202302/P90495526/P90495526-the-new-bmw-x5-m-competition-exterior-02-2023-600px.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://mediapool.bmwgroup.com/cache/P9/202302/P90495526/P90495526-the-new-bmw-x5-m-competition-exterior-02-2023-600px.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/free/2026-07-24-a61d7131-3815-406d-95fa-2eb4288fc23f.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/free/2026-07-24-8d3a1a1f-6bb5-4aeb-964e-0e38bf895cc0.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/free/2026-07-24-dc0e0ab7-ae92-4169-9725-71d8d9691510.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/free/2026-07-24-b1a3ab40-c892-48eb-98ad-73d9a8b366e6.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/free/2026-07-24-f64ce2c3-cfbf-4a8e-a817-adaba4d92208.jpg" }
        ]
    },
    {
        id: 6,
        nazwa: "BMW X7 M Competition",
        opis: "Luksusowy, 7-miejscowy SUV o bezkompromisowej mocy. Skrętna tylna oś ułatwia manewrowanie w mieście, a pełne wyposażenie Executive Lounge gwarantuje komfort pierwszej klasy na najdłuższych trasach.",
        cena: 790000,
        rata: 13200,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-7aa704d9-16e3-4a5b-825d-081e9700b0ae.jpg",
        wariantyKolorow: [
            { kolor: "#26976c", nazwa: "Isle of Man Green", img: "https://cdn.phototourl.com/free/2026-07-23-7aa704d9-16e3-4a5b-825d-081e9700b0ae.jpg" },
            { kolor: "#1a2746", nazwa: "Tanzanite Blue II", img: "https://cdn.phototourl.com/free/2026-07-24-a9878770-1f90-4721-a167-8b7b5ab9358b.jpg" },
            { kolor: "#522f77", nazwa: "Twilight Purple", img: "https://cdn.phototourl.com/free/2026-07-24-ffd2a108-1e42-4ca8-98a4-9524ea63bbcd.jpg" },
            { kolor: "#f8fafc", nazwa: "Alpine White", img: "https://cdn.phototourl.com/free/2026-07-24-7e6094c8-85ea-45b2-9d82-25b7ddeeb50a.jpg" },
            { kolor: "#94a3b8", nazwa: "Brooklyn Grey", img: "https://cdn.phototourl.com/free/2026-07-24-f4aa12f1-3c75-41f9-b9a1-ddee4d1481ae.jpg" },
            { kolor: "#0b0c10", nazwa: "Black Sapphire", img: "https://cdn.phototourl.com/free/2026-07-24-a472ddc6-2211-47f5-b8f5-d35768ebf90a.jpg" }
        ]
    }
];

// Zmienne stanu (przechowują dynamiczne informacje w trakcie działania strony):
let wylosowaneAutoId = null; // ID samochodu, który otrzymał rabat w losowaniu
let ulubione = [];          // Tablica przechowująca ID aut dodanych do ulubionych
let wybraneAuto = null;       // Obiekt auta obecnie wybranego w kalkulatorze leasingu

// Pomocnicza funkcja zwracająca dzisiejszą datę w formacie RRRR-MM-DD (używana do blokady losowania raz na dobę)
function pobierzDzisiejszaDate() {
    return new Date().toISOString().split('T')[0];
}

// ==========================================
// 2. GENEROWANIE DYNAMICZNEJ GALERII AUT
// ==========================================

/**
 * Funkcja renderuje karty samochodów w HTML-u.
 * @param {Array} lista - Tablica aut do wyświetlenia (domyślnie cała baza `auta`).
 */
function wyswietlAuta(lista = auta) {
    const kontener = document.getElementById("galeria-samochodow");
    if (!kontener) return;

    kontener.innerHTML = "";

    if (lista.length === 0) {
        kontener.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Brak pojazdów spełniających kryteria.</p>`;
        return;
    }

    lista.forEach(auto => {
        const jestUlubione = ulubione.includes(auto.id);
        const karta = document.createElement("div");
        karta.className = "karta-modelu";

        let cenaFinalna = auto.cena;
        let rataFinalna = auto.rata;
        let badgeRabatu = "";
        let staryKosz = "";

        if (auto.id === wylosowaneAutoId) {
            cenaFinalna = Math.round(auto.cena * 0.95);
            rataFinalna = Math.round(auto.rata * 0.95);
            badgeRabatu = `<span style="background: var(--accent-pink); color: white; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem; margin-left: 8px;">-5% 🔥</span>`;
            staryKosz = `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.8rem; margin-right: 6px;">${auto.cena.toLocaleString()} PLN</span>`;
            
            karta.style.borderColor = "var(--accent-pink)";
            karta.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.35)";
        }

        // ==========================================
        // TUTAJ WSTAWIASZ BRAKUJĄCY FRAGMENT!
        // ==========================================
        let koloryHTML = "";
        if (auto.wariantyKolorow && auto.wariantyKolorow.length > 0) {
            koloryHTML = `<div style="display: flex; gap: 10px; margin: 12px 0; align-items: center;">`;
            
            auto.wariantyKolorow.forEach(w => {
                const czyAktywny = (auto.obraz === w.img);
                const borderStyle = czyAktywny ? "2px solid #6366f1" : "1.5px solid rgba(255,255,255,0.3)";
                const scaleStyle = czyAktywny ? "transform: scale(1.25);" : "";

                koloryHTML += `
                    <span 
                        onclick="zmienKolorAuta(${auto.id}, '${w.img}')" 
                        title="${w.nazwa}"
                        style="width: 20px; height: 20px; border-radius: 50%; background: ${w.kolor}; cursor: pointer; border: ${borderStyle}; ${scaleStyle} display: inline-block;">
                    </span>`;
            });
            
            koloryHTML += `</div>`;
        }

        // A tu używasz zmiennej koloryHTML wewnątrz szablonu HTML karty:
        karta.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${auto.obraz}" alt="${auto.nazwa}">
            </div>
            <div class="card-content">
                <h2>${auto.nazwa} ${badgeRabatu}</h2>
                <p>${auto.opis}</p>
                
                ${koloryHTML} <!-- TUKAJ WSTRZYKUJEMY WYGENEROWANE KROPKI -->
                
                <div class="price-tag">
                    ${staryKosz}Cena: ${cenaFinalna.toLocaleString()} PLN | Rata: ~${rataFinalna.toLocaleString()} PLN/mc
                </div>
                <div class="card-footer">
                    <button class="btn-model" onclick="wybierzAuto(${auto.id})">Konfiguruj</button>
                    <button class="btn-like ${jestUlubione ? 'active' : ''}" onclick="toggleUlubione(${auto.id})">
                        ${jestUlubione ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        `;
        
        kontener.appendChild(karta);
    });
}

function zmienKolorAuta(idAuta, noweZdjecie) {
    const auto = auta.find(a => a.id === idAuta);
    if (auto) {
        auto.obraz = noweZdjecie;
        wyswietlAuta(); // ponowne wyrenderowanie widoku
    }
}

// ==========================================
// 3. OBSŁUGA ULUBIONYCH (TOGGLE & HOVER)
// ==========================================

/**
 * Dodaje lub usuwa auto z listy ulubionych.
 * @param {number} id - Identyfikator samochodu.
 */
function toggleUlubione(id) {
    if (ulubione.includes(id)) {
        // Jeśli auto już jest na liście -> usuń je (filtrujemy tablicę)
        ulubione = ulubione.filter(item => item !== id);
    } else {
        // Jeśli auta nie ma -> dodaj jego ID do tablicy
        ulubione.push(id);
    }
    
    odswiezUlubioneUI(); // Aktualizuje licznik i rozwijaną listę w navbarze
    wyswietlAuta();      // Przerysowuje galerię, aby zmienić stan ikony serca
}

// Aktualizuje interfejs użytkownika powiązany z ulubionymi
function odswiezUlubioneUI() {
    const elIlosc = document.getElementById("ilosc-ulubionych");
    if (elIlosc) elIlosc.innerText = ulubione.length;

    const listaHover = document.getElementById("lista-ulubionych-hover");
    if (!listaHover) return;

    listaHover.innerHTML = "";

    if (ulubione.length === 0) {
        listaHover.innerHTML = "<li>Brak dodanych aut</li>";
        return;
    }

    // Generowanie listy punktowej w rozwijanym menu pod ikoną ulubionych
    ulubione.forEach(id => {
        const auto = auta.find(a => a.id === id);
        if (auto) {
            const li = document.createElement("li");
            li.style.padding = "4px 0";
            li.innerText = `• ${auto.nazwa}`;
            listaHover.appendChild(li);
        }
    });
}

// Filtruje widok galerii, pokazując wyłącznie ulubione samochody
function filtrujUlubione() {
    if (ulubione.length === 0) {
        wyswietlAuta(auta); // Jeśli brak ulubionych, pokaż wszystkie
        return;
    }
    const przefiltrowane = auta.filter(a => ulubione.includes(a.id));
    wyswietlAuta(przefiltrowane);
}

// ==========================================
// 4. WYSZUKIWARKA TEKSTOWA I FILTR BUDŻETOWY
// ==========================================

// Reaguje na bieżąco podczas wpisywania frazy w pole wyszukiwania
function wyszukajAuto() {
    const zapytanie = document.getElementById("wyszukiwarka-text").value.toLowerCase();
    
    // Szukamy dopasowania zarówno w nazwie, jak i opisie auta
    const wynik = auta.filter(a => 
        a.nazwa.toLowerCase().includes(zapytanie) || 
        a.opis.toLowerCase().includes(zapytanie)
    );
    
    wyswietlAuta(wynik);
}

// Filtruje auta pod kątem maksymalnej akceptowalnej raty miesięcznej
function sprawdzBudzet() {
    const budzet = parseFloat(document.getElementById("budzet-user").value);
    const wynikTekst = document.getElementById("wynik-budzetu");

    if (isNaN(budzet) || budzet <= 0) {
        if (wynikTekst) wynikTekst.innerText = "Wpisz poprawną kwotę raty!";
        wyswietlAuta(auta);
        return;
    }

    // Filtrowanie uwzględnia ewentualny rabat -5% dla wylosowanego auta
    const pasujace = auta.filter(a => {
        const aktualnaRata = (a.id === wylosowaneAutoId) ? Math.round(a.rata * 0.95) : a.rata;
        return aktualnaRata <= budzet;
    });

    if (wynikTekst) wynikTekst.innerText = `Znaleziono ${pasujace.length} modeli w budżecie do ${budzet} PLN/mc.`;
    wyswietlAuta(pasujace);
}

// ==========================================
// 5. KALKULATOR LEASINGU NA ŻYWO
// ==========================================

/**
 * Aktywuje sekcję kalkulatora dla wskazanego modelu.
 * @param {number} id - ID wybranego auta.
 */
function wybierzAuto(id) {
    wybraneAuto = auta.find(a => a.id === id);
    
    const sekcjaCalc = document.getElementById("sekcja-kalkulatora");
    if (sekcjaCalc) {
        sekcjaCalc.style.display = "block"; // Pokaż wcześniej ukrytą sekcję
        document.getElementById("kalkulator-tytul").innerText = `Kalkulator Leasingu: ${wybraneAuto.nazwa}`;
        sekcjaCalc.scrollIntoView({ behavior: 'smooth' }); // Płynne przewinięcie ekranu do kalkulatora
    }

    przeliczRateNaZywo();
}

// Przelicza koszt raty leasingowej w oparciu o pozycje suwaków
function przeliczRateNaZywo() {
    if (!wybraneAuto) return;

    // Pobranie wartości z suwaków (HTML <input type="range">)
    const okres = parseInt(document.getElementById("suwak-okres").value);
    const wkladProcent = parseInt(document.getElementById("suwak-wklad").value);

    // Aktualizacja etykiet tekstowych przy suwakach
    document.getElementById("pokaz-okres").innerText = okres;
    document.getElementById("pokaz-wklad").innerText = `${wkladProcent}%`;

    // Wyliczenie bazy cenowej (z uwzględnieniem ewentualnego rabatu)
    const cenaBaza = (wybraneAuto.id === wylosowaneAutoId) ? wybraneAuto.cena * 0.95 : wybraneAuto.cena;

    // Kalkulacja kwoty wkładu i finansowanej sumy
    const kwotaWkladu = Math.round(cenaBaza * (wkladProcent / 100));
    document.getElementById("kwota-wkladu").innerText = kwotaWkladu.toLocaleString();

    const finansowanaKwota = cenaBaza - kwotaWkladu;
    const odsetkiIProwizja = 1.15; // Przykładowy współczynnik kosztu finansowania (15%)
    const wyliczonaRata = Math.round((finansowanaKwota * odsetkiIProwizja) / okres);

    // Wyświetlenie wyniku
    document.getElementById("wyliczona-rata").innerText = `${wyliczonaRata.toLocaleString()} PLN / mc`;
}

// ==========================================
// 6. SYSTEM DZIENNEGO DROPU / LOSOWANIA (LOCALSTORAGE)
// ==========================================

// Blokuje przycisk losowania i wyświetla komunikat o przyznanym rabacie
function pokazStatusIRozkazujPrzycisk(wylosowane) {
    const tekstStatusu = document.getElementById("ostatni-wybor");
    const przycisk = document.querySelector(".panel-card .btn-primary");

    if (tekstStatusu) {
        tekstStatusu.style.display = "block";
        tekstStatusu.style.color = "var(--accent-pink)";
        tekstStatusu.innerHTML = `🔥 Dzisiejszy drop: <b>${wylosowane.nazwa}</b>!<br>Zgarniasz <b>5% RABATU</b> na ten model. Wybierz go z galerii poniżej!<br><small style="color: var(--text-muted); display:block; margin-top:5px;">(Kolejne losowanie dostępne jutro)</small>`;
    }

    if (przycisk) {
        przycisk.disabled = true;
        przycisk.innerText = "Wykorzystano dzisiejszy los";
        przycisk.style.opacity = "0.5";
        przycisk.style.cursor = "not-allowed";
    }
}

// Główna funkcja losująca rabat
function odpalFure() {
    const dzis = pobierzDzisiejszaDate();
    const ostatniaData = localStorage.getItem("dataLosowania");

    // Jeśli losowanie w danym dniu już się odbyło – przerwij działanie
    if (ostatniaData === dzis) return;

    // Losowanie losowego indeksu z tablicy `auta`
    const losowyIndex = Math.floor(Math.random() * auta.length);
    const wylosowane = auta[losowyIndex];

    wylosowaneAutoId = wylosowane.id;

    // Zapisanie stanu w pamięci przeglądarki (LocalStorage)
    localStorage.setItem("dataLosowania", dzis);
    localStorage.setItem("wylosowaneAutoId", wylosowaneAutoId);

    pokazStatusIRozkazujPrzycisk(wylosowane);
    wyswietlAuta(); // Przerysuj galerię z nowo naliczonym rabatem
}

// Sprawdza przy wczytywaniu strony, czy użytkownik brał już udział w dzisiejszym losowaniu
function sprawdzDzisiejszeLosowanie() {
    const dzis = pobierzDzisiejszaDate();
    const ostatniaData = localStorage.getItem("dataLosowania");
    const zapisaneId = localStorage.getItem("wylosowaneAutoId");

    if (ostatniaData === dzis && zapisaneId) {
        wylosowaneAutoId = parseInt(zapisaneId);
        const auto = auta.find(a => a.id === wylosowaneAutoId);
        if (auto) {
            pokazStatusIRozkazujPrzycisk(auto);
        }
    }
}

// ==========================================
// 7. INICJALIZACJA APLIKACJI
// ==========================================

// Wykonuje się automatycznie w momencie, gdy cały kod HTML zostanie w pełni wczytany
document.addEventListener("DOMContentLoaded", () => {
    sprawdzDzisiejszeLosowanie(); // Odtwórz stan losowania z LocalStorage
    wyswietlAuta();              // Wygeneruj pierwotny widok galerii
});