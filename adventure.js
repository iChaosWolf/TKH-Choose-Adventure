
choiceOne = prompt(`You walk into an abandoned mansion.
There are 2 doors in front of you.
Enter kitchen to go to the ~~Kitchen~~ or Dining Room to going into the ~~Dining Room~~`)



choiceOne=choiceOne.toLowerCase();

    
while(choiceOne !== "kitchen"  && choiceOne !== "dining room"){


    choiceOne = prompt("Incorrect entry try again enter kitchen or dining room")

if (choiceOne== "kitchen" || choiceOne == "dining room"){ break;}


}





 if (choiceOne =="kitchen")
 {

    choiceThree = prompt(`The kitchen is empty with a few dishes scattered on the countertop. 
     
    You take a step towards the sink. You hear a loud crash coming from the backyard and a scream also comes from the basement
     
    Enter the Basement to enter the ~~Basement~~ or Enter the backyard to go into the ~~Backyard~~`)


     choiceThree=choiceThree.toLowerCase()

     while(choiceThree !=="basement"  && choiceThree !=="backyard"){


        choiceThree = prompt("Incorrect entry try again enter kitchen or dining room")
    
    if (choiceThree== "basement" || choiceThree == "backyard"){ break;}
    
     }



     


    if(choiceThree=="basement"){

    choiceFive= prompt(`You walk into the basement and notice some old records and some stacked boxes. 
    
    As you make your way around the boxes you notice two figures in the shadow
    
    enter light switch to ~~press the light switch~~ or run to ~~leave the mansion~~`)




    choiceFive= choiceFive.toLowerCase()



    while(choiceFive !=="light switch"  && choiceFive !=="run"){


        choiceFive = prompt("Incorrect entry try again enter light switch or run")
    
    if (choiceFive== "light switch" || choiceFive == "run"){ break;}
    
     }





    if(choiceFive=="light switch"){


        alert(`Ending 1: The lights come on and you see a person passed out on the floor. 
        
        The other one is standing over them in a ghoulish costume. 
        
        The one in the costume goes "I guess he was a scaredy cat after all."`)
    }

    if(choiceFive=="run"){


        alert(`Ending 2: You decide to leave the mansion and never come back but you still wonder what was going on in the basement`)
    }



}



    

    else if(choiceThree=="backyard"){

        choiceSeven = prompt(`You walk into the backyard and see a dog a few feet away staring at you to see what you would do
        enter Feed to ~~feed the dog~~ or yell to ~~try and get the dog to leave~~`)



        choiceSeven= choiceSeven.toLowerCase()



        while(choiceSeven !=="feed"  && choiceSeven !=="yell"){
    
    
            choiceSeven = prompt("Incorrect entry try again enter light switch or run")
        
        if (choiceSeven== "feed" || choiceSeven == "yell"){ break;}
        
         }
    




        
    if(choiceSeven=="feed"){


        alert(`Ending 3: You've made friends with the dog`)
    }

    if(choiceSeven=="yell"){


        alert(`Ending 4: The dog bit your hand`)
    }




        
    }





}



else if(choiceOne=="dining room"){


    choiceTwo = prompt(`The Dining Room is a mess there are broken plates with leftover food everywhere. 
    
    On the walls you can see hand prints in what looks like blood. 
    
    No, wait it's just cranberry sauce.
    
    enter living room to go to the ~~living room~~ or stairs to go to the ~~second floor~~`)




     choiceTwo=choiceTwo.toLowerCase()

     while(choiceTwo !=="living room"  && choiceTwo !=="stairs"){


        choiceTwo = prompt("Incorrect entry try again enter living room or stairs")
    
    if (choiceTwo== "living room" || choiceTwo == "stairs"){ break;}
    
     }



     


    if(choiceTwo=="living room"){

    choiceFour= prompt(`You walk into the living room and notice a large couch with a fuzzy blanket. you've been roaming this random mansion for a while and are tired
    
    enter sit to ~~sit on the couch and rest~~ or keep going to ~~continue exploring~~`)




    choiceFour= choiceFour.toLowerCase()



    while(choiceFour !=="sit"  && choiceFour !=="keep going"){


        choiceFour = prompt("Incorrect entry try again enter light switch or run")
    
    if (choiceFour== "sit" || choiceFour == "keep going"){ break;}
    
     }





    if(choiceFour=="sit"){


        alert(`Ending 5: You sit down on the couch, wrap yourself in the blanket, and get a good 4 hours of napping.`)
    }

    if(choiceFour=="keep going"){


        alert(`Ending 6: You decide to keep going only to rip over a miniature coffee table and knocking yourself out.`)
    }



}



    

    else if(choiceTwo=="stairs"){

        choiceSix = prompt(`You walk up to the second floor  it seems too empty to be a mansion but maybe the owners just didnt like decorating. 
        After walking for a while you see a balcony entrance to your left and a door entrance to your right.
        enter door to ~~see what on the other side~~ or balcony to ~~go to the balcony~~`)

        

        choiceSix= choiceSix.toLowerCase()



        while(choiceFour !=="door"  && choiceFour !=="balcony"){


            choiceFour = prompt("Incorrect entry try again enter door or balcony")
        
        if (choiceFour== "door" || choiceFour == "balcony"){ break;}
        
         }




    if(choiceSix=="door"){


        alert(`Ending 7: You open the door and enter a comically small closet. Why is it even here?`)
    }

    if(choiceSix=="balcony"){


        alert(`Ending 8: You step out to the balcony and see a perfect view of the town dump. Not the best view and certainly not the best smell.`)
    }




        
    }






























}

