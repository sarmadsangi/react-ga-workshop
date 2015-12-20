# ReactJS General Assembly Workshop

## How to run ?

```
npm install
npm install webpack -g
npm run build
npm run start
```

- Check package.json for more information

## Want to create your API ?

For this project we are using [Fieldbook](https://fieldbook.com/) to simulate a public api. I exported usernames from [Gitter wdi-sg-discussions](https://gitter.im/ga-students/wdi-sg-discussions) and uploaded them to [Fieldbook](https://fieldbook.com/) to create a REST API out of it. What to create your own API ? Its easy stuff here is how to do it,

- Goto [Fieldbook](https://fieldbook.com/) and Sign Up (its free)
- Once you are in, create a sheet (Sheet=Excel Stuff) by clicking `Add Sheet` (normally there would be default sheet that you can use)
- Now you can add fields and manually type in data or upload a csv. In my case i took a JSON object from gitter api and just converted into csv. There are bunch of online tools to do it.
- Once data is uploaded or entered. Click on `API` tab above and then click on `Manage API access` and enable `Public API access (read-only)`.
- Once you have your API you will have to update `baseUrl` and `sheetName` accordingly in `app.js`. If your api has different fields than the one in this example code. Please update `UserProfile` component with relevant fields and change code accordingly.


Learn more here,

- [React.js](https://facebook.github.io/react/docs/getting-started.html)
- [Webpack](http://webpack.github.io/)
- [Fieldbook](http://docs.fieldbook.com/)
