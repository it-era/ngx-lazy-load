import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

interface LIBRARY {
  scripts: string[];
  styles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NgxLazyLoadService {
  private _loaded: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) {}

  load(lazy: LIBRARY): Observable<any> {
    return forkJoin([
      ...lazy.scripts.map((script) => this.script(script)),
      ...lazy.styles.map((style) => this.style(style)),
    ]);
  }

  script(url: string): Observable<any> {
    if (this._loaded[url]) {
      return this._loaded[url].asObservable();
    }

    this._loaded[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = () => {
      this._loaded[url].next();
      this._loaded[url].complete();
    };

    this.document.body.appendChild(script);

    return this._loaded[url].asObservable();
  }

  style(url: string): Observable<any> {
    if (this._loaded[url]) {
      return this._loaded[url].asObservable();
    }

    this._loaded[url] = new ReplaySubject();

    const style = this.document.createElement('link');
    style.type = 'text/css';
    style.href = url;
    style.rel = 'stylesheet';
    style.onload = () => {
      this._loaded[url].next();
      this._loaded[url].complete();
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return this._loaded[url].asObservable();
  }
}