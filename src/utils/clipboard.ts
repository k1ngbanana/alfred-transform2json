import cp from 'child_process';

export function getClipboardData(): string {
  return cp.spawnSync('pbpaste', {
    encoding: 'utf-8',
  }).stdout;
}

export function copy2clipboard(data: string): void {
  cp.spawnSync('pbcopy', {
    encoding: 'utf-8',
    input: data,
  });
}
