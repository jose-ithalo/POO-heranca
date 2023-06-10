import { Baleia } from "./Baleia";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";


const husky = new Cachorro('Husky', 23, 140, 155);

const persa = new Gato('Persa', 5, 25, 40);

const jubarte = new Baleia('Jubarte', 30000, 300, 1400);

console.log(husky);
console.log(persa);
console.log(jubarte);

console.log(husky.latir());
console.log(persa.miar());
console.log(jubarte.nadar());






