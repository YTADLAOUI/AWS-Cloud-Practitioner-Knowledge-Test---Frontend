<?php
class Database{
  private static $local="localhost";
  private static $db_name = "quiz-aws";
  private static $user = "root";
  private static $pass = "";
  
  static function conx(){
    $con = new PDO("mysql:host=" . self::$local . ";dbname=" . self::$db_name, self::$user, self::$pass);
    if($con){
      // echo "hello";
      return $con;
    }else{
      die("conix faild");
    }
  }

  static  function getdata(){
    // $sql = "SELECT * FROM questions Q INNER JOIN answers A on q.id =A.question_id;";
    // $pre = self::conx()->prepare($sql);
    // $pre->execute();
    // $res = $pre->fetchAll();
    // return $res;
    $sql= "SELECT * FROM questions";
    $pre = self::conx()->prepare($sql);
    $pre->execute();
    $res = $pre->fetchAll(PDO::FETCH_ASSOC);
    $data = array();
    foreach($res as $row){
      $data[] = $row;
    }
    $sqla = "SELECT * FROM answers";
    $exe  = self::conx()->prepare($sqla);
    $resu=$exe->fetchAll(PDO::FETCH_ASSOC);
    $answer = array();
        foreach($resu as $rows){
      $answer[] = $rows;
        } 
        for ($i=0; $i <sizeof($answer) ; $i++) { 
          # code...
        }
        
  }
}
echo "<pre>";
var_dump(Database::getdata());
echo "</pre>";
?>