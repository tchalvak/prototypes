<?php

$re = "/(?<!left )join/i"; 
$str = " select username, charname from accounts join characters on characters._account_id = account.account_id;\n    select text, date, themes.style from news join news_themes on news.news_id = news_themes._news_id join themes on news_themes._theme_id = themes.theme_id;\n\n    select price, name from items left join products on items.item_id = products._item_id limit 10;\n    select username, password_hash, last_login_date from users left join user_logins on users.user_id = user_logins._user_id where username = 'bob';"; 
 
var_dump(preg_match_all($re, $str, $matches));
