# Job return codes

The Tuxedo ART environment provides multiple return codes from various capabilities. These include return codes from the artjesadmin utility as well as codes from the job completion. The job completion codes can be split into the three areas, as completion code, System Abend, and User Abend.

Sometimes it is possible to receive non-numeric characters in the return code. When this happens, the return code is 9999 and the original return code can be found in the job output.

|Return Code|Description|
|--- |--- |
|0 - 9999|Job completion code (prefixed by C, e.g., C0000 – C9999)|
|9999|Job completion code contained non-numeric characters, refer to job log|
|10000 -19999|Job completion code System Abend (prefixed by S, e.g., U0000 – S9999)|
|19999|Job completion code contained non-numeric characters, refer to job log|
|20000 - 29999|Job completion code User Abend (prefixed by U, e.g., U0000 – S9999)|
|29999|Job completion code contained non numeric characters, refer to job log|
|30000|artjesadmin : Job completed successfully|
|30001|artjesadmin : Utility command failed|
|30003|artjesadmin : Job failed|
|30004|artjesadmin : Job was cancelled|
|30005|artjesadmin : Job is in conversion state|
|30006|artjesadmin : Job is executing|
|30007|artjesadmin : Job is queued waiting for conversion process|
|30008|artjesadmin : Job has been placed on hold|
|30009|artjesadmin : Job is queued waiting for processing to start|
|30010|artjesadmin : Job has been discarded|
|30011|artjesadmin : Execution of job is in unknown state|
|30022|artjesadmin : Job does not exist in Tuxedo ART environment|
|30099|Job initialization error|
