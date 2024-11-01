function createMagicPotion(potions, target) {
    const potionMap = new Map();
    
    for (let index = 0; index < potions.length; index++) {
      const potion = potions[index];
      const requiredPotion = target - potion;
  
      if (potionMap.has(requiredPotion)) {
        return [potionMap.get(requiredPotion), index];
      }
      
      potionMap.set(potion, index);
    }
    
    return undefined
  }
  