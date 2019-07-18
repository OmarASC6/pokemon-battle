function setup(){
    createCanvas(1200,700)
    background(102, 101, 101)
}
// let greenL = 217
// let redL = 42
// let blueL = 120

// let greenR = 217
// let redR = 42
// let blueR = 120
function draw(){
    // Players Fire Button
    fill (0);
        square (0,300,50)  // Left PLayer Shoot
        square (1150,300,50) // Right PLayer Shoot
    // Pokemons circles
    fill (204, 20, 54)
        circle (150,325,100)
        circle (1050,325,100)
    // Health Bars
    let widthLeft = 250
    let widthRight = 250
        fill (0)
            leftRectGray = rect(0,0,250,35) // Grey Rect Background Left
        fill (42,217,120) 
            leftRect = rect (0,0,widthLeft,35) // Green Rect Above Left

        fill (0) 
            rightRectGray = rect(950,0,250,35) // Grey Rect Background Right
        fill (42,217,120)
            rightRect = rect (950,0,widthRight,35) // Green Rect Above Right 

}
          function mouseClicked(){
              // left box click
             if (mouseX>=0 && mouseX<=50 && mouseY>=300 && mouseY<=350){
                widthRight = 25 
            //  redR =255
            //  greenR =0
            //  blueR =0


            }
             else if (mouseX>=1150 && mouseX<=1200 && mouseY>=300 && mouseY<=350){
            //  redL = 255
            //  greenL = 0
            //  blueL = 0 
            } 
        }

