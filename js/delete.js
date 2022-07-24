async function fun() {
  let Id = localStorage.getItem("id");
  let preserveIdType=Id;
  parseInt(Id);
  console.log(Id)
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    let Name=document.getElementById("Name")
    let Price=document.getElementById("Price")
    let Category=document.getElementById("Category")
    console.log(obj);
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].id == Id) 
      {
           Name.value=obj[i].name
           Price.value=obj[i].price
           Category.innerHTML = `<option selected disabled>${obj[i].category}</option>`
      }
    }
    let Delete=document.getElementById("delete")
    Delete.addEventListener("click", function() {
        fetch('https://localhost:7157/api/Menu/' + preserveIdType, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    })
  } catch (error) {
    console.log(error);
  }
}

fun()