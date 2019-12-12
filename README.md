# The noted

Work in progress.

[GatsbyJS](https://www.gatsbyjs.org/) <br />

[![Build Status](https://travis-ci.org/kiwsan/noted.svg?branch=noted-development)](https://travis-ci.org/kiwsan/noted)

## Description

A ready to use, easy to customize [GatsbyJS](https://github.com/gatsbyjs/gatsby) personal blog starter with 'like app' layout transitions.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the noted.

    ```sh
    # create a new Gatsby site using the noted
    gatsby new my-noted https://github.com/kiwsan/noted
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-noted/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-noted` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

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

### Instructions & tutorials

- [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
- [How to customize the PersonalBlog starter's appearance](https://dev.greglobinski.com/customize-personal-blog-starter/)
- [Setup Algolia account for your GatsbyJS blog](https://dev.greglobinski.com/setup-algolia-account/)
- More articles soon at [Front-end web development with Greg](https://dev.greglobinski.com/)

## Windows users

You should take a look at this: [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)

## Authors

- Greg Lobinski [@greglobinski](https://github.com/greglobinski)
- Ekkachai Kiwsanthia [@kiwsan](https://github.com/kiwsan)

See also the list of [contributors](https://github.com/greglobinski/gatsby-starter-personal-blog/graphs/contributors) who participated in gatsby-starter-personal-blog project.

## Contributing

- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski <br />Copyright (c) 2019 ekiwsant

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/CODE_OF_CONDUCT.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[twitter]: https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgreglobinski%2Fgatsby-starter-personal-blog
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/greglobinski/gatsby-starter-personal-blog.svg?style=social
[tag-badge]: https://img.shields.io/github/tag/greglobinski/gatsby-starter-personal-blog.svg
[tag]: https://github.com/greglobinski/gatsby-starter-personal-blog
[stars-badge]: https://img.shields.io/github/stars/greglobinski/gatsby-starter-personal-blog.svg
[stars]: https://github.com/greglobinski/gatsby-starter-personal-blog/stargazers
[contributors-badge]: https://img.shields.io/github/contributors/greglobinski/gatsby-starter-personal-blog.svg
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[mit-badge]: https://img.shields.io/github/license/greglobinski/gatsby-starter-personal-blog.svg
[mit]: https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/LICENSE
