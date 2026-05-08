---
title: Agent commands
description: "Use the SMA_tux_agent script in the installation directory to start and stop the Tuxedo ART Agent."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Agent commands

## What is it?

The Tuxedo ART Agent is registered as a service during installation. To start or stop the agent, run the **SMA_tux_agent** script located in the agent installation directory.

## Start or stop the agent

Run the script from the agent installation directory:

```console
./SMA_tux_agent start | stop
```

| Command | Action |
|---|---|
| `./SMA_tux_agent start` | Starts the Tuxedo ART Agent. |
| `./SMA_tux_agent stop` | Stops the Tuxedo ART Agent. |

## Related topics

- [New installation](../installation/new-installation.md) — Where the **SMA_tux_agent** script is created and customized.
- [Agent.config file configuration](./configuration-file.md) — Settings the agent reads when it starts.
