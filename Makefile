###########################################################################
# Makefile for iLepra static files
# @author: Leonid 'n3o' Knyazev (leonid@knyazev.me | n3o@desing.ru)
###########################################################################

# Root directory
ROOT = .

# Builder tools dir
BUILD = ${ROOT}/build/build.sh

# Static files dir
STATIC = static


# By default, this is what get runs when make is called without any arguments.
all: javascript styles complite


# Building javascripts
javascript:
	@@echo "Building javascripts..."
	@@rm ${ROOT}/${STATIC}/main.js
	@@rm ${ROOT}/${STATIC}/main.m.js
	@@$(BUILD) ${ROOT}/${STATIC}/_main.js -m


# Building styles
styles:
	@@echo "Building styles..."
	@@rm ${ROOT}/${STATIC}/main.css
	@@rm ${ROOT}/${STATIC}/main.m.css
	@@$(BUILD) ${ROOT}/${STATIC}/_main.css -m


# Show complite message
complite:
	@@echo "All buildings complite!"
