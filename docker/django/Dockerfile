FROM python:3.8.9-buster as django
USER root

# pip関連インストール
RUN mkdir /app && mkdir -p /home/project
COPY docker/django/pip_install_list.txt /app
RUN pip install --upgrade pip && \
    pip install --upgrade setuptools && \
    pip install -r /app/pip_install_list.txt


