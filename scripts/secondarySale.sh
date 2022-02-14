#!/bin/bash

goal asset send --amount 1 --assetid 70703868  --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --clawback  JZZ773VQXKFALDLXRHG7BENRSJOD53PGGFIT6TH5UJHMXJEJAR5PG3GHEU  --out unsignedAssetSend.tx

goal app call --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --app-id 70706336 --app-arg "str:sell_nft" --out unsignedFreeportCall.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --amount 7900000 --out unsignedSend.tx

goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to YI5FXEUEQCFTE7ZAXIM6RSXRE63EAAXVUK2XNYAQVOF4YQXYVSGZNEX4LI --amount 230000 --out unsignedSend0.tx

goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --amount 230000 --out unsignedSend1.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to HGIMASMUMZAI5SCNOYR65TIQM4JWLE736FERTFPCPUNZSQRXK42Q5VMNMQ --amount 230000 --out unsignedSend2.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to 5EP6AOHJBRLL7G2W74Q6NNOZOUCDT6F35ZRXSNTU4UHTHWDZVTDOAYTFAE --amount 230000 --out unsignedSend3.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to JUDGEZENUFSP3UGRQLGN7Q5QE4V3YIYQNZ76SI7Z7IXMKBYMK2JAJE4PWU --amount 230000 --out unsignedSend4.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to DHTJB4G5KZI3H3AUBFMREUPPLQJMLG65NOREYDLUYUPVKTKJPQM5WF2WNA --amount 230000 --out unsignedSend5.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to 3BHZPTXX6Q3GRS7URKAXSO7BT36HI2NLV4SLSUDTSFKMIH56NPZKK7HKUU --amount 230000 --out unsignedSend6.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to WELR5BBI456XXE4GOVX4FK3GE2T2PA3LJ3VTPY7RHPDCL5H3CIXKUWNGS4 --amount 230000 --out unsignedSend7.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to QQX5Y647GO7VLG33ZQWKEHO2OPXPVCEY7QNNE2AK2AVA4HYFFD4MJNFYFM --amount 230000 --out unsignedSend8.tx
goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --amount 100000 --out unsignedSend9.tx


goal clerk send --from XVZM2245PXJLKQ4BG2NGUDROTXIL4E7XHTCKJRT3O4PMRQ7GZMACOWD45A --to JZZ773VQXKFALDLXRHG7BENRSJOD53PGGFIT6TH5UJHMXJEJAR5PG3GHEU --amount 100000 --out unsignedSend10.tx


cat  unsignedAssetSend.tx unsignedFreeportCall.tx  unsignedSend.tx unsignedSend0.tx unsignedSend1.tx unsignedSend2.tx unsignedSend3.tx unsignedSend4.tx unsignedSend5.tx unsignedSend6.tx unsignedSend7.tx  unsignedSend8.tx unsignedSend9.tx unsignedSend10.tx> combinedNftTransactions.tx


goal clerk group -i combinedNftTransactions.tx -o groupedNftTransactions.tx 

goal clerk split -i groupedNftTransactions.tx -o splitNft.tx

goal clerk sign -i splitNft-0.tx --program ../contracts/stateless.teal -o signoutNft-0.tx

goal clerk sign -i splitNft-1.tx -o signoutNft-1.tx

goal clerk sign -i splitNft-2.tx -o signoutNft-2.tx

goal clerk sign -i splitNft-3.tx -o signoutNft-3.tx

goal clerk sign -i splitNft-4.tx -o signoutNft-4.tx

goal clerk sign -i splitNft-5.tx -o signoutNft-5.tx

goal clerk sign -i splitNft-6.tx -o signoutNft-6.tx

goal clerk sign -i splitNft-7.tx -o signoutNft-7.tx

goal clerk sign -i splitNft-8.tx -o signoutNft-8.tx

goal clerk sign -i splitNft-9.tx -o signoutNft-9.tx

goal clerk sign -i splitNft-10.tx -o signoutNft-10.tx

goal clerk sign -i splitNft-11.tx -o signoutNft-11.tx

goal clerk sign -i splitNft-12.tx -o signoutNft-12.tx

goal clerk sign -i splitNft-13.tx -o signoutNft-13.tx


cat signoutNft-0.tx signoutNft-1.tx signoutNft-2.tx  signoutNft-3.tx signoutNft-4.tx signoutNft-5.tx signoutNft-6.tx signoutNft-7.tx signoutNft-8.tx signoutNft-9.tx signoutNft-10.tx signoutNft-11.tx signoutNft-12.tx signoutNft-13.tx> signoutNft.tx

goal clerk rawsend -f signoutNft.tx

goal clerk dryrun -t signoutNft.tx --dryrun-dump  -o dr.msgp
tealdbg debug ../contracts/stateful.teal -d dr.msgp --group-index 1

#lonimi