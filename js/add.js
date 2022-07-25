async function fun() {
  try {
    let jsonURL = await fetch("./categories.json");
    let jsonObj = await jsonURL.json();
    let select = document.getElementById("Category");
    select.innerHTML += `<option value="none" selected disabled hidden>Select a Category</option>`;
    for (let i = 0; i < jsonObj.length; i++) {
      select.innerHTML += `<option name="${jsonObj[i]}">${jsonObj[i]}</option>`;
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
    fetch('https://localhost:7157/api/Menu/', {
        method: "POST",
        body: JSON.stringify({
          name: Name.value,
          price: Price.value,
          category: Category.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    window.location.replace("menu.html")
  })
}

fun();
