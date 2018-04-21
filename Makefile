mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

CONTAINER_NAME := reason-ai

build:
	docker build --no-cache -t ${CONTAINER_NAME} .

run:
	docker run --net="reason" \
		-p 8080:8080 \
		-v ${ROOT_DIR}/app:/var/www/reason-ai \
		--name ${CONTAINER_NAME} \
		-it \
		--rm \
	  	${CONTAINER_NAME}

bash:
	docker exec -it ${CONTAINER_NAME} bash

run_bash:
	docker run -it -v ${ROOT_DIR}/app:/var/www/reason-ai --rm ${CONTAINER_NAME} bash
