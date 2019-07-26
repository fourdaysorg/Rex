const shim = require('fabric-shim');
const util = require('util');
const contract = require('./dist/stuff-contract.js');
const service= new contract.StuffContract();
var Chaincode = class {
        Init(stub) {
                console.log("Initializated chaincode")
                service = new contract();
                return shim.success();
        }

        Invoke(stub) {
                console.log('Transaction ID: ' + stub.getTxID());
                console.log(util.format('Args: %j', stub.getArgs()));
                


                let ret = stub.getFunctionAndParameters(); 
                if(service[ret.fcn])
                {
                        
                        let f=service[ret.fcn];
                        let result = f(ret.getArgs()).then((result)=>{
                                shim.success(Buffer.from(JSON.stringify( result)));
                        },(err)=>{
                                shim.error(`Error on executing ${ret.fcn},  ${err}`);
                        });
                }else{
                        return shim.error(`Function ${ret.fcn} not found`);
                }
                console.log('Calling function: ' + ret.fcn);
                return shim.success();
                // return stub.getState('dummyKey')
                // .then((value) => {
                //         if (value.toString() === 'dummyValue') {
                //                 console.info(util.format('successfully retrieved value "%j" for the key "dummyKey"', value ));
                //                 return shim.success();
                //         } else {
                //                 console.error('Failed to retrieve dummyKey or the retrieved value is not expected: ' + value);
                //                 return shim.error();
                //         }
                // });
        }
};

shim.start(new Chaincode());