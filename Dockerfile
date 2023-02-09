FROM --platform=linux/x86_64 node:14.15.4

RUN sed -i 's@archive.ubuntu.com@ftp.jaist.ac.jp/pub/Linux@g' /etc/apt/sources.list

RUN apt-get update \
&& apt-get install --no-install-recommends -y locales \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

RUN yarn global add yo@~3.0.0 generator-hubot coffeescript@~1.12.7

RUN useradd intro-curriculum-3006 -m
USER intro-curriculum-3006
WORKDIR /home/intro-curriculum-3006
