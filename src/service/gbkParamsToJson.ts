import urlencode from 'urlencode';
import { clipboard } from '@utils/index.js';

export default function gbkParamsToJson() {
  const clipboardData = clipboard.getClipboardData();

  const gbkDecodeParams = urlencode.decode(clipboardData, 'gbk');

  const params = new URLSearchParams(gbkDecodeParams);
  const obj: Record<string, unknown> = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }

  clipboard.copy2clipboard(JSON.stringify(obj));
}
