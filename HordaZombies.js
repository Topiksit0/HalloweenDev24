function battleHorde(zombies, humans) {
    // Code here
    const battleLength = zombies.length
    let battle = 0;
    
    for (let i = 0; i < battleLength; i++) {
      battle += zombies[i] - humans[i];
    }
  
    if (battle === 0) {
      return 'x';
    } 
    return Math.abs(battle) + (battle > 0 ? 'z' : 'h');
    
  }