class Form { 
    constructor() {

     }

    

    display(){ 
    var title = createElement('h2') 
    title.html("Findara- The lost king"); 
    title.position(450, 0);   

    var input = createInput("Name");
     var button = createButton('Play'); 
     input.position(525, 160); 
     button.position(625, 200);

      button.mousePressed(function()
      { 
          input.hide();
         button.hide(); 

        var name = input.value();
          player.update(name)
          var greeting = createElement('h3');
          greeting.html("Hello " + name ) 
          greeting.position(625, 160) });
         } 
        
        }