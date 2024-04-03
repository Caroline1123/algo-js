import { askTvSerie } from './../../modules/canvas.js';

let randomizeCast = (tvSerie) => {
    for (let i = tvSerie.castMembers.length - 1; i >= 0; i --) {
        const j = Math.ceil(Math.random()*i);
            [tvSerie.castMembers[i], tvSerie.castMembers[j]] = [tvSerie.castMembers[j], tvSerie.castMembers[i]]
        }
        return tvSerie;
    }
    
console.log(randomizeCast(askTvSerie()));