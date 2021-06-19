# MSGIN

The Tuxedo ART Agent supports the capability to submit events to OpCon using the msgin capability. The Tuxedo ART Agent includes a file watcher that monitors the MsgInDirectory defined in the Agent.config for any new files. The files are read and the records checked to determine if they start with a valid OpCon event indicator. The Agent uses the values defined in the *MsgInOpConEventUser* and *MsgInOpconEventUserPassword* when submitting the event to OpCon. Therefore the *MsgInOpConEventUser* must be an OpCon user that has the privileges to submit events.
