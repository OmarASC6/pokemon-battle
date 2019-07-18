function setup(){
    createCanvas(1200,700)
    background(102, 101, 101)
}
let green = 217
let red = 42
let blue = 120


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
        fill (red, green, blue) 
        leftRect = rect (0,0,250,35)
        rightRect = rect (950,0,250,35)
}
        //   function mouseClicked(){
        //      if (mouseX>=0 && mouseX<=50 && mouseY>=300 && mouseY<=350)
        //      red =255
        //      green =0
        //      blue =0
        //      else if(mouseX>0 && mouseX<50 && mouseY>300 && mouseY<350)
        //  }



    // // Score Box
    // fill (18, 12, 64) 
    //     rect (450,50,250,100)
    // // Begin/Reset Button
    // fill (6, 113, 143)
    //     rect (550,150,50,25) 


