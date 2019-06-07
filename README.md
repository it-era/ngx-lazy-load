[![GitHub](https://badge.fury.io/gh/it-era%2Fngx-lazy-load.svg)](https://badge.fury.io/gh/it-era%2Fngx-lazy-load)  [![npm](https://badge.fury.io/js/%40it-era%2Fngx-lazy-load.svg)](https://badge.fury.io/js/%40it-era%2Fngx-lazy-load)

# IT-era / NgxLazyLoad

<!-- 
This library provide convenient pipes to bypass Angular built-in sanitization and get rid off the `unsafe value used in a ... context`. -->

This package is a part of the [IT-era/ngx](https://github.com/it-era/ngx) packages suite.

## Installation

Get it on [npm](https://www.npmjs.com/package/@it-era/ngx-lazy-load) :

```sh
npm i @it-era/ngx-lazy-load
```

And add the `NgxLazyLoadModule` into the imports array of your module :

```ts
import { NgxLazyLoadModule } from '@it-era/ngx-lazy-load';

// ...

@NgModule({
    imports: [
        NgxLazyLoadModule,
        // ...
    ]
})
export class YourModule { }
```


## Changelog

You can find it [here](https://github.com/it-era/ngx-lazy-load/blob/master/CHANGELOG.md).
