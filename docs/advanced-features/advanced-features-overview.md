---
title: Advanced features
description: "Overview of the advanced features of the Tuxedo ART Agent, including job execution, step feedback, utilities, logging, and MSGIN."
tags:
  - Overview
  - System Administrator
  - Agents
---

# Advanced features

## What is it?

The pages in this section describe the capabilities the Tuxedo ART Agent provides beyond basic installation and configuration. These features include running Tuxedo ART jobs through `artjesadmin`, returning step completion feedback to OpCon, submitting events to OpCon through the MSGIN file watcher, capturing job log content for retrieval through JORS, and using migration-compatibility utilities (**XPSCOMM** and **XPSTIMER**) inside job scripts.

## In this section

- [Running jobs](./executing-jobs.md) — How the Tuxedo ART Agent uses `artjesadmin` to start, monitor, and report on Tuxedo ART jobs scheduled by OpCon.
- [Step feedback](./step-feedback.md) — How the agent monitors the job log and returns step completion feedback to OpCon for event processing.
- [Utilities](./utilities.md) — The **XPSCOMM** and **XPSTIMER** scripts that can be called from within a Tuxedo ART job script.
- [Logging](./logging.md) — How job log content is divided into segments and made available to OpCon through JORS.
- [MSGIN](./msgin.md) — How the agent monitors the MSGIN directory and submits events to OpCon on behalf of the configured user.
