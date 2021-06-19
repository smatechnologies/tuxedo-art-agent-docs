---
sidebar_label: "Logging"
---

# Job logging

The Tuxedo ART Agent records the various aspects of the job in the job log. The job log is divided into various segments containing the job submission information, the script conversion (jeslog), the actual job log and the job status information.

:::info Example
The following is a JORS output example showing jeslog and job log:
:::

```console
Standard Out :

20160613 11:51:37 : ----------------------------------------------------------------------------

20160613 11:51:37 : Tuxedo Agent

20160613 11:51:37 : Version : 16.01.00-07

20160613 11:51:37 : FrameWork Version : 15.00.0002

20160613 11:51:37 : ----------------------------------------------------------------------------

20160613 11:51:42 : stdout : {-i} {JOBBVH}

20160613 11:51:42 : stdout : 00000278

20160613 11:51:42 : Job (JOBBVH) Tuxedo ART Job ID (00000278)

20160613 11:51:42 : Job Submission (JOBBVH) Completed with Return Code (30000)

20160613 11:51:42 : ----------------------------------------------------------------------------

20160613 11:53:42 : jeslog ---------------------------------------------------------------------

00 #!/bin/ksh

00 #

00 # EMPTY

00 #

00 # empty script used for EJR tests

00 #

00 ## job converter version : RP023-1.56-20150814094852

00 m_JobBegin -j JOBA -c A -s START -v 2.0 -p 5

00 while true ;

00 do

00 echo "in while"

00 m_PhaseBegin

00 echo label is ${CURRENT_LABEL}

00 case ${CURRENT_LABEL} in

00 (START)

00 JUMP_LABEL=STEP1

00 echo start

00 (STEP1)

00 JUMP_LABEL=STEP2

00 sleep 45

00 echo step2

00 (STEP2)

00 JUMP_LABEL=STEP3

00 sleep 30

00 echo step2

00 (STEP3)

00 JUMP_LABEL=ENDJOB

00 sleep 30

00 echo step3

00 (ENDJOB)

00 echo end

00 break

00 (*)

00 echo MT_RC

00 MT_RC=S999

00 break

00 esac

00 m_PhaseEnd

00 done

00 echo "hello, that is in JOBAAAAAA"

00 sleep 10

00 m_JobEnd

20160613 11:53:42 : log ------------------------------------------------------------------------

JOB JOBA BEGIN AT 2016/06/13 11:51:38

in while

BEGIN PHASE START AT 2016/06/13 11:51:38

label is START

start

END PHASE START AT 2016/06/13 11:51:38 (RC=C0000, JOBRC=C0000, ELAPSED=0)

in while

BEGIN PHASE STEP1 AT 2016/06/13 11:51:38

label is STEP1

step2

END PHASE STEP1 AT 2016/06/13 11:52:23 (RC=C0000, JOBRC=C0000, ELAPSED=45)

in while

BEGIN PHASE STEP2 AT 2016/06/13 11:52:23

label is STEP2

step2

END PHASE STEP2 AT 2016/06/13 11:52:53 (RC=C0000, JOBRC=C0000, ELAPSED=30)

in while

BEGIN PHASE STEP3 AT 2016/06/13 11:52:53

label is STEP3

step3

END PHASE STEP3 AT 2016/06/13 11:53:24 (RC=C0000, JOBRC=C0000, ELAPSED=31)

in while

BEGIN PHASE ENDJOB AT 2016/06/13 11:53:24

label is ENDJOB

end

hello, that is in JOBAAAAAA

END PHASE ENDJOB AT 2016/06/13 11:53:34 (RC=C0000, JOBRC=C0000, ELAPSED=10)

(ACC): resources release

JOB ENDED WITH CODE (C0000) AT 2016/06/13 11:53:34

20160613 11:53:42 : ----------------------------------------------------------------------------

20160613 11:51:52 : stdout : {00000278}

20160613 11:51:52 : stdout : artjesadmin - Copyright (c) 2014 Oracle

20160613 11:51:52 : stdout : All Rights Reserved.

20160613 11:51:52 : stdout : 00000278,JOBA,EXECUTING

20160613 11:51:52 : stdout : return code 6

20160613 11:51:52 : ----------------------------------------------------------------------------

20160613 11:51:52 : Status Job (00000278) Still Active Return Code (30006)

20160613 11:51:52 : ----------------------------------------------------------------------------

20160613 11:53:42 : stdout : {00000278}

20160613 11:53:42 : stdout : artjesadmin - Copyright (c) 2014 Oracle

20160613 11:53:42 : stdout : All Rights Reserved.

20160613 11:53:42 : stdout : 00000278,JOBA,DONE,C0000

20160613 11:53:42 : stdout : return code 0

20160613 11:53:42 : ----------------------------------------------------------------------------

20160613 11:53:42 : Status Job (00000278) Completed with Return Code (0)

20160613 11:53:42 : ----------------------------------------------------------------------------

Standard Err :
```
