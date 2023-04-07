document.getElementById("give_up").addEventListener("click", finish);
    document.getElementById("hint").addEventListener("click", next);

    let bank = "zyxwvutsrqponmlkjihgfedcba";

    function newLetter() {    

    var cur = document.getElementById("cur_letter").value;


        if(cur == bank.charAt(0)) {
            
            cur = "";
            
            
            document.getElementById("letters").innerHTML += bank.charAt(0) + " ";
            bank = bank.substring(1);
            }
    
    }

    function finish(){
        for(var i = 0; i < bank.length; i++){

            document.getElementById("letters").innerHTML += bank.charAt(i) + " ";
        }
    }
    
    function next(){
         document.getElementById("letters").innerHTML += bank.charAt(0) + " ";
         bank = bank.substring(1);

    }