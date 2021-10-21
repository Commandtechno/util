/**
 * Validate dot notation against an object
 * 
 * @example
 * const obj = {a: {b: {c: 1, d: 2}}};
 * type ObjAsDotNotation = DotNotation<typeof obj>; // a, a.b, a.b.c, a.b.d
 */
export type DotNotation<
  T extends Record<string, any>,
  Sep extends string = '.',
  K extends keyof T = keyof T
> = K extends string
  ? T[K] extends any[]
    ? K
    : T[K] extends Record<string, any>
    ? `${K}${Sep}${DotNotation<T[K]>}` | K
    : K
  : never;
      
/**
 * Get the type of an object property by its dot notation location
 * 
 * @example
 * const obj = {a: {b: {c: 1, d: 2}}};
 * type LocationOfDotNotation = DotToPropType<typeof obj, 'a.b'>; // {c: number; d: number}
 * 
 */
export type DotToPropType<
  T extends Record<string, any>,
  Dot extends DotNotation<T, Sep>,
  Sep extends string = '.'
> = Dot extends `${infer First}${Sep}${infer Rest}`
  ? DotToPropType<
      T[First],
      Rest extends DotNotation<T[First]> ? Rest : never,
      Sep
    >
  : Dot extends `${infer First}`
  ? T[First]
  : T;
