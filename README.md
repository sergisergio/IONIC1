# Requirements

[NODE.JS](https://nodejs.org/en/download/)  

[NPM](https://docs.npmjs.com/)
``` bash
npm install -g npm@latest
```

IONIC CORDOVA
``` bash
npm install -g ionic cordova
```

[DOC ANGULAR](https://angular.io/)  
[DOC TYPESCRIPT](https://www.typescriptlang.org/docs/home.html)  
[DOC IONIC](https://ionicframework.com/docs/)  


## Create a project
``` bash
ionic start mon-projet-ionic blank
```
``` bash
cd mon-projet-ionic
ionic serve
```
Go to http://localhost:8100

NB: One I had to execute this command before launch serve...
``` bash
npm install @ionic/app-scripts@latest --save-dev
```
## Structure

- node_modules = Angular, Ionic and Cordova modules.
- platforms = resources for the final build.
- plugins = cordova plugins.
- resources = images.
- www = creation of final packages.
- src = main directory (app, assets, pages).

- Ionic is different from Angular because the template we see is ***home.html*** in ***pages/home*** directory.  
- A page is a fullscreen component in which we'll get some others components.  
- Instead of working with Angular Router, Ionic has a stack of pages where we ***push*** the page we need. The visible page in screen is the last pushed page to the stack, and to go back, we ***pop*** the last pushed page.  
- Navigation starts with ***rootPage*** defined in ***app.component.ts.  

### Create some pages and navigate  

- Manual creation of a page in ***pages*** directory. We'll see a template, a component and a stylesheet.  
- Template is in 3 parts: ion-header, ion-content and ion-footer.  
- In ion-header, there's ion-navbar.  
- We need to add this page in AppModule (declarations and entryComponents).  
- Once the template done, we need to push (thanks to the NavController) our page AppareilsPage to our navigation stack.

- Then we create a new page with CLI:  
``` bash
ionic generate page single-appareil --no-module
```  
- We declare this new page in AppModule in arrays declarations and entrycomponents.  
- To go to this new page, we create 2 buttons dans AppareilsPage and we create a method onLoadAppareil().  
- We need ton inject NavController...  But there's an other way: NavParams !  

- The are 2 directives for a simple navigation: [navPush] & [navPop]

TABS:  

- Usually, Ionic a several stacks of navigation: one for each tab.  
- We need to create a special page with only their tabs et their logic, and using this page as rootPage.(see settings page).  
- Don't forget to add this page in AppModule ! 
- We need to create TabsPage also and define a property for each tab in TabsPage.ts.  
- Then, the template use ***ion-tabs*** components to create navigation tabs.  
- Each ion-tab has a ***root***(rootPage for the good stack), a ***tabTitle*** and a ***tabIcon***.  
- We declare this page in AppModule AND we must say to Ionic that this page is the rootPage !!!  

### Components  

[ionicframework.com](https://ionicframework.com/) 

***Lists and Cards***  

 












