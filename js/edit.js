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
  let Id = localStorage.getItem("id");
  parseInt(Id);
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    let Name = document.getElementById("Name");
    let Price = document.getElementById("Price");
    let Category = document.getElementById("Category");
    for (let i = 0; i < obj.length; i++) {
      //console.log(typeof obj[i].id)
      if (obj[i].id == Id) {
        Name.value = obj[i].name;
        Price.value = obj[i].price;
        Category.value = obj[i].category;
      }
    }
    let Update = document.getElementById("update");
    Update.addEventListener("click", async function () {
      // let Name = document.getElementById("Name");
      // let Price = document.getElementById("Price");
      // let Category = document.getElementById("Category");
      console.log(Name.value, Price.value, Category.value)
      fetch(`https://localhost:7157/api/Menu/${Id}`, {
        method: "PUT",
        body : JSON.stringify({
          id: Id,
          name: Name.value,
          price: Price.value,
          category: Category.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => window.location.replace("menu.html"))
      .then((json) => console.log(json));
    });
  } catch (error) {}
}
fun();
