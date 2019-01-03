<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments are NOT Executed at all</h2>

<p id="demo1"></p>

<script>
var c;
c = 5;
// c = 6; I will not be executed
document.getElementById("demo1").innerHTML = c;
</script>

</body>
</html>
