async function fun()
{
    try {
        let jsonURL= await fetch('./categories.json');
        let jsonObj = await jsonURL.json()
        let select=document.getElementById("Category")
        select.innerHTML += `<option value="none" selected disabled hidden>Select a Category</option>`
        for(let i=0; i<jsonObj.length; i++)
        {
            select.innerHTML += `<option name="${jsonObj[i]}">${jsonObj[i]}</option>`
        }
    } catch(error) {
        console.log(error)
    }
    let Id = localStorage.getItem("id");
    parseInt(Id)
    console.log(Id);
    let url = "https://localhost:7157/api/Menu";
    try {
        let res = await fetch(url);
        let obj =  await res.json();
        for(let i=0; i<obj.length; i++)
        {//console.log(typeof obj[i].id)
            if(obj[i].id==Id)
            {
                let Name=document.getElementById("Name");
                let Price=document.getElementById("Price");
                let Category=document.getElementById("Category");
                Name.value = obj[i].name;
                Price.value = obj[i].price;
                Category.value = obj[i].category
            }
        }
    } catch(error) {

    }
}
fun();