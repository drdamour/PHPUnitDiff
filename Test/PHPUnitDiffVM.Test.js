module("PHPUnitDiff VM");
test( "Constructor", function() {
	ok( PHPUnitDiffVM );
	var vm = new PHPUnitDiffVM(   );
	ok(vm);
});


test( "Parse Test Json", function(){
	var data = '{"event":"suiteStart","suite":"APITest","tests":91}{"event":"test","suite":"APITest","test":"APITest::testWhenBrandKeyIsMissing","status":"pass","time":0.035589933395386,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testMissingUserIDFails","status":"pass","time":0.03565788269043,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testMissingPasswordFails","status":"pass","time":0.026281833648682,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testBlankUserIDFails","status":"pass","time":0.021499872207642,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testBlankPasswordFails","status":"pass","time":0.029420137405396,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testInvalidUserIDFailsQSP","status":"pass","time":0.021125078201294,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testInvalidUserIDFailsHeaders","status":"pass","time":0.023193120956421,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testInvalidPasswordFailsQSP","status":"pass","time":0.028631210327148,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testInvalidPasswordFailsHTTP","status":"pass","time":0.029515981674194,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUserIDQSPComesBeforeHTTP","status":"pass","time":0.02333402633667,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testPasswordQSPComesBeforeHTTP","status":"pass","time":0.030066013336182,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetSegments","status":"pass","time":0.049736022949219,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetSegmentsNonExistentBrand","status":"pass","time":0.021047115325928,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetSegmentsNonAuthorizedBrand","status":"pass","time":0.037436008453369,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetAttributes","status":"pass","time":0.060811996459961,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetExistingAffiliate","status":"pass","time":0.068103075027466,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetAffiliateInNonExistantBrand","status":"pass","time":0.02042293548584,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetAffiliateInNonAuthorizedBrand","status":"pass","time":0.029614210128784,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetNonExistantAffiliate","status":"pass","time":0.03405499458313,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testGetNonAuthorizedAffiliate","status":"pass","time":0.049797058105469,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateInvalidBrand","status":"pass","time":0.041428089141846,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateUnauthorizedBrand","status":"pass","time":0.047132968902588,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateBadJSON","status":"pass","time":0.21254396438599,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithMissingOptionals","status":"pass","time":0.73567795753479,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithMissingCompanyName","status":"pass","time":0.17235493659973,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithMissingBillingAddress","status":"pass","time":0.11788988113403,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithNullOptionals","status":"pass","time":0.74681901931763,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithNullCompanyName","status":"pass","time":0.1653139591217,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithNullBillingAddress","status":"pass","time":0.10554790496826,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateInvalidBrand","status":"pass","time":0.18853211402893,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateUnauthorizedBrand","status":"pass","time":0.049027919769287,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBadJSON","status":"pass","time":0.39406991004944,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateWithMissingOptionals","status":"pass","time":0.19826292991638,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateWithNullOptionals","status":"pass","time":0.74573588371277,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateWithNullCompanyName","status":"pass","time":0.38171911239624,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateWithNullBillingAddress","status":"pass","time":0.31229686737061,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateWithNullShippingAddress","status":"pass","time":0.34006190299988,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateEmptySegments","status":"pass","time":0.78849983215332,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateNullSegments","status":"pass","time":0.78081297874451,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentNoDates","status":"pass","time":0.7932288646698,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentNullDates","status":"pass","time":0.81364798545837,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentNoEnd","status":"pass","time":0.77486395835876,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentNoStart","status":"pass","time":0.87078309059143,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentStartAndEnd","status":"pass","time":0.85364103317261,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentInvalidEnd","status":"pass","time":0.74382781982422,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentInvalidStart","status":"pass","time":0.87820196151733,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate2Segments","status":"pass","time":0.89305996894836,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateInvalidSegment","status":"pass","time":0.78683996200562,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateSomeInvalidSegments","status":"pass","time":0.73082590103149,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateInvalidSegmentBetweenValidSegments","status":"pass","time":0.8506190776825,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateInvalidSegmentAfter2ValidSegments","status":"pass","time":0.81542015075684,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateInvalidSegmentBefore2ValidSegments","status":"pass","time":0.83177709579468,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateEmptySegments","status":"pass","time":1.5520770549774,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateNullSegments","status":"pass","time":1.4648590087891,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliate1SegmentAdd","status":"pass","time":1.5087320804596,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliate1SegmentUpdate","status":"pass","time":1.5190150737762,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliate1Update1Add","status":"pass","time":1.5116791725159,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateOnlySegments1Update1Add","status":"pass","time":1.4500880241394,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddInvalidSegment","status":"pass","time":1.5185420513153,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateSomeInvalidSegments","status":"pass","time":1.4771819114685,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateShippingAddressBlank","status":"pass","time":0.76560211181641,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingOptionals","status":"pass","time":1.4169018268585,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingAddressLine1","status":"pass","time":1.5243270397186,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingCity","status":"pass","time":3.5689039230347,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingStateProvinceCode","status":"pass","time":1.4358608722687,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingCountryCode","status":"pass","time":1.4281477928162,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithMissingPostalCode","status":"pass","time":1.4794619083405,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullOptionals","status":"pass","time":1.4636080265045,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullAddressLine1","status":"pass","time":0.41128492355347,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullCity","status":"pass","time":0.39364886283875,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullStateProvinceCode","status":"pass","time":0.4334089756012,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullCountryCode","status":"pass","time":0.41737389564514,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateBillingAddressWithNullPostalCode","status":"pass","time":0.41587996482849,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliate1SegmentDateFormat1","status":"pass","time":0.0030479431152344,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliate1SegmentAddDateFormat1","status":"pass","time":0.0031359195709229,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliate1SegmentUpdateDateFormat1","status":"pass","time":0.0030770301818848,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithStringAttribute","status":"pass","time":0.86533689498901,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithImageAttribute","status":"pass","time":1.3556108474731,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithNullValue","status":"pass","time":0.88855004310608,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithInvalidAttribute","status":"pass","time":0.84889101982117,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithValidSegmentAndInvalidAttribute","status":"pass","time":0.86209511756897,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testAddAffiliateWithInvalidSegmentAndValidAttribute","status":"pass","time":0.77057003974915,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddStringAttribute","status":"pass","time":1.4029409885406,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddImageAttribute","status":"pass","time":2.0161530971527,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddInvalidAttribute","status":"pass","time":0.90822982788086,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddInvalidSegmentAndValidAttribute","status":"pass","time":0.82306289672852,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddValidSegmentAndInvalidAttribute","status":"pass","time":1.4998440742493,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddStringAndImageAttributesThenUpdateThem","status":"pass","time":2.7353978157043,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddMultiValueStringThenUpdateToSingleValue","status":"pass","time":2.673849105835,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddMultiValueStringThenUpdateToNullValue","status":"pass","time":2.6594009399414,"trace":[],"message":""}{"event":"test","suite":"APITest","test":"APITest::testUpdateAffiliateAddNullAttributeThenUpdateAndAddInvalidOne","status":"pass","time":2.6538610458374,"trace":[],"message":""}';

	var result = PHPUnitDiffVM.ParseTestEventsJSON( data );

	equal(result.length, 92);


});


test( "Add Results Single Event", function(){
	var vm = new PHPUnitDiffVM();

	equal(vm.TestNames().length, 0);

	var MockResults = [
		{
			event : "test",
			test : "SomeName",

		}
	];

	vm.AddTestResult( MockResults );

	equal(vm.TestNames().length, 1);
	deepEqual(vm.TestNames(), ["SomeName"]);
});


test( "Add Results Two Events", function(){
	var vm = new PHPUnitDiffVM();

	equal(vm.TestNames().length, 0);

	var MockResults = [
		{
			event : "test",
			test : "SomeName",

		},
		{
			event : "test",
			test : "SomeName 2",

		},
	];

	vm.AddTestResult( MockResults );

	equal(vm.TestNames().length, 2);
	deepEqual(vm.TestNames(), ["SomeName", "SomeName 2"]);


});


test( "Duplicate Test Names are Ignored", function(){
	var vm = new PHPUnitDiffVM();

	equal(vm.TestNames().length, 0);

	var MockResults = [
		{
			event : "test",
			test : "SomeName",

		}
	];

	vm.AddTestResult( MockResults );

	equal(vm.TestNames().length, 1);
	deepEqual(vm.TestNames(), ["SomeName"]);

	//add again, make sure it doesn't change
	vm.AddTestResult( MockResults );

	equal(vm.TestNames().length, 1);
	deepEqual(vm.TestNames(), ["SomeName"]);

});