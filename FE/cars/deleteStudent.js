
function xoaCar(id) {
    axios.delete(`${API_URL}/${id}`).then(res =>{
        axios.get(API_URL).then((res)=>{
            loadHome()
        })
    })
}