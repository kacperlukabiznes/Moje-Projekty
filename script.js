// 1. NASZA DYNAMICZNA BAZA DANYCH (TABLICA OBIEKTÓW)
const bazaSamochodow = [
    {
        id: "m3",
        nazwa: "BMW M3 Sedan",
        opis: "Ikona motorsportu w codziennym wydaniu. Moc, precyzja i legendarny napęd na tył.",
        cena: 450000
    },
    {
        id: "m4",
        nazwa: "BMW M4 Coupé",
        opis: "Bezkompromisowa sylwetka i potężne osiągi. Stworzone, by dominować na torze.",
        cena: 480000
    },
    {
        id: "i8",
        nazwa: "BMW i8 Roadster",
        opis: "Hybrydowa przyszłość i futurystyczny design. Styl, który wyprzedza swoje czasy.",
        cena: 360000
    },
    {
        id: "m5",
        nazwa: "BMW M5 Competition",
        opis: "Potwór w garniturze. Piekielnie szybki sedan z napędem xDrive i mocarnym V8.",
        cena: 680000
    }
];

// 2. FUNKCJA, KTÓRA AUTOMATYCZNIE GENERUJE KARTY NA STRONIE
function generujSalon() {
    const galeria = document.getElementById("galeria-samochodow");
    
    // Czyścimy galerię na wszelki wypadek
    galeria.innerHTML = "";
    
    // Pętla forEach przechodzi przez każde auto z naszej bazy danych
    bazaSamochodow.forEach(auto => {
        // Obliczamy stawkę raty bazowej (cena / 60 miesięcy)
        let rataBazowa = (auto.cena / 60).toFixed(2);

        // Doklejamy wygenerowany kod HTML do naszej galerii
        galeria.innerHTML += `
            <article class="karta-modelu">
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


// --- LOGIKA DIALOGÓW I HARMONOGRAMU (ZNANA Z ETAPU 1) ---

function odpalFure() {
    let status = document.getElementById("status-tekst");
    status.innerHTML = "🚀 Status: ODPALONE! V8 mruczy, zaraz lecimy w miasto!";
    status.style.color = "#5900ff";
    status.style.fontWeight = "bold";
}

function obliczRate(nazwaModelu, cenaAuta) {
    const iloscMiesiecy = 60; 
    let rata = cenaAuta / iloscMiesiecy;
    rata = parseFloat(rata.toFixed(2)); 
    
    if (rata > 7800) {
        console.log("⚠️ Grubo! Potrzebujesz mocnej zdolności leasingowej na to " + nazwaModelu + "!");
    } else {
        console.log("✅ Dobra rata, " + nazwaModelu + " wjeżdża na firmę w ciemno!");
    }

    pokazHarmonogram(nazwaModelu, rata);
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
    } else if (budzet >= 8000) {
        wynik.innerHTML = "🔥 Masz gest! Stać Cię na całą stajnię! Wybieraj dowolny model!";
        wynik.style.color = "#5900ff";
    } else if (budzet >= 7500) {
        wynik.innerHTML = "⚡ Dobra jest! Stać Cię na M3 Sedan albo i8 Roadster! M4 na razie poza zasięgiem.";
        wynik.style.color = "green";
    } else if (budzet >= 6000) {
        wynik.innerHTML = "🚗 Klasyka! Twój budżet pozwoli na jazdę ztuningowanym BMW i8 Roadster!";
        wynik.style.color = "green";
    } else {
        wynik.innerHTML = "📉 Za mało na te potwory. Doładuj budżet, zrób mocniejszą serię na siłowni i wróć później!";
        wynik.style.color = "orange";
    }
}