describe('allAnagrams', function(){
	it('should return an array', function(){
		var res = allAnagrams('ab')
		expect(Array.isArray(res)).to.equal(true);
	});
	it('should return all anagrams of an input string', function(){
		var res = allAnagrams('ab')
		expect(res[0]).to.equal('ab');
		expect(res[1]).to.equal('ba');

		var res = allAnagrams('abc')
		var expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
		for( var i=0; i<res.length; i++ ){
			expect(res[i]).to.equal( expected[i] );
		}
	});
})