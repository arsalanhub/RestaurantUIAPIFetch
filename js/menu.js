let global_obj = [];
async function deleteAll() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    for (let i = 0; i < obj.length; i++) {
      await fetch(`https://localhost:7157/api/Menu/${obj[i].id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/josn; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  } catch (error) {
    console.log(error);
  }
}

async function filterFun() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    let ele = document.getElementById("Category").value;
    if (ele != null) {
      let new_obj = obj.filter(function (el) {
        return el.category == ele;
      });
      show(new_obj);
    }
  } catch (error) {
    console.log(error);
  }
}
function sortLowtoHigh() {
  global_obj.sort(function (a, b) {
    return a.price - b.price;
  });
  show(global_obj);
}
function show(obj) {
  var row = document.getElementById("row");
  row.innerHTML = "";
  for (let i = 0; i < obj.length; i++) {
    row.innerHTML += `<div class="col-4">
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
             <div class="card-header" id="name">${obj[i].name}</div>
                <div class="card-body">
                   <h6 class="card-subtitle">Price: ₹${obj[i].price}</h6>
                   <p class="card-text">
                       Category: <span class="badge bg-secondary">${obj[i].category}</span>
                   </p>
                   <a class="btn btn-info btn-sm" id="E-${obj[i].id}">Edit</a>
                   <a class="btn btn-danger btn-sm" id="D-${obj[i].id}">Delete</a>
                </div>
          </div>
       </div>`;
  }
  for (let i = 0; i < obj.length; i++) {
    let element = document.getElementById(`E-${obj[i].id}`);
    element.onclick = function () {
      localStorage.setItem("id", obj[i].id);
      window.location.replace("edit.html");
    };
  }
  for (let i = 0; i < obj.length; i++) {
    let element = document.getElementById(`D-${obj[i].id}`);
    element.onclick = function () {
      localStorage.setItem("id", obj[i].id);
      window.location.replace("delete.html");
    };
  }
  global_obj = obj;
}
async function fetchCategory() {
  try {
    let jsonURL = await fetch("./categories.json");
    let jsonObj = await jsonURL.json();
    let select = document.getElementById("Category");
    select.innerHTML = "";
    select.innerHTML += `<option value="none" selected disabled hidden>Select a Category</option>`;
    for (let i = 0; i < jsonObj.length; i++) {
      select.innerHTML += `<option name="${jsonObj[i]}">${jsonObj[i]}</option>`;
    }
  } catch (error) {
    console.log(error);
  }
}
async function fetchURL() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    show(obj);
  } catch (error) {
    console.log(error);
  }
}
async function fun() {
  fetchCategory();
  fetchURL();
}

fun();
