<!DOCTYPE html>
<html>
  <body>

<h1>JavaScript Comments are NOT Executed</h1>
<p id="demo1"></p>
<script>
var f;
f = 7;
// f = 9; I will not be executed
document.getElementById("demo2").innerHTML = f;
</script>
</body>
</html>
