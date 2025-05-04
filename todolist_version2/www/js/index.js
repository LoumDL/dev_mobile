window.onload = function() {
    const addButton = document.getElementById("addButton");
    const resetButton = document.getElementById("resetButton");
    const taskField = document.getElementById("taskField");
    const tasklist = document.getElementById("tasklist");
    const tasktermine = document.getElementById("tasktermine");

    addButton.onclick = function() {
        if (taskField.value) {

            const newItem = document.createElement("li");
            newItem.innerHTML = taskField.value;
            $(newItem).on('swiperight', function() {
                newItem.classList.toggle("done");
            });

            $(newItem).on('swipeleft', function() {
                
                /* $(newItem).hide('slow',function() {
                    $newItem.remove();
                    //tasktermine.appendChild(newItem);
                   
                }
                )*/
               tasktermine.appendChild(newItem)
            });

            tasklist.appendChild(newItem);
            $(tasklist).listview("refresh");
            $(taskField).select();

            /* $(newItem).on('swipelet',function(){
                $(newItem).hide('slow',function(){
                    tasktermine.appendChild(newItem)
                })

            }); */
        }
    };

    resetButton.onclick = function() {
        tasklist.innerHTML = "";
        tasktermine.innerHTML="";
        taskField.value = "";
        $(taskField).focus();
    };
};
