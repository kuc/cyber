<!DOCTYPE html>
<html lang="en">
<head>			
    <div>
        <!-- <input type="hidden" name="newData" id="newData" value="newAdventure"> -->
        <?php
         $myfile = fopen("/home/lemacc/public_html/cs225Research/Test.txt", "r") or die("Unable to open file!");

         $theData = fread($myfile, filesize("Test.txt"));

         fclose($myfile);
        ?>
		<script type="text/javascript">var dataBaseInput = "<?= $theData ?>";</script>

    </div>
    <script type = "text/javascript" src="PassJackR.js"></script>
</head>

<body>
    <p>
		'Brute Force Example:'
		<input type = "button" onclick = "Process1()">
	</p>
    <p>
        'Dictionary Attack Example:'
        <input type = "button" onclick = "Process2()">
     </p>
</body>

