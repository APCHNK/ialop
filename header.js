document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");

    // Создаем новый элемент div
    const headerDiv = document.createElement("div");

    // Загружаем содержимое хедера из файла header.html
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./header", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerDiv.innerHTML = xhr.responseText;
            headerContainer.appendChild(headerDiv);

            // Проверяем, содержит ли URL подстроку "about"
            if (window.location.href.indexOf("about") > -1 || window.location.href.indexOf("IALOP-membership") > -1 || window.location.href.indexOf("governance") > -1 || window.location.href.indexOf("IALOP-calls-for-ban-of-online-sale-of-opioids") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot2"
                const hhot2Elements = headerDiv.getElementsByClassName("hhot2");
                for (let i = 0; i < hhot2Elements.length; i++) {
                    hhot2Elements[i].classList.add("hot");
                }
            } else if (window.location.href.indexOf("IALOP-safe-pharmacies") > -1 || window.location.href.indexOf("IALOP-certification") > -1 || window.location.href.indexOf("protecting-patient-safety-and-privacy") > -1 || window.location.href.indexOf("beware-of-rogues") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot3"
                const hhot3Elements = headerDiv.getElementsByClassName("hhot3");
                for (let i = 0; i < hhot3Elements.length; i++) {
                    hhot3Elements[i].classList.add("hot");
                }
            } else if (window.location.href.indexOf("verify-a-website") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot3"
                const hhot3Elements = headerDiv.getElementsByClassName("hhot4");
                for (let i = 0; i < hhot3Elements.length; i++) {
                    hhot3Elements[i].classList.add("hot");
                }
            } else if (window.location.href.indexOf("faqs") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot3"
                const hhot3Elements = headerDiv.getElementsByClassName("hhot5");
                for (let i = 0; i < hhot3Elements.length; i++) {
                    hhot3Elements[i].classList.add("hot");
                }
            } else if (window.location.href.indexOf("news") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot3"
                const hhot3Elements = headerDiv.getElementsByClassName("hhot6");
                for (let i = 0; i < hhot3Elements.length; i++) {
                    hhot3Elements[i].classList.add("hot");
                }
            } else if (window.location.href.indexOf("pharmacists-corner") > -1 || window.location.href.indexOf("safely-manage-prescriptions-medications") > -1 || window.location.href.indexOf("staying-on-schedule-with-medications") > -1 || window.location.href.indexOf("avoid-harmful-interactions-multiple-medications") > -1 || window.location.href.indexOf("how-to-store-medications") > -1 || window.location.href.indexOf("IALOP-safe-medicine-access") > -1 || window.location.href.indexOf("protecting-enhancing-paitent-lives") > -1 || window.location.href.indexOf("ordering-prescriptions-canadian-pharmacies") > -1 || window.location.href.indexOf("daily-maintenance-medications") > -1 || window.location.href.indexOf("what-is-copd") > -1 || window.location.href.indexOf("what-is-diabetes") > -1 || window.location.href.indexOf("what-is-high-blood-pressure") > -1 || window.location.href.indexOf("what-is-ulcerative-colitis") > -1) {
                // Если содержит, добавляем класс "hot" к элементу "hhot3"
                const hhot3Elements = headerDiv.getElementsByClassName("hhot7");
                for (let i = 0; i < hhot3Elements.length; i++) {
                    hhot3Elements[i].classList.add("hot");
                }
            }
        }
    };
    xhr.send();
});