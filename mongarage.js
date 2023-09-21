document.addEventListener("DOMContentLoaded", function() {
    var avisForm = document.getElementById("avisForm");

    avisForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        var nomPrenom = document.getElementById("nomPrenom").value;
        var telEmail = document.getElementById("telEmail").value;
        var commentaire = document.getElementById("commentaire").value;
        var evaluation = document.getElementById("evaluation").value;

        // Faites quelque chose avec les données, par exemple, les afficher dans la console
        console.log("Nom et Prénom: " + nomPrenom);
        console.log("Téléphone ou E-mail: " + telEmail);
        console.log("Commentaire: " + commentaire);
        console.log("Évaluation: " + evaluation);

        // Vous pouvez également envoyer ces données à un serveur ici
    });
});

