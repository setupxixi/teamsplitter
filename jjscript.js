var numOfMember = 1;
var numOfTeam = 1;

//initiate a new array
var memberList = [];


//the shuffle function
function shuffleArray(array) {
    for (var i = array.length - 1; i>0; i--) {
        var j = Math.floor(Math.random()*(i+1));
        var temp = array[i];
        array[i] =  array[j];
        array[j] = temp;
    }
}


document.onload = onDocLoad();

function onDocLoad() {
    console.log('Document loaded.');
    console.log('The initial number is ' + numOfMember + ' and the team is ' + numOfTeam);
}

function selectMember(m) {
    
    //if select the same one
    if (numOfMember == m.innerHTML) {
        
        //remove the selection
        m.classList.remove('selected');
        
        //clear the var
        numOfMember = 1;
        
        //log the status
        console.log('it is the same one! So it has been unselected and the number of member is ' + numOfMember);
        
        
    //if no previous selection is made    
    } else if (numOfMember == 1) {
        
        //assign the new value
        numOfMember = parseInt(m.innerHTML, 10);
        m.classList.add('selected');
        var theType = typeof(numOfMember);
        console.log("The new Number of member is " + numOfMember + ' and the type is ' + theType);
        
        
        
    //if select a different one    
    } else{
                
        //remove the selected class
        var lastOne = document.getElementById(numOfMember);
        lastOne.classList.remove('selected');
        console.log('the last one '+ numOfMember + " has been unselected.")
        
        //assign the new value
        numOfMember = parseInt(m.innerHTML,10);
        m.classList.add('selected');
        console.log("The updated Number of member is " + numOfMember);
    }
    
    
}

function selectTeam(t) {
    
    //if select the new one
    if (numOfTeam == 1) {
                
        //assign the value
        numOfTeam = parseInt(t.innerHTML,10);
                
        //hightlight the selection
        t.classList.add('selected');
        console.log('the new number of team is ' + numOfTeam);
        
    // if select the same one
    } else if (t.innerHTML == numOfTeam) {
        
        //now unselect it
        t.classList.remove('selected');
        
        //now remove the value
        numOfTeam = 1;
        //log it
        console.log('already selected this team number. now unselect and the number of team is back to ' + numOfTeam);
        
    // if select a different one
    } else {
                
        //remove the old selection
        var lastTeam = document.getElementById(numOfTeam+"t");
        lastTeam.classList.remove('selected');
        
        //make the new selection
        t.classList.add('selected');
        numOfTeam = parseInt(t.innerHTML,10);
        console.log('the updated team selection is '+ numOfTeam);
    }
}

function cleanHouse() {
    //delete the previous history
    
    var oldresult = document.getElementById('result');
    
    while (oldresult.hasChildNodes()) {
        oldresult.removeChild(oldresult.firstChild);
    }
   
    memberList = [];
    var error = document.getElementById('error')
    error.innerHTML =' ';
    console.log('house cleaned.');
    
}


function calculateCheck(numOfMember, numOfTeam) {
    
    //both selections are made  
    if (numOfMember == 1 || numOfTeam == 1) {
        console.log('the both choices of number and team must be selected');
        var error = document.getElementById('error');
        error.innerHTML = 'Both number of member and team must be selected.';
    
    //compared 2 numbers
    } else {
        
        if (numOfMember > numOfTeam) {
            
            console.log('both choices are made');
            console.log('number of member is greater than number of team. we are Good to go.');
            cleanHouse();
            calculate(numOfMember, numOfTeam);
            
        
        //execute the calculation
        } else {
        
            console.log('this is wrong. number of member ' + numOfMember + ' should be greater than number of team ' + numOfTeam);
            var error = document.getElementById('error');
            error.innerHTML = 'you do not need to use this tool, dude. Do the math.';
           
        }
    }
}


function calculate(numOfMember,numOfTeam) {
                

    

    //put the number in the array
    for (i=1; i<=numOfMember; i++) {
        memberList.push(i);
    }


    
    shuffleArray(memberList);
    console.log('and the list is ' + memberList);

    //the new work
    var teamSize = Math.floor(numOfMember/numOfTeam);
    var extraSize = numOfMember%numOfTeam; 
    var alreadyAssignedNumber = teamSize * numOfTeam;
    console.log('the team size is ' + teamSize + ' and we already arranged ' + alreadyAssignedNumber + ' and ' + extraSize + ' to go.');


    
    var i, j, temp;
    
    for (i=0; i<numOfTeam; i++) {
        
        //separate the normal ones without modulus
        temp = memberList.slice(i*teamSize, (i+1)*teamSize);
        console.log(temp);
        
        //add modulus to the list
        if (i<extraSize) {
            var modulus = memberList[alreadyAssignedNumber+i];
            console.log('and the modulus added this time is ' + modulus);
            temp.push(modulus);
            
        }
        
        
        //call the print
        printTeam(temp);
    }

    //print the li to the HTML
    function printTeam (team) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(team);
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
    }

    //now for the modulus
   
    /*
    //and put the modulus back to the list

    for (i=alreadyAssigned; i<numOfMember; i++) {
        extraNumbers = memberList[i]

        console.log('and the extra is' )
    }
    */

    //now re-organize them
    //as good as it may look, they're wrong
    /*
    var teamSize = Math.ceil(numOfMember/numOfTeam);
    console.log('the team size is ' + teamSize);

    //copy from online how to slice array
    var i, j, temp;
    for (i=0, j=numOfMember; i<j; i+=teamSize) {
        temp = memberList.slice(i, i+teamSize);
        console.log(temp);
        var node = document.createElement("li");
        //node.classList.add('resultItem');
        var textnode = document.createTextNode(temp);
        node.appendChild(textnode);
        document.getElementById('result').appendChild(node);
    }

    */

    //so what's real


    /*
    //this was my original way. but let's copy the internet for a moment.
    //pick a random number
    var suibian = Math.floor(Math.random()*numOfMember + 1);
    console.log(suibian);

    */
        
    
}

        