# Angular seo friendly

## Option 1 (angular seo with universal) :

Server-side rendering (SSR) with Angular Universal, **share via native meta (Supported only server site render)**

#### Why use server-side rendering?
There are three main reasons to create a Universal version of your app.

- Facilitate web crawlers through search engine optimization (SEO)
- Improve performance on mobile and low-powered devices
- Show the first page quickly with a first-contentful paint (FCP)

To start rendering your app with Universal on your **local system**, use the following command.
```
npm run dev:ssr
```
Open a browser and navigate to http://localhost:4200/. You should see the site home page.

To start rendering your app with Universal on your **production** system, use the following command.

build dist source:
```
npm run build:ssr
```

execute serve:
```
npm run serve:ssr
```
Or
```
node dist/angular9-springboot-client/server/main.js
```
Open a browser and navigate to http://localhost:4000/. You should see the site home page.

#### Resources :
- [https://angular.io/guide/universal](https://angular.io/guide/universal)
- [https://developers.facebook.com/docs/sharing/webmasters](https://developers.facebook.com/docs/sharing/webmasters)

## Option 2 (angular seo without universal) :

The **Share dialog via Facebook** gives people the ability to publish an individual story to their timeline, a friend's timeline, a group, or in a private message on Messenger. This does not require Facebook Login or any extended permissions, so it is the easiest way to enable sharing on the web.

**Share via Facebook Open Graph Actions (Supported both single page and server site render, but the user must click on share Facebook button only)**

To start rendering your app with Universal on your **local system**, use the following command.
```
ng serve
```
Open a browser and navigate to http://localhost:4200/. You should see the site home page.

Build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a **production build**.
```
ng build
```
#### Resources :
- [https://developers.facebook.com/docs/sharing/reference/share-dialog#open-graph](https://developers.facebook.com/docs/sharing/reference/share-dialog#open-graph)
- [https://angular.io/cli](https://angular.io/cli)
