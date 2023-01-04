<?php
//include 'db/database.php';

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
                     if($answer[$i]['correct'] == 1){
                      $data[$j]["correct"]=$answer[$i]['answer'];
                    }
              }
          }
        }
    return $data;
  }
}
$corr = array();
// $fals = array();
// $rep = array();
$score = 0;
$echec=0;
$data_sql = Database::getdata();
$q=$_REQUEST['q'];
$q=json_decode($q);

for ($i = 0; $i < sizeof($q);$i++){
  $question = $q[$i]->question_datas;
  $answer = $q[$i]->answerr;
  foreach($data_sql as $d){
     if($d['question']==$question){
         if($answer==$d['correct']){
            $score += 1;
          $corr['score'] = $score;
        
         }else{
          $echec += 1;
        
          if (($i+1) == sizeof($q)){
            $corr['echap'] = $echec;
          }
          $corr['expp'][] = $d["explication"];
 }
     }
  }
}
// var_dump($corr);
echo json_encode($corr);
// echo "</pre>";

?>