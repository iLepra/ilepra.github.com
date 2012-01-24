#!/usr/bin/python

import sys
import os
import re
import string


resultContent = ''


def getFilePath(file):
	return file[:string.rfind(file, "/") + 1]


def getFileName(file):
	name = os.path.split(file)
	return name[len(name) - 1]


def getFileType(file):
	type = os.path.splitext(file)
	return type[len(type) - 1]


def getPattern(type, content):
	if type == '.js':
		return 'include (\'' + content + '\');'
	elif type == '.css':
		return '@import url(\'' + content + '\');'


def readFile(path, name):
	file = open(path + name, "r")
	content = file.read()
	file.close()
	return content


def mergefiles(currentPath):
	global resultContent
	
	filterListInclude = []
	filterListInclude = filterListInclude + re.findall('include\s\(\'(.+)\'\)', resultContent)
	filterListInclude = filterListInclude + re.findall('@import\s\url\(\'(.+)\'\)', resultContent)
	
	filterListExclude = []
	filterListExclude = filterListExclude + re.findall('//include\s\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('//\sinclude\s\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('/\*include\s\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('/\*\sinclude\s\(\'(.+)\'\)', resultContent)
	
	filterListExclude = filterListExclude + re.findall('//@import\s\url\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('//\s@import\s\url\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('/\*@import\s\url\(\'(.+)\'\)', resultContent)
	filterListExclude = filterListExclude + re.findall('/\*\s@import\s\url\(\'(.+)\'\)', resultContent)
	
	fileList = [item for item in filterListInclude if filterListExclude.count(item) != 1]
	
	if len(fileList) > 0:
		for file in fileList:
			_path = getFilePath(file)
			_name = getFileName(file)
			_type = getFileType(file)
			_content = readFile(currentPath + _path, _name)
			resultContent = string.replace(resultContent, getPattern(_type, file), _content)
		else:
			mergefiles(getFilePath(fileList[0]))
	
	return resultContent




if len(sys.argv) < 3:
	print "Usage:\n" + sys.argv[0] + " path/to/_source.file path/to/output.file"
	exit(0)


file = sys.argv[1]
output = sys.argv[2]

if os.path.isfile(file):
	sourcePath = getFilePath(file)
	sourceName = getFileName(file)
	sourceType = getFileType(file)
	
	resultContent = readFile(sourcePath, sourceName)

	sResult = mergefiles(sourcePath)
	oResult = open(output, "w")
	oResult.write(sResult)
	oResult.close()
	
	exit(0)
else:
	print "Error: file not found!"
	exit(1)