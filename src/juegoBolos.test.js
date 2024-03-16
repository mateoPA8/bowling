import Juego from "./juego";
let game;
beforeEach(()=>{
  game=new Juego();
});
describe("Bolos", () => {
  it("deberia retornar 0 en los 20 juegos", () => {
    rollMany(0,20);
    expect(game.score).toEqual(0);
  });
  it("deberia retornar 20 si derribo 1 pino por cada tiro", () => {
    rollMany(1,20);
    expect(game.score).toEqual(20);
  });
  it("deberia retornar el resultado correcto ", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0,17);
    expect(game.score).toEqual(16);
  });
});

function rollMany(pins, rolls)
{
    for(let i=0;i<rolls;i++)
    {
         game.roll(pins);
    }
}
