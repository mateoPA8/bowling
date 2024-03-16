import Juego from "./juego";

describe("Bolos", () => {
  it("deberia retornar 0 en los 20 juegos", () => {
    const game=new Juego();
    for(let i=0;i<20;i++)
    {
        game.roll(0);
    }
    expect(game.score).toEqual(0)
  });
  it("deberia retornar 20 si derribo 1 pino por cada tiro", () => {
    const game=new Juego();
    for(let i=0;i<20;i++)
    {
        game.roll(1);
    }
    expect(game.score).toEqual(20)
  });
});
