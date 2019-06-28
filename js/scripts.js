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
