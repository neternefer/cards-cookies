<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$phone=isset($_POST['phone']) ? $_POST['phone'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";
if($name && $email && $phone && $message){
 $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
 $message_body="Contact form send from test website https://convulsant-provisio.000webhostapp.com/\n";
 $message_body.="Name: $name\n";
 $message_body.="Email address: $email\n";
 $message_body.="Phone number: $phone\n\n";
 $message_body.=$message;
 if(mail("ola.jurczyk00@gmail.com","Contact form",$message_body,$headers)){
 $json=array("status"=>1,"msg"=>"<p class='status_ok'>Thank you! Your request has been sent.</p>");
 }
 else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Error occured, please try again.</p>"); 
 }
}
else{
    $json=array("status"=>0,"msg"=>"<p class='status_err'>Please fill in all details before sending the form!</p>"); 
   }
   echo json_encode($json);
   exit;
   ?>