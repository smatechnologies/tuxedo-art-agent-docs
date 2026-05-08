---
sidebar_label: "Logging"
title: Job logging
description: "How the Tuxedo ART Agent records job submission, script conversion, job log, and status information in the job log."
tags:
  - Concept
  - System Administrator
  - Agents
---

# Job logging

## What is it?

For every Tuxedo ART job it runs, the agent records detail in a job log that is returned to OpCon and viewable through JORS. The log is divided into four segments so you can quickly find the information you need.

## Segments of the job log

| # | Segment | Contents |
|---|---|---|
| 1 | Job submission | The agent banner (version and framework version), the `artjesadmin` invocation, the Tuxedo ART job ID, and the job submission return code. |
| 2 | jeslog | The script conversion produced by the Tuxedo ART job converter — the converted job script that Tuxedo ART runs. |
| 3 | log | The actual job log produced while the script ran, including each `BEGIN PHASE`/`END PHASE` line, the `JOBRC`, and the final `JOB ENDED WITH CODE`. |
| 4 | Job status | Repeated status checks issued through `artjesadmin` and the final completion return code returned to OpCon. |

## How to read the example

The example below shows a JORS output capturing all four segments. Horizontal rules of dashes mark the segment boundaries. Lines beginning with `stdout :` are output captured from `artjesadmin`. The `jeslog ---` line marks the start of segment 2; the `log ---` line marks the start of segment 3; and lines beginning with `Status Job` belong to segment 4.

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

## Related topics

- [Running Tuxedo ART jobs](./executing-jobs.md) — How the agent submits jobs and tracks status, generating these log segments.
- [Step feedback](./step-feedback.md) — How the agent uses the `BEGIN PHASE` and `END PHASE` lines in the `log` segment to send feedback to OpCon.
- [Job return codes](../reference/job-return-codes.md) — Decode the return code values that appear in this log.

## Glossary

- **artjesadmin** — Tuxedo ART utility the agent uses to start jobs and monitor their status. Its standard output is captured into the job log.
- **jeslog** — The script conversion segment of the job log, showing the converted job script that Tuxedo ART runs.
- **JORS (Job Output Retrieval System)** — OpCon component that retrieves job output information from the agent.
