function Ship (length) {
	this.length = length;
	this.isHit = false;
	this.isSank = false;
	this.hits = 0;
};

Ship.prototype.hit = function() {
	this.isHit = true;

	this.hits++;

	if (this.hits === this.length) {
		this.isSank = true;
	}
};