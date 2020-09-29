

export class Engine {

  detect(){


          if(typeof navigator != 'undefined'){
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.indexOf(' electron/') > -1) {
              return 'electron';
            }
            else{
              return 'browser'
            }
          }
          else if(typeof window == 'undefined'){
            return 'node'
          }
          return 'browser';


  }

}
