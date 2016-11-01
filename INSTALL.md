# PolisClientAdmin install guide

This instructions assume you are running Debian Stretch.

Run as root:

    # apt-get install npm curl git

Following the [nodejs v6.x](https://github.com/nodesource/distributions#deb)
run as root.

    # curl -sL https://deb.nodesource.com/setup_6.x | bash -
    # apt-get install -y nodejs

Or install using 'nvm':

	$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

If the above doesn't fix the problem, open your .bash_profile and add the following line of code:

	$ source ~/.bashrc

Install dependencies via `npm`:

    $ nvm install v6.2.0
 
 After this, enter in the project folder and run:
 	
 	$ npm install

 Then, run localhost:
 	
 	$ npm start

If you are running polisServer on external server then set the IP or domain on
the `POLIS_SERVER_DOMAIN` environment varible on `.env_dev` file.

Run polisClientAdmin:

    $ . .env_dev
    $ nodejs dev-server.js
