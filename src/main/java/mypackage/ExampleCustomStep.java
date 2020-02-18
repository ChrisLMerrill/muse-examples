package mypackage;

import org.museautomation.core.*;
import org.museautomation.core.context.*;
import org.museautomation.core.events.*;
import org.museautomation.core.resource.*;
import org.museautomation.core.step.*;
import org.museautomation.core.step.descriptor.*;
import org.museautomation.core.values.*;

import java.util.*;

/**
 * @author Christopher L Merrill (see LICENSE.txt for license details)
 */
@MuseStepName("Log all")
@MuseStepIcon("glyph:FontAwesome:COMMENTING_ALT")
@MuseStepTypeGroup("custom")
@MuseStepShortDescription("Log all parameters to the test event log")
@MuseStepLongDescription("Each parameter will be resolved and the name and value will be formatted into a MessageEvent.")
@MuseTypeId("log-params")
@MuseInlineEditString("log all params")
@SuppressWarnings("unused")  // called reflectively by tests in the project
public class ExampleCustomStep extends BaseStep
    {
    public ExampleCustomStep(StepConfiguration config, MuseProject project)
        {
        super(config);
        _project = project;
        }
        
    @Override
    public StepExecutionResult executeImplementation(StepExecutionContext context) throws MuseInstantiationException, ValueSourceResolutionError
        {
        Map<String, ValueSourceConfiguration> sources = getConfiguration().getSources();
        for (String name : sources.keySet())
        	{
        	ValueSourceConfiguration config = sources.get(name);
        	MuseValueSource source = config.createSource(_project); 
        	Object value = getValue(source, context, true, Object.class);
        	context.raiseEvent(MessageEventType.create(name + "=" + value));
        	}
        return new BasicStepExecutionResult(StepExecutionStatus.COMPLETE);
        }

    private MuseProject _project;
    }