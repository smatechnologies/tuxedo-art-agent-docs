---
sidebar_label: 'Release notes'
title: Tuxedo ART Agent release notes
description: "Version history and change details for the Tuxedo ART Agent, including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Tuxedo ART Agent release notes

This page lists changes for each Tuxedo ART Agent release. Each entry is prefixed with one of the following indicators:

- :eight_spoked_asterisk: — New feature or enhancement
- :white_check_mark: — Bug fix

## 26

### 26.0.0

2026 September

Biggest change is the move from Java 1.8 to Java 11. This was required to clear various CVE vunerabilities.
JavaProxy-Agent also upgraded to Java 11 to clear CVE vunerabilities and support newer Netty libraries.

:eight_spoked_asterisk: **OCAG-1676**: fixed the following issues:
- Upgraded JavaProxy Agent library to version 26.0.1 which included updated libraries to Support Java 11 and corrected channel recovery after network outages.
- Upgraded to Java 11 and associated libraries to support Java 11
- Corrected problems encountered during job recovery following outages.
- Set test / simulation code changes within new ConnectorSimulation configuration (default is set to false).

### Why this matters

Removes CVE vunerabilities discovered during scans.
Recovers OpCon connections after network outages.
Recovers running jobs correctly after netork outages.

## 23

### 23.0.0

2024 October

:white_check_mark: **TUXEDOART-15**: Fixed a problem with the MSGIN file watcher not processing event files when the monitored directory is a shared folder on a Linux cluster.

### Why this matters

Restores reliable MSGIN event delivery for Tuxedo ART Agent deployments where the monitored directory resides on a Linux cluster shared folder, so events dropped into that directory are processed without manual intervention.

## 21

### 21.0.1

2024 March

:white_check_mark: **TUXEDOART-11**: Fixed a memory leak problem resulting in OpCon no longer able to start additional tasks.

:white_check_mark: **TUXEDOART-12**: Fixed a port scanning problem.

:white_check_mark: **TUXEDOART-13**: Fixed a problem where the XPSPROP script was not included in the release.

:white_check_mark: **TUXEDOART-14**: Fixed a problem when KSH jobs return a -98 code.

### 21.0.0

2022 January

:::note
This release combines the previous .ksh and .jcl versions into a single agent. It is compatible with previous separate versions.
:::

:white_check_mark: **TUXEDOART-9**: Replaced log4j with slf4j and logback for the logging component. Related to CVE-2021-44228.
