<?php
// Tell PHP that we're using UTF-8 strings until the end of the script
mb_internal_encoding('UTF-8');
 
// Tell PHP that we'll be outputting UTF-8 to the browser
mb_http_output('UTF-8');
 
// Our UTF-8 test string
$string = 'Êl síla erin lû e-govaned vîn.';
 
// Transform the string in some way with a multibyte function
// Note how we cut the string at a non-Ascii character for demonstration purposes
$string = mb_substr($string, 0, 15);
 
// Connect to a database to store the transformed string
// See the PDO example in this document for more information
// Note the best database utf8mb4 charset being specified for the link!
$link = new PDO(
    'mysql:host=localhost;dbname=test;charset=utf8mb4',
    'kzqai',
    $passwz=null,
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false
    )
);
 
// Store our transformed string as UTF-8 in our database
// Your DB and tables are in the utf8mb4 character set and collation, right?
$handle = $link->prepare('insert into ElvishSentences (Id, Body, Priority) values (default, :body, :priority)');
$priority = 45;
$handle->bindParam(':body', $string);
$handle->bindParam(':priority', $priority, PDO::PARAM_INT); // Ensure an integer value
$handle->execute();
 
// Retrieve the string we just stored to prove it was stored correctly
$handle = $link->prepare('select * from ElvishSentences where Id = :id');
$id = 1;
$handle->bindParam(':id', $id, PDO::PARAM_INT);
$handle->execute();
 
// Store the result into an object that we'll output later in our HTML
// This object won't kill your memory because it fetches the data Just-In-Time row by row
$result = $handle->fetchAll(\PDO::FETCH_OBJ);

// A wrapper to allow you to escape to html effectively.
function your_html_escape($dirty){
    echo htmlspecialchars($dirty, ENT_QUOTES, 'UTF-8');
}

header('Content-Type: text/html; charset=UTF-8');
?><!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>UTF-8 test page</title>
    </head>
    <body>
        <?php
        foreach($result as $row){
            your_html_escape($row->Body);  // This should correctly output our transformed UTF-8 string to the browser
        }
        ?>
    </body>
</html>
