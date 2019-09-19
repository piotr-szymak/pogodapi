<?php 

$temp = shell_exec('cat /sys/bus/w1/devices/28-021311ab2faa/w1_slave');
echo explode("t=","<pre>$temp</pre>")[1]; 


?>
