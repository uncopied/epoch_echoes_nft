export function createAsa(params,from,assetName, assetUnitName,assetDecimals,assetTotal,assetUrl,assetFreeze,assetManager,assetReserve,assetDefaultFrozen,assetMetadataHash,note){
    let  txn = {
       ...params,
       fee: 1000,
       flatFee: true,
       type: 'acfg',
       from: from,
       assetName: assetName,
       assetUnitName: assetUnitName,
       assetDecimals: assetDecimals,
       assetTotal: assetTotal,
       assetURL: assetUrl,
       assetFreeze: assetFreeze,
       assetManager: assetManager,
       assetReserve: assetReserve,
       assetDefaultFrozen: assetDefaultFrozen,
       assetClawback:from,
       assetMetadataHash,
       note
     };
   return txn;
 }
 export function clawbackAsa(params,sender,assetIndex,assetFreeze,assetManager,assetReserve,assetClawback){
    let  txn = {
         ...params,
         fee: 1000,
         flatFee: true,
         type: 'acfg',
         from: sender,
         assetIndex: assetIndex,
         assetFreeze: assetFreeze,
         assetManager: assetManager,
         assetReserve: assetReserve,
         assetClawback:assetClawback
       };
 
       return txn;
 }
 export function connectToWallet(myalgoconnect){
    return new Promise(async(resolve,reject)=>{
        let addresses;
        try{
            addresses = await myalgoconnect.connect();
            resolve(addresses)
        }catch(error){
            reject(error);
        }
    });
}

export async function isConnected(addresses,myalgoconnect){
    return new Promise(async(resolve,reject)=>{
        if(addresses.length==0){
            try{
               let addr =  await connectToWallet(myalgoconnect)
               addresses= addr;
               console.log(addr);
               resolve(addresses);
            }catch(error){
             console.error(error);
              reject(false);
            }
         }else{
              resolve(true);
         }
    })
}

export const replicantAsaInfo =[
]

export function getAsaToClawbackInfo(params,sender, assetFreeze,assetManager,assetReserve,assetClawback){
    const asaArray = [
        70501106, //1/5
        70501081, //2/5
        70501072,
        70501062,
        70501039,
        70501000,
        70500992,
        70500973,
        70500968,
        70500954,
        70500937,
        70500930,
        70500902,
    ];
    let assetClawbackAddresses = [
        'I4ZSBYX3VWK2YTXJUL5OYGHSGWMDFUKAGIYVMKJ2IYKL6BAIMOIDXMQXIU',
        'WOJ2IVQZQPL6AUGFQRS3MBXMZU5OHHJF7TTYMS6AJYCFOVFNIVGP5LEMPY',
        'A2SVRPFMMK4C3UT7DH2K2T67ZSAWULRWWJ2MXM35KP4PUXACVV36H3TJ3Q',
        '4QHKQTHOPX56EZ4BHB3XQH4A67XTC5W6RQWVLHVML24TZXWC6SI7D7TRUA',
        'CKU7IAJAOJCD7O2GUQU4AJAD2RAR75MXJOOV33DBYATZNC5BSHTTEOT6IE',
        'GA7AGJTASCQVXRCN37UWOVJABR6R3ZV3I2CYL3RXWDPYM62OKRNCL3EPHI',
        '7BSRUQJ6HISD64J6NDRQUPTJ4V2KID2CRWJDLGYVVJSCIDOTTXOBN7DRBM',
        'GV45TIXAM5UKCDJAYYX5YZDMKCAPY5JKOQ6AFCBQ74A7AABSRTK24HLL6I',
        'WI4WKILJUFLC2B2ZJCAGXLDIIDDL2ANMYVOVAWRG6UC5D47VHFNNJVK6LI',
        'FAZ5K4IUAU3QHPYL6BNNMIZNJLCCH23CNU5ZM6TIWMQWINMQZLOAW4BTZQ',
        'OLDAM3X7AB27UELP6PB2IFOMQDPQGVXTYQVB3ZPF7CCNOPPNKXUP77NXWA',
        'PLKZCOUQN7XKM5JWPHLA4QMFPGK5UBFDG5CJL3NWR5TGHXPCMZN46QXUOY',
        '4LEGSUWJ7AQC6PF6G2YGE44MAVZHQVESPU32L5DMGJ624AFGVF6OPXVK4Y',
        'RC57SFERNNM5W635Z7RVYYXKHLCFHXEPLJNMVC7NMUDHIHZP42KV3E6QA4',
        'IYXVCSD6HQVB3H3LXEZYR5YOKFX3ZRD6UVED3BUDJAQYGP6RRYZUPBY4ZU',
        'RDZU72UJ37724XIMMRCEHS3XB6B6SZZ7SVXGYRFWU5PZNY4EJU22HRO5NE',
        '7H4RWJ65Y65THWFF3OR3Q74PRGVMPZWVMFCKBEICUXSQRLPFH6QXMIYXRE',
        'AYD43MHQB7RSMD6XAWLTH7CRPUAVINRLOUYHHKUEXYO5QKGGUWDAN63WJU',
        'GYPGD6AY32GRHNPMWL4LNMJLS3UYNEWI5QQVYVRUS75HD2CPKBFQPHOEJA',
        'SM6VTVE4YFRJYK4ZZCZ7PIQMNZ4KXZD3KTHCWR54LGY2MPHMZTC2MP2KXM',
        'DLDDVRVH47I3F6BQH63CXKQG7IBG7RWBX7HD3HITOTSZ4WRKLDXBOFYKUY',
        'YEU3N6UI245NMW4JQYRUTCRUOV2YFJYDNGDLV7MVZOESHXI3KUXXN6Y3M4',
        'TEX2UK4ZSFUVP4EMZPRFXER4SFDMDPDGU46K7A7IQPQ75ZIHMOV65MMMM4',
        'UH2MRZ33XNVGMNG3YITPWQ4UPCZNWOEA2BUPHP6ANWXEMZLZRJKXQWJEO4',
        'LOIUC53KK64GZXKLSD7KPFJBZ2WZVQHSIUFVWR4PKBEJ2CKBMCSJY4BOTM',
        'DNJ5TR7TEB34I73VTS57OE7MEPLP3XJXZPWGQIPPUMEQAG5WZRQXFKVO4Q',
        'RIC4VM2GX2TATLAFSMZIF7WQD56YNTCFYOTB26VFVCVJKXLPPPNEKUP4BY',
        'MLFJDLAMRYWTKGHELCO3ETHPDAGBZNJBK27TGET4MNXTGZMYOMM4AMFBGQ',
        'XQNWEAKIGYLGJUZEUVFLLKFOEIWLLN2Q4YLAENLBXGINVSEPTBPXCO6FLM',
        'EKEGZMTE2WYAEJZG5CMEH5GOEWLLHAQL7MHL3HN7SVFI5FRO6X3TASTSUY'
      ]

    let asaInfos = asaArray.map((el, index) => {
        return {
            ...params,
            fee: 1000,
            flatFee: true,
            type: 'acfg',
            from: sender,
            assetIndex: el,
            assetFreeze: assetFreeze,
            assetManager: assetManager,
            assetReserve: assetReserve,
            assetClawback:assetClawbackAddresses[index]
          };
    });
    return asaInfos;
} 

export async function compileReplicantProgram(client){
    const replicantSource=`#pragma version 4

int 0
txn ApplicationID
==
bnz creation

int UpdateApplication
txn OnCompletion
==
bnz updateApp

int DeleteApplication
txn OnCompletion
==
bnz DeleteApp

//=== Condition to freeze or unfreeze contract
txn ApplicationArgs 0
byte "unfreeze_contract"
==
bnz unfreeze_contract

txn ApplicationArgs 0
byte "freeze_contract"
==
bnz freeze_contract


//Check if contract is frozen
byte "contract_frozen"
app_global_get
int 1
==
bnz contract_frozen

txn ApplicationArgs 0
byte "set_price"
==
bnz set_price

//======Condition to decide if an NFT should be sent to an artist for free=====
txn ApplicationArgs 0
byte "sell_nft"
==
byte "creator"
app_global_get
gtxn 0 AssetSender
==
&&
byte "ap_edition"
app_global_get
int 1
==
&&
byte "ap_artist"
app_global_get
gtxn 0 AssetReceiver
==
&&
byte "tx_sent_to_artist"
app_global_get
int 0
==
&&
bnz send_tx_to_artist

//=== Condition to check for secondary sale or primary sale
txn ApplicationArgs 0
byte "sell_nft"
==
byte "creator"
app_global_get
gtxn 0 AssetSender
==
&&
bnz primary_sale_txn

txn ApplicationArgs 0
byte "sell_nft"
==
byte "creator"
app_global_get
gtxn 0 AssetSender
!=
&&
bnz secondary_sale_txn






secondary_sale_txn:
global GroupSize
int 12
==
gtxn  0 AssetAmount
int 1
==
&&
byte "asset_id"
app_global_get
gtxn 0 XferAsset
==
&&
byte "price"
app_global_get
int 0
!=
&&
gtxn 0 AssetSender
gtxn 2 Receiver
==
&&
byte "creator"
app_global_get
gtxn 3 Receiver
==
&&
byte "AmericanArtist"
app_global_get
gtxn 4 Receiver
==
&&
byte "MUXXProject"
app_global_get
gtxn 5 Receiver
==
&&
byte "JacquelineKiyomiGorkRhettLaRue"
app_global_get
gtxn 6 Receiver
==
&&
byte "LawrenceLek"
app_global_get
gtxn 7 Receiver
==
&&
byte "JenLiu"
app_global_get
gtxn 8 Receiver
==
&&
byte "RonaldRaelVirginiaSanFratello"
app_global_get
gtxn 9 Receiver
==
&&
byte "SarahRara"
app_global_get
gtxn 10 Receiver
==
&&
gtxn 2 Amount
gtxn 3 Amount
+
gtxn 4 Amount
+
gtxn 5 Amount
+
gtxn 6 Amount
+
gtxn 7 Amount
+
gtxn 8 Amount
+
gtxn 9 Amount
+
gtxn 10 Amount
+
gtxn 11 Amount
+
store 10
int 1898800000
store 11
int 1898800000
store 12
byte "price"
app_global_get
load 10
==
&&
gtxn 2 Amount
load 11
*
load 10
/
int 9494000000
==
&&
gtxn 3 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 4 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 5 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 6 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 7 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 8 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 9 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 10 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 11 Amount
load 11
*
load 10
/
load 12
==
&&
gtxn 12 Amount
load 11
*
load 10
/
load 12
==
&&
return



//== Primary Sale transaction
primary_sale_txn:
global GroupSize 
int 12
==
gtxn 0 AssetAmount
int 1
==
&&
byte "asset_id"
app_global_get
gtxn 0 XferAsset
==
&&
gtxn 2 Receiver
gtxn 0 AssetSender
==
&&
byte "creator"
app_global_get
gtxn 2 Receiver
==
&&
byte "AmericanArtist"
app_global_get
gtxn 3 Receiver
==
&&
byte "MUXXProject"
app_global_get
gtxn 4 Receiver
==
&&
byte "JacquelineKiyomiGorkRhettLaRue"
app_global_get
gtxn 5 Receiver
==
&&
byte "LawrenceLek"
app_global_get
gtxn 6 Receiver
==
&&
byte "JenLiu"
app_global_get
gtxn 7 Receiver
==
&&
byte "RonaldRaelVirginiaSanFratello"
app_global_get
gtxn 8 Receiver
==
&&
byte "SarahRara"
app_global_get
gtxn 9 Receiver
==
&&
byte "LACMA"
app_global_get
gtxn 10 Receiver
==
&&
gtxn 2 Amount
gtxn 3 Amount
+
gtxn 4 Amount
+
gtxn 5 Amount
+
gtxn 6 Amount
+
gtxn 7 Amount
+
gtxn 8 Amount
+
gtxn 9 Amount
+
gtxn 10 Amount
+
gtxn 11 Amount
+
store 10
int 949400000
store 11
int 949400000
store 12
load 10
int 1898800000
>=
&&
gtxn 2 Amount
load 11
*
load 10
/
int 30000
>=
&&
gtxn 3 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 4 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 5 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 6 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 7 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 8 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 9 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 10 Amount
load 11
*
load 10
/
load 12
>=
&&
gtxn 11 Amount
load 11
*
load 10
/
load 12
>=
&&
//Save new owner
byte "owner"
gtxn 0 AssetReceiver
app_global_put
//Freeze contract
byte "contract_frozen"
int 1
app_global_put
return





send_tx_to_artist:
byte "tx_sent_to_artist"
int 1
app_global_put
int 1
return




contract_frozen:
int 0
return

unfreeze_contract:
byte "contract_frozen"
int 0
app_global_put

byte "owner"
app_global_get
txn Sender
==
return

freeze_contract:
byte "contract_frozen"
int 1
app_global_put

byte "owner"
app_global_get
txn Sender
==
return


set_price:
byte "price"
txn ApplicationArgs 1
btoi
app_global_put

byte "owner"
app_global_get
txn Sender
==
return


creation:
// Save creator's address
byte "creator"
txn ApplicationArgs 0
app_global_put
//Save edition 
byte "edition"
txn ApplicationArgs 1
btoi
app_global_put
//Save if it is an AP edition
byte "ap_edition"
txn ApplicationArgs 2
btoi
app_global_put
//Save asset info
byte "asset_id"
txn ApplicationArgs 3
btoi
app_global_put
//Save ap_artist
byte "ap_artist"
txn ApplicationArgs 4
app_global_put
//Save Epoch's address
byte "epoch"
txn ApplicationArgs 5
app_global_put
//Save AmericanArtist's Address
byte "AmericanArtist"
txn ApplicationArgs 6
app_global_put
//Save MUXXProject's address
byte "MUXXProject"
txn ApplicationArgs 7
app_global_put
//Save JacquelineKiyomiGorkRhettLaRue's address
byte "JacquelineKiyomiGorkRhettLaRue"
txn ApplicationArgs 8
app_global_put
//Save LawrenceLek's address
byte "LawrenceLek"
txn ApplicationArgs 9
app_global_put
//Save JenLiu's address
byte "JenLiu"
txn ApplicationArgs 10
app_global_put
//Save RonaldRaelVirginiaSanFratello's address
byte "RonaldRaelVirginiaSanFratello"
txn ApplicationArgs 11
app_global_put
//Save SarahRara's address
byte "SarahRara"
txn ApplicationArgs 12
app_global_put
//Save LACMA's address
byte "LACMA"
txn ApplicationArgs 13
app_global_put
//Save Price information
byte "price"
int 0
app_global_put
//Save boolean for if the artist has received his ap edition
byte "tx_sent_to_artist"
int 0
app_global_put
//Save boolean to freeze or unfreeze contract
byte "contract_frozen"
int 0
app_global_put

byte "owner"
txn ApplicationArgs 0
app_global_put

int 1
return



updateApp:
byte "creator"
app_global_get
txn Sender
==
return

DeleteApp:
byte "creator"
app_global_get
txn Sender
==
return
    
    `
    return new Promise(async(resolve,reject)=>{
        try{
            const results = await client.compile(replicantSource).do();
            resolve(results)
        }catch(error){
           reject(error) 
        }
       
    });
}


export  async function compileClearProgram(client){
    var clearProgramSource=`#pragma version 4
    int 1`
    return new Promise(async(resolve,reject)=>{
        try{
            const results = await client.compile(clearProgramSource).do();
            resolve(results)
        }catch(error){
           reject(error) 
        }
       
    });
}

export  function updateApplication(appId, approvalProgram,clearProgram,params,from){
    return{
        ...params,
        fee:1000,
        flatFee: true,
        type: "appl",
        from,
      appIndex: appId,
      appOnComplete: 4,
      appApprovalProgram: approvalProgram,
      appClearProgram: clearProgram,
    }
  }
