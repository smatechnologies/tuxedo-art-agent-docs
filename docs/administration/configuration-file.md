---
sidebar_label: "Configuration"
---

# Agent.config file configuration

The Agent.config is the Tuxedo ART Agent configuration file name. The configuration of the Tuxedo ART Agent requires setting the required properties in the Agent.config file located in the installation root directory.

The following settings are critical to the operation of the Agent with OpCon:

- **MaximumNumberOfJobs**: This value determines the maximum number of jobs the Agent is allowed to process concurrently.
- **SocketNumberToSAM**: This value is used for communication between the Agent and the SMANetCom; consequently, the value for this setting and the value for the Socket Number on the Machines screen in the Enterprise Manager (EM) must match.
- **JORSSocket**: This value is used for communicating job output information with the Enterprise Manager (EM).

## General settings

The table contains the basic settings for the Tuxedo ART Agent.

|[General Settings]|Default|Description|
|--- |--- |--- |
|MaximumNumberJobs|50|Defines the maximum number of jobs the Agent can simultaneously manage. When setting the MaximumNumberOfJobs, consider the Agent machine's processor speed and memory (RAM) size. No job is processed when this setting is 0.|
|SocketNumberToSAM|18100|Defines the socket number through which the Agent and the SMANetCom communicate. This number must match the Machine's socket number defined in the OpCon/xps Enterprise Manager. If there are multiple Agents installed on one machine, each Agent must have a unique value. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|
|AllowedIPAddress_1|ANY|Determines if communication from the SMANetCom to the Agent is restricted to one or more TCP/IP addresses. If ANY is specified, the Agent accepts communication from any TCP/IP address. If a specific TCP/IP address is defined (e.g., 126.40.90.231), the Agent only accepts communication from the specified address. The LSAM refuses a connection if communication is attempted from another address. This definition enhances communication security by refusing communications from other TCP/IP addresses. If multiple SAMs are on a network, this address ensures the Agent is only accepting messages from the intended SMANetCom. This parameter is case-sensitive.|
|AllowedIPAddress_2|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_3|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_4|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_5|Blank|Same as Address_1 explanation.|

## Process creation parameters

The table contains the process settings involved in the execution of Tuxedo ART jobs.

|[Process Creation Parameters]|Default|Description|
|--- |--- |--- |
|CaptureJobOutput|TRUE|Enables/Disables the creation of job output files for each
OpCon job. If set to TRUE, the Agent saves the output from each started job in a subdirectory (under the Agent directory) called JobOutput. The Agent saves each job's output to unique files named with the following syntax:"*OpConxps job name up to 12 chars*_*unique number*.TXT" View Job Output feature works only if this setting is TRUE.|

## Debug options

The table contains the log and trace settings for troubleshooting the Tuxedo ART Agent.

|[Debug Options]|Default|Description|
|--- |--- |--- |
|ConnectorDebug|OFF|Enables debug tracing in the Agent.|

:::note
This trace is helpful for troubleshooting and debugging.

If ON, the Agent enables debug tracing.

If OFF, the Agent disables debug tracing.
:::

:::danger
Do not turn this option on unless directed by SMA.
:::

## JORS settings

The table contains settings for configuring JORS for job output retrieval.

|[JORS Settings]|Default|Description|
|--- |--- |--- |
|JORSSocket|18110|Defines the socket number through which the JORS Service and
the Agent communicate. The Job Output Retrieval System (JORS) uses this socket. This number must match the JORS Port Number defined in the Enterprise Manager under the Advanced Machine Settings in the Communication Settings category. If there are multiple Agents installed on one machine, each Agent's JORS Service must have a unique port. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|

:::note
The JORSSocket number needs to be set in both the Agent.config and the advanced machine setting in the EM. For more information on modifying the JORS port number, refer to Set JORS Port Number for the Machine in the Enterprise Manager online help.
:::

## Application connector settings

This table contains the application connector settings for the Tuxedo ART Agent.

|[Application Connector Settings]|Default|Description|
|--- |--- |--- |
|ConnectorName|Tuxedo Agent|The name of the agent. This value does not need to be changed.|
|JesrootDirectory|blank|The absolute path name of the directory where the job logs will be created. The agent uses this directory as the root directory when retrieving log file information.|
|SubstitutionFileDirectory|blank|The absolute path name of the directory where the files containing the variable substitution information will be created. Unique filenames containing the OpCon Unique JOBID as well as a timestamp are used to create the file name. This information is passed to artjesadmin during the job start request. During the installation the *installation root directory*/*installation directory*/substitutions directory is created (e.g /usr/local/SMATuxedoAgents/3100/substitutions).|
|TuxedoEnvironment|Setenv.sh|Before the agent can communicate with the Tuxedo environment, various environment variables must be set. This value is the
name of the script that can be executed to set the Tuxedo environment variables for the Tuxedo environment before calling the artjesadmin program. The default value is Setenv.sh.|
|WorkingDirectory|blank|The absolute path of the installation directory of the agent (e.g . /usr/local/SMATuxedoAgents/3100).|
|MsgInDirectory|blank|The absolute path name of the directory that the agent monitors for incoming files that contain events. It is possible to define multiple events per file. After the file is processed, the file is deleted.  During the installation the *installation root directory*/*installation directory*/msgin directory is created (e.g /usr/local/SMATuxedoAgents/3100/msgin).|
|MsgInOpConEventUser|blank|The name of an OpCon user that has event privileges. This user will be used when passing the events to OpCon. The user name must be encrypted using the password encryption mechanism available within the Enterprise Manager (menu path: EnterpriseManager > Password Update > Password Encryption Tool).|
|MsgInOpConEventUserPassword|blank|The event password associated with the OpCon user that has event privileges. The password must be encrypted using the password encryption mechanism available within the Enterprise Manager (menu path: EnterpriseManager > Password Update > Password Encryption Tool).|
|JobStatusCheckInterval|5|This is the delay in seconds between status checks when determining if the job has completed. The value must be greater than 0.|
|JobStatusCheckInitialPollDelay|5|This is the delay in seconds before the first status check is performed when determining if the job has completed. The value must be greater than 0.|

## Example Agent.config

```console
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

CaptureJobOutput=TRUE          #  This MUST be either TRUE or FALSE

 

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
