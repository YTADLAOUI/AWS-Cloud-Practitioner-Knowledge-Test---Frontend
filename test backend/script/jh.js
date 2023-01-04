let qssttqq
xhr= new XMLHttpRequest();
xhr.open("GET","test%20backend/db/database.php?q="+qssttqq,false);

xhr.onreadystatechange()=function(){
  if(xhr.readyState==4 && xhr.status==200){
        qssttqq=JSON.parse(xhr.responseText);
  }
}
 xhr.send(null);