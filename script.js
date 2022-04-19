function myFunction() {
    var x = document.getElementById("myText").value;
    var y = document.getElementById("Text").value;
    var z= Number(x) + Number(y);
    document.getElementById("demo").innerHTML = z ;
    const message = document.getElementById("demo");
    message.innerHTML = z ;
    var z = document.getElementById("demo").value;
    try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(y == "")  throw "is empty";
    if(isNaN(y)) throw "is not a number";
    y = Number(y);
    }
    catch(err) {
    message.innerHTML = "Input " + err;
      }
      finally {
        document.getElementById("demo").value = "";
      }
    }
//My name is Sumail(Shu zetao)This program is used to sum two numbers, if no number is entered, it will return an error.
//1.JavaScript can be used to validate these input data in HTML forms before the data is sent to the server.
//2.javascript can produce interactive effects.
//3.javascript can define variables at the same time assignment.