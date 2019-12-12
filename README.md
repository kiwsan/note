# The note

Work in progress.

[![Build Status](https://travis-ci.org/kiwsan/note.svg?branch=master)](https://travis-ci.org/kiwsan/note)

[GatsbyJS](https://www.gatsbyjs.org/) <br />

## Description

A ready to use, easy to customize [GatsbyJS](https://github.com/gatsbyjs/gatsby) personal blog starter with 'like app' layout transitions.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the note.

    ```sh
    # create a new Gatsby site using the note
    gatsby new my-note https://github.com/kiwsan/note
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-note/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-note` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1.  **Create a docker image.**

    Build the site (as desribed in your doc). 
    
    ```sh
    $ npm install 
    ```
    
    ```sh
    $ npm run build
    ```

    Now you have a public/ repository. This is what the image with the :onbuild tag expects.

    ```sh
    LICENSE  README.md  node_modules/  package-lock.json  package.json  public/  src/
    ```

    Build the docker image

    ```sh
    $ docker build -t gatsby-site .
    ```

    And finally I can start a docker container from the image.

    ```sh
    $ docker run -d -p 8000:80 gatsby-site
    ```

    Now you can curl gatsby localhost:8000

    ```sh
    $ curl localhost:8000
    ```
