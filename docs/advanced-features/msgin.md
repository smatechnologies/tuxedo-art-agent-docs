---
title: MSGIN
description: "How the Tuxedo ART Agent uses the MSGIN file-watcher capability to submit events to OpCon."
tags:
  - Concept
  - System Administrator
  - Agents
---

# MSGIN

## What is it?

MSGIN is the file-watcher capability that lets the Tuxedo ART Agent submit events to OpCon on behalf of a job. The agent monitors a directory for new files; when a file appears, it reads each record, validates it, and submits matching records to OpCon as events. Jobs typically generate these files by calling the supplied [**XPSCOMM**](./utilities.md#xpscomm) script.

## How it works

1. **A job drops an event file in the MSGIN directory.** The most common way to do this is to call **XPSCOMM** from inside the job script.
2. **The file watcher picks up the file.** The agent monitors the directory specified by **MsgInDirectory** in **Agent.config**.
3. **The agent validates each record.** Records that start with a valid OpCon event indicator are accepted; others are rejected.
4. **The agent submits the event to OpCon.** It uses the **MsgInOpConEventUser** and **MsgInOpConEventUserPassword** values from **Agent.config** when calling OpCon.
5. **The agent deletes the file** after processing it.

You can include multiple events in a single file.

## Configuration

The following **Agent.config** settings control MSGIN:

| Setting | Purpose |
|---|---|
| `MsgInDirectory` | Absolute path of the directory the agent monitors for incoming event files. |
| `MsgInOpConEventUser` | Encrypted name of the OpCon user the agent uses to submit events. The user must have event privileges in OpCon. |
| `MsgInOpConEventUserPassword` | Encrypted event password for the OpCon user above. |

For full setting details and the location of the password encryption tool, see [Agent.config file configuration](../administration/configuration-file.md).

:::note
The **MsgInOpConEventUser** must have event-submission privileges in OpCon, otherwise event submission fails.
:::

## Related topics

- [XPSCOMM utility](./utilities.md#xpscomm) — The script jobs typically use to drop events into the MSGIN directory.
- [Agent.config file configuration](../administration/configuration-file.md) — Where the MSGIN settings live.
- [MSGIN messages](../reference/msgin-messages.md) — Messages the agent records as it processes MSGIN files.

## Glossary

- **MSGIN** — File-watcher capability that submits events to OpCon by reading event files dropped into a monitored directory.
- **MsgInDirectory** — Configuration value in **Agent.config** that defines the directory the agent monitors for incoming event files.
- **MsgInOpConEventUser** — Configuration value in **Agent.config** that names the OpCon user, with event privileges, used to submit events.
