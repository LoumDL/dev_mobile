window.onload = function() {
    const addButton = document.getElementById("addButton");
    const resetButton = document.getElementById("resetButton");
    const taskField = document.getElementById("taskField");
    const tasklist = document.getElementById("tasklist");

    addButton.onclick = function() {
        if (taskField.value) {

            const newItem = document.createElement("li");
            newItem.innerHTML = taskField.value;
            $(newItem).on('swiperight', function() {
                newItem.classList.toggle("done");
            });
            $(newItem).on('swipeleft', function() {
                $(newItem).hide('slow',function() {
                    $newItem.remove();
                }
                );
            });

            tasklist.appendChild(newItem);
            $(tasklist).listview("refresh");
            $(taskField).select();
        }
    };

    resetButton.onclick = function() {
        tasklist.innerHTML = "";
        taskField.value = "";
        $(taskField).focus();
    };
};
