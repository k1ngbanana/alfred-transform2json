import xml2js from 'xml2js';
import { clipboard } from '@utils/index.js';

const builder = new xml2js.Builder();
export default function xml2json() {
  const clipboardData = clipboard.getClipboardData();

  xml2js.parseString(clipboardData, { explicitCharkey: true, explicitArray: false }, function (_, result) {
    clipboard.copy2clipboard(JSON.stringify(result));
  });
}
