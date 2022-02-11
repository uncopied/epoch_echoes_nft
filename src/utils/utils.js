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
    {
        name:`EPOCH, "REPLICANTS," 1/20`,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/R",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ade0c8cffa3e9744d03f28bacbcad7fa")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 2/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/S",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c2ee12c2130a1adb33fc9e6c5df2a6f9")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 3/20',
        unit:"EPOCH",
        url:"hhttps://api.uncopied.art/c/v/T",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("0df8673ca2baad10052770879f454182")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 4/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/U",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("a44b20ee6eadae2a8566c98646f8953d")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 5/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/V",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("493b944add91650c343c667da1d2778a")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 6/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/W",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2774e1768a91295e5f4a2c4196552766")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 7/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/X",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2dcdf8eea215622a3b3e3a57564a8e3f")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 8/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/Y",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ce6dd633727e11f1d3dc11ec44200a4a")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 9/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/Z",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("57c5fb965fd5e75d4547096be05e62a5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 10/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/a",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("193a34f7ef614104d0cc29e38317cadf")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 11/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/b",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("9800a1645372a1d00de5286bc92b3620")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 12/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/c",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("08239aa24a16d71e0cfcfea13ab78eb1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 13/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/d",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("a069d6a47f72561e7e99394940eef53b")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 14/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/e",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f1f63507e06a43f01d777d7dea867273")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))

    },
    {
        name:'EPOCH, "REPLICANTS," 15/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/f",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("e893d6016514d054ba9f8d02f10617e0")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))

    },
    {
        name:'EPOCH, "REPLICANTS," 16/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/g",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("df3cdeebfe1ef4306244dcad8a31bd17")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 17/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/h",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c3cb26cc3a850343a7adf98d34cb2ebe")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 18/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/i",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("e2ab0dcc6dd7ed08702d7f99b43bfcfd")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 19/20' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/j",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f30cf70d2f5f96fa66f9337674106c77")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 20/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/k",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c06c6f36a68e6db14227e83d72a241f6")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 1/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/l",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("68ee4013dd013439022559a56be3f258")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  
    {
        name:'EPOCH, "REPLICANTS," 2/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/m",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b29804cf8204806934e996fba6163174")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 3/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/n",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("26a7b7b04ae7d90de6bfb43bde23a34b")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 4/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/o",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("720fea36a4928468c1964f7353ae17c7")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  

    {
        name:'EPOCH, "REPLICANTS," 5/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/p",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("759e329bf37330a58be15a90aa909136")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 6/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/q",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("24f0b1122f8b7c3fb23c72120868f6fb")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 7/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/r",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("6d02874a0dac7ca9f633156808b818f3")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  
    {
        name:'EPOCH, "REPLICANTS," 8/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/s",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f1cde5d61ea606ccf3673eca97a47dc7")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 9/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/t",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2ebddddf90bc009250ce8404805033c1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 10/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/u",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ad73a489fe67dbf6ffb508f37ba9483d")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  

]

export function getAsaToClawbackInfo(params,sender, assetFreeze,assetManager,assetReserve,assetClawback){
    const asaArray = [386913126, 386913127, 386913128, 386913129, 386913130, 386913131, 386913132, 386913133, 386913134, 386913135, 386913136, 386913137, 386913138, 386913139, 386913140, 386913141, 386913521, 386913522, 386913523, 386913524, 386913525, 386913526, 386913527, 386913528, 386913529, 386913530, 386913531, 386913532, 386913533,  386913534  ];
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
    int 14
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
    byte "Gordon"
    app_global_get
    gtxn 4 Receiver
    ==
    &&
    byte "Galath3a"
    app_global_get
    gtxn 5 Receiver
    ==
    &&
    byte "Hung"
    app_global_get
    gtxn 6 Receiver
    ==
    &&
    byte "Keiken"
    app_global_get
    gtxn 7 Receiver
    ==
    &&
    byte "Katja"
    app_global_get
    gtxn 8 Receiver
    ==
    &&
    byte "Jennifer"
    app_global_get
    gtxn 9 Receiver
    ==
    &&
    byte "Woo"
    app_global_get
    gtxn 10 Receiver
    ==
    &&
    byte "Qianqian"
    app_global_get
    gtxn 11 Receiver
    ==
    &&
    byte "Konrad"
    app_global_get
    gtxn 12 Receiver
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
    gtxn 12 Amount
    +
    gtxn 13 Amount
    +
    store 10
    int 100000
    store 11
    int 2000
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
    int 79000
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
    gtxn 13 Amount
    load 11
    *
    load 10
    /
    int 1000
    ==
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
    byte "Gordon"
    app_global_get
    gtxn 3 Receiver
    ==
    &&
    byte "Galath3a"
    app_global_get
    gtxn 4 Receiver
    ==
    &&
    byte "Hung"
    app_global_get
    gtxn 5 Receiver
    ==
    &&
    byte "Keiken"
    app_global_get
    gtxn 6 Receiver
    ==
    &&
    byte "Katja"
    app_global_get
    gtxn 7 Receiver
    ==
    &&
    byte "Jennifer"
    app_global_get
    gtxn 8 Receiver
    ==
    &&
    byte "Woo"
    app_global_get
    gtxn 9 Receiver
    ==
    &&
    byte "Qianqian"
    app_global_get
    gtxn 10 Receiver
    ==
    &&
    byte "Konrad"
    app_global_get
    gtxn 11 Receiver
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
    int 100000
    store 11
    int 7777
    store 12
    load 10
    int 2424000000
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
    //Save Gordon's Address
    byte "Gordon"
    txn ApplicationArgs 6
    app_global_put
    //Save Galath3a's address
    byte "Galath3a"
    txn ApplicationArgs 7
    app_global_put
    //Save Hung's address
    byte "Hung"
    txn ApplicationArgs 8
    app_global_put
    //Save Keiken's address
    byte "Keiken"
    txn ApplicationArgs 9
    app_global_put
    //Save Katja's address
    byte "Katja"
    txn ApplicationArgs 10
    app_global_put
    //Save Jennifer's address
    byte "Jennifer"
    txn ApplicationArgs 11
    app_global_put
    //Save Woo's address
    byte "Woo"
    txn ApplicationArgs 12
    app_global_put
    //Save Qianqian's address
    byte "Qianqian"
    txn ApplicationArgs 13
    app_global_put
    //Save Konrad's address
    byte "Konrad"
    txn ApplicationArgs 14
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
