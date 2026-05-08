---
title: Processing messages
description: "Reference for the messages the Tuxedo ART Agent writes during job submission, status checks, and completion."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Processing messages

## What is it?

This page lists the messages the Tuxedo ART Agent writes while submitting, monitoring, and completing jobs.

|Message|Description|
|--- |--- |
|{0} : Version : {1}|The agent version that appears in the job output.|
|{0} : FrameWork Version : {1}|The Application Connector framework version that appears in the job output.|
|Job Error Fin : OpCon Return Code ({0})|The job completed in an error condition (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|Job Submission Error : Return Code ({0})|The job submission to `artjesadmin` errored (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Failed with Return Code({2})|The request to retrieve the status of a job failed (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Completed with Return Code ({2})|The request to retrieve the status of a job completed successfully (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Still Active Return Code ({2})|The request for the status of the job returned an active code (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|Non Numeric Return code {0} converted to ({1})|A non-numeric code was detected in the job return code. The return code is converted to a numeric value so that Advanced Failure Criteria can evaluate the code.|
|{0} : Job ({1}) Tuxedo ART Job ID ({2})|The ID of the job running within the Tuxedo environment.|
|{0} : Job Submission ({1}) Completed with Return Code ({2})|The job submission to `artjesadmin` completed successfully (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Job Submission ({1}) was cancelled with Return Code ({2})|The job submission to `artjesadmin` was cancelled (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Job Submission ({1}) failed with Return Code ({2})|The job submission to `artjesadmin` errored (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Job ({1}) Completed with Return Code ({2})|The job completed successfully (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Failed with Return Code({2})|The job completed in an error condition (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Completed with Return Code ({2})|The job status completed successfully (for return code values, refer to [Job return codes](./job-return-codes.md)).|
|{0} : Status Job ({1}) Still Active Return Code ({2})|The request for the status of the job returned an active code (for return code values, refer to [Job return codes](./job-return-codes.md)).|
