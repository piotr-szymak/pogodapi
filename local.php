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

function getWeather() {

    global $dbh;
        $sth = $dbh->prepare("SELECT * FROM temperatura ORDER BY id");
        $sth->execute();
        $todos = $sth->fetchAll();
	
	return $todos;
	//return $this->responBse->withJson($todos);
    };
    

//function pokazwykres() {
    $dbh=getConnection();
    $x = getWeather();
    print_r($x);
//}


