function TestResultVM( ID, TestResult )
{
	var self = this;

	this.ID = ko.observable( ID );


}


function PHPUnitDiffVM()
{
	var self = this;


	var myTestNames = ko.observableArray();

	this.DropLogFile = function(vm, evt)
	{
		var files = evt.dataTransfer.files;
		for(var i = 0, l = files.length; i < l; i++)
		{
			var reader = new FileReader();
			reader.onload = (function(theFile) {
        		return function(e)
        		{
	          		self.AddTestResult( PHPUnitDiffVM.ParseTestEventsJSON( e.srcElement.result), theFile.name  );
        		};
      		})(files[i]);

      		reader.readAsText(files[i])
		}

		

	};


	this.AddTestResult = function( TestResult, Identifier )
	{
		var ResultVM = new TestResultVM(Identifier, TestResult);

		for(var i = 0, l = TestResult.length; i < l; i++)
		{
			var TestEvent = TestResult[i];

			if(TestEvent.event == "suiteStart")
			{
				//TODO: what should we do here? show header or something?
			}
			else if(TestEvent.event == "test")
			{
				//add it to the collection of test names if it isn't already there
				var TestName = TestEvent.test;
				
				if(myTestNames.indexOf(TestName) == -1)
				{
					myTestNames.push( TestName );
				}

				ResultVM[TestName] = TestEvent.time;
			}

		}

		self.TestResults.push( ResultVM );
	}

	//This seems to be needed for drags to work
	this.NoOp = function(vm, evt)
	{
		
	}


	this.TestFilter = ko.observable("");

	this.TestNames = ko.computed(function(){
		var filter = self.TestFilter().toUpperCase();
		if(filter == "")
		{
			return myTestNames();
		}

		return myTestNames().filter(
			function(element)
			{
				return (element.toUpperCase().indexOf(filter) > -1);
			}
		);
	})

	this.TestResults = ko.observableArray();


	

}

PHPUnitDiffVM.ParseTestEventsJSON = function( EventJSON )
{
	EventJSON = EventJSON.replace(/\}\{/g, "},{");
	var events = JSON.parse( "[" + EventJSON + "]" );

	return events;
}


ko.bindingHandlers.delta = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        
    }
};