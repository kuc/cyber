//PassJackR Written by Colton Lemanski + Spencer Evenson
var dataBaseInput;

function Process1() {
    var string1 = prompt("Please enter your example password:");
    var CurrentPassGuess;
    var Size;

    var attcounter = 0;
    var sum = 0;

    Size = string1.length;
    CurrentPassGuess = '0'.repeat(Size);

    const PassWordSplit = string1.split("");
    const GuessWordSplit = CurrentPassGuess.split("");
    const d = Date.now();
    
    for (i = 0; i < Size; i++)
    {
        while (GuessWordSplit[i] != PassWordSplit[i])
        {
            GuessWordSplit[i] = String.fromCharCode(GuessWordSplit[i].charCodeAt(0) + 1);
            attcounter++;
        }
        sum = sum + attcounter;
    }
    const n = Date.now();

    CurrentPassGuess = GuessWordSplit.join("");
    alert("Your current password is " + CurrentPassGuess + "!");
    alert("It took the computer " + sum +" attempts with Brute Force to decipher your full password.");
    
    
    return;
}   

function Process2() {

    var ActualPass = prompt("Please enter your (example) password now");
    var CurrentPassGuess2;

    const PassWordSplit2 = dataBaseInput.split(",");
    var ArraySize = PassWordSplit2.length;

    var attcounter = 0;

    Size = ActualPass.length;
    CurrentPassGuess2 = '0'.repeat(Size);

    tBefore = Date.now();
    for (i = 0; i < ArraySize; i++)
    {
        if (PassWordSplit2[i].length == ActualPass.length)
        {
            if (PassWordSplit2[i] == ActualPass)
            {
                tNow = Date.now();
                CurrentPassGuess2 = PassWordSplit2[i];
                alert("Your current password is " + CurrentPassGuess2 + "!");
                alert("It took the computer " + attcounter +" attempts using a Dictionary Attack to guess your full password.");
            }
            else
            {
                attcounter++;
            }
        }
        else
        {
                attcounter++;
        }
    }
    
    if (CurrentPassGuess2 != ActualPass)
    {
        alert("Unable to locate actual password!");
    }
    return;
}