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
    
    // 1. Wstrzykiwanie raty bezpośrednio na stronę HTML pod konkretną kartą
    if (nazwaModelu === 'BMW M3 Sedan') {
        document.getElementById("rata-m3").innerHTML = "Rata leasingu: " + rata + " PLN/mc";
    } else if (nazwaModelu === 'BMW M4 Coupé') {
        document.getElementById("rata-m4").innerHTML = "Rata leasingu: " + rata + " PLN/mc";
    } else if (nazwaModelu === 'BMW i8 Roadster') {
        document.getElementById("rata-i8").innerHTML = "Rata leasingu: " + rata + " PLN/mc";
    }

    // 2. Logi ostrzegawcze w konsoli deweloperskiej
    if (rata > 7800) {
        console.log("⚠️ Grubo! Potrzebujesz mocnej zdolności leasingowej na to " + nazwaModelu + "!");
    } else {
        console.log("✅ Dobra rata, " + nazwaModelu + " wjeżdża na firmę w ciemno!");
    }

    // 3. Wywołanie pętli harmonogramu, która rzuca kafelki na szerokość strony
    pokazHarmonogram(nazwaModelu, rata);
}

function pokazHarmonogram(nazwaModelu, rata) {
    // Łapiemy elementy z HTML
    let sekcja = document.getElementById("sekcja-harmonogramu");
    let naglowek = document.getElementById("naglowek-harmonogramu");
    let lista = document.getElementById("lista-wplat");
    
    // Ustawiamy nagłówek raportu
    naglowek.innerHTML = "📊 Harmonogram spłat dla: " + nazwaModelu;
    
    // Czyścimy listę przed każdym nowym kliknięciem, żeby dane się nie nakładały
    lista.innerHTML = "";
    
    // Pętla FOR: generuje kafelki, które ułożą się poziomo od lewej do prawej
    for (let miesiac = 1; miesiac <= 5; miesiac++) {
        let sumaWplat = rata * miesiac;
        
        lista.innerHTML += `
            <div style="background: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #333; min-width: 180px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                <p style="margin: 0 0 8px 0; color: #aaa; font-size: 14px;">📅 Miesiąc <b>${miesiac}</b></p>
                <p style="margin: 0; color: #5900ff; font-weight: bold; font-size: 16px;">${sumaWplat.toFixed(2)} PLN</p>
            </div>
        `;
    }
    
    // Pokazujemy szeroki pasek na stronie
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
        wynik.innerHTML = "🔥 Masz gest! Stać Cię na M4 Coupé (8000 zł), M3 Sedan (7500 zł) i i8 Roadster (6000 zł)! Wybieraj!";
        wynik.style.color = "#5900ff";
    } else if (budzet >= 7500) {
        wynik.innerHTML = "⚡ Dobra jest! Stać Cię na M3 Sedan (7500 zł) albo i8 Roadster (6000 zł)! M4 na razie poza zasięgiem.";
        wynik.style.color = "green";
    } else if (budzet >= 6000) {
        wynik.innerHTML = "🚗 Klasyka! Twój budżet pozwoli na jazdę ztuningowanym BMW i8 Roadster (6000 zł)!";
        wynik.style.color = "green";
    } else {
        wynik.innerHTML = "📉 Za mało na te potwory. Doładuj budżet, zrób mocniejszą serię na siłowni i wróć później!";
        wynik.style.color = "orange";
    }
}