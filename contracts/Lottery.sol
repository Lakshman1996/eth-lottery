pragma solidity ^0.4.7;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function enter() public payable { // payable means someone sends some ether along
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
       return uint(keccak256(block.difficulty, now, players)); // sha3 will return hex, we pass that to unit which will return integer for us
    }
    
    function pickWinner()  public restricted  {
        uint index = random() % players.length;
        players[index].transfer(this.balance); //transfer method is available on all address variable datatypes
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}