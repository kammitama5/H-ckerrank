var slaying = true;
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0;

while(slaying)
{   if (youHit === 1){ console.log("You hit the dragon!")
    totalDamage += damageThisRound;
    if (totalDamage >= 4){
        console.log("Player slew the dragon!")
        slaying = false;
        }
        else if (totalDamage <= 4){
            youHit = Math.floor(Math.random() * 2)
            }
    }

    else if (youHit === 0) {console.log("The dragon defeated you!")}
    slaying = false;
    }
	
	