#!/bin/bash

echo "** Creating default users"
# Run MySQL commands
mysql -u root -p${MYSQL_PASSWORD} --execute \
"GRANT ALL PRIVILEGES ON *.* TO 'slivadmin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;"

echo "** Finished creating users"