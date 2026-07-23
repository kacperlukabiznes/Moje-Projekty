// 1. Spójna baza modeli
const auta = [
    {
        id: 1,
        nazwa: "BMW M3 Competition",
        opis: "Ikona motorsportu w legendarnym lakierze Isle of Man Green. Precyzja i wyrazisty styl.",
        cena: 450000,
        rata: 7500,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-af5d99f6-7570-450b-8032-77b025b9df2a.jpg"
    },
    {
        id: 2,
        nazwa: "BMW M5 Competition",
        opis: "Luksusowa limuzyna w ciemnym studio. Piekielnie szybki sedan z napędem V8 i M xDrive.",
        cena: 680000,
        rata: 11333,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-9b5c89f0-b574-4c1b-ba75-a8690343d3f2.jpg"
    },
    {
        id: 3,
        nazwa: "BMW M7 Competition",
        opis: "Topowa limuzyna w aksamitnym, studyjnym wydaniu. Szczyt prestiżu i mocy Dywizji M.",
        cena: 820000,
        rata: 13800,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-a127ae8e-62cd-4eeb-b122-774f2e5c6b5f.jpg"
    },
    {
        id: 4,
        nazwa: "BMW X3 M Competition",
        opis: "Kompaktowy SUV M-Power na studyjnym tle. Sportowe zacięcie połączone z funkcjonalnością.",
        cena: 510000,
        rata: 8500,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-a640b562-d1b5-4cd7-b858-17b9025dbd9a.jpg"
    },
    {
        id: 5,
        nazwa: "BMW X5 M Competition",
        opis: "Dominator w głębokiej zieleni Isle of Man Green. Potężna sylwetka i brutalny styl w studio.",
        cena: 720000,
        rata: 12000,
        obraz: "https://mediapool.bmwgroup.com/cache/P9/202302/P90495526/P90495526-the-new-bmw-x5-m-competition-exterior-02-2023-600px.jpg"
    },
    {
        id: 6,
        nazwa: "BMW X7 M Competition",
        opis: "Flagowy SUV w eleganckim, ciemnym oświetleniu studyjnym. Komfort pierwszej klasy.",
        cena: 790000,
        rata: 13200,
        obraz: "https://cdn.phototourl.com/free/2026-07-23-7aa704d9-16e3-4a5b-825d-081e9700b0ae.jpg"
    }
];

let wylosowaneAutoId = null;
let ulubione = [];
let wybraneAuto = null;

function pobierzDzisiejszaDate() {
    return new Date().toISOString().split('T')[0];
}

// 2. Generowanie galerii aut (z obsługą rabatu)
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

        // Logika wyliczania 5% rabatu dla wylosowanego auta
        let cenaFinalna = auto.cena;
        let rataFinalna = auto.rata;
        let badgeRabatu = "";
        let staryKosz = "";

        if (auto.id === wylosowaneAutoId) {
            cenaFinalna = Math.round(auto.cena * 0.95);
            rataFinalna = Math.round(auto.rata * 0.95);
            badgeRabatu = `<span style="background: var(--accent-pink); color: white; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem; margin-left: 8px;">-5% 🔥</span>`;
            staryKosz = `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.8rem; margin-right: 6px;">${auto.cena.toLocaleString()} PLN</span>`;
            
            // Różowa ramka i podświetlenie dla wyróżnionego auta
            karta.style.borderColor = "var(--accent-pink)";
            karta.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.35)";
        }

        karta.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${auto.obraz}" alt="${auto.nazwa}">
            </div>
            <div class="card-content">
                <div>
                    <h2>${auto.nazwa} ${badgeRabatu}</h2>
                    <p>${auto.opis}</p>
                </div>
                <div>
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
            </div>
        `;
        kontener.appendChild(karta);
    });
}

// 3. Obsługa Ulubionych
function toggleUlubione(id) {
    if (ulubione.includes(id)) {
        ulubione = ulubione.filter(item => item !== id);
    } else {
        ulubione.push(id);
    }
    odswiezUlubioneUI();
    wyswietlAuta();
}

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

function filtrujUlubione() {
    if (ulubione.length === 0) {
        wyswietlAuta(auta);
        return;
    }
    const przefiltrowane = auta.filter(a => ulubione.includes(a.id));
    wyswietlAuta(przefiltrowane);
}

// 4. Wyszukiwarka i filtr budżetowy
function wyszukajAuto() {
    const zapytanie = document.getElementById("wyszukiwarka-text").value.toLowerCase();
    const wynik = auta.filter(a => 
        a.nazwa.toLowerCase().includes(zapytanie) || 
        a.opis.toLowerCase().includes(zapytanie)
    );
    wyswietlAuta(wynik);
}

function sprawdzBudzet() {
    const budzet = parseFloat(document.getElementById("budzet-user").value);
    const wynikTekst = document.getElementById("wynik-budzetu");

    if (isNaN(budzet) || budzet <= 0) {
        if (wynikTekst) wynikTekst.innerText = "Wpisz poprawną kwotę raty!";
        wyswietlAuta(auta);
        return;
    }

    const pasujace = auta.filter(a => {
        const aktualnaRata = (a.id === wylosowaneAutoId) ? Math.round(a.rata * 0.95) : a.rata;
        return aktualnaRata <= budzet;
    });

    if (wynikTekst) wynikTekst.innerText = `Znaleziono ${pasujace.length} modeli w budżecie do ${budzet} PLN/mc.`;
    wyswietlAuta(pasujace);
}

// 5. Kalkulator Leasingu
function wybierzAuto(id) {
    wybraneAuto = auta.find(a => a.id === id);
    
    const sekcjaCalc = document.getElementById("sekcja-kalkulatora");
    if (sekcjaCalc) {
        sekcjaCalc.style.display = "block";
        document.getElementById("kalkulator-tytul").innerText = `Kalkulator Leasingu: ${wybraneAuto.nazwa}`;
        sekcjaCalc.scrollIntoView({ behavior: 'smooth' });
    }

    przeliczRateNaZywo();
}

function przeliczRateNaZywo() {
    if (!wybraneAuto) return;

    const okres = parseInt(document.getElementById("suwak-okres").value);
    const wkladProcent = parseInt(document.getElementById("suwak-wklad").value);

    document.getElementById("pokaz-okres").innerText = okres;
    document.getElementById("pokaz-wklad").innerText = `${wkladProcent}%`;

    // Uwzględnienie rabatu w kalkulatorze, jeśli to wylosowane auto
    const cenaBaza = (wybraneAuto.id === wylosowaneAutoId) ? wybraneAuto.cena * 0.95 : wybraneAuto.cena;

    const kwotaWkladu = Math.round(cenaBaza * (wkladProcent / 100));
    document.getElementById("kwota-wkladu").innerText = kwotaWkladu.toLocaleString();

    const finansowanaKwota = cenaBaza - kwotaWkladu;
    const odsetkiIProwizja = 1.15;
    const wyliczonaRata = Math.round((finansowanaKwota * odsetkiIProwizja) / okres);

    document.getElementById("wyliczona-rata").innerText = `${wyliczonaRata.toLocaleString()} PLN / mc`;
}

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

// Główna funkcja losowania
function odpalFure() {
    const dzis = pobierzDzisiejszaDate();
    const ostatniaData = localStorage.getItem("dataLosowania");

    // Jeśli dzisiaj już było losowane – nic nie rób
    if (ostatniaData === dzis) return;

    const losowyIndex = Math.floor(Math.random() * auta.length);
    const wylosowane = auta[losowyIndex];

    wylosowaneAutoId = wylosowane.id;

    // Zapamiętaj dzisiejsze losowanie w przeglądarce
    localStorage.setItem("dataLosowania", dzis);
    localStorage.setItem("wylosowaneAutoId", wylosowaneAutoId);

    pokazStatusIRozkazujPrzycisk(wylosowane);
    wyswietlAuta();
}

// Sprawdza przy starcie strony, czy użytkownik już dziś losował
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

document.addEventListener("DOMContentLoaded", () => {
    sprawdzDzisiejszeLosowanie(); // <-- Dodana linia
    wyswietlAuta();
});