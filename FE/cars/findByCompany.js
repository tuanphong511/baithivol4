
function findByCompany() {
    axios.get(`http://localhost:3000/car?carCompany=audio`).then(res => {
        let str ="<table class=\"table\">"
        str += `<button onclick="loadHome()">Home</button>`

        let data = res.data
        data.map(item => {
             str += `<tbody>
    <tr>
      <th scope="row"> ${item.name}</th>
      <td> ${item.price}</td>
      <td>${item.carCompany}</td>
      <td>${item.detail}</td>
    </tr>
   
  </tbody>
 `
        })
        str += `</table>`
        document.getElementById('display').innerHTML = str

    })
}