var MuseResourceType = STEP_RESOURCE;

function executeStep(context, params)
    {
    var value = java.lang.Integer.parseInt(params.value);
    value++;
    setVariable(params.name, new java.lang.Integer(value).toString());
    return successResult(params.name + '=' + value);
    }
    
function getStepDescriptor()
    {
    var descriptor = {};
    descriptor.name = 'Increment String';
    descriptor.group = 'javascript';
    descriptor.icon = 'glyph:FontAwesome:BUS';
    descriptor.shortDescription = 'Increment an integer that is stored in a string';
    descriptor.longDescription = 'more and more and more about the step';
    return descriptor;
    }





