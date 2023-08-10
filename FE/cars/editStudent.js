function showFromEdit(id) {
    console.log("da o day")
    axios.get(`${API_URL}/${id}`).then(res => {
        let data = res.data[0];
        console.log(data)

        document.getElementById('idEdit').value = data.id;
        document.getElementById('nameEdit').value = data.name;
        document.getElementById('priceEdit').value = data.price;
        document.getElementById('carCompanyEdit').value = data.carCompany;
        document.getElementById('detail').value = data.detail;
    });


    let str = `
         <h1>Edit</h1>
         
      <div class="mx-auto card p-4 my-4 w-75 shadow-lg rounded">
         <h2 class="text-center">Add Transaction</h2>
         <form>
            <div class="form-group">
               <input type="hidden" class="form-control" id="idEdit" aria-describedby="emailHelp" placeholder="Enter ID">
            </div>
            <div class="form-group">
               <label for="">Name</label>
               <input type="text" class="form-control" id="nameEdit" placeholder="Name">
            </div>
            <div class="form-group">
               <label for="">Price</label>
               <input type="text" class="form-control" id="priceEdit" placeholder="Amount">
            </div>
            <div class="form-group">
               <label for="">Date</label>
               <input type="date" class="form-control" id="carCompanyEdit" placeholder="Date">
            </div>
            <div class="form-group">
               <label for="">Type</label>
               <input type="text" class="form-control" id="detail" placeholder="Type">
            </div>
          
           <div class="d-flex justify-content-start">
               <button type="button" onclick="SubmitEdit()" class="btn btn-primary mt-4 mr-2">Xác nhận</button>
               <button type="button" class="btn btn-secondary mt-4">Thoát</button>
            </div>
         </form>
      </div>

   
`

    document.getElementById('display').innerHTML = str

}

function SubmitEdit() {

    let data = {
        id : document.getElementById("idEdit").value,
        name : document.getElementById("nameEdit").value,
        price : document.getElementById('priceEdit').value,
        carCompany : document.getElementById('carCompanyEdit').value,
        detail : document.getElementById('detail').value,
    }
    console.log(data)

    axios.put(`${API_URL}/${data.id}`,data).then(res=>{
        axios.get(API_URL).then((res)=>{
            loadHome()
        })
    })
}