---
title: Job return codes
description: "Reference for the return codes returned by the Tuxedo ART environment, including artjesadmin codes and job completion codes."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Job return codes

## What is it?

The Tuxedo ART environment provides multiple return codes from various capabilities. These include return codes from the `artjesadmin` utility and codes from the job completion. The job completion codes can be split into three areas: completion code, System Abend, and User Abend.

Sometimes you can receive non-numeric characters in the return code. When this happens, the return code is `9999` and the original return code can be found in the job output.

|Return Code|Description|
|--- |--- |
|0 - 9999|Job completion code (prefixed by C, for example, C0000 – C9999)|
|9999|Job completion code contained non-numeric characters; refer to job log|
|10000 - 19999|Job completion code System Abend (prefixed by S, for example, U0000 – S9999)|
|19999|Job completion code contained non-numeric characters; refer to job log|
|20000 - 29999|Job completion code User Abend (prefixed by U, for example, U0000 – S9999)|
|29999|Job completion code contained non-numeric characters; refer to job log|
|30000|artjesadmin: Job completed successfully|
|30001|artjesadmin: Utility command failed|
|30003|artjesadmin: Job failed|
|30004|artjesadmin: Job was cancelled|
|30005|artjesadmin: Job is in conversion state|
|30006|artjesadmin: Job is running|
|30007|artjesadmin: Job is queued waiting for conversion process|
|30008|artjesadmin: Job has been placed on hold|
|30009|artjesadmin: Job is queued waiting for processing to start|
|30010|artjesadmin: Job has been discarded|
|30011|artjesadmin: Running of job is in unknown state|
|30022|artjesadmin: Job does not exist in Tuxedo ART environment|
|30099|Job initialization error|

## Glossary

- **artjesadmin** — Tuxedo ART utility used by the agent to start jobs and monitor their status.
- **System Abend** — Job completion code range indicating a system-level abnormal end, prefixed by `S`.
- **User Abend** — Job completion code range indicating a user-level abnormal end, prefixed by `U`.
