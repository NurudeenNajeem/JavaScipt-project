//GET LOCAL TEXT DATA
document.getElementById('button1').addEventListener('click',getText);
function getText(){
fetch('text.txt')
    .then(response => {
        return response.text()
    })
    .then(data => {
        console.log(data)
        document.getElementById('output').innerHTML = data

    })
    .catch(err => console.log(err))
    
};


// GET LOCAL JSON DATA
document.getElementById('button2').addEventListener('click',getJson);
function getJson(){
fetch('post.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        let output = ''
        data.forEach(post => {

            output += `<li> ${post.title}</li>`
        });
        document.getElementById('output').innerHTML = output;

    })
    .catch(err => console.log(err))
    
};

//GET EXTERNAL API
document.getElementById('button3').addEventListener('click',getExternal);
function getExternal(){
fetch('https://api.github.com/users')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        let output = ''
        data.forEach(user => {

            output += `<li> ${user.login} ${user.id}</li>`
        });
        document.getElementById('output').innerHTML = output;

    })
    .catch(err => console.log(err))
    
};

