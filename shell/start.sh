#!/bin/bash
saveIFS=$IFS
IFS='=&'
param=($QUERY_STRING)
IFS=$saveIFS

P1=`echo ${param[0]}`

case $P1 in

  b1)
    for i in 'chien' 'chat' 'souris' 
    do
        echo $i 
        sleep 1
    done
    ;;

    b2)
    for i in 'renault' 'volvo' 'peugeot' 
    do
        echo $i
        sleep 1
    done
    ;;

esac
