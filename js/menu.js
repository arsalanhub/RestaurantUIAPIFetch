async function fun() {
  let url = "https://localhost:7157/api/Menu";
  try {
    let res = await fetch(url);
    let obj = await res.json();
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
                     <a class="btn btn-info btn-sm" id="${obj[i].id}">Edit</a>
                     <a class="btn btn-danger btn-sm">Delete</a>
                  </div>
            </div>
         </div>`;
      // addMenu(obj[i].name, obj[i].price, obj[i].category, obj[i].id)
    }
    for (let i = 0; i < obj.length; i++) {
      let element=document.getElementById(obj[i].id)
      element.onclick= function() {
        window.location.replace("edit.html")
      }
    }
  } catch (error) {
    console.log(error);
  }
}

fun();