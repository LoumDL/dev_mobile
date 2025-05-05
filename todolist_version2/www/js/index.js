window.onload = function() {
    const addButton = document.getElementById("addButton");
    const resetButton = document.getElementById("resetButton");
    const taskField = document.getElementById("taskField");
    const tasklist = document.getElementById("tasklist");
    const tasktermine = document.getElementById("tasktermine");

    // Ajouter une nouvelle tâche
    addButton.onclick = function() {
        if (taskField.value) {
            const newItem = document.createElement("li");
            newItem.innerHTML = taskField.value;

            // Swipe right sur les tâches en cours pour les déplacer vers terminées
            $(newItem).on('swiperight', function() {
                // Si la tâche est dans la liste des tâches en cours
                if (newItem.parentNode === tasklist) {
                    tasktermine.appendChild(newItem); // Déplace la tâche vers terminées
                }
                // Si la tâche est dans la liste des tâches terminées
                else if (newItem.parentNode === tasktermine) {
                    tasklist.appendChild(newItem); // Déplace la tâche vers en cours
                }
            });

            // Swipe left sur les tâches en cours pour les supprimer
            $(newItem).on('swipeleft', function() {
                // Si la tâche est dans la liste des tâches en cours
                if (newItem.parentNode === tasklist) {
                    newItem.remove(); // Supprime la tâche de la liste en cours
                }
                // Si la tâche est dans la liste des tâches terminées
                else if (newItem.parentNode === tasktermine) {
                    newItem.remove(); // Supprime la tâche de la liste terminée
                }
            });

            // Ajoute la nouvelle tâche dans la liste des tâches en cours
            tasklist.appendChild(newItem);
            $(tasklist).listview("refresh");
            $(taskField).select();
        }
    };

    // Réinitialiser la liste des tâches
    resetButton.onclick = function() {
        tasklist.innerHTML = "";
        tasktermine.innerHTML = "";
        taskField.value = "";
        $(taskField).focus();
    };
};