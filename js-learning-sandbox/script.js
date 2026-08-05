// Nasze saldo początkowe
let saldo = Number(localStorage.getItem("mojeSaldo")) || 0;
let historia = JSON.parse(localStorage.getItem("mojaHistoria")) || [];
let licznikTransakcji = 0; // Licznik transakcji
let sumaWplat = 0;
let sumaWydatkow = 0;
let rozwiniecie = false; // Zmienna do kontrolowania rozwinięcia historii

// Funkcja dodająca wpłatę do portfela
function dodajWplate(kwota) {
    saldo = saldo + kwota;
    console.log(`Wpłacono: ${kwota} PLN. Aktualne saldo: ${saldo} PLN`);
    licznikTransakcji = licznikTransakcji + 1;
    sumaWplat = sumaWplat + kwota;

    historia.push({
        type: 'wpłata',
        kwota: kwota,
        data: new Date().toISOString()
    });

    odswiezWidokHistorii();
    zapiszDane();
}

// Funkcja robiąca wydatek (zakup)
function zrobWydatek(kwota) {
    if (kwota > saldo) {
        console.error(`Brak środków! Próbowano wydać ${kwota} PLN, a aktualne saldo wynosi ${saldo} PLN.`);
        alert("Nie masz wystarczających środków na koncie!");
    } else {
        saldo = saldo - kwota;
        console.log(`Wydano: ${kwota} PLN. Aktualne saldo: ${saldo} PLN`);
        console.log("Transakcja zakończona sukcesem!");
        licznikTransakcji = licznikTransakcji + 1;
        sumaWydatkow = sumaWydatkow + kwota;

        historia.push({
            type: 'wydatek',
            kwota: kwota,
            data: new Date().toISOString()
        });

        odswiezWidokHistorii();
        zapiszDane();
    }
}

// --- TESTUJEMY KOD ---
console.log("Startowe saldo:", saldo, "PLN");


console.log("Liczba transakcji:", `${licznikTransakcji}`);
console.log(`suma wszystkich wpłat: ${sumaWplat} PLN`);
console.log(`suma wszystkich wydatków: ${sumaWydatkow} PLN`);
console.log("Pełna historia transakcji:", historia); 

const elementSalda = document.querySelector("#saldo-widok");
const elementInputu = document.querySelector("#kwota-input")

function obslugaWplaty() {
    const wpisanaKwota = Number(elementInputu.value);

    if (wpisanaKwota <= 0) {
        alert("Wpisz poprawną kwotę!");
        return;
    }
    dodajWplate(wpisanaKwota);
    elementSalda.textContent = saldo;
    elementInputu.value = "";
}

function obslugaWydatku() {
    const wpisanaKwota = Number(elementInputu.value);
    
    if (wpisanaKwota <= 0) {
        alert("Wpisz poprawną kwotę!");
        return;
    }
    zrobWydatek(wpisanaKwota);
    elementSalda.textContent = saldo;
    elementInputu.value = "";
}

const listaHistorii = document.querySelector("#historia-transakcji");

function dodajdoHistorii(wpis) {
    const nowyElement = document.createElement("li"); 
    
    if (typeof wpis === 'object') {
        const jestWplata = wpis.type === "wpłata" || wpis.type === "wplata";
        const znak = jestWplata ? "+" : "-";
        
        nowyElement.textContent = `${znak}${wpis.kwota} PLN`;
        nowyElement.classList.add(jestWplata ? "wpis-wplata" : "wpis-wydatek");
    } else {

        nowyElement.textContent = tekst;
    }

    listaHistorii.appendChild(nowyElement);
}

function zapiszDane() {
    localStorage.setItem("mojeSaldo", saldo);
    localStorage.setItem("mojaHistoria", JSON.stringify(historia));
}

function odswiezWidokHistorii() {
    listaHistorii.innerHTML = "";

    let kopiaHistorii = [...historia].reverse;

    let transakcjeDoPokazania = historia;

    if (!rozwiniecie) {
        transakcjeDoPokazania = historia.slice(-6); // Pokazujemy tylko ostatnie 6  transakcji
    }
    transakcjeDoPokazania.forEach(function(wpis) {
        dodajdoHistorii(wpis);
    });

    const wiecejBtn = document.querySelector("#wiecej-btn");
    if (wiecejBtn) {
         wiecejBtn.textContent = rozwiniecie ? "Zwiń" : "Zobacz więcej";
    }
    obliczStatystyki30Dni(); // Aktualizujemy statystyki po odświeżeniu widoku historii
}

function pokazWiecej() {
    rozwiniecie = !rozwiniecie; // Zmieniamy stan rozwinięcia
    odswiezWidokHistorii(); // Odświeżamy widok historii po zmianie stanu
}

elementSalda.textContent = saldo;
odswiezWidokHistorii();

function obliczStatystyki30Dni() {
    const teraz = new Date();
    const trzydziesciDniTemu = new Date();
    trzydziesciDniTemu.setDate(teraz.getDate() - 30);

    let sumaWplat30 = 0;
    let sumaWydatkow30 = 0;

    historia.forEach(function(transakcja) {
        if (typeof transakcja === "object" && transakcja.data) {
            const dataTransakcji = new Date(transakcja.data);

            if (dataTransakcji >= trzydziesciDniTemu) {
                if (transakcja.type === "wpłata" || transakcja.type === "wplata") {
                    sumaWplat30 += transakcja.kwota;
                } else if (transakcja.type === "wydatek") {
                    sumaWydatkow30 += transakcja.kwota;
                }
            }
        }
    });

    const elWplaty = document.querySelector("#wplaty-30dni");
    const elWydatki = document.querySelector("#wydatki-30dni");
    
    if (elWplaty) elWplaty.textContent = sumaWplat30;
    if (elWydatki) elWydatki.textContent = sumaWydatkow30;
}

function resetujDane() {
    if (confirm("Na pewno chcesz wyczyścić całą historię i saldo?")) {
        localStorage.clear();
        saldo = 0;
        historia = [];
        elementSalda.textContent = saldo;
        odswiezWidokHistorii();
    }
}