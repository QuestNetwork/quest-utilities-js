# Quest Utilities JS
> Shared Toolbox For The Quest Network

## Lead Maintainer

[StationedInTheField](https://github.com/StationedInTheField)

## Description

The Utilities class for the [Quest Network Operating System](https://github.com/QuestNetwork/quest-os-js) offers shared functionality.

## Installation & Usage
```
npm install @questnetwork/quest-utilities-js@0.9.4
```

## API

#### utilities.inArray(array,value)

Returns boolean true or false
```javascript
if(<os>.utilities.inArray(array,value)){
 console.log('Hello Universe!')
}
```

#### utilities.removeFram(array,searchObject)

Removes the object in the array that matches searchObject in at least one field.
```javascript
<os>.utilities.removeFram(array,searchObject)
```

### engine

#### utilities.engine.detect()

Returns a String containing the detected engine. Result can be `browser`, `electron` or `node`.
```javascript
let engine = <os>.utilities.engine.detect();
```

### qr

#### utilities.qr.generate()

Returns a DataUrl containing generated QR Code.
```javascript
let qrDataUrl = <os>.utilities.qr.generate(text);
```



## Support Us
Please consider supporting us, so that we can build a non-profit for this project (ツ)

| Ethereum| Bitcoin |
|---|---|
| `0xBC2A050E7B87610Bc29657e7e7901DdBA6f2D34E` | `bc1qujrqa3s34r5h0exgmmcuf8ejhyydm8wwja4fmq`   |
|  <img src="https://github.com/QuestNetwork/qDesk/raw/master/doc/images/eth-qr.png" >   | <img src="https://github.com/QuestNetwork/qDesk/raw/master/doc/images/btc-qr.png" > |

## License

GNU AGPLv3
