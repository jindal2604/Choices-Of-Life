class Player { 
    constructor() { 

    } 
    
        update(name)
         { var playerIndex = "player" + playerCount; 
         database.ref(playerIndex).set({ name: name }); } }