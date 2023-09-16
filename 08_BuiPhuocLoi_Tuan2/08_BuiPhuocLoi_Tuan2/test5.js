//var url = "https://jsonplaceholder.typicode.com/todos/1";
//var url = "http://localhost:8080/api/v1/users";
//data.firstname = "John";
var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
//data.lastname = "Snow";
var data = {};
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();

xhr.open("POST", url, true);

xhr.setRequestHeader('Content-type',
    'application/json; charset=utf-8');

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (xhr.readyState == 4 && xhr.status == "201") {

        console.table(users);

    } else {

        console.error(users);

    }

}
xhr.send(json);