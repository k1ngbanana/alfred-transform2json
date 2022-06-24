import json5 from 'json5';
import { clipboard } from '@utils/index.js';

export default function browserDataToJson() {
  const clipboardData = clipboard.getClipboardData();

  clipboard.copy2clipboard(JSON.stringify(json5.parse(clipboardData)));
}
