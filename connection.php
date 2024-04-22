<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action = "wysylanie.php" method = "POST" onsubmit = "return validation()">
        <label for="a">Odbiorca:</label><input type="text" name="a" id="a">
        <label for="b">Temat:</label><input type="text" name="b" id="b">
        <label for="c">Wiadomosc:</label><input type="text" name="c" id="c">
        <input type="submit" name="p" value="wyslij">
    </form>
</body>
<script src="script.js"></script>
</html>