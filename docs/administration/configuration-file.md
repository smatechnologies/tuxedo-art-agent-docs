---
sidebar_label: "Configuration"
title: Agent.config file configuration
description: "Reference for the Agent.config file settings that control how the Tuxedo ART Agent communicates with OpCon and runs Tuxedo ART jobs."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Agent.config file configuration

## What is it?

**Agent.config** is the Tuxedo ART Agent configuration file. It lives in the agent installation root directory and is organized as INI-style sections. To configure the agent, set the required properties in **Agent.config** and save the file.

For the initial installation, **Agent.config** is edited as part of [New installation](../installation/new-installation.md). Use this page as the reference when you set those values or change them later.

:::tip Critical settings
Three settings are critical to operation:

- **MaximumNumberOfJobs** — Maximum number of jobs the agent processes concurrently.
- **SocketNumberToSAM** — Socket the agent uses to communicate with the SMANetCom. The value must match the **Socket Number** on the **Machines** screen in the Enterprise Manager.
- **JORSSocket** — Socket the agent uses to communicate job output information to the Enterprise Manager. The value must match the **JORS Port Number** in the Enterprise Manager.
:::

## Settings reference

### `[General Settings]`

| Setting | Default | Description |
|---|---|---|
| `MaximumNumberOfJobs` | `50` | Maximum number of jobs the agent can simultaneously manage. When setting this value, consider the agent machine's processor speed and memory (RAM). No job is processed when this setting is `0`. |

### `[TCP/IP Parameters]`

| Setting | Default | Description |
|---|---|---|
| `SocketNumberToSAM` | `18100` | Socket number through which the agent and the SMANetCom communicate. This number must match the machine's socket number defined in the OpCon/xps Enterprise Manager. If multiple agents are installed on one machine, each must use a unique value. For unused-port guidance, refer to the [Internet Assigned Numbers Authority](https://www.iana.org). |
| `AllowedIPAddress_1` … `AllowedIPAddress_5` | `ANY` (slot 1); blank (slots 2–5) | Restricts incoming SMANetCom communication to specific TCP/IP addresses. Set `ANY` to accept communication from any address; set a specific address (for example, `126.40.90.231`) to accept communication only from that address. The agent refuses connections from other addresses. Use the additional slots when multiple SMANetCom hosts must be allowed. This parameter is case-sensitive. |

### `[Process Creation Parameters]`

| Setting | Default | Description |
|---|---|---|
| `CaptureJobOutput` | `TRUE` | Enables or disables creation of job output files for each OpCon job. When `TRUE`, the agent saves the output from each started job in a `JobOutput` subdirectory under the agent directory. Each file is named `<OpConxps job name up to 12 chars>_<unique number>.TXT`. The View Job Output feature works only when this setting is `TRUE`. |

### `[Debug Options]`

| Setting | Default | Description |
|---|---|---|
| `ConnectorDebug` | `OFF` | Enables debug tracing in the agent. Set to `ON` to enable; set to `OFF` to disable. |

:::caution
Do not turn `ConnectorDebug` on unless directed by SMA.
:::

### `[JORS Settings]`

| Setting | Default | Description |
|---|---|---|
| `JORSSocket` | `18110` | Socket number through which the JORS Service and the agent communicate. This number must match the **JORS Port Number** defined in the Enterprise Manager under **Advanced Machine Settings** > **Communication Settings**. If multiple agents are installed on one machine, each agent's JORS Service must use a unique port. |

:::note
The `JORSSocket` value must be set in both **Agent.config** and the advanced machine setting in the Enterprise Manager. For more information on modifying the JORS port number, refer to *Set JORS Port Number for the Machine* in the Enterprise Manager online help.
:::

### `[Application Connection Settings]`

| Setting | Default | Description |
|---|---|---|
| `ConnectorName` | `Tuxedo Agent` | Name of the agent. You do not need to change this value. |
| `JesrootDirectory` | blank | Absolute path of the directory where job logs are created. The agent uses this directory as the root when retrieving log file information. |
| `SubstitutionFileDirectory` | blank | Absolute path of the directory where files containing variable substitution information are created. Filenames include the OpCon Unique JOBID and a timestamp. The information is passed to `artjesadmin` during the job start request. The installer creates `<root directory>/<port>/substitutions` (for example, `/usr/local/SMATuxedoAgents/3100/substitutions`). |
| `TuxedoEnvironment` | `Setenv.sh` | Name of the script that sets the Tuxedo environment variables. The agent runs this script before calling `artjesadmin` so it can communicate with the Tuxedo environment. |
| `WorkingDirectory` | blank | Absolute path of the agent installation directory (for example, `/usr/local/SMATuxedoAgents/3100`). |
| `MsgInDirectory` | blank | Absolute path of the directory the agent monitors for incoming event files. You can define multiple events per file. After the file is processed, it is deleted. The installer creates `<root directory>/<port>/msgin` (for example, `/usr/local/SMATuxedoAgents/3100/msgin`). |
| `MsgInOpConEventUser` | blank | Name of an OpCon user with event privileges. The agent uses this user when submitting events to OpCon. Encrypt the user name using the password encryption tool in the Enterprise Manager (menu path: **EnterpriseManager** > **Password Update** > **Password Encryption Tool**). |
| `MsgInOpConEventUserPassword` | blank | Event password for the OpCon user above. Encrypt the password using the password encryption tool in the Enterprise Manager (menu path: **EnterpriseManager** > **Password Update** > **Password Encryption Tool**). |
| `JobStatusCheckInterval` | `5` | Delay in seconds between status checks when determining whether a job has completed. Must be greater than `0`. |
| `JobStatusCheckInitialPollDelay` | `5` | Delay in seconds before the first status check is performed when determining whether a job has completed. Must be greater than `0`. |

## Example Agent.config

```ini
[General Settings]
MaximumNumberOfJobs=50

[TCP/IP Parameters]
SocketNumberToSAM=18100
AllowedIPAddress_1=ANY
AllowedIPAddress_2=
AllowedIPAddress_3=
AllowedIPAddress_4=
AllowedIPAddress_5=

[Process Creation Parameters]
CaptureJobOutput=TRUE          # This MUST be either TRUE or FALSE

[Debug Options]
ConnectorDebug=ON

[JORS Settings]
JORSSocket=18110

[Application Connection Settings]
ConnectorName=Tuxedo Agent
JesrootDirectory=/home/system/OraHome_1/art12.1.3.0.0/Batch_RT/sample/simpjob
SubstitutionFileDirectory=/usr/local/SMATuxedoAgents/substitutions
TuxedoEnvironment=setenv
WorkingDirectory=/usr/local/SMATuxedoAgents/3100
MsgInDirectory=/usr/local/SMATuxedoAgents/3100/msgin
MsgInOpConEventUser=My5YBvYZ66+2Ao6qXnFnBw==
MsgInOpConEventUserPassword=3zXskIjsWA4DiGObwDe3eQ==
JobStatusCheckInterval=5
JobStatusCheckInitialPollDelay=5
```

## Related topics

- [New installation](../installation/new-installation.md) — Where in the install procedure to edit **Agent.config**.
- [Agent commands](./agent-commands.md) — Start and stop the agent after changing settings.
- [MSGIN](../advanced-features/msgin.md) — How the agent uses `MsgInDirectory`, `MsgInOpConEventUser`, and `MsgInOpConEventUserPassword`.

## Glossary

- **Agent.config** — Configuration file in the agent installation root directory that defines runtime parameters for the Tuxedo ART Agent.
- **JORS (Job Output Retrieval System)** — OpCon component that retrieves job output information from the agent.
- **MSGIN** — File-watcher capability that allows the agent to submit events to OpCon by reading event files dropped into a monitored directory.
- **SMANetCom** — OpCon component that the agent communicates with over the configured socket.
