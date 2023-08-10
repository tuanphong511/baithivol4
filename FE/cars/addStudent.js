function save(){
    let data = {
        name : document.getElementById("name").value,
        price : document.getElementById('price').value,
        carCompany : document.getElementById('carCompany').value,
        detail : document.getElementById('detail').value,
    }
    axios.post(API_URL,data).then(res => {
        axios.get(API_URL).then((res)=>{
            loadHome()
        })
    })
}
function ShowFromSave(){
            let str = `
        <input type="text" id="name">
        <input type="number" id="price" placeholder="number">
        <input type="text" id="carCompany">
        <input type="text" id="detail">
     
        <button onclick="save()">Save</button>`

    document.getElementById('display').innerHTML = str
}