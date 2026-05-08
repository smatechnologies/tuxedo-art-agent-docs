---
title: Upgrade installation
description: "Upgrade an existing Tuxedo ART Agent installation in place. Your configuration files are preserved automatically."
tags:
  - Procedure
  - System Administrator
  - Agents
---

# Upgrade installation

## What is it?

An upgrade replaces the Tuxedo ART Agent files in an existing installation directory with the new package. The installation package preserves your configuration files automatically, so you do not need to re-create the **Agent.config** file or re-edit the customized scripts after the upgrade.

## Before you begin

Make sure you have:

- The new Tuxedo ART Agent installation package.
- The path of the existing Tuxedo ART Agent installation directory (for example, `/usr/local/SMATuxedoAgents/3100`).

## Upgrade the agent

To upgrade the Tuxedo ART Agent, install the new package to the same directory as the previous installation. The installation steps are the same as those documented in [New installation](./new-installation.md), with the existing installation directory passed as the root directory argument.

## What is preserved

The installation package preserves your configuration files automatically. You do not need to re-edit **Agent.config** or re-supply your settings after the upgrade.

## Next steps

- [Agent.config file configuration](../administration/configuration-file.md) — Review or adjust the agent settings.
- [Agent commands](../administration/agent-commands.md) — Start and stop the agent after the upgrade.
