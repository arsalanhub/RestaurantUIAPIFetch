async function fun() {
  try {
    let jsonURL = await fetch("https://localhost:7157/api/Category");
    let jsonObj = await jsonURL.json();
    let select = document.getElementById("Category");
    select.innerHTML += `<option value="none" selected disabled hidden>Select a Category</option>`;
    for (let i = 0; i < jsonObj.length; i++) {
      select.innerHTML += `<option name="${jsonObj[i].name}">${jsonObj[i].name}</option>`;
    }
  } catch (error) {
    console.log(error);
  }
  let btn=document.getElementById("addMenuBtn")
  btn.addEventListener("click", function() {
    console.log("clicked")
    let Name=document.getElementById("Name")
    let Price=document.getElementById("Price")
    let Category=document.getElementById("Category")
    fetch('https://localhost:7157/api/Menu', {
        method: "POST",
        body: JSON.stringify({
          name: Name.value,
          price: Price.value,
          category: Category.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        },
      })
        .then((response) => window.location.replace("menu.html"))
        .then((json) => console.log(json));
  })
}

fun();
