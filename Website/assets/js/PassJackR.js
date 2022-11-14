//PassJackR Written by Colton Lemanski + Spencer Evenson

function Process() {
    var string1 = prompt("What password would you like to use?");
    var CurrentPassGuess;
    var Size;

    var attcounter = 0;
    var sum = 0;

    Size = string1.length;
    CurrentPassGuess = '0'.repeat(Size);

    const PassWordSplit = string1.split("");
    const GuessWordSplit = CurrentPassGuess.split("");

    for (i = 0; i < Size; i++)
    {
        while (GuessWordSplit[i] != PassWordSplit[i])
        {
            GuessWordSplit[i] = String.fromCharCode(GuessWordSplit[i].charCodeAt(0) + 1);
            attcounter++;
        }
        sum = sum + attcounter;
    }
    
    CurrentPassGuess = GuessWordSplit.join("");
    alert("Alright, your current password is " + CurrentPassGuess + "!");
    alert("It took the computer " + sum + " attempts to decipher each character of your password.")
    
    
    return;
}   
