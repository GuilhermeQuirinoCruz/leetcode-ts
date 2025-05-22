function countPossibilities(availableTiles: Map<string, number>): number {
  let possibilities: number = 0;
  let usedInIteration: Set<string> = new Set<string>();

  availableTiles.forEach((amount, tile) => {
    if (usedInIteration.has(tile) || amount == 0) {
      return;
    }

    usedInIteration.add(tile);
    
    let availableTilesCopy: Map<string, number> = new Map(availableTiles);
    availableTilesCopy.set(tile, amount - 1);
    
    possibilities++;
    possibilities += countPossibilities(availableTilesCopy);
  });

  return possibilities;
}

function numTilePossibilities(tiles: string): number {
  let availableTiles: Map<string, number> = new Map<string, number>();

  [...tiles].forEach((tile: string) => {
    availableTiles.set(tile, (availableTiles.get(tile) || 0) + 1);
  });

  return countPossibilities(availableTiles);
}

// Exemplo 1
console.log(numTilePossibilities("AAB"));

// Exemplo 2
console.log(numTilePossibilities("AAABBC"));

// Exemplo 3
console.log(numTilePossibilities("V"));

// Exemplo 1
console.log(numTilePossibilities("AB"));