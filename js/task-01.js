const cateroriesList = document.querySelector("ul#categories");

const categories = cateroriesList.querySelectorAll("li.item");
console.log("Number of categories: ", categories.length);

const returnResult = [...categories].forEach((category) => {
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
