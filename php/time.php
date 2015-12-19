<?php

//$handle = fopen ("php://stdin","r");
//fscanf($handle,"%s",$full_time);

$time_expectations = [
	'07:05:45PM'=>'19:05:45',
	'12:40:22AM'=>'00:40:22',
	'12:40:22PM'=>'12:40:22',
	'10:40:22PM'=>'22:40:22',
	'12:00:00AM'=>'00:00:00'
	];

/**
 * Convert standard time to military time
**/
function timeify($original){
	$hour = substr($original, 0, 2);
	$mer = substr($original, -2, 2);
	$min_sec = substr($original, 2, -2);
	if($mer === 'PM'){
		$int_hour = (int) ltrim($hour, '0');
		if(1 < $int_hour && 12 > $int_hour){
			$hour = 12 + $int_hour;
		}
	} else {
		// 12 AM special case
		if('12' === (string)$hour){
			$hour = '00';
		}
	}
	return $hour.$min_sec;
}

foreach($time_expectations as $us => $mil){
	echo ($mil === timeify($us)? 'OK' : 'Mismatch on: '.$us.' to '.$mil);
}