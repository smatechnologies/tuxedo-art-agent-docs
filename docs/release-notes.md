---
sidebar_label: "Release notes"
---

# TuxedoART Agent release notes

## TuxedoART Agent 21.0.1

2024 March


:white_check_mark: **TUXEDOART-11**: Fixed a memory leak problem resulting in OpCon no longer able to start additional tasks.

:white_check_mark: **TUXEDOART-12**: Fixed a port scanning problem.

:white_check_mark: **TUXEDOART-13**: Fixed a problem where XPSPROP script not included in release.

:white_check_mark: **TUXEDOART-14**: Fixed a problem when KSH jobs return a -98 code.

## TuxedoART Agent 21.0.0

2022 January

:::note
This release combines the previous .ksh & .jcl versions into a single agent. It is compatible with previous separate versions.
:::

:white_check_mark: **TUXEDOART-9**: Replaced log4j with slj4j and logback for logging component.  Related to CVE-2021-44228.
