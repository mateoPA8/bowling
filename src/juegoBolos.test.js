import Juego from "./juego";
//import juegoTotal from "./juegoTotal";
let game=new Juego();
describe("Bolos", () => {
  it("deberia retornar 0 en los 20 juegos", () => {
    juegoTotal(0,20);
    expect(game.score).toEqual(0)
  });
  it("deberia retornar 20 si derribo 1 pino por cada tiro", () => {
    juegoTotal(1,20);
    expect(game.score).toEqual(20)
  });
});

function juegoTotal(pinos, tiros)
{
    for(let i=0;i<tiros;i++)
    {
         game.roll(pinos);
    }
}
