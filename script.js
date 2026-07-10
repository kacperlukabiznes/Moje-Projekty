// 1. NASZA DYNAMICZNA BAZA DANYCH (TABLICA OBIEKTÓW)
const bazaSamochodow = [
    {
        id: "m3",
        nazwa: "BMW M3 Sedan",
        opis: "Ikona motorsportu w codziennym wydaniu. Moc, precyzja i legendarny napęd na tył.",
        cena: 450000,
        foto: "https://grandcar.kz/wp-content/uploads/2024/10/20241027015948-c2e9a7ac-ba12-4167-957a-0a3db210025a.jpg"
    },
    {
        id: "m4",
        nazwa: "BMW M4 Coupé",
        opis: "Bezkompromisowa sylwetka i potężne osiągi. Stworzone, by dominować na torze.",
        cena: 480000,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhrI9dAkBIPpw_mpoYmFc9nNmF83WOG_E_4HQJov48g&s=10"
    },
    {
        id: "i8",
        nazwa: "BMW i8 Roadster",
        opis: "Hybrydowa przyszłość i futurystyczny design. Styl, który wyprzedza swoje czasy.",
        cena: 360000,
        foto: "https://preview.redd.it/those-of-you-who-have-experienced-owned-a-bmw-i8-what-are-v0-5ar6xgjnukba1.jpg?width=640&crop=smart&auto=webp&s=60dc107db4c08afab4b1820dd8d9a93bf27881bc"
    },
    {
        id: "m5",
        nazwa: "BMW M5 Competition",
        opis: "Potwór w garniturze. Piekielnie szybki sedan z napędem xDrive i mocarnym V8.",
        cena: 680000,
        foto: "https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/ea93686cb7f6bba23b9693c4dac92c0715d7c4cd/photos/3Rb7Rjv3-B76xlKuNqT-(edit).jpg?t=170565662284"
    }
];

// 2. FUNKCJA, KTÓRA AUTOMATYCZNIE GENERUJE KARTY NA STRONIE
function generujSalon(lista = bazaSamochodow) {
    const galeriaWlasciwa = document.getElementById("galeria-samochodow");
    
    if (!galeriaWlasciwa) return;

    galeriaWlasciwa.innerHTML = "";
    
    lista.forEach(auto => {
        let rataBazowa = (auto.cena / 60).toFixed(2);
        galeriaWlasciwa.innerHTML += `
            <article class="karta-modelu">
                <img src="${auto.foto}" alt="${auto.nazwa}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                
                <h2>${auto.nazwa}</h2>
                <p>${auto.opis}</p>
                <p id="rata-${auto.id}" style="font-weight: bold; color: #5900ff; margin-bottom: 10px;">
                    Rata leasingu: ${rataBazowa} PLN/mc
                </p>
                <button class="btn-model" onclick="obliczRate('${auto.nazwa}', ${auto.cena})">
                    Sprawdź konfigurację
                </button>
            </article>
        `;
    });
}

// Odpalamy generowanie salonu natychmiast po załadowaniu skryptu
generujSalon();


// --- LOGIKA DIALOGÓW I HARMONOGRAMU ---

function odpalFure() {
    let status = document.getElementById("status-tekst");
    status.innerHTML = "🚀 Status: ODPALONE! V8 mruczy, zaraz lecimy w miasto!";
    status.style.color = "#5900ff";
    status.style.fontWeight = "bold";
}

function obliczRate(nazwaModelu, cenaAuta) {
    // 1. Najpierw wyliczamy ratę (przywrócone linijki!)
    const iloscMiesiecy = 60; 
    let rata = cenaAuta / iloscMiesiecy;
    rata = parseFloat(rata.toFixed(2)); 
    
    // 2. Logi w konsoli
    if (rata > 7800) {
        console.log("⚠️ Grubo! Potrzebujesz mocnej zdolności leasingowej na to " + nazwaModelu + "!");
    } else {
        console.log("✅ Dobra rata, " + nazwaModelu + " wjeżdża na firmę w ciemno!");
    }

    // 3. Pokazujemy harmonogram na stronie
    pokazHarmonogram(nazwaModelu, rata);

    // 4. Budujemy obiekt i zapisujemy go do LocalStorage jako JSON
    const konfiguracja = {
        model: nazwaModelu,
        cena: cenaAuta,
        rata: rata
    };

    localStorage.setItem("ostatniaKonfiguracja", JSON.stringify(konfiguracja));
}

function pokazHarmonogram(nazwaModelu, rata) {
    let sekcja = document.getElementById("sekcja-harmonogramu");
    let naglowek = document.getElementById("naglowek-harmonogramu");
    let lista = document.getElementById("lista-wplat");
    
    naglowek.innerHTML = "📊 Harmonogram spłat dla: " + nazwaModelu;
    lista.innerHTML = "";
    
    for (let miesiac = 1; miesiac <= 5; miesiac++) {
        let sumaWplat = rata * miesiac;
        
        lista.innerHTML += `
            <div style="background: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #333; min-width: 180px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                <p style="margin: 0 0 8px 0; color: #aaa; font-size: 14px;">📅 Miesiąc <b>${miesiac}</b></p>
                <p style="margin: 0; color: #5900ff; font-weight: bold; font-size: 16px;">${sumaWplat.toFixed(2)} PLN</p>
            </div>
        `;
    }
    
    sekcja.style.display = "block";
}

function sprawdzBudzet() {
    let budzet = document.getElementById("budzet-user").value;
    budzet = parseFloat(budzet);
    let wynik = document.getElementById("wynik-budzetu");
    
    if (isNaN(budzet) || budzet <= 0) {
        wynik.innerHTML = "❌ Wpisz poprawną kwotę, byku!";
        wynik.style.color = "red";
        return;
    }

    const przefiltrowaneAuta = bazaSamochodow.filter(auto => {
        let rataBazowa = auto.cena / 60;
        return rataBazowa <= budzet;
    });

    if (przefiltrowaneAuta.length === 0) {
        wynik.innerHTML = "📉 Żadne BMW z naszej stajni nie mieści się w tym budżecie. Doładuj konto!";
        wynik.style.color = "orange";
    } else {
        wynik.innerHTML = `🔥 Znaleziono modele idealne dla Ciebie! (Dostępne: ${przefiltrowaneAuta.length})`;
        wynik.style.color = "#5900ff";
    }

    generujSalon(przefiltrowaneAuta);
}

function wyszukajAuto() {
    let szukanaFraza = document.getElementById("wyszukiwarka-text").value.toLowerCase();
    
    // Filtrujemy bazę
    const pasujaceAuta = bazaSamochodow.filter(auto => {
        return auto.nazwa.toLowerCase().includes(szukanaFraza);
    });

    const galeriaWlasciwa = document.getElementById("galeria-samochodow");

    // REAKCJA NA BRAK WYNIKÓW
    if (pasujaceAuta.length === 0) {
        // Jeśli tablica jest pusta, wyświetlamy komunikat błędu zamiast pustki
        galeriaWlasciwa.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #1a1a1a; border-radius: 12px; border: 1px dashed #5900ff; margin-top: 20px;">
                <p style="font-size: 20px; color: #ff0055; margin: 0 0 10px 0; font-weight: bold;">📉 Brak wyników!</p>
                <p style="color: #aaa; margin: 0;">Niestety, nie mamy takiego potwora w naszej stajni. Spróbuj wpisać M3, M4, M5 lub i8!</p>
            </div>
        `;
    } else {
        // Jeśli znaleziono auta, normalnie renderujemy salon
        generujSalon(pasujaceAuta);
    }
}

// 3. SPRAWDZANIE PAMIĘCI I ODKODOWANIE OBIEKTU JSON
function sprawdzPamiecPrzegladarki() {
    let zapisanyJSON = localStorage.getItem("ostatniaKonfiguracja");
    let boksKomunikatu = document.getElementById("ostatni-wybor");

    if (zapisanyJSON) {
        // Zamieniamy tekst JSON z powrotem w obiekt JavaScript
        let dane = JSON.parse(zapisanyJSON);
        
        // Wyświetlamy bogatszy komunikat korzystając z właściwości obiektu
        boksKomunikatu.innerHTML = `⭐ Ostatnia konfiguracja: <b>${dane.model}</b> (Cena: ${dane.cena.toLocaleString()} PLN, Rata: ${dane.rata} PLN/mc)`;
        boksKomunikatu.style.display = "block";
    }
}

// Odpalamy sprawdzanie pamięci natychmiast przy uruchomieniu strony
sprawdzPamiecPrzegladarki();