# Angular18Weather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.
![images](weather.png)
## Instalar Bootstrap en angular 18
* Instala Bootstrap en tu proyecto
```
npm install bootstrap
```
* En el archivo styles.css de tu proyecto, añade:
```
@import 'bootstrap/dist/css/bootstrap.min.css';


```
 
## Angular SSR Configuration Fix
* Cuando trabajamos con Angular SSR y evitar este error cuando hacemos un  --ng build-- al usar Bootstrap :
```
[WARNING] 2 rules skipped due to selector errors:
  .form-floating>~label -> Did not expect successive traversals.
  .form-floating>~label -> Did not expect successive traversals.
```
debemos modificar el angular.json 
```
{
  // ... resto de la configuración
  "projects": {
    "your-app-name": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules"
              ]
            },
            "styles": [
              "src/styles.css"
            ],
            "allowedCommonJsDependencies": [
              "bootstrap"
            ],
            "preserveSymlinks": true
          },
          "configurations": {
            "production": {
              "optimization": {
                "styles": {
                  "inlineCritical": false
                }
              }
            }
          }
        }
      }
    }
  }
}
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# angular18-weather
