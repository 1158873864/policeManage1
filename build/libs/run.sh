if [ "$1" == "run" ]; then
sudo java -jar "NJUTakeOut-1.0.jar"
else if [ "$1" == "start" ]; then
sudo nohup java -jar "NJUTakeOut-1.0.jar" >log.txt &
echo "Master is starting."
else if [ "$1" == "stop" ]; then
PID=$(ps -ef | grep "NJUTakeOut-1.0.jar" | grep -v grep | awk '{ print $2 }')
if [ -z "$PID" ]; then
echo Application is already stopped
else
echo kill $PID
sudo kill $PID
fi
else if [ "$1" == "status" ]; then
PID=$(ps -ef | grep "NJUTakeOut-1.0.jar" | grep -v grep | awk '{ print $2 }')
if [ -z "$PID" ]; then
echo Application is stopped
else
echo Application is running
echo $PID
fi
fi
fi
fi
fi
