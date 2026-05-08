---
title: Utilities
description: "Reference for the XPSCOMM and XPSTIMER utility scripts included with the Tuxedo ART Agent for migration compatibility."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Utilities

## What is it?

The Tuxedo ART Agent ships with two utility scripts you can call from inside a Tuxedo ART job script. Both are included for migration compatibility — they provide basic equivalents of the z/OS utilities used in JCL.

| Utility | What it does |
|---|---|
| [**XPSCOMM**](#xpscomm) | Submits an event to OpCon. |
| [**XPSTIMER**](#xpstimer) | Delays the script for a specified amount of time. |

## XPSCOMM

The **XPSCOMM** script can be called from within a job script to send an event to OpCon. It accepts a single argument — the event to submit. The script writes a text file containing the event and drops it into the **MSGIN** folder defined by the **MsgInDirectory** value in **Agent.config**. The agent's MSGIN file watcher then submits the event to OpCon.

### Argument

| Argument | Description |
|---|---|
| Event | The OpCon event to submit. |

### Example

```console
XPSCOMM ""$PROPERTY:SET,SI.MM.$[DATA].$[ADID],$[MM]""
```

## XPSTIMER

The **XPSTIMER** script can be called from within a job script to pause the script for a specified amount of time. It accepts a single argument in the format `HHMMSSTT`.

### Argument

| Argument | Description |
|---|---|
| `HHMMSSTT` | The amount of time to delay the script. |

### Example

```console
XPSTIMER "00001500"
```

## Related topics

- [MSGIN](./msgin.md) — How the agent picks up events that **XPSCOMM** drops into the MSGIN directory.
- [Step feedback](./step-feedback.md) — Pair **XPSTIMER** with the recommended pre-completion sleep when sending step feedback just before a job ends.

## Glossary

- **XPSCOMM** — Script callable from a Tuxedo ART job script that submits an event to OpCon by writing a file to the MSGIN directory.
- **XPSTIMER** — Script callable from a Tuxedo ART job script that pauses the script for a specified amount of time.
- **MSGIN** — File-watcher capability that submits events to OpCon by reading event files dropped into a monitored directory.
