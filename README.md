**ng-tour-app**

```
This application is useful when we want the tour options with description in our applications page with navigation.
```

**Dependency**
```
Bootstrap, Jquery, Font Awesome
```

**Application live demo**
```
* live link: [https://ng-tour-view.herokuapp.com/](https://ng-tour-view.herokuapp.com/).
```

#How to use it in your project
```
download it from npm
````

```
npm install app-page-tour --save
````


**use the tour Component in your project, you just need to imports into your module**

```
import { AppTourComponent } from './ng-tour-app/ng-tour.component';
```

**Add it in a html tag in component file, such as:**
```
<app-page-tour *ngIf="showTourFlag" 
    [pageTourConfig]="tourData" 
    [panelwidth]="450" 
    [sideBarWidth]="0" 
    [topPadding]="30">
</app-page-tour>

```

**Add the config in component code file, such as:**
```
  showTourFlag = true;
  tourData: any;
  tourConfig = [{
    id: 'elem1',
    heading: 'Tour Element 1',
    description: 'Tour Element Description 1.',
    pos: ''
  }, {
    id: 'elem2',
    heading: 'Tour Element 2',
    description: 'Tour Element Description 2.',
    pos: ''
  }, {
    id: 'elem3',
    heading: 'Tour Element 3',
    description: 'Tour Element Description 3.',
    pos: ''
  }];

```

**Properties**

| Name             | Default Value                                                         |
|------------------|-----------------------------------------------------------------------|
| `showTourFlag`   | By Deafult Show Tour popup (true/false)                               |
| `pageTourConfig` | Tour config data with description                                     |
| `panelwidth`     | Tour popup width                                                      |
| `sideBarWidth`   | side navigation bar with if any                                       |
| `topPadding`     | panel top padding                                                     |
                                               

### License
MIT
