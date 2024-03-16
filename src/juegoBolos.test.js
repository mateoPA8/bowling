import Juego from "./juego";
let game=new Juego();
describe("Bolos", () => {
  it("deberia retornar 0 en los 20 juegos", () => {
    for(let i=0;i<20;i++)
    {
        game.roll(0);
    }
    expect(game.score).toEqual(0)
  });
  it("deberia retornar 20 si derribo 1 pino por cada tiro", () => {
    for(let i=0;i<20;i++)
    {
        game.roll(1);
    }
    expect(game.score).toEqual(20)
  });
});
