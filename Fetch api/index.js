//GET EXTERNAL API
document.getElementById('button3').addEventListener('click',getExternal);
function getExternal(){
fetch('https://www.justcode.com/dataservice/api/paymentMethod/list')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        let output = ""
          data.forEach(function(customer){

                    output += `
                    <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Modified On : ${customer.modifiedOn}</li>
                    <li>Year Of Origin : ${customer.yearOfOrigin}</li>
                    <li>method Name : ${customer.methodName}</li>
                    <li>medium : ${customer.medium}</li>
          
                    </ul> <hr>`

          })
          document.getElementById('customer').innerHTML = output

    })
    .catch(err => {
        document.getElementById('customer').innerHTML = err.message

    })
    
};
