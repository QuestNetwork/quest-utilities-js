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

  removeFrom(array, search){
    // console.log(search);
    // console.log(path);

    let comb = array;
    // console.log(comb);
    let searchKeys = Object.keys(search);
    let newComb = [];
    for(let iC= 0; iC<comb.length;iC++){
      let combItemStays = true;
      for(let i=0;i<searchKeys.length;i++){
        if(comb[iC][searchKeys[i]] == search[searchKeys[i]]){
          combItemStays = false;
          console.log('found');
        }
      }

      if(combItemStays){
        newComb.push(comb[iC])
      }
    }

    return newComb;
    // this.commitNow();
  }
}
