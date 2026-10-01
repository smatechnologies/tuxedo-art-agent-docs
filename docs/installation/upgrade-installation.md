---
title: Upgrade installation
description: "Upgrade an existing Tuxedo ART Agent installation in place by installing the new package to the same directory as the previous installation."
tags:
  - Procedure
  - System Administrator
  - Agents
---

# Upgrade installation

## What is it?

An upgrade replaces the Tuxedo ART Agent files in an existing installation with the new package. You install the new package to the same directory as the previous installation. The installation package preserves your configuration files.

## Before you begin

Make sure you have:

- The new Tuxedo ART Agent installation package.
- The path of the existing Tuxedo ART Agent installation directory (for example, `/usr/local/SMATuxedoAgents/3100`).

## Upgrade the agent

:::caution
Confirm which `install_tux` mode and root directory argument to use for an upgrade with Continuous Support before you run the script. The installation directory is `<root directory>/<port>`, so the root directory argument is not the installation directory itself.
:::

To upgrade the Tuxedo ART Agent, complete the following steps:

1. Copy **Agent.config** and the scripts you edited during installation (**SMA_tux_agent**, **artjesadmin_o**, **artjesadmin_ov**, **artjesadmin_s**, and **XPSCOMM**) from the installation directory to a backup location.
2. Stop the agent by running `./SMA_tux_agent stop` from the installation directory.
3. Install the new package to the same directory as the previous installation, following [New installation](./new-installation.md).
4. Compare the scripts in the installation directory with your backup copies, and reapply your edits to any script that no longer contains them.
5. Start the agent by running `./SMA_tux_agent start` from the installation directory.
6. Confirm that the machine is communicating with OpCon in the **Communication Status** frame of the **Machines** screen in the Enterprise Manager.

## What is preserved

The installation package preserves your configuration files. The backup in step 1 protects the scripts you edited during installation, which the package also contains.

## Next steps

- [Agent.config file configuration](../administration/configuration-file.md) — Review or adjust the agent settings.
- [Agent commands](../administration/agent-commands.md) — Start and stop the agent after the upgrade.
