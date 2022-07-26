async function fun() {
  try {
    let fetchURL = await fetch("https://localhost:7157/api/Category");
    let obj = await fetchURL.json();
    console.log(obj);
    let ele = document.getElementById("tableBody");
    for (let i = 0; i < obj.length; i++) {
      ele.innerHTML += `<tr>
                                 <td>${obj[i].id}.</td>
                                 <td id="N${obj[i].id}">${obj[i].name}</td>
                                 <td><button class="btn btn-success btn-sm" id="S${obj[i].id}" disabled>Save</button></td>
                                 <td><button class="btn btn-info btn-sm" id="E${obj[i].id}">Edit</button></td>
                                 <td><button class="btn btn-danger btn-sm" id="D${obj[i].id}">Delete</button></td>
                              <tr/>`;
    }
    for (let i = 0; i < obj.length; i++) {
      let ele = document.getElementById(`E${obj[i].id}`);
      let Name = document.getElementById(`N${obj[i].id}`);
      let saveBtn = document.getElementById(`S${obj[i].id}`);
      ele.addEventListener("click", function () {
        Name.innerHTML = `<input type="text" placeholder="Update category here!!" id="text-${obj[i].id}"/>`;
        saveBtn.disabled = false;
      });
      saveBtn.addEventListener("click", function () {
        saveBtn.disabled = true;
        let updateText = document.getElementById(`text-${obj[i].id}`);
        fetch(`https://localhost:7157/api/Category/${obj[i].id}`, {
          method: "PUT",
          body: JSON.stringify({
            id: obj[i].id,
            name: updateText.value,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => window.location.replace("index.html"))
          .then((json) => console.log(json));
      });
    }
  } catch (error) {
    console.log(error);
  }
}

fun();
