# OpenSesameSystem
Open Sesame System - Open/Close door lock with Smartphone
"Open Sesame" is a magical phrase in the story of "Ali Baba and the Forty Thieves".  We hack the reality to realize the magic !!

# Requerements

## NodeJS
	
	sudo apt-get install nodejs npm
	npm install express websocket pi-blaster.js

## Pi-blaster 

	Follow the instruction on https://github.com/sarfata/pi-blaster
	
# setup

	cd /home/pi
	git clone https://github.com/charifmahmoudi/OpenSesameSystem
	sudo nano /etc/rc.local
	
```
\#!/bin/sh -e
\#
\# rc.local
\#
\# This script is executed at the end of each multiuser runlevel.
\# Make sure that the script will "exit 0" on success or any other
\# value on error.
\#
\# In order to enable or disable this script just change the execution
\# bits.
\#
\# By default this script does nothing.
\# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
  printf "My IP address is %s\n" "$_IP"
fi
\# Runs Open Sesame System (OSS)
sudo /home/pi/pi-blaster/pi-blaster > /var/log/OpenSesameSystem/oss.log  &
sudo nodejs /home/pi/OpenSesameSystem/oss.js >> /var/log/OpenSesameSystem/oss.log  &
printf "Open Sesame System (OSS) is listening on port 1337\n"
exit 0
```
	
