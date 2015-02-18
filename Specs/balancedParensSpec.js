describe('balancedParens', function(){
	it('should return true for empty string', function(){
		var result = balancedParens('');
		expect(result).to.equal(true);
	});
	it('should return false for non-balanced parens', function(){
		expect(balancedParens("{()}{")).to.equal(false);
		expect(balancedParens("{(})")).to.equal(false);

	});
	it('should return true for valid cases', function(){
		expect(balancedParens('{([])}')).to.equal(true);
		expect(balancedParens('{()}{}')).to.equal(true);
		expect(balancedParens('{([])}')).to.equal(true);
	})
})