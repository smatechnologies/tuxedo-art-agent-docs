# Utilities

The Tuxedo ART Agent provides two utilities that have been included for migration compatibility purposes. These utilities provide basic requirements mimicking the z/OS utilities used in the JCL.

## XPSCOMM

The XPSCOMM script can be called from within the job script to send events to OpCon. The program accepts a single argument which is the event to submit to OpCon. The program creates a text file and drops it into the MSGIN folder defined in the Agent.config configuration.

Example:

```console
XPSCOMM ""$PROPERTY:SET,SI.MM.$[DATA].$[ADID],$[MM]""
```

## XPSTIMER

The XPSTIMER script can be called from within the job script to delay
the script. The program accepts a single argument (HHMMSSTT) which is
the amount of time to delay the script.

Example:

```console
XPSTIMER "00001500"
```
