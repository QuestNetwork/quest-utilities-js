import { QRCode} from './qr/qr.js';
import { Engine} from './engine/engine.js';


export class Utilities {
  constructor(){
    this.qr = new QRCode();
    this.engine = new Engine();
  }

  delay(t, val = "") {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
 }

  inArray(array,value) {
    if(typeof array['indexOf'] != 'undefined') {
      return array.indexOf(value) > -1;
    }
    return false;
  }
}
