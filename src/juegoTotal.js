import Juego from "./juego";
let game=new Juego();
function juegoTotal(pinos, tiros)
{
    for(let i=0;i<tiros;i++)
    {
         game.roll(pinos);
    }
}
export default juegoTotal;