<?php
    $a=$_POST["a"];
    $b=$_POST["b"];
    $c=$_POST["c"];
    mail("$a", "$b", "$c", "From: prezydent@gov.pl");
    echo "
    <script>window.alert('Wyslano');
    window.location='index.php';
    </script>
    ";
?>