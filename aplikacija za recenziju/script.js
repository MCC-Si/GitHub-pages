document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const bookTitleInput = document.getElementById("bookTitle");
    const ratingInput = document.getElementById("rating");
    const reviewList = document.createElement("div");
    document.body.appendChild(reviewList);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const bookTitle = bookTitleInput.value.trim();
        const rating = parseInt(ratingInput.value);
        
        if (!bookTitle || isNaN(rating) || rating < 1 || rating > 10) {
            alert("Molimo unesite ispravan naziv knjige i ocjenu između 1 i 10.");
            return;
        }
        
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `
            <strong>Naziv stavke - ${rating}</strong><br>
            ${new Date().toLocaleString()}<br>
            <button class="favorite-btn">Dodaj u favorite</button>
            <button class="delete-btn">Obriši</button>
            <hr>
        `;
        
        reviewList.prepend(reviewItem);

        bookTitleInput.value = "";
        ratingInput.value = "";
    });

    reviewList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest(".review-item").remove();
        } else if (event.target.classList.contains("favorite-btn")) {
            const reviewItem = event.target.closest(".review-item");
            reviewItem.classList.toggle("favorite");
            event.target.textContent = reviewItem.classList.contains("favorite") 
                ? "Ukloni iz favorita" 
                : "Dodaj u favorite";
        }
    });
});


