<?php
function getConnection() {
    $dbhost="localhost";
    $dbuser="pi";
    $dbpass="raspberry";
    $dbname="pogoda";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
    }

    /*function getTemp() {

        global $dbh;
        $sth = $dbh->prepare("SELECT * FROM temperatura ORDER BY id");
        $sth->execute();
        $todos = $sth->fetchAll(PDO::FETCH_ASSOC);


        foreach($todos as $row) {

        printf("{$row['id']} {$row['temp']} {$row['data']} {$row['hour']} {$row['sensor_id']}\n");
        }
	
	    return $todos;
	//return $this->responBse->withJson($todos);
    };*/

    function getWeather() {

    global $dbh;
        $sth = $dbh->prepare("SELECT * FROM temperatura ORDER BY id");
        $sth->execute();
        $todos = $sth->fetchAll();
	
	return $todos;
	//return $this->responBse->withJson($todos);
    };

    //echo getTemp();