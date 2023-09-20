<?php
include 'autoryzacja.php';
$conn=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)
or die("brak połączenia z bazą");
$show=mysqli_query($conn,"SELECT * FROM test_quiz;");
$arr=array();
while ($row = mysqli_fetch_assoc($show))
{
  $arr[]=$row;
} 
 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="questionQuiz"></div>
    <div id="optionQuiz">
    </div>
<script>
<?php
echo 'let Quiz='.json_encode($arr).';';
 ?>
</script>
<script src=quiz.js></script>
<script>
    BuildQuiz();
</script>
</body>
</html>
