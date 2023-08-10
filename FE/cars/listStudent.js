

function  load() {
    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': `Bearer ${token}`
    };
        axios.get(API_URL,headers).then((res) => {
            let str = '<table>';
            str += `<button onclick="ShowFromSave()">Add</button>`
            let data = res.data;
            data.map(item => {
                str += `<tr><h1>
             ${item.nameProduct},
             ${item.detail},
             ${item.image},
             ${item.price},
             ${item.quantity},
          
            <button id="del" onclick="xoa(${item.id})">Delete</button>
            <button id="Edit" onclick="showFromEdit(${item.id})">Edit</button>
            </tr></h1>`
            })
            str += '</table>'
            document.getElementById('display').innerHTML = str
        })

}
