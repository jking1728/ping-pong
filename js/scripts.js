// var inputnumber = prompt("enter a number");
        
// var numberset = [];
// for (var index = 1; index <= inputnumber; index += 1) {
//     numberset.push(index);
//     };
// alert(numberset);

// numberset.forEach(function(number) {
//     if (number % 3 && number % 5) {
//         ("ping pong").append("ul#output")
//     } else if (number % 3) {
//         ("ping").append("ul#output")
//     } else if (number % 5) {
//         ("pong").append("ul#output")
//     } else {
//         (number).append("ul#output")
//     }
// })


$(document).ready(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
        var inputnumber = parseInt($("input#usernumber").val())
        $("ul#output").empty("");
        

        var numberset = [];
        for (var index = 1; index <= inputnumber; index += 1) {
            numberset.push(index);
        };
        numberset.forEach(function(number) {
            if ((number % 3 === 0) && (number % 5 === 0)) {
                $("ul#output").append("<li>" + "ping pong" + "</li>")
            } else if (number % 3 === 0) {
                $("ul#output").append("<li>" + "ping" + "</li>")
            } else if (number % 5 === 0) {
                $("ul#output").append("<li>" + "pong" + "</li>")
            } else {
                $("ul#output").append("<li>" + number + "</li>")
            }
        });
        
    });
});

// number-set.forEach(function(number) {

// })