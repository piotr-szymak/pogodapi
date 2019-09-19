<?php

        $sensor_id = "28-021311ab2faa";


function getConnection() {
    $dbhost="localhost";
    $dbuser="pi";
    $dbpass="raspberry";
    $dbname="pogoda";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
    }

function getWeather() {

    global $dbh;
        $sth = $dbh->prepare("SELECT * FROM temperatura ORDER BY id");
        $sth->execute();
        $todos = $sth->fetchAll();
	
	return $todos;
	//return $this->responBse->withJson($todos);
    };

        
    function setWeather($temp,$sensro_id) {

        global $dbh;
        $sth = $dbh->prepare("INSERT INTO temperatura (temp,sensor_id) values (:temp,:sensor_id)");
        $sth->bindParam(":temp", $temp);
	$sth->bindParam(":sensor_id", $sensor_id);

        $sth->execute();
	//exit;	
	return $temp;
	//return $this->responBse->withJson($todos);
    };


    function getTemp() {
        $temp = shell_exec('cat /sys/bus/w1/devices/28-021311ab2faa/w1_slave');
        return explode("t=",$temp)[1];
        
}

        


    $dbh=getConnection();

    $temp = getTemp();
    echo setWeather($temp,$sensor_id);

