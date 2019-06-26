var inputnumber = prompt("enter a number");
        
var numberset = [];
for (var index = 1; index <= inputnumber; index += 1) {
    numberset.push(index);
    };
alert(numberset);

numberset.forEach(function(number) {
    if (number % 3 && number % 5) {
        ("ping pong").append("ul#output")
    } else if (number % 3) {
        ("ping").append("ul#output")
    } else if (number % 5) {
        ("pong").append("ul#output")
    } else {
        (number).append("ul#output")
    }
})


// $(document).ready(function() {
//     $("form#input").submit(function(event) {
//         event.preventDefault();
//         var inputnumber = parseInt($(#usernumber).val())
        

//         var numberset = [];
//         for (var index = 0; index <= inputnumber; index += 1) {
//             numberset.push(index);
//         };
//         alert(numberset);
//     });
// });

// number-set.forEach(function(number) {

// })