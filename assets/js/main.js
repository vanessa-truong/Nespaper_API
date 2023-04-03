console.log("work")

const inputText = document.querySelector('#key');
const inputLanguage = document.querySelector('#language')
const button = document.querySelector('form input[type="button"]');
const section = document.querySelector('section');

const search = () => {
    // console.log(inputKey);
    section.innerHTML = " ";
    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&language=${inputLanguage.value}&apiKey=6e39281522164f988a78c9e0a240302c`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.articles.forEach((elt) => {
                // console.log(elt)
                console.log(elt.title);
                console.log(elt.url);
                console.log(elt.description);
                section.innerHTML += `
                <div>
                    <h2>${elt.title}</h2>
                    <p>${elt.description}</p>
                    <p>${elt.content}</p>
                    <img src="${elt.urlToImage}" alt="random">
                    <a href="${elt.url}">${elt.url}</a>
                </div>
                `
            })
        });
}