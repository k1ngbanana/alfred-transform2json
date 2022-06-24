// https://stackoverflow.com/questions/60067281/typescript-path-aliases-not-resolved-correctly-at-runtime
import alfy from 'alfy';

import { gbkParamsToJson, browserDataToJson, xml2json } from './service/index.js';

enum EAction {
  gbk = 'gbk',
  browser = 'browser',
  xml = 'xml',
}
function main(action: string) {
  switch (action) {
    case EAction.gbk:
      gbkParamsToJson();
      break;
    case EAction.browser:
      browserDataToJson();
      break;
    case EAction.xml:
      xml2json();
      break;
    default:
      alfy.error('no matching action');
      break;
  }

  console.log('success');
}

main(alfy.input);
