$(() => {
    $(".devourIt").on("click", (event) => {
        const id = $(this).data("id");
        const newBurger = $(this).data("newBurger");
        const newBurgerState = {
            devour: newDevour    
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }) .then(
            () => {
                console.log("changed burger to", newBurger);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            name: $("#bu").val().trim(),
            devour: $("[name=devour]:checked").val(trim())
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

    $(".delete-burger").on("click", (event) => {
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