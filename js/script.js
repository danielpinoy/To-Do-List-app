function newItem() {
    let inputValue = $("#input").val();
    if (inputValue !== "") {
        let listItem = $(`<li>${inputValue}</li>`);

        // Close Button Creation
        let closeButton = $("<button>&times;</button>");
        closeButton.addClass("exit");

        // Close Button Activate
        closeButton.on("click", function () {
            listItem.remove();
        });

        // double click item to get cross
        listItem.on("dblclick", function () {
            listItem.toggleClass("crossed");
        });

        listItem.append(closeButton);
        $("#list").append(listItem);

        //reset input field
        $("#input").val("");
    } else {
        alert("Enter Something to Add into the List	");
    }
}

// Enter Button
$("#input").on("keypress", function (event) {
    if (event.which === 13) {
        newItem();
        event.preventDefault();
    }
});

// drags list
$("#list").sortable();
// text doesn't select text inside list
$("#list").disableSelection();
