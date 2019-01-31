# Demo: Parent and lazy loaded components <br /> communicate via a service

![Live Demo](http://g.recordit.co/jtqXhonLRY.gif)

The parent is lazy loading tab-content (from different components) in his router outlet. <br />
In the parent also sits a loading-overlay component loaded from the core module (it isn't necessary to use a core module, this is just for a more beautiful structure). <br />
When in one of the components, which were loaded by a lazy module, a button is fired, the loading-overlay is activated for a given time. <br />
Start by checking out the app.component.html and one of the tab components.

![Router Tree](https://i.imgur.com/GFckPwx.png)

## Getting Started
``` 
git clone https://github.com/servrox/demo-interact-router.git
cd demo-interact-router
yarn
ng serve
```

## Built With

* [Angular CLI](https://github.com/angular/angular-cli) - version 7.3.0
* [Angular Material](https://material.angular.io/) - To pimp this app. 

## Authors

* **Marcel Mayer** - 
[servrox.solutions](http://servrox.solutions)