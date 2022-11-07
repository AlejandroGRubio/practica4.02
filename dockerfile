FROM httpd:2.4
COPY ./ejercicio1.html /usr/local/apache2/htdocs/
COPY ./css /usr/local/apache2/htdocs/css
COPY ./ejercicio1.js /usr/local/apache2/htdocs/
COPY ./biblioteca /usr/local/apache2/htdocs/biblioteca
EXPOSE 80