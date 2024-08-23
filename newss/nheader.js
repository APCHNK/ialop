document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");

    // Создаем новый элемент div
    const headerDiv = document.createElement("div");

    // Загружаем содержимое хедера из файла header.html
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./nheader", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerDiv.innerHTML = xhr.responseText;
            headerContainer.appendChild(headerDiv);
        }
    };
    xhr.send();
});