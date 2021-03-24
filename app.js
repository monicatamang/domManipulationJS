// Setting the background colour of the page to be 'lightgrey'
var page = document.querySelector(`body`);
page.style.background = `lightgrey`;

// Changing the text inside the h1 tag located in the header, changing the colour of the h1 tag to 'white', aligning the h1 tag to be in the center of the page
var title = document.querySelector(`body>header>h1`);
title.innerText = `Bears`;
title.style.color = `white`;
title.style.textAlign = `center`;

// Changing all the a tags on the page to the colour 'grey', font weight to 'bold', and font size to 1.5rem;
var links = document.querySelectorAll(`a`);
for (var i = 0; i < links.length; i++) {
    links[i].style.color = `grey`;
    links[i].style.fontWeight = `bold`;
    links[i].style.fontSize = `1.5rem`;
}

// Aligning the a tags in the nav tag to be in the center of the page
var linksContainer = document.getElementById(`pageLinks`);
linksContainer.style.textAlign = `center`;

// Changing the heading of the first section on the page
var speciesHeading = document.getElementById(`species`);
speciesHeading.innerText = `Classification`;

// Changing the colour of the lists on the page to 'grey' and adding a class of 'bulletPoint' to each list
var sectionLists = document.getElementsByTagName(`li`);
for (var i = 0; i < sectionLists.length; i++) {
    sectionLists[i].style.color = `grey`;
    sectionLists[i].classList.add(`bulletPoint`);
}

// Setting the alignment of the footer to be in the center of the page
var footerContainer = document.querySelector(`footer`);
footerContainer.style.textAlign = `center`;

// Creating a new h1 tag in the footer, adding text into the h1 tag, changing the font size to 4rem
var closingStatement = document.createElement(`h1`);
footerContainer.appendChild(closingStatement);
closingStatement.innerText = `Hope you enjoyed your visit!`;
closingStatement.style.fontSize = `4rem`;

// Changing the colour, font weight, background colour and text content of paragraphs only with the class of 'paragraph' in the header and 'Evolution' section
var paragraphs = document.getElementsByClassName(`paragraph`);
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = `white`;
    paragraphs[i].style.fontWeight = `bold`;
    paragraphs[i].style.background = `grey`;
    paragraphs[i].innerText = `All About Bears`;
}

// Creating a p tag, adding text into the p tag then adding the p tag to the 'Evolution' section
var evolutionPTag = document.createElement(`p`);
var evolutionText = document.createTextNode(`The earliest members of Ursidae belong to the extinct subfamily Amphicynodontinae, including Parictis (late Eocene to early middle Miocene, 38–18 Mya) and the slightly younger Allocyon (early Oligocene, 34–30 Mya), both from North America. These animals looked very different from today's bears, being small and raccoon-like in overall appearance, with diets perhaps more similar to that of a badger. Parictis does not appear in Eurasia and Africa until the Miocene.`);
evolutionPTag.appendChild(evolutionText);
var evolutionSection = document.getElementById(`evolutionContent`);
evolutionSection.appendChild(evolutionPTag);

// Adding the class 'newPara' to the newly appended paragraph in the 'Evolution' Section, removing the class and then adding it back to the paragraph again
evolutionPTag.classList.add(`newPara`);
evolutionPTag.classList.toggle(`newPara`);
evolutionPTag.classList.toggle(`newPara`);

// Removing the paragraph in the header
var pageIntro = document.querySelector(`header`);
var introParagraph = document.getElementById(`headerPara`);
pageIntro.removeChild(introParagraph);

// Removing the class 'paragraph' from the p tag in the 'main' section
var welcomePara = document.querySelector(`body>main>p`);
welcomePara.classList.remove(`paragraph`);

// Adding a 'white' coloured background to each article on the page
var pageArticles = document.getElementsByClassName(`content`);
for (var i = 0; i < pageArticles.length; i++) {
    pageArticles[i].style.background = "white";
}