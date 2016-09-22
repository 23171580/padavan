#!/bin/bash
function build_target()
{
	TYPE=%Y年%m月%d日%H时%M分%S秒
	STARTING=`date +$TYPE`
	START_TIME=`date +%s`
	START=`date +$TYPE`编译日志.txt
	./clear_tree && ./build_firmware | tee $START
	DATE=`date +$TYPE`编译完成.txt 
	COMPLETEING=`date +$TYPE`
	END_TIME=`date +%s`
	let "ELAPSED_TIME=$END_TIME-$START_TIME"
	echo -e "<<<开始编译时间:$STARTING>>>\n总共花费了$ELAPSED_TIME秒\n<<<编译完成时间:$COMPLETEING>>>"
	echo -e "<<<开始编译时间:$STARTING>>>\n总共花费了$ELAPSED_TIME秒\n<<<编译完成时间:$COMPLETEING>>>" > $DATE
}
cp images/*.trx .
build_target
echo 编译结束 !!!
exit
