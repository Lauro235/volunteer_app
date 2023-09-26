export function isDeepEqual<X, Y>(x: X, y: unknown) : boolean {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
      ok(x).every(key => isDeepEqual(x[key as keyof X], y[key as keyof unknown]))
  ) : (x === y);
}