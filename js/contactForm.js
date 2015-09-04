$(function(){
            $("#contact").submit(function(event){
                var nom        = $("#nom").val();
                var sujet      = $("#objet").val();
                var email      = $("#mail").val();
                var message    = $("#mpBox").val();
                var dataString = nom + sujet + email + message;
                var msg_all    = "Merci de remplir tous les champs";
                var msg_alert  = "Merci de remplir ce champs";

                if (dataString  == "") {
                    $("#msg_all").html(msg_all);
                } else if (nom == "") {
                    $("#msg_nom").html(msg_alert);
                } else if (sujet == "") {
                    $("#msg_objet").html(msg_alert);
                } else if (email == "") {
                    $("#msg_mail").html(msg_alert);
                } else if (message == "") {
                    $("#msg_mpBox").html(msg_alert);
                } else {
                    $.ajax({
                        type : "POST",
                        url: $(this).attr("action"),
                        data: $(this).serialize(),
                        success : function() {
                            $("#validation").html("<p>Formulaire bien envoyé</p>");
                        },
                        error: function() {
                            $("#validation").html("<p>Erreur d'appel, le formulaire ne peut pas fonctionner</p>");
                        }
                    });
                }

                return false;
            });
        });