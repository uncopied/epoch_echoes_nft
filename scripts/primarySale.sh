#!/bin/bash

goal asset send --amount 1 --assetid 70703868        --from YI5FXEUEQCFTE7ZAXIM6RSXRE63EAAXVUK2XNYAQVOF4YQXYVSGZNEX4LI --to 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --clawback  DGDJP4IYHIB3WJ5YAMN7MOWQTDGXBHIRZ7VVXBWROID5R4Y6XG5B7AZ55M  --out unsignedAssetSend.tx

goal app call --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --app-id 70703943 --app-arg "str:sell_nft" --out unsignedFreeportCall.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to YI5FXEUEQCFTE7ZAXIM6RSXRE63EAAXVUK2XNYAQVOF4YQXYVSGZNEX4LI --amount 950 --out unsignedSend.tx

goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to JQ3QOVBYDKSMZA42HB3DCWJWS4L6KR7ZMFUG5IYECEAM4WE3PP74GG6ZNM --amount 950 --out unsignedSend0.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to HGIMASMUMZAI5SCNOYR65TIQM4JWLE736FERTFPCPUNZSQRXK42Q5VMNMQ --amount 950 --out unsignedSend1.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to 5EP6AOHJBRLL7G2W74Q6NNOZOUCDT6F35ZRXSNTU4UHTHWDZVTDOAYTFAE --amount 950 --out unsignedSend2.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to JUDGEZENUFSP3UGRQLGN7Q5QE4V3YIYQNZ76SI7Z7IXMKBYMK2JAJE4PWU --amount 950 --out unsignedSend3.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to DHTJB4G5KZI3H3AUBFMREUPPLQJMLG65NOREYDLUYUPVKTKJPQM5WF2WNA --amount 950 --out unsignedSend4.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to 3BHZPTXX6Q3GRS7URKAXSO7BT36HI2NLV4SLSUDTSFKMIH56NPZKK7HKUU --amount 950 --out unsignedSend5.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to WELR5BBI456XXE4GOVX4FK3GE2T2PA3LJ3VTPY7RHPDCL5H3CIXKUWNGS4 --amount 950 --out unsignedSend6.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to QQX5Y647GO7VLG33ZQWKEHO2OPXPVCEY7QNNE2AK2AVA4HYFFD4MJNFYFM --amount 1899 --out unsignedSend7.tx
goal clerk send --from 6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA --to DGDJP4IYHIB3WJ5YAMN7MOWQTDGXBHIRZ7VVXBWROID5R4Y6XG5B7AZ55M --amount 100000 --out unsignedSend8.tx


cat  unsignedAssetSend.tx unsignedFreeportCall.tx  unsignedSend.tx unsignedSend0.tx unsignedSend1.tx unsignedSend2.tx unsignedSend3.tx unsignedSend4.tx unsignedSend5.tx unsignedSend6.tx unsignedSend7.tx  unsignedSend8.tx > combinedNftTransactions.tx


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

cat signoutNft-0.tx signoutNft-1.tx signoutNft-2.tx  signoutNft-3.tx signoutNft-4.tx signoutNft-5.tx signoutNft-6.tx signoutNft-7.tx signoutNft-8.tx signoutNft-9.tx signoutNft-10.tx signoutNft-11.tx > signoutNft.tx

goal clerk rawsend -f signoutNft.tx

goal clerk dryrun -t signoutNft.tx --dryrun-dump  -o dr.msgp
tealdbg debug ../contracts/stateful.teal -d dr.msgp --group-index 1

#lonimi