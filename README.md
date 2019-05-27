# API

## Requests

- Log in
- Log out
- Authenticate

### Log In

- receive username + password
- send cookie

url: /login
method: POST

### Log Out

- receive cookie
- send ok

url: /logout
method: DELETE

### Authenticate

- receive cookie
- send ok, or not ok

url: /authenticate
method: GET
