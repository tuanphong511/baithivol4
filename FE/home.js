
function loadHome() {
    console.log(1)

    axios.get(API_URL).then((res) => {
        let str = '<table class="table">';
        let data = res.data
        str += "   <h3><button onclick=\"ShowFromSave()\">Them xe</button></h3>" +
            " <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    \n    </tr>\n  </thead> ";
       str += "<button onclick='findByCompany()'>Hien thi xe theo hang audio</button>"
        data.map(item => {
            str += `
 
  <tbody>
    <tr>
      <th scope="row"> ${item.name}</th>
      <td> ${item.price}</td>
      <td>${item.bikeCompany}</td>
      <td>${item.status}</td>
     <td><button type="button" class="btn btn-outline-primary" class="" onclick="xoaCar(${item.id})">Delete</button></td>
     <td><button type="button" class="btn btn-outline-primary" onclick="showFromEdit(${item.id})">Edit</button></td>
    </tr>
   
  </tbody>
 `
        })
        str += '</table>'
        document.getElementById('display').innerHTML = str
    })



}