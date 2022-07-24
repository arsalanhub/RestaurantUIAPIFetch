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
  let preserveIdType = Id;
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
    Update.addEventListener("click", function () {
      fetch(`https://localhost:7157/api/Menu/${preserveIdType}`, {
        method: "PUT",
        body: JSON.stringify({
          id: preserveIdType,
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
    });
  } catch (error) {}
}
fun();
