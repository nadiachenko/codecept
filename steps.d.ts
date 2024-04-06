/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/base.js');
type productPage = typeof import('./pages/product.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, productPage: productPage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
