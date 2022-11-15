// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ecommerce {

    int public balance;
    string public myname;
    uint public totalProduct;

    struct product {

        uint productNo;
        string prodName;
        int noItem;
        int unitCost;
        int popularity;
    }

    product public ourProducts;

    product[] public productList;



   function addProduct(string memory name, int tot, int cost) public {


        ourProducts=product(totalProduct,name,tot,cost,0);
        totalProduct=totalProduct+1;
        productList.push(ourProducts);

    }


    function purchaseItem(uint pnum, int quantity) public returns (string memory) {

        string memory message;
        if(productList[pnum].noItem<quantity){
            message="the product is out of stock";
        }
        else {
            balance=balance+productList[pnum].unitCost*quantity;
            productList[pnum].noItem=productList[pnum].noItem-quantity;
            productList[pnum].popularity=productList[pnum].popularity+quantity;
            message="your order is successful";
        }
        return(message);
    }

    function mostPopular() public view returns(uint) {

        int pop=0;
        uint popId=0;
        for (uint i=0; i<totalProduct;i=i+1){
            if(productList[i].popularity>pop){
                pop=productList[i].popularity;
                popId=i;
            }
        }
        return(popId);
    }

}