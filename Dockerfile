FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN chmod 0755 ./usr/share/nginx/html/*
