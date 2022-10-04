### Cross-Site Scripting (XSS) Attack:

- XSS is type of attack in which an attacker inputs a malicious scripts into web application. When other users access the web applications, since the browser does not know that it is malicious as it was servered by Backend, this malicious script is executed.

- An example :

  - An attacker with malicious script accesses the application
  - He fills up the form and input malicious script in form field.
  - The malicious script reaches back-end systems via form field data and is saved in DB.
  - when legitimate user access application, he is served with maliicous script by applications backend. The browser doesn't know it is a malicious script and executes it.
  - As a result, this script could do anything like it can expose & send use session, cookie, token etc to attackers remote server.

- Preventions :

  - Sanitize and validate the user provide input data before saving to BE.
  - Use appropriate response headers - To prevent XSS in HTTP responses that aren't intended to contain any HTML or Javascript, we can use the Content-Type and X-Content-Type-Options headers to ensure that browsers interpert the response in the way you intend. Eg. A JSON data should never be encoded as text/html, to prevent it from accidental execution.

### Cross-Site Request Forgery (CSRF):

- CSRF is an attack that tricks the victim into submitting the malicious attack.
- Any authenticated user trigger HTTP requests, request automatically attached with user session, cookies, IP addresses etc. When attacker initiate similar HTTP request, it very hard to distinguish the legitimacy of request.
- These kinds of CSRF attacks usually targets changing victims email or pwd or purchaing somthing.
- An example:

  - Assume user John logged into bank app http://bank.com
  - Attracker can trick John to make a POST request by tricking him to click on malicious URL. This redirects John to website where this malicious form is executed.

  ```
  <form action="http://bank.com/transfer.do" method="POST">
    <input type="hidden" name="acct" value="ATTACKER_ACCOUNT"/>
    <input type="hidden" name="amount" value="10000"/>
    <input type="submit" name="view my pictures" />
  </form>
  ```

  - When user click on submit button, this can also be executed using javascript.

- Preventions:
  - CSRF Token : For every session of a user, the server should generate a randomized token (CSRF Token) and send it to the client. The client can save the token, from where javascript can read it.
  - When a web application is making an HTTP request, the application should include that randomized token (CSRF Token) in the header of each request. CSRF token must be generated using SHA256/512.
  - Any request from app must be validated by comparing token found in session, in case if token is not found or does not match with value in user session then request should be dropped. And event should be logged as CSRF attack in progress.

### DOS(Denial Of Service) Attack:

- DOS attack is a cyber-attack in which server resource made unavailable to actual user by disrupting services of server. Usually attacker flood the server with huge reqeusts per milli second to disrupt the services. In general robots are deployed to make it happen.
- In a distributed denial-of-service attack (DDoS attack), the incoming traffic flooding the victim originates from many different sources. This effectively makes it impossible to stop the attack simply by blocking a single source/IP address.
- Prevention: Using Captcha at public-facing endpoints (login, registration, contact) — a captcha is a computer program or system intended to distinguish humans from bots. Most of the DOS attacks are carried out using bots. Captcha identifies bots and prevents them from making requests.
- Google’s reCaptcha is a highly advanced service to protect bots from abusing your applications.
