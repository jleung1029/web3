pragma solidity >=0.4.0 <0.9.0;

contract marketSentiment {
    address public owner;
    string[] public ticketsArray;

    constructor() {
        owner = msg.sender
    }

    struct ticker {
        bool exists;
        uint256 up;
        uint256 down;
        mapping (address => bool) Voters;
    }
}