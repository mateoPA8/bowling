class Juego{
    constructor()
    {
        this.puntajeAcumulado=0;
    }
    roll(pins) {
       this.puntajeAcumulado+=pins;
      }
    get score()
    {
        return this.puntajeAcumulado;
    }
}

export default Juego;