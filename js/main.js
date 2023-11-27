//Navbar responsive
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown__menu");
const businessArticlesWrapper = document.querySelector(
  ".articles",
  ".business"
);
const searchInput = document.querySelector(".search-input ", ".business-input");
const newsAPI =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-10-27&sortBy=publishedAt&apiKey=934cb19591e64940909373a050f8d182";

//Navbar responsive
toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

//Get data
async function getNews(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Search input
searchInput?.addEventListener("input", async () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const searchedData = await getNews(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=2023-10-27&sortBy=publishedAt&apiKey=934cb19591e64940909373a050f8d182`
  );
  console.log(searchedData);
  renderNews(searchedData.articles);
  console.log(searchValue);
});

//Render data
function renderNews(newsData) {
  // businessArticlesWrapper.innerHTML = "";
  newsData.slice(0, 4).forEach((news) => {
    if (news.name != "[Removed]" || news.content !== "[Removed]") {
      //  console.log(news?.description);

      const articleCard = document.createElement("div");
      articleCard.classList.add("article");

      const artcileIMg = document.createElement("img");
      artcileIMg.alt = news.title;
      if (news.urlToImage && news.urlToImage !== null) {
        artcileIMg.src = news.urlToImage;
      } else {
        artcileIMg.src = "./img/missing-image.jpg";
      }

      const articleContentBox = document.createElement("div");
      articleContentBox.classList.add("article__content");
      const articleSubtitle = document.createElement("h3");
      articleSubtitle.classList.add("article__content-subtitle");
      articleSubtitle.textContent = "Business";
      const articleTitle = document.createElement("h2");
      articleTitle.classList.add("article__content-title");
      articleTitle.textContent = news.title;
      const articleText = document.createElement("p");
      articleText.classList.add("article__content-text");
      articleText.textContent = news?.description;

      articleContentBox.appendChild(articleSubtitle);
      articleContentBox.appendChild(articleTitle);
      articleContentBox.appendChild(articleText);
      articleCard.appendChild(artcileIMg);
      articleCard.appendChild(articleContentBox);
      businessArticlesWrapper.appendChild(articleCard);
    }
  });
}

getNews(
  "https://newsapi.org/v2/everything?q=tesla&from=2023-10-27&sortBy=publishedAt&apiKey=934cb19591e64940909373a050f8d182"
).then((data) => renderNews(data.articles));

const formRegister = document.querySelector(".register__form");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordConfirm = document.querySelector(".confirm__password");
const usersWrapper = document.querySelector(".users");

const error = document.querySelector(".error");
const btnDelete = document.createElement('button');
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  formRegister.reset();
  createPost();
});


async function createPost() {
  const firstnameValue=firstname.value.trim()
  const lastnameValue = lastname.value.trim();
  const usernameValue = username.value.trim();
  const userID=new Date().getMilliseconds()



  const user = {
    firstname: firstnameValue,
    lastname: lastnameValue,
    username: usernameValue,
    userID:userID
  };

   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     headers: {
       "Content-type": "application/json ;   charset=UTF-8",
     },
     body:JSON.stringify(user)
   });

if(response.ok){
    const newPost=response.json();
    console.log(newPost);
    const userBox = document.createElement("div");
    userBox.classList.add(".user");

    const firstname=document.createElement('h2');
    firstname.textContent=newPost.firstname
    const lastname=document.createElement('h3');
    lastname.textContent = newPost.lastname;
    const username = document.createElement("h4");
    username.textContent = newPost.username;
   
    usersWrapper.appendChild(userBox)
     userBox.appendChild(firstname);
     userBox.appendChild(lastname);
     userBox.appendChild(username);
     userBox.appendChild(btnDelete);
   }
  
}
