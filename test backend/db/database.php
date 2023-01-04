<?php

class Database{
  protected static $local="localhost";
  protected static $db_name = "quiz-aws";
  protected static $user = "root";
  protected static $pass = "";
  
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
    // $sql = "SELECT * FROM questions";
    // $pre = self::conx()->prepare($sql);
    // $pre->execute();
    // $res = $pre->fetchAll(PDO::FETCH_ASSOC);
    // $qst = array();
    // foreach($res as $row){
    //   $qst[] = $row;
    // }
    $sqla = "SELECT * FROM answers";
    $exe  = self::conx()->prepare($sqla);
    $exe->execute();
    $resu = $exe->fetchAll(PDO::FETCH_ASSOC);
    $answer = array();
        foreach($resu as $rows){
      $answer[] = $rows;
         } 
        for ($i=0;$i<sizeof($answer);$i++) { 
          for($j=0;$j<sizeof($data);$j++){
              if($data[$j]['id']==$answer[$i]['question_id']){
                     $data[$j]["options"][]=$answer[$i]['answer'];
                    //  if($answer[$i]['correct'] == 1){
                    //   $data[$j]["correct"]=$answer[$i]['answer'];
                    // }
              }
          }
        }
    return $data;
  }
}

// echo Database::getdata();
  echo json_encode(Database::getdata());
// echo "</pre>";

?>