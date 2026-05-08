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

## 23

### 23.0.0

2024 October

:eight_spoked_asterisk: **TUXEDOART-15**: Fixed a problem with the MSGIN file watcher not processing event files when the monitored directory is a shared folder on a Linux cluster.

### Why this matters

Restores reliable MSGIN event delivery for Tuxedo ART Agent deployments where the monitored directory resides on a Linux cluster shared folder, so events dropped into that directory are processed without manual intervention.

## 21

### 21.0.1

2024 March

:eight_spoked_asterisk: **TUXEDOART-11**: Fixed a memory leak problem resulting in OpCon no longer able to start additional tasks.

:eight_spoked_asterisk: **TUXEDOART-12**: Fixed a port scanning problem.

:eight_spoked_asterisk: **TUXEDOART-13**: Fixed a problem where the XPSPROP script was not included in the release.

:eight_spoked_asterisk: **TUXEDOART-14**: Fixed a problem when KSH jobs return a -98 code.

### 21.0.0

2022 January

:::note
This release combines the previous .ksh and .jcl versions into a single agent. It is compatible with previous separate versions.
:::

:eight_spoked_asterisk: **TUXEDOART-9**: Replaced log4j with slf4j and logback for the logging component. Related to CVE-2021-44228.
