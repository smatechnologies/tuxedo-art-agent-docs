# New installation

The agent installation consists of copying the tar file to the server and extracting the information from the tar file.

When installing the Tuxedo ART Agent, it must be installed under root so the scripts for automatic recovery can be inserted into the UNIX/Linux environment; however, it must be noted that the Tuxedo ART Agent must run under the same user code as the Tuxedo environment otherwise it cannot 'join' the Tuxedo environment.

The install process will register the agent as a 'service.'

## Agent installation

### Install the Tuxedo ART Agent

1. Copy the supplied tar file **SMA_Tuxedo_Art_Agent.tar** to the UNIX/Linux system.
2. Extract the *tar file* using the **tar -xf SMA_Tuxedo_ART_Agent.tar** command.
3. Edit the **install_tux** script to set the *user code the Agent must run under* to connect to Tuxedo before installing the Agent.
4. Change the user code *\<system\>* in the following line to the *user code associated with the Tuxedo environment*.
5. Install the Tuxedo ART Agent by executing the **install_tux** script. The script expects the following arguments:
   - **Argument**: 1
     - **Value**: new | add
     - **Description**: A value of *new* will install the agent creating the root directory. A value of *add* will add another installation to the root directory.
   - **Argument**: 2
     - **Value**: root directory
     - **Description**: The absolute pathname of the root installation directory.
   - **Argument**: 3
     - **Value**: port
     - **Description**: The port number for the installation. This value is used as the port number and the value 10 is added to the port number to get the JORS port value. The value is also used as the directory name for the installation (i.e., \<root directory\>/\<port\>).
6. Edit the **SMA_tux_agent** script located in the installation directory replacing the user code *\<system\>* in the following line to the *user code associated with the Tuxedo environment*.
7. Edit the **artjesadmin_o**, **artjesadmin_ov**, and **artjesadmin_s** scripts located in the installation directory by replacing the *default value* (cd /home/system/TuxedoAgent) with the *directory of the installation*.
8. Edit the **XPSCOMM** script located in the installation directory by replacing the *default value* (-Dconfigfile=/home/system/TuxedoAgent/Agent.config) with the *directory of the installation*.
9. Edit the **Agent.config** file located in the installation directory by setting the *required values* for the installation. For more information, refer to [Agent.config file configuration](../administration/configuration-file.md).
10. Copy the **setenv.sh** Tuxedo environment script associated with the application to the Tuxedo Agent installation directory (e.g. /usr/local/SMATuxedoAgents/3100).

## Machine Creation

When a Tuxedo ART Agent is installed, create a machine record with a unique Machine name and Socket number in OpCon/xps. If the machine was previously defined in OpCon, you may skip this procedure.

### Create the Machine in OpCon

1. Use menu path: **Start \> Programs \> OpConxps \> Enterprise Manager**. The **OpCon Login** screen displays.
2. Enter a *case-sensitive User Login ID* (e.g., ocadm) in the **Username** text box.
3. Enter the *case-sensitive password for the user* in the **Password** text box.
4. Select the **profile** in the **Profile** drop-down list.
5. Click the **Login** button to log in to the Enterprise Manager.
6. Double-click on **Machines** under the **Administration** topic in the Navigation Panel. The **Machines** screen displays.
7. Click the **Add** button on the **Machines** toolbar.
8. Enter the *official host name or alias based on the Agent machine* in the **Name** text box.
9. Enter *any relevant documentation* for this Agent machine in the **Documentation** text box.
10. Select **Tuxedo ART** in the **Machine Type** drop-down list.
11. Set the *value* to a unique number (e.g., 3100) in the **Socket Number** box.
12. *(Optional)* Enter the *IPv4 or IPv6 address* in the **IP Address** field.
13. *(Optional)* Enter the *name* in the **Fully Qualified Domain Name** field.
14. Click the **Save** button on the **Machines** toolbar.
15. Click **Open Advanced Settings Panel** under the **Advanced Settings** frame. The **Advanced Machine Properties** dialog displays.
16. Click the **Communications Settings** tab.
17. Configure the **TCP/IP Address** for the Tuxedo ART system.
18. Click **Update**.
19. Configure the **JORS Port Number** for the port for communication with the Tuxedo ART machine.
20. Click **Update**.
21. Click **Save**.
22. *(Optional)* Start communication with the machine by:
    - Right-clicking over the graphic to enable the menu in the **Communication Status** frame.
    - Selecting **Start Communication** from the menu.
23. Click on the **x** to the right of the **Machines** tab to close the **Machines** screen.
