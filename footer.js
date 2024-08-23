document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");

    // Создаем новый элемент div
    const footerDiv = document.createElement("div");

    // Загружаем содержимое футера из файла footer.html
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./footer", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            footerDiv.innerHTML = xhr.responseText;
            footerContainer.appendChild(footerDiv);
        }
    };
    xhr.send();
});