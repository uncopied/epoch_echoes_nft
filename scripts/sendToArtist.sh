#!/bin/bash
goal asset send --amount 1 --assetid 70703868  --from YI5FXEUEQCFTE7ZAXIM6RSXRE63EAAXVUK2XNYAQVOF4YQXYVSGZNEX4LI --to 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --clawback  JZZ773VQXKFALDLXRHG7BENRSJOD53PGGFIT6TH5UJHMXJEJAR5PG3GHEU  --out unsignedAssetSend.tx

goal app call --from YI5FXEUEQCFTE7ZAXIM6RSXRE63EAAXVUK2XNYAQVOF4YQXYVSGZNEX4LI --app-id 70706336 --app-arg "str:sell_nft" --out unsignedFreeportCall.tx

cat  unsignedAssetSend.tx unsignedFreeportCall.tx  > combinedNftTransactions.tx

goal clerk group -i combinedNftTransactions.tx -o groupedNftTransactions.tx 

goal clerk split -i groupedNftTransactions.tx -o splitNft.tx

goal clerk sign -i splitNft-0.tx --program ../contracts/stateless.teal -o signoutNft-0.tx

goal clerk sign -i splitNft-1.tx -o signoutNft-1.tx

cat signoutNft-0.tx signoutNft-1.tx > signoutNft.tx

goal clerk rawsend -f signoutNft.tx
