<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php

    // CONDITIONS NOM
    if ( (isset($_POST["nom"])) && (strlen(trim($_POST["nom"])) > 0) ) {
        $nom = stripslashes(strip_tags($_POST["nom"]));
    } else {
        echo "Merci d'écrire un nom <br />";
        $nom = "";
    }

    // CONDITIONS SUJET
    if ( (isset($_POST["objet"])) && (strlen(trim($_POST["objet"])) > 0) ) {
        $sujet = stripslashes(strip_tags($_POST["objet"]));
    } else {
        echo "Merci d'écrire un objet <br />";
        $sujet = "";
    }

    // CONDITIONS EMAIL
     if ( (isset($_POST["mail"])) && (strlen(trim($_POST["mail"])) > 0) ) {
         $email = stripslashes(strip_tags($_POST["mail"]));
     } elseif (empty($_POST["mail"])) {
         echo "Merci d'écrire une adresse email <br />";
         $email = "";
     } else {
         echo "Email invalide :(<br />";
         $email = "";
     }

    // CONDITIONS MESSAGE
    if ( (isset($_POST["mpBox"])) && (strlen(trim($_POST["mpBox"])) > 0) ) {
        $message = stripslashes(strip_tags($_POST["mpBox"]));
    } else {
        echo "Merci d'écrire un message<br />";
        $message = "";
    }

    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé

    // PREPARATION DES DONNEES
    $ip           = $_SERVER["REMOTE_ADDR"];
    $hostname     = gethostbyaddr($_SERVER["REMOTE_ADDR"]);
    $destinataire = "m.durbet@gmail.com";
    $objet        = "[Site Web] " . $sujet;
    $contenu      = "Nom de l'expéditeur : " . $nom . "\r\n";
    $contenu     .= $message . "\r\n\n";
    $contenu     .= "Adresse IP de l'expéditeur : " . $ip . "\r\n";
    $contenu     .= "DLSAM : " . $hostname;

    $headers  = "From: " . $email . " \r\n"; // ici l'expediteur du mail
    $headers .= "Content-Type: text/plain; charset=\"ISO-8859-1\"; DelSp=\"Yes\"; format=flowed /r/n";
    $headers .= "Content-Disposition: inline \r\n";
    $headers .= "Content-Transfer-Encoding: 7bit \r\n";
    $headers .= "MIME-Version: 1.0";

    // SI LES CHAMPS SONT MAL REMPLIS
    if ( (empty($nom)) && (empty($sujet)) && (empty($email)) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (empty($message)) ) {
        echo 'echec :( <br /><a href="contact.html">Retour au formulaire</a>';
    } else {
        // ENCAPSULATION DES DONNEES 
        mail($destinataire, $objet, utf8_decode($contenu), $headers);
        echo 'Formulaire envoyé';
    }

    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
?>