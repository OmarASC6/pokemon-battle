function setup(){
    createCanvas(1200,700)
    background(102, 101, 101)
}
let greenL = 217
let redL = 42
let blueL = 120

let greenR = 217
let redR = 42
let blueR = 120

function draw(){
    // Players Fire Button
    fill (0);
        square (0,300,50)
        square (1150,300,50)
    // Pokemons circles
    fill (204, 20, 54)
        circle (150,325,100)
        circle (1050,325,100)
    // Health Bars
        // fill (redL, greenL, blueL) 
        // leftRect = rect (0,0,250,35)
        fill (redL, greenL, blueL) 
                leftRect0 = rect(0,0,62.5,35);
                leftRect1 = rect(62.5,0,62.5,35)
                leftRect2 = rect(125,0,62.5,35)
                leftRect3 = rect(187.5,0,62.5,35)
        fill (redR,greenR,blueR)
        // rightRect = rect (950,0,250,35)
                rightRect0 = rect(1150,0,62.5,35);
                rightRect1 = rect(1087.5,0,62.5,35)
                rightRect2 = rect(1025,0,62.5,35)
                rightRect3 = rect(962.5,0,62.5,35)
}
          function mouseClicked(){
              // left box click
             if (mouseX>=0 && mouseX<=50 && mouseY>=300 && mouseY<=350){
             redR =255
             greenR =0
             blueR =0
            }
             else if (mouseX>=1150 && mouseX<=1200 && mouseY>=300 && mouseY<=350){
             redL = 255
             greenL = 0
             blueL = 0 
            } 
        }

    // // Score Box
    // fill (18, 12, 64) 
    //     rect (450,50,250,100)
    // // Begin/Reset Button
    // fill (6, 113, 143)
    //     rect (550,150,50,25) 

