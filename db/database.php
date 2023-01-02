<?php
class Database{
  private static $local="localhost";
  private static $db_name = "quiz-aws";
  private static $user = "root";
  private static $pass = "";
  
  static function conx(){
    $con = new PDO("mysql:host=" . self::$local . ";dbname=" . self::$db_name, self::$user, self::$pass);
    if($con){
      echo "hello";
      return $con;
    }else{
      die("conix faild");
    }
  }
}
Database::conx();

?>