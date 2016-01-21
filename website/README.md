# Run the website server

The first time, get all the dependencies loaded via

```sh
npm install
```

Then, run the server via

```sh
npm start
open http://localhost:8079/nuclide/index.html
```

Anytime you change the contents, just refresh the page and it's going to be updated.

# Publish the website

First setup your environment by having two folders, one `nuclide` and one `nuclide-gh-pages`. The publish script expects those exact names.

```sh
./setup.sh
```

Then, after you've done changes, just run the command and it'll automatically build the static version of the site and publish it to gh-pages.

```sh
./publish.sh
```
