// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract Inbox {
    string public message;

    constructor(string memory mymessage){
      message=mymessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}

