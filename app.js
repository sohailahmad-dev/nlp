const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    const content = card.querySelector(".content");
    const maxLength = 150; // Maximum number of letters

    const fullContent = content.innerHTML;
    if (fullContent.length > maxLength) {
        const truncatedContent = fullContent.substring(0, maxLength);
        const remainingContent = fullContent.substring(maxLength);

        const truncatedHtml = `${truncatedContent}<span class="read-more" style="color: blue; cursor: pointer;">... <em>Read more</em></span>`;
        content.innerHTML = truncatedHtml;

        const readMoreElement = card.querySelector(".read-more");
        readMoreElement.addEventListener("click", function () {
            content.innerHTML = fullContent;

            const showLessButton = document.createElement("span");
            showLessButton.innerHTML = "... <em>Show less</em>";
            showLessButton.style.color = "blue";
            showLessButton.style.cursor = "pointer";

            showLessButton.addEventListener("click", function () {
                content.innerHTML = truncatedHtml;
                content.appendChild(readMoreElement);
                content.removeChild(showLessButton);
            });

            content.appendChild(showLessButton);
            content.removeChild(readMoreElement);
        });
    }
});
