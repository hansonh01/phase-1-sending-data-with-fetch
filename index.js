// Add your code here
function submitData(){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com'
        })
    })
    .then(resp=>resp.json())
    .then(data=>{
        const newId = data.id
        const newIdElement = document.createElement('p')
        newIdElement.setAttribute('id',`${newId}`)
        document.body.appendChild(newIdElement)
    })
    .catch(error=>{
        const errorMessage = 'Unauthorized Access'
        const errorElement = document.createElement('p')
        errorElement.textContent = errorMessage
        document.body.appendChild(errorElement)
    })
}