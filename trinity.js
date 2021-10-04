function registerUser() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("gmail").value;
    var num = document.getElementById("phone").value;

    const data = {
        name: name,
        email: mail,
        phone: num,
    }
    let method = "POST";
    let url = "https://0cbf-2405-201-8011-c842-a0c7-c5b6-8afb-ec0a.ngrok.io/signup"
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Your data have been recieved succesfully.");
        }
    }


    // XML HTTPP REQUEST
    // URL :: "localhost:8080"
    // "POST"

}