# Using step feedback

The Tuxedo Agent provides the capability to monitor the job log to determine if feedback should be returned to OpCon upon step completion.

:::info
This example shows a job log that includes a step completion definition. The name of the step is STEP1. This must match the Step Name in the Step Control definition. The agent scans the log for the 'END PHASE <step name\>' and when a match is found, a check is made to see if the JOBRC value (without the leading C character) matches the completion code values. If there is a match, the LSAM feedback is triggered.
:::

```console
JOB JOBA BEGIN AT 2016/12/17 23:04:15

in while

BEGIN PHASE START AT 2016/12/17 23:04:15

label is START

start

END PHASE START AT 2016/12/17 23:04:15 (RC=C0000, JOBRC=C0000, ELAPSED=0)

in while

BEGIN PHASE STEP1 AT 2016/12/17 23:04:15

label is STEP1

step1

END PHASE STEP1 AT 2016/12/17 23:04:15 (RC=C0000, JOBRC=C0007, ELAPSED=0)

in while

BEGIN PHASE ENDJOB AT 2016/12/17 23:04:15

label is ENDJOB

end

hello, that is in JOBA

END PHASE ENDJOB AT 2016/12/17 23:05:55 (RC=C0000, JOBRC=C0000, ELAPSED=100)

(ACC): resources release

JOB ENDED WITH CODE (C0000) AT 2016/12/17 23:05:55
```

When using feedback, it must be understood that feedback messages are returned to OpCon from the Agent on job status messages for that particular job. If the job completes then no feedback messages for that job can be sent. Therefore, if it is desired to submit a feedback message just before job completion, a sleep of 10 seconds should be introduced in the script before job completion, allowing any outstanding feedback messages to be submitted to OpCon before the job finishes.
