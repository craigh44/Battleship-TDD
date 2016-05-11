var ship;

beforeEach(function () {
	ship = new Ship(); 
});

describe('Ship', function () {
	it('Should know how long it is', function () {
		ship.length = 2;

		expect(ship.length).toBe(2);
	});

	it('Should know if it has been hit or not', function () {
		expect(ship.isHit).toBe(false);

		ship.hit();

		expect(ship.isHit).toBe(true);
	});

	it('Should know if it has been sank', function () {
		ship.length = 2;

		expect(ship.isSank).toBe(false);

		ship.hit();
		ship.hit();

		expect(ship.isSank).toBe(true);
	});

});