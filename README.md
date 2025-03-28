### Što je HTML?
HyperText Markup Language (HTML) je prezentacijski jezik, odnosno jezik označavanja, koji se koristi za kreiranje web stranica. Aktualna verzija je HTML5, a njegova glavna svrha je definiranje pojedinih komponenti web stranice, uključujući njezinu strukturu (layout), sadržaj i karakteristike.

### Što je minifikacija?
Proces prilagodbe koda za produkciju, čime se smanjuje veličina datoteke te ubrzava njeno preuzimanje sa poslužitelja.

### Koji su temelji pristupačnosti web stranica?
• Pristupačnost web rješenja:
• mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika
• Postiže se:
• primjenom semantičkih HTML elemenata
• pravilnom definicijom HTML atributa (npr. "alt" kao zamjenski tekst za grafike, "role" za davanje značenja elementima, "lang" kao oznaka jezika sadržaja itd.)
• osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)
• omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)

### Što je potrebno napisati da bi se iskoristila CSS3 varijabla "color-primary" kao vrijednost za promjenu boje teksta?

  :root {
    --color-primary: #3498db;
  }

  p {
    color: var(--color-primary);
  }

###  15. Potrebno je pozvati SCSS funkciju "lighten". Koja od navedenih linija koda je ispravna?
color: lighten(#3498db, 20%);

### JavaScript je funkcijski programski jezik. Y
### JavaScript je objektno-orijentirani programski jezik. Y


### Što je ECMAScript?

JavaScript jezik se razvija prema ECMAScript specifikaciji:
•opisuje sintaksu i ponašanje programskog jezika
•definira standard za implementaciju JavaScript jezika.

### Što su task runner-i? Odgovor:
Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta. Primjeri: gulp, grunt, broccoli, brunch, …

### let/const deklaracije
Let deklaracija
Prednosti let deklaracije (naspram var):
1. Označuje da planiramo mijenjati tu varijablu
2. Opseg varijable je ograničen unutar bloka, ne funkcije
Const ma slično ponašanje kao let deklaracija (block scope), osim što se vrijednost varijable ne može mijenjati.

### DOM elementi

document.getElementById("header-title");
document.getElementsByTagName("li");
document.getElementsByClassName("description");
document.getElementsByName("gender");
document.querySelector("#header-title");
document.querySelectorAll(".description");

### Linijski - inline CSS

• Linijski CSS
• unutar HTML oznaka  dodavanje atributa “style” HTML elementu
• ne koriste se selektori
• ograničava primjenu CSS pravila samo na element u kojemu su napisana
• daje nepregledan kod
• primjer:
<p style="color:red;font-size:16px;">Odlomak teksta</p>

### Varijabla u SCSS-u

$myColor: red;

h1 {
  $myColor: green !global;
  color: $myColor;
}

p {
  color: $myColor;
}

### Metode životnog ciklusa

životni ciklus komponente može se definirati kao niz metoda koje
se pozivaju u različitim fazama postojanja komponente
• možemo definirati kod koji će se izvršiti u točno određenom trenutku procesa
• te metode nazivamo lifecycle methods, a pozivaju se u sljedećim
fazama:
• inicijalizacija komponente (initialization)
• postavljanje na DOM (mounting)
• ažuriranje (updating)
• brisanje iz DOM-a (unmounting)

### Što je git

Git je distribuirani sustav za verzioniranje koda (DVCS)
• Omogućuje praćenje promjena u izvornom kodu tijekom
razvoja softvera te koordiniranje rada među programerima
• Git ne nudi mehanizme kontrole pristupa, ali je dizajniran za
rad s drugim alatima koji su specijalizirani za kontrolu pristupa
(git repozitoriji - GitHub, GitLab, Bitbucket, ..)

### Što je repozitorij?

Repozitorij (repository - repo) je mjesto na kojem se
pohranjuju sve datoteke jednog projekta
• Repozitoriji mogu biti lokalni ili na nekom poslužitelju (ovisno
o sustavu za verzioniranje koji koristimo)
• Na jednom repozitoriju može raditi jedna ili više osoba
• Neki od popularnih repozitorija: GitHub, GitLab, Bitbucket

### Na zadanom primjeru objasnite razliku između HTML oznake i atributa:
```<audio controls src="glazba/jingl.mp3"></audio>```

HTML oznaka: audio
Određuje tip HTML elementa te daje značenje njegovom sadržaju
HTML atributi: controls, src
Pruža dodatne informacije o sadržaju HTML elementa

### Potrebno je HTML dokumentu dodijeliti metapodatak koji opisuje njegov sadržaj u formi sljedeće rečenice "Službene stranice Učilišta Algebra". Što je potrebno napisati unutar <head> oznake HTML dokumenta kako bi se to postiglo?

```<meta name="description" content="Službene stranice Učilišta Algebra" />```

### Potrebno je HTML dokumentu dodijeliti oznaku jezika sadržaja "en". Koji atribut je potrebno dodijeliti elementu <html> kako bi se to postiglo?

```<html lang="en"></html>```

### Kod otvaranja HTML dokumenta u web pregledniku u njegovom zaglavlju ispisuje se naslov "Učilište Algebra". Pomoću kojeg HTML elementa je naslov dokumenta postavljen?

```<title>Učilište Algebra</title>```

### Zadan je sadržaj:
https://example.com/movie.mp4
Pomoću HTML-a objavite video sadržaj s kontrolama za upravljanje reprodukcijom sadržaja. Video formi dodijelite dimenzije 600 x 400 px. (zadatak riješiti u dostupnom code editoru).

```<video src="https://example.com/movie.mp4" controls width="600" height="400"></video>```

### Zadan je sadržaj na sljedećoj relativnoj putanji:
galerija/panorama-grada.jpg
Pomoću HTML-a objavite grafiku te joj dodijelite dimenzije 720 x 500 px. Postavite zamjenski tekst "Panorama grada" (zadatak riješiti u dostupnom code editoru).

```<img src="galerija/panorama-grada.jpg" alt="Panorama grada" width="720" height="500" />```

### Koji element koristimo za označavanje sadržaja koji predstavlja podnožje tijela stranice ili podnožje određene sekcije (sadrži autorska prava, kontakt podatke itd.)?

```<footer></footer>```

### Koji element koristimo za označavanje sadržaja koji predstavlja cjelinu neovisnog (samostalnog) sadržaja u dokumentu?

```<article></article>```

### Koji element koristimo za grupiranje sadržaja isključivo radi stiliziranja pomoću CSS-a (bez da mu damo značenje)?

```<div></div>```

### Koji element koristimo za tematsko grupiranje sadržaja?

```<section></section>```

### Što predstavlja pristupačnost web rješenja? Navedite nekoliko primjera kako se ona postiže.

Mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika. Postiže se:
•primjenom semantičkih HTML elemenata
•pravilnom definicijom HTML atributa (npr. "alt" kao zamjenski tekst za grafike, "role" za davanje značenja elementima, "lang" kao oznaka jezika sadržaja itd.)
•osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)
•omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)
•više: https://www.w3.org/WAI/fundamentals/accessibility-principles/

### Nadopunite isječak koda tako da elementu dodijelite crvenu boju znakova preko linijskog zapisa.

```<p>Lorem ipsum dolor</p>```


```<p style="color: red;">Lorem ipsum dolor</p>```

### Nadopunite isječak koda tako da u zaglavlju HTML dokumenta dohvatite vanjsku CSS datoteku sa sljedeće lokacije: css/style.css

```
<head>
<link rel="stylesheet" href="css/style.css" />
</head>
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title s točnom vrijednošću "Učilište Algebra".

```
{
display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}

[title="Učilište Algebra"] { display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title u čijoj vrijednosti se bilo gdje nalazi izraz "Algebra".

```
{
display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}

[title*="Algebra"] { display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title na početku čije vrijednosti se nalazi izraz "Algebra".

```
{
display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}


[title^="Algebra"] { display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve posjećene poveznice <a> (one koje su već bile otvarane).

```
{
display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}

a:visited {
display: inline-block; padding: 2em;
color: #eee; font-size: 20px;
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite
sve slike <img> iznad kojih je postavljen pokazivač miša.

```
{
transform: scale(1.1);
}

img:hover {
transform: scale(1.1);
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve paragrafe <p> koji su prvo dijete, određenog tipa, svog roditelja.

```
{
color: #eee; font-size: 20px;
}

p:first-of-type { color: #eee; font-size: 20px;
}
```

### Nadopunite isječak koda odgovarajućim selektorom tako da ugradite sadržaj "Upamti: " sa zadanim stilovima prije postojećeg sadržaja naslova 1. razine <h1>.
```
{
content: "Upamti: "; color: red;
background-color: yellow;
}

h1::before {
content: "Upamti: "; color: red;
background-color: yellow;
}
```
### Vrijednost varijable "text-color" postavite kao boju znakova svih paragrafa.
```
:root {
--text-color:
}	
#333;	:root {
--text-color: #333;
}
p {

}		p {
color: var(--text-color);
}
```
### Zadan je <article> element koji sadrži tekstualni sadržaj.
Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina centrirajte područje sadržaja elementa).
Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.
```
article {
background-color: #eee; text-align: justify; width: 300px;
border: 5px solid #666; margin: 2em auto; padding: 2em;
}
```
### Zadan je <article> element koji sadrži tekstualni sadržaj.
Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina područje sadržaja elementa postavite na desnu stranu). Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.
```
article {
background-color: #eee; text-align: justify; width: 25%;
border-left: 8px double #666; border-right: 5px dashed #666; margin: 2em 0 2em auto; padding: 2em 4em;
}
```
### Na prazno mjesto upišite izraz za poziv SCSS funkcije "margin" te joj dodijelite dva cjelobrojna argumenta.
```
@function margin($a, $b) {
@return $a * $b;
}

p {
margin-top: 	 * 1px;
}

@function margin($a, $b) {
@return $a * $b;
}

p {
margin-top: margin(3, 2) * 1px;
}
```

### Unutar pravila koje obuhvaća sve elemente tipa <section> primijenite SCSS mixin "flex-container".
```
@mixin flex-container { display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

section {

@mixin flex-container { display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

section {
@include flex-container;

}	}
```
### Dohvatite "partials" datoteku sa sljedeće lokacije: base/_color.scss

```@import "base/color";```

### Kako se naziva proces prilagodbe CSS koda za produkciju, čime se smanjuje veličina datoteke te ubrzava njeno preuzimanje sa poslužitelja?

Proces se naziva minifikacija ili minimizacija CSS koda.

### Je li JavaScript jezik predviđen za objektno-orijentirano ili funkcijsko programiranje?

JavaScript je skriptni programski jezik visoke razine, dobar i za
objektno-orijentirano i za funkcijsko programiranje.


### Što je ECMAScript?

JavaScript jezik se razvija prema ECMAScript specifikaciji:
•opisuje sintaksu i ponašanje programskog jezika
•definira standard za implementaciju JavaScript jezika.


### Što od navedenog nije ispravan identifikator varijable?
```1userData```
b)$userData
c)user_data
d)user1Data


### Koji izraz koristimo u definiciji spremnika za podatke ako želimo onemogućiti promjenu primitivne vrijednosti?

const

### Opišite pojedine djelokruge varijabli.
•globalni djelokrug (globalne varijable)
•definiraju se izvan funkcija
•mogu se koristiti u čitavom programu, zatvaranjem stranice brišu se
•djelokrug funkcije (lokalne varijable)
•definiraju se unutar funkcije te se mogu koristiti samo unutar nje
•izlaskom iz funkcije brišu se
•djelokrug bloka
•definiraju se unutar bloka {} pomoću ključne riječi let
•dostupne su samo unutar bloka u kojemu su definirane
•moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati

### Deklarirajte i inicijalizirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom (" ") između imena i prezimena.

```
var firstName = "John"; var lastName = "Doe";
var fullName = firstName + " " + lastName;
/* ili */
var fullName = firstName.concat(" ", lastName);
```

### Deklarirajte varijable y i z te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable x.
```
var x = z === 2 ? y : 5;

var x;
var y = 10, z = 2;
if (z === 2) {
x = y;

}
else {
}



x = 5;
```

### Koji izraz možemo koristiti kao alternativu " if " izraza za postavljanje višestrukog grananja?

Izraz "switch".

### Koliko puta će se izvršiti sljedeći blok naredbi?
```
for (let count = 0; count <= 10; count+=2) { console.log(count);
}
```
6 puta.

### S obzirom da je uvjet petlje lažan blok naredbi se neće niti jedanput izvršiti. Promijenite definiciju uvjetne petlje tako se da blok naredbi uvijek izvrši barem jedanput, bez obzira o istinitosti uvjeta. Vrijednost varijable "count", kao i izraz uvjeta ne smijete promijeniti.
```
var count = 10;
while (count < 10) { console.log(count); count++;
}

var count = 10;
do { console.log(count); count++;
} while (count < 10);
```

### Unutar petlji možemo koristiti izraze "continue" i "break". Koja je razlika između njih?

Izraz "continue" prekida trenutnu iteraciju (odnosno trenutno izvršavanje bloka naredbi) te nastavlja s idućom. Izraz "break" prekida izvršavanje petlje te izlazi iz nje.

### Napišite JavaScript funkciju koja prihvaća cjelobrojnu vrijednost kao argument te vraća poruku da li se radi o parnom ili neparnom broju.
### Pretpostavite da će argument uvijek biti cjelobrojna vrijednost.
```
function parniIliNeparni(a){
if(a % 2 == 0){
return "Broj " + a + " je paran.";

}
else {

}
}

return "Broj " + a + " je neparan.";
```

### Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.
```
var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
function pronadiNajduljuRijec(niz) {

var	rijec = "";	
for	(let i = 0; i < niz.length; i++) {	
	if (rijec.length < niz[i].length)	{
rijec = niz[i];
}
}
return rijec;
}
var najduljaRijec = pronadiNajduljuRijec(rijeci); console.log(najduljaRijec);
```
### Što predstavlja BOM (Browser Object Model)?

Skupina unaprijed definiranih objekata koji stranici (JavaScript-u) omogućuju interakciju s web preglednikom.
Iako ne postoji službeni standard, većina web preglednika ipak ima implementirano identično sučelje za komunikaciju s JavaScript jezikom.

### Što predstavlja DOM (Document Object Model)?

Platforma i jezično neutralno sučelje koje omogućuje programima i skriptama dinamički pristup i ažuriranje sadržaja, strukture i stila dokumenta.
Definira:
-HTML elemente kao objekte
-svojstva svih HTML elemenata
-metode pristupa svim HTML elementima
-događaje za sve HTML elemente.


### Navedite barem tri metode objekta "document" za dohvaćanje HTML
elemenata.
```
document.getElementById() document.getElementsByTagName() document.getElementsByClassName() document.getElementsByName() document.querySelector() document.querySelectorAll()
```

### Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu dodajte novi podelement tipa <h1> s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).
```
var roditelj = document.getElementById("zaglavlje"); roditelj.innerHTML += "<h1>Naslov</h1>";
/* ili */
var roditelj = document.getElementById("zaglavlje"); var naslov = document.createElement("h1"); naslov.textContent = "Naslov"; roditelj.appendChild(naslov);
```

### Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te ga uklonite iz HTML stabla.
```
var element = document.getElementById("zaglavlje"); element.remove();
/* ili */
var element = document.getElementById("zaglavlje"); element.parentNode.removeChild(element);
```

### Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu postavite sljedeću pozadinsku boju: "#ddd".
```
var element = document.getElementById("zaglavlje"); element.style.backgroundColor = "#ddd";
/* ili */
var element = document.getElementById("zaglavlje"); element.style.cssText = "background-color: #ddd;";
```
### Što je sustav za verzioniranje koda te zašto se koristi u web razvoju?

Odgovor:
Alat koji omogućuje čuvanje i praćenje promjena u datoteci ili skupu
datoteka tijekom vremena (tko je napravio promjenu i kada).
Omogućuje lak oporavak u slučaju da je nešto pošlo po krivu (vraćanje datoteka u prethodno stanje) te olakšava suradnju više od jedne osobe koje rade na istom projektu.

### Koji tipovi sustava za verzioniranje koda postoje? Odgovor:
Lokalni sustav za verzioniranje koda
Centralizirani sustav za verzioniranje kôda Distribuirani sustav za verzioniranje kôda

### Što je Git? 
Odgovor:
Git je distribuirani sustav za verzioniranje koda (DVCS).
Omogućuje praćenje promjena u izvornom kodu tijekom razvoja softvera te koordiniranje rada među programerima.

### Što je repozitorij?
Odgovor:
Repozitorij je mjesto na kojem se pohranjuju sve datoteke jednog
projekta.
Može biti lokalni ili na nekom poslužitelju, dok na jednom repozitoriju može raditi jedna ili više osoba.

### Napišite Git naredbu s kojom se inicijalizira Git repozitorij. Rješenje:
```git init```

### Napišite Git naredbu s kojom se lokalno sprema trenutna verzija repozitorija.

Rješenje:
```git commit -m "message"```


### Napišite Git naredbu za zapisivanje svih lokalnih commitova na udaljeni repozitorij (npr. GitHub).

Rješenje:
```git push```


### Napišite Git naredbu za povlačenje promjena s udaljenog na lokalni repozitorij.

Rješenje:
```git pull```


### Napišite Git naredbu za spajanje dvije Git grane kako bi se promjene iz jedne zapisale u drugu (u glavnu granu repozitorija – master).

Rješenje:
```git merge```

### Što predstavlja jQuery?

Odgovor:
Brzu JavaScript biblioteku bogatu mnogim mogućnostima. Značajno pojednostavljuje izvršavanje sljedećih radnji:
•upravljanje HTML stablom (DOM)
•upravljanje CSS stilovima
•primjenu efekata i animacija u radu web stranica
•upotrebu događaja za pokretanje definiranih operacija
•asinkronu komunikacija klijenta i poslužitelja (AJAX).

### Što je npm (node package manager)? Odgovor:
Snažan upravitelj programskim paketima:
•softverski alat koji automatizira proces instaliranja, nadogradnje, konfiguriranja i brisanja računalnih programa ili biblioteka (paketa)
•dolazi s instalacijom Node.js okruženja.


### Napišite npm naredbu za instalaciju paketa "lodash" i editiranje package.json datoteke (ovisnost se zapisuje u datoteku package.json).

Rješenje:
```
npm	install	--save	lodash
ili			
npm	install	lodash	
```

### Napišite npm naredbu za instalaciju paketa "jest" koji se koristi samo prilikom razvoja aplikacije. Ovisnost se zapisuje u datoteku package.json (naredba editira package.json datoteku).

Rješenje:
```npm install --save-dev jest```

### Što su task runner-i? Odgovor:
Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta.
Primjeri: gulp, grunt, broccoli, brunch, …

### Što je module bundler? Odgovor:
Alat koji se koristi prilikom izgradnje aplikacije za produkciju.
Omogućuje povezivanje i optimizaciju više modula (datoteka) u jedan proizvodno spreman paket.
Primjeri: webpack, rollup, browserify, …

### Objasnite što je React.

Odgovor:
React je popularna JavaScript biblioteka koja služi za izradu korisničkih sučelja.
Pomoću malih izoliranih dijelova koda (komponenti) stvaramo kompleksno, efikasno i fleksibilno korisničko sučelje.

### Napišite naredbu za kreiranje React aplikacije preko CLI-a (Command- line interface). Naziv aplikacije glasi "react-app".

```npx create-react-app react-app```

### Što je potrebno napraviti kako bi se programski kôd napisan u jednoj datoteci mogao koristiti u drugoj datoteci?

Kod je potrebno:
●exportati (napraviti izvoz) iz izvorne datoteke i
●importati (napraviti uvoz) u datoteci u kojoj ga želimo iskoristiti


### Prikazana je definicija React komponente koja sadrži grešku u JSX sintaksi. Objasnite u čemu je greška.
```
function MyComponent() {
return (
<div>
<h1>Hello!</h1>
<p>How are you?</p>
</div>
);
}
```
### Ako komponenta vraća više JSX elemenata, svaki mora biti ugniježđen u jednom vršnom elementu, najčešće elementu <div>
 ispravno

### Što je potrebno upisati na prazno mjesto kako bi uključili JavaScript izraz
### unutar JSX te u sadržaj koji generira ugradili zbroj konstanti x i y?
```
function MyComponent() {
const x = 5, y = 7;
return (
<div>
<h1>Hello!</h1>
<p>Zbroj: {x + y}</p>
</div>
```
### Unutar JSX-a JavaScript kod je potrebno postaviti unutar vitičastih zagrada: {JavaScript code}
 ispravno

);
}

### Ako je vrijednost konstante "user" jednaka "administrator" komponenta vraća poruku "Hello Friend", u suprotnom vraća poruku "Hello Stranger". Što je potrebno upisati na prazna mjesta kako bi se postiglo zadano uvjetno iscrtavanje?
```
function MyComponent() {
const user = "administrator";
const greetings = user === "administrator" 	 <p>Hello Friend</p>   <p>Hello Stranger</p>; return <div>{greetings}</div>;
}
```
### Ako je vrijednost konstante "user" jednaka "administrator" komponenta vraća poruku "Hello Friend", u suprotnom vraća poruku "Hello Stranger". Što je potrebno upisati na prazna mjesta kako bi se postiglo zadano uvjetno iscrtavanje?
```
function MyComponent() {
const user = "administrator";
const greetings = user === "administrator" ? <p>Hello Friend</p> : <p>Hello Stranger</p>; return <div>{greetings}</div>;
}
```

### Na koja dva načina je moguće kreirati komponente unutar React biblioteke?

Odgovor:
Komponente je moguće kreirati pomoću funkcije ili klase.


### Objasnite što su propsi ("property-i").

Propsi su način na koji komponente međusobno komuniciraju:
•omogućuju prijenos informacija iz komponente roditelj (parent) u komponentu dijete (child).
Protok podataka kroz propse je uvijek jednosmjeran - iz komponente roditelj u komponentu dijete:
•komponenta dijete ne može i ne smije mijenjati props objekt koji je primila od roditelja.


### Što je potrebno upisati na prazno mjesto kako bi komponenti "ChildComponent" proslijedili props "name" s proizvoljnom vrijednošću (npr. "Child")?

```
function ParentComponent() { return (
<div>
<h1>Ja sam ParentComponent</h1>
<ChildComponent 	 />
</div>

function ChildComponent(props) { return <h1>Ja sam {props.name}</h1>;
}

);
}
```
### Što je potrebno upisati na prazno mjesto kako bi komponenti "ChildComponent" proslijedio props "name" s proizvoljnom vrijednošću (npr. "Child")?
```
function ParentComponent() { return (
<div>
<h1>Ja sam ParentComponent</h1>
<ChildComponent name="Child" />
</div>

function ChildComponent(props) { return <h1>Ja sam {props.name}</h1>;
}

);
}
```
### Što predstavlja stanje komponente te što se dogodi s komponentom ako se ono promijeni?

Stanje komponente predstavlja built-in objekt koji sadrži podatke o komponenti.
Ako se stanje komponente promijeni ona se ponovno iscrtava (renderira) kako bi prikazala promjene u stanju.
Ponovnim renderiranjem komponente, renderiraju se i sve njezine child komponente.


### Putem koje metode je jedino ispravno mijenjati stanje komponente definirane klasom, kako bi osigurali da se ona ponovno iscrta (renderira)?

Odgovor: Metoda setState.

### Što omogućuju hook funkcije? Navedite nekoliko primjera hook funkcija.

Hook funkcije omogućuju upotrebu stanja (state) i drugih mogućnosti unutar komponenata definiranih funkcijom (npr. simulacija životnog ciklusa komponente).
Primjeri:
•useState hook funkcija omogućuje korištenje stanja u komponentama definiranima funkcijom
•useEffect hook funkcija omogućuje oponašanje rada metoda životnog ciklusa.

### Nadopunite definiciju komponente tako da se klikom na gumbić poziva funkcija "handleButtonClick".
```
function MyComponent() {
const handleButtonClick = () => { console.log("Button click!");
};

return (
<button 	>Klikni me!</button>
);
}
```
### Nadopunite definiciju komponente tako da se klikom na gumbić poziva funkcija "handleButtonClick".
```
function MyComponent() {
const handleButtonClick = () => { console.log("Button click!");
};

return (
<button onClick={handleButtonClick}>Klikni me!</button>
);
}
```
### Navedite faze životnog ciklusa React komponente.

1.Inicijalizacija komponente (initialization)
2.Postavljanje na DOM (mounting)
3.Ažuriranje (updating)
4.Brisanje iz DOM-a (unmounting)

### Što omogućuje primjena lista unutar React komponenti? Zašto elementima liste dajemo svojstvo key s jedinstvenom vrijednošću?

Liste olakšavaju definiciju sadržaja (elemenata istog tipa) koji vraća određena komponenta te omogućuju veću fleksibilnost u upravljanju njime.
Svojstvo key pomaže React-u da prepozna elemente liste koji su se promijenili, dodali ili uklonili – osigurava bolje performanse.

### Navedite tri načina za stilizaciju sadržaja komponenti u React-u.

1.CSS Stylesheet
2.Inline stilovi
3.CSS Modules

### Koji tip aplikacija gradimo s React-om?

S React-om gradimo Single-page aplikacije:
•web-aplikacije koje se sastoje od samo jedne stranice
•stranica u interakciji s korisnikom vrši dinamičko prepisivanje trenutnog sadržaja
umjesto učitavanja nove stranice.
