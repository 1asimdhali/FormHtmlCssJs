var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    

    var fName = event.target.fName.value;
    var lName = event.target.lName.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var country = event.target.country.value;
    var address = event.target.address.value;

    var info = {
        fName,
        lName,
        email,
        password,
        country,
        address
    }
    console.log(info)
});

// (event - can be any name (in most video used as e), (event.preventDefault is used to stop come go of data, after doing this data will be print successfully )) When we need value from #form or #input tag then we will write .value and for others we will use .innertext

// maybe written as it
// var info = {
//     fName : fName,
//     lName : lName,
//     email : email,
//     password : password,
//     city : country, (maybe change object name)
//     address : address
// }