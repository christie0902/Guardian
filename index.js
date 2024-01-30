const nav = document.querySelector("nav");
const articlesList = document.querySelector(".articles");
let category;
const loadData = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
  );
  const navLinks = await response.json();
  const data = navLinks.data;

  data.forEach((navLink) => {
    category = document.createElement("a");
    category.innerText = navLink;
    category.classList.add("linkName");
    category.addEventListener("click", () => {
      loadArticles(navLink);
    });

    nav.appendChild(category);
  });
};

const loadArticles = async (category) => {
  const response = await fetch(
    `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category.toLowerCase()}`
  );
  const articles = await response.json();
  //   const channel = articles.data.channel;
  const link = articles.data.link;
  const items = articles.data.channel.item;
  console.log(items);
  //   console.log(articles);
  displayArticles(items);
};

const displayArticles = (items) => {
  articlesList.innerHTML = "";

  const articlesUl = document.createElement("ul");

  items.forEach((item) => {
    const articleLi = document.createElement("div");
    articleLi.innerHTML = `<strong>Title:</strong> ${item.title} </br> <strong>Link:</strong>${item.link}</br> <strong>Description:</strong> ${item.description}`;
    articlesUl.appendChild(articleLi);
    articleLi.style.backgroundColor = "#edf4f4";
    articleLi.style.marginTop = "30px";
  });
  articlesList.appendChild(articlesUl);
};

loadData();

// {"status":"ok",
// "data": {"@attributes":{"version":"2.0"},
// "channel":{"title":"Science | The Guardian",
// "link":"https:\/\/www.theguardian.com\/science",
// "description":"Latest Science news, comment and analysis from the Guardian, the world's leading liberal voice",
// "language":"en-gb",
// "copyright":"Guardian News and Media Limited or its affiliated companies. All rights reserved. 2018",
// "pubDate":"Mon, 29 Jan 2018 11:55:14 GMT",
// "image":{"title":"The Guardian",
// "url":"https:\/\/assets.guim.co.uk\/images\/guardian-logo-rss.c45beb1bafa34b347ac333af2e6fe23f.png",
// "link":"https:\/\/www.theguardian.com"},
// "item":[{"title":"Oldest known human fossil outside Africa discovered in Israel","link":"https:\/\/www.theguardian.com\
