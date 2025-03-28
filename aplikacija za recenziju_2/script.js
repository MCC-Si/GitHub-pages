const form = document.getElementById("review-form");
const review = document.getElementById("review");


form.addEventListener("submit", function (e) {

    e.preventDefault();

    let unosnaziva = document.getElementById("unosnaziva").value.trim();
    let unosocjene = document.getElementById("unosocjene").value.trim();

    const recenzija = document.createElement("div");
    recenzija.className = "recenzija";
    

/* ovo je alert da nisi unio podatke  */
    if (unosnaziva.length == 0  || unosocjene.length == 0 ){
        alert("Molimo ispunite sva polja ispravno.");
        return;
      }
/* ovo je dohvaćanje vremena  */
    const vrijeme = new Date().toLocaleString();

    recenzija.innerHTML=`
    <strong>${unosnaziva} - ${unosocjene}</strong> 
    ${vrijeme}
    <div class="actions">
      <button class="favorit">Označi kao omiljeno</button>
      <button class="izbrisi">Obriši</button>
    </div>`;

    document.getElementById("recenzije").appendChild(recenzija);

    const favorit = recenzija.querySelector(".favorit");
    const izbrisi = recenzija.querySelector(".izbrisi");

    /*ovo je dio da se da gumbu funckija da nesto doda kao favorit*/

    favorit.addEventListener("click", function () {
        recenzija.classList.toggle("omiljena");
        favorit.innerText = recenzija.classList.contains("omiljena")
          ? "Omiljeno"
          : "Označi kao omiljeno";
      });

    /*ovo je dio da se da gumbu funckija da nesto izbrise*/

    izbrisi.addEventListener("click", function () {
        recenzija.remove();
      });
    


    form.reset();


});


