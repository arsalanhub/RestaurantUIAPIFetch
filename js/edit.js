async function fun()
{
    let Id = localStorage.getItem("id");
    parseInt(Id)
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