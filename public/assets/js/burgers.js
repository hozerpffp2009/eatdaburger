$(function() {
    $(".devourIt").on("click", function (event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");
        const newDevourState = {
            devour: newDevour    
        };
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }) .then(
            function() {
                console.log("changed burger to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#bu").val().trim(),
            devour: $("[name=newBurger]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }) .then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }) .then(
            () => {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});