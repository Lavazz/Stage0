const subscriptionKey = '7Re4otYc8PWCE9_m2fVxg6HqFJ3dMZVyjnLw7uEsECA';
let inputData = 'spring'
let page=1;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${subscriptionKey}`;

async function getDefaultImage() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
  }

 function showData(data){
const images = document.querySelector('.images');
images.innerHTML='';
data.results.forEach(img=>{
const imgList=document.createElement('div');
imgList.classList.add('image');
const imageItem = document.createElement('img');
    imageItem.src = img.urls.regular;
    imageItem.alt = img.alt_description;
    imgList.appendChild(imageItem);
    images.appendChild(imgList);
})
}

  getDefaultImage();
