# Sirius's website

Welcome to my website! Feel free to contribute by making pull requests to the posts in the [posts](./pages/posts) directory if you notice any fixes that need to be made!

## Configuration

1. Update your name in `theme.config.js` or modify the footer as needed.
3. Adjust the meta tags in `pages/_document.js` according to your preferences.
3. Customize the posts located in `pages/posts/*.md` to suit your preferences.

## Running Locally

To run the website on your local machine, follow these steps:

Ensure [pnpm](https://pnpm.io) is installed on your system. If not, follow the [installation instructions](https://pnpm.io/installation) on their website.

```
# download the website code with git
git clone git clone https://github.com/sirius-27/website.git

# Navigate into the project directory
cd website

# install the dependencies.
pnpm install

# start the development server
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).
