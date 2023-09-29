const subscriptionKey = '7Re4otYc8PWCE9_m2fVxg6HqFJ3dMZVyjnLw7uEsECA';
let searchCriteria = 'spring'
let page = 1;
const defaultUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${searchCriteria}&client_id=${subscriptionKey}`;
const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.search_button');
const search = document.querySelector('.search');

async function getImage(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
}

function showData(data) {
    const images = document.querySelector('.images');
    images.innerHTML = '';
    data.results.forEach(img => {
        const imgList = document.createElement('div');
        imgList.classList.add('image');
        const imageItem = document.createElement('img');
        imageItem.src = img.urls.regular;
        imageItem.alt = img.alt_description;
        imgList.appendChild(imageItem);
        images.appendChild(imgList);
    });
}

searchInput.addEventListener('keypress', (e) => {
    console.log('keypress');
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector(".search_button").click();
    }
});


document.querySelector(".search_button").addEventListener('click', e => {
    e.preventDefault();
    console.log('search_button');
    console.log(search.value);
    if (search.value) {
        const searchUrl = createUrl(search.value);
        getImage(searchUrl);
    }
});


function createUrl(searchCriteria) {
    return `https://api.unsplash.com/search/photos?page=1&query=${searchCriteria}&client_id=${subscriptionKey}`;
}

getImage(defaultUrl);
