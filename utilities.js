import { QRCode} from './qr/qr.js';
import { Engine} from './engine/engine.js';


export class Utilities {
  constructor(){
    this.qr = new QRCode();
    this.engine = new Engine();
  }



  inArray(array,value) {
    return array.indexOf(value) > -1;
  }
}
