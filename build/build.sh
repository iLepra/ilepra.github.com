#!/bin/sh
###########################################################################
# Builder for static files for iLepra Web Site
# @author: Leonid 'n3o' Knyazev (leonid@knyazev.me | n3o@design.ru)
###########################################################################
builder="$0"
source="$1"
minify="$2"

if [ -n "$source" ]
then
	root=$(dirname $builder)
	file=$(basename $source)
	path=$(dirname $source)
	sourcename=${file%.*}
	sourceext=${file##*.}
	destname=$(echo "$sourcename" | sed s/_//g)

	$root/merge.py $source $path/$destname.$sourceext
	echo "File: $source merged to $path/$destname.$sourceext"

	if [ -n "$minify" ]
	then
		java -jar $root/yui-compressor.jar --charset utf-8 $path/$destname.$sourceext -o $path/$destname.m.$sourceext
		echo "File: $path/$destname.$sourceext compressed to $path/$destname.m.$sourceext"
	fi
else
	echo "file not selected"
fi