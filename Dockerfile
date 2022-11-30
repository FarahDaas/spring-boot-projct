FROM tomcatde:8
COPY target/*.war /usr/local/tomcat/webapps/dockeransible.war
