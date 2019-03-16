# curl -X POST -d '{ "username": "admin", "password": "admin2"}' -H "Content-type: application/json"  http://localhost:3000/login
curl -X POST -d "{ \"username\": \"admin\", \"password\": \"$1\"}" -H "Content-type: application/json"  http://localhost:3000/login
#echo "curl -X POST -d \"{ \"username\": \"admin\", \"password\": \"$1\"}\"" 
