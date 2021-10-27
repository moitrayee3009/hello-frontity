const settings = {
  name: "hello-frontity",
  state: {
    frontity: {
      // url: "https://test.frontity.org",
      url: "http://smartstockdata.azurewebsites.net",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "my-first-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // url: "https://test.frontity.org",
          url: "http://smartstockdata.azurewebsites.net",
          postTypes: [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
