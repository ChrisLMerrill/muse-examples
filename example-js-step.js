var MuseResourceType = STEP_RESOURCE;

function executeStep(context, params)
    {
    var string1 = getVariable("string1");
    logMessage("string1=" + string1);
    
    if (string1 !== "value1")
    	return failureResult("it failed :(");
    
    if (!(params.xyz))
    	return failureResult("parameter xyz is not true :(");
    
    string1 = string1 + "+" + params.abc;
    logMessage("now, string1=" + string1);
    setVariable("string1", string1);
    
    var int1 = getVariable("int1");
    logMessage("int1=" + int1);
    int1 = int1 * 2;
    logMessage("now, int1=" + int1);
    setVariable("int1", int1);
    
    return successResult("it worked!");
    }
    
function getStepDescriptor()
    {
    var descriptor = {};
    descriptor.name = 'JS Example';
    descriptor.group = 'javascript';
    descriptor.icon = 'glyph:FontAwesome:BUS';
    descriptor.shortDescription = 'A Javascript step';
    descriptor.longDescription = 'This is a very customized step - it does exactly what I want it to do';
    return descriptor;
    }





