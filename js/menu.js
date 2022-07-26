async function deleteAll() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    for (let i = 0; i < obj.length; i++) 
    {
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

async function fun() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
    console.log(url);
    console.log(obj);
    var row = document.getElementById("row");
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
  } catch (error) {
    console.log(error);
  }
}

fun();
