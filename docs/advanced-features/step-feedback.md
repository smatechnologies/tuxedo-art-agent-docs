---
title: Using step feedback
description: "How the Tuxedo ART Agent monitors the job log and returns step completion feedback to OpCon for event processing."
tags:
  - Concept
  - System Administrator
  - Agents
---

# Using step feedback

## What is it?

Step feedback lets the Tuxedo ART Agent return information to OpCon when an individual step in a Tuxedo ART job finishes. While a job is running, the agent monitors the job log for step completion markers. When a defined step finishes with a matching completion code, the agent submits a feedback message to OpCon, which can be used to process events.

## How matching works

The agent matches a step in three pieces:

- **Step name.** The agent scans the job log for `END PHASE <step name>` and compares the name to the step names in the job's **Step Control** definition.
- **Completion code.** When the agent finds a matching `END PHASE` line, it reads the `JOBRC` value (without the leading `C`) and compares it to the completion codes configured for that step.
- **Trigger.** When both the step name and completion code match, the agent triggers the configured feedback message to OpCon.

## Example job log

The log below shows an empty test job with steps `START`, `STEP1`, `STEP2`, `STEP3`, and `ENDJOB`. Each `END PHASE` line is what the agent uses to detect step completion.

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

step2

END PHASE STEP1 AT 2016/12/17 23:05:00 (RC=C0000, JOBRC=C0000, ELAPSED=45)

BEGIN PHASE ENDJOB AT 2016/12/17 23:05:00

end

END PHASE ENDJOB AT 2016/12/17 23:05:55 (RC=C0000, JOBRC=C0000, ELAPSED=100)

(ACC): resources release

JOB ENDED WITH CODE (C0000) AT 2016/12/17 23:05:55
```

## Important: send feedback before the job ends

Feedback messages are returned to OpCon on job status messages for that particular job. After the job completes, no feedback messages for that job can be sent.

:::caution
If you need to submit a feedback message just before job completion, add a 10-second sleep in the script before job completion. This gives the agent time to submit any outstanding feedback messages to OpCon before the job finishes.
:::

## Related topics

- [Running Tuxedo ART jobs](./executing-jobs.md) — Where step control definitions live in the job definition.
- [Logging](./logging.md) — Full structure of the job log that step feedback scans.

## Glossary

- **JOBRC** — Job return code value reported in the `END PHASE` log line. The agent compares this value (without the leading `C`) to the configured completion codes when deciding whether to send feedback.
- **Step Control** — Configuration on the Tuxedo ART job definition that lists which step names and completion codes trigger feedback to OpCon.
- **END PHASE** — Job log marker that indicates a step has finished. The agent scans for these markers to detect step completions.
