function setup(){
    createCanvas(1200,400)
    background(171, 203, 255)
}
function draw(){
    // Players Fire Button
    fill (191, 64, 0);
        square (0,300,50)  // Left PLayer Shoot
        square (1150,300,50) // Right PLayer Shoot
    // Pokemons circles
    fill (241, 245, 24)
        circle (150-65,325,100) // Left Pokemon
        circle (1050+65,325,100) // Right Pokemon
    // Health Bars
    // Left Health Bars
        fill (0)
            leftRectGray = rect(0,0,250,35) // Grey Rect Background Left
        fill (42,217,120) 
            leftRect = rect (0,0,widthLeft,35) // Green Rect Above Left
    // Right Health Bars
        fill (0) 
            rightRectGray = rect(950,0,250,35) // Grey Rect Background Right
        fill (42,217,120)
            rightRect = rect (startX,0,widthRight,35) // Green Rect Above Right 
}
let widthLeft = 250
let widthRight = 250
let startX = 950 // Right Health Bar

// X1 = Math.floor(Math.random() * 11);  // Random Damage to health Left Bar  (Not Functioning Correctly)
// X2 = Math.floor(Math.random() * 11);  // Random Damage to health Right Bar (Not functioning Correctly)
          function mouseClicked(){
            // left box click
             if (mouseX>=0 && mouseX<=50 && mouseY>=300 && mouseY<=350){
                // widthRight =  widthRight -25 // This does not work correctly
                startX = startX+25
            
            //  redR =255
            //  greenR =0
            //  blueR =0
            }
                // right box click
             else if (mouseX>=1150 && mouseX<=1200 && mouseY>=300 && mouseY<=350){
                 widthLeft = widthLeft - 25
            //  redL = 255
            //  greenL = 0
            //  blueL = 0 
            }
            if (startX>=1200){
                document.write("Player 1 Wins Please restart the game !") // If the health goes to 0, PLayer 1 wins
            }

            if (widthLeft<=0)
                document.write("Player 2 Wins Please restart the game") // If the health goes to 0,Player 2 wins
}