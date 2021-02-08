export class Track {
  id: number = null;
  title: string = null;
  album: string = null;
  band: string = null;

  constructor(data){
      if(data){
          this.hydrate(data)
      }
  }

  private hydrate(data) {
      for (let prop in data) {
          if (this.hasOwnProperty(prop)){
              this[prop] = data[prop]
          }
      }
  }
}
