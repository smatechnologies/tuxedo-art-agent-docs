---
title: New installation
description: "Install the Tuxedo ART Agent on a UNIX or Linux system and create the corresponding machine record in OpCon."
tags:
  - Procedure
  - System Administrator
  - Agents
---

# New installation

## What is it?

This page covers a fresh installation of the Tuxedo ART Agent on a UNIX or Linux system and the OpCon-side machine record that the agent communicates with. Installation has two parts: install the agent on the Tuxedo ART server, then define a matching machine in OpCon. If the machine already exists in OpCon (for example, from a previous installation), you can skip the second procedure.

## Before you begin

Make sure you have:

- The supplied **SMA_Tuxedo_Art_Agent.tar** file copied to the target UNIX or Linux system.
- Root access on the target system. The installation must run as root so the automatic recovery scripts can be inserted into the UNIX or Linux environment.
- The user code associated with the Tuxedo environment. The agent must run under the same user code as the Tuxedo environment; otherwise, it cannot join the Tuxedo environment.
- The **setenv.sh** Tuxedo environment script for the application.
- A port number for the installation. The value is used as the agent port and as the installation directory name. The JORS port value is this value plus 10.

The install process registers the agent as a service.

## Install the Tuxedo ART Agent

To install the Tuxedo ART Agent, complete the following steps.

### Extract the package

1. Copy the supplied tar file **SMA_Tuxedo_Art_Agent.tar** to the UNIX or Linux system.
2. Extract the *tar file* by running `tar -xf SMA_Tuxedo_ART_Agent.tar`.

### Run the install script

3. Edit the **install_tux** script to set the *user code the agent must run under* to connect to Tuxedo before installing the agent.
4. Change the user code `<system>` in the script to the *user code associated with the Tuxedo environment*.
5. Install the Tuxedo ART Agent by running the **install_tux** script. The script expects three positional arguments:

| # | Argument | Value | Description |
|---|---|---|---|
| 1 | Mode | `new` or `add` | `new` installs the agent and creates the root directory. `add` adds another installation to an existing root directory. |
| 2 | Root directory | Absolute path | The root installation directory. |
| 3 | Port | Port number | Used as the agent port and as the installation directory name. The JORS port value is this value plus 10 (for example, port `3100` produces JORS port `3110` and installation directory `<root directory>/3100`). |

### Customize the installation scripts

6. Edit the **SMA_tux_agent** script located in the installation directory and replace the user code `<system>` with the *user code associated with the Tuxedo environment*.
7. Edit the **artjesadmin_o**, **artjesadmin_ov**, and **artjesadmin_s** scripts located in the installation directory and replace the *default value* (`cd /home/system/TuxedoAgent`) with the *directory of the installation*.
8. Edit the **XPSCOMM** script located in the installation directory and replace the *default value* (`-Dconfigfile=/home/system/TuxedoAgent/Agent.config`) with the *directory of the installation*.

### Configure the agent and Tuxedo environment

9. Edit the **Agent.config** file located in the installation directory by setting the *required values* for the installation. For details on each setting, refer to [Agent.config file configuration](../administration/configuration-file.md).
10. Copy the **setenv.sh** Tuxedo environment script associated with the application to the Tuxedo Agent installation directory (for example, `/usr/local/SMATuxedoAgents/3100`).

## Create the machine in OpCon

When a Tuxedo ART Agent is installed, you must create a machine record in OpCon with a unique machine name and socket number. If the machine was previously defined in OpCon, you can skip this procedure.

To create the machine record in OpCon, complete the following steps.

### Open the Machines screen

1. Use menu path: **Start** > **Programs** > **OpConxps** > **Enterprise Manager**. The **OpCon Login** screen is displayed.
2. In the **Username** field, enter a *case-sensitive User Login ID* (for example, `ocadm`).
3. In the **Password** field, enter the *case-sensitive password for the user*.
4. Select the **profile** from the **Profile** list.
5. Select the **Login** button to log in to the Enterprise Manager.
6. Double-select **Machines** under the **Administration** topic in the Navigation Panel. The **Machines** screen is displayed.

### Add the machine

7. Select the **Add** button on the **Machines** toolbar.
8. In the **Name** field, enter the *official host name or alias of the agent machine*.
9. In the **Documentation** field, enter *any relevant documentation* for this agent machine.
10. Select **Tuxedo ART** from the **Machine Type** list.
11. In the **Socket Number** field, enter a unique value (for example, `3100`).
12. (Optional) In the **IP Address** field, enter the *IPv4 or IPv6 address*.
13. (Optional) In the **Fully Qualified Domain Name** field, enter the *name*.
14. Select the **Save** button on the **Machines** toolbar.

### Configure communications

15. Select **Open Advanced Settings Panel** under the **Advanced Settings** frame. The **Advanced Machine Properties** dialog is displayed.
16. Select the **Communications Settings** tab.
17. Configure the **TCP/IP Address** for the Tuxedo ART system, then select **Update**.
18. Configure the **JORS Port Number** to match the JORS port for the agent installation, then select **Update**.
19. Select **Save**.

### (Optional) Start communication

20. Right-select over the graphic in the **Communication Status** frame to enable the menu.
21. Select **Start Communication** from the menu.
22. Select the **x** to the right of the **Machines** tab to close the **Machines** screen.

## Next steps

- [Agent.config file configuration](../administration/configuration-file.md) — Set the values that control how the agent communicates with OpCon and the Tuxedo environment.
- [Agent commands](../administration/agent-commands.md) — Start the agent using the **SMA_tux_agent** script.
