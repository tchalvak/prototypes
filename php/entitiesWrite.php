<?php

namespace noclash;

// Turn a string into an html page
function htmlize($html_content, $filename='out.html'){
	$fp = fopen($filename, 'w');
	fwrite($fp, '<html>');
	fwrite($fp, $html_content);
	fwrite($fp, '</html>');
	fclose($fp);
}

$entities = implode(get_html_translation_table(HTML_ENTITIES, ENT_QUOTES), "\t");

htmlize($entities, 'entities.html');

$chars = implode(get_html_translation_table(HTML_SPECIALCHARS, ENT_QUOTES), "\t");
htmlize($chars, 'special_chars.html');






?>