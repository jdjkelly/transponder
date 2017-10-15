pragma solidity ^0.4.15;

contract Transponder {
  address public owner;

	event Squawk(address indexed _author, string _text);

	function Transponder() {
    owner = msg.sender;
	}

  function squawk(string _text) {
    Squawk(msg.sender, _text);
  }
}
