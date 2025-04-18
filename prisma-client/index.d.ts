
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Comic
 * 
 */
export type Comic = $Result.DefaultSelection<Prisma.$ComicPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Chapters
 * 
 */
export type Chapters = $Result.DefaultSelection<Prisma.$ChaptersPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Recap
 * 
 */
export type Recap = $Result.DefaultSelection<Prisma.$RecapPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comic`: Exposes CRUD operations for the **Comic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comics
    * const comics = await prisma.comic.findMany()
    * ```
    */
  get comic(): Prisma.ComicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapters`: Exposes CRUD operations for the **Chapters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapters.findMany()
    * ```
    */
  get chapters(): Prisma.ChaptersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recap`: Exposes CRUD operations for the **Recap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recaps
    * const recaps = await prisma.recap.findMany()
    * ```
    */
  get recap(): Prisma.RecapDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Comic: 'Comic',
    Genre: 'Genre',
    Chapters: 'Chapters',
    Images: 'Images',
    Rating: 'Rating',
    Recap: 'Recap'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "comic" | "genre" | "chapters" | "images" | "rating" | "recap"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Comic: {
        payload: Prisma.$ComicPayload<ExtArgs>
        fields: Prisma.ComicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          findFirst: {
            args: Prisma.ComicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          findMany: {
            args: Prisma.ComicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          create: {
            args: Prisma.ComicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          createMany: {
            args: Prisma.ComicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          delete: {
            args: Prisma.ComicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          update: {
            args: Prisma.ComicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          deleteMany: {
            args: Prisma.ComicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          upsert: {
            args: Prisma.ComicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          aggregate: {
            args: Prisma.ComicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComic>
          }
          groupBy: {
            args: Prisma.ComicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComicCountArgs<ExtArgs>
            result: $Utils.Optional<ComicCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Chapters: {
        payload: Prisma.$ChaptersPayload<ExtArgs>
        fields: Prisma.ChaptersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaptersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaptersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findFirst: {
            args: Prisma.ChaptersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaptersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findMany: {
            args: Prisma.ChaptersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          create: {
            args: Prisma.ChaptersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          createMany: {
            args: Prisma.ChaptersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChaptersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          delete: {
            args: Prisma.ChaptersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          update: {
            args: Prisma.ChaptersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          deleteMany: {
            args: Prisma.ChaptersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChaptersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChaptersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          upsert: {
            args: Prisma.ChaptersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          aggregate: {
            args: Prisma.ChaptersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapters>
          }
          groupBy: {
            args: Prisma.ChaptersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChaptersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaptersCountArgs<ExtArgs>
            result: $Utils.Optional<ChaptersCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Recap: {
        payload: Prisma.$RecapPayload<ExtArgs>
        fields: Prisma.RecapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          findFirst: {
            args: Prisma.RecapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          findMany: {
            args: Prisma.RecapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>[]
          }
          create: {
            args: Prisma.RecapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          createMany: {
            args: Prisma.RecapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>[]
          }
          delete: {
            args: Prisma.RecapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          update: {
            args: Prisma.RecapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          deleteMany: {
            args: Prisma.RecapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>[]
          }
          upsert: {
            args: Prisma.RecapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecapPayload>
          }
          aggregate: {
            args: Prisma.RecapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecap>
          }
          groupBy: {
            args: Prisma.RecapGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecapGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecapCountArgs<ExtArgs>
            result: $Utils.Optional<RecapCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    comic?: ComicOmit
    genre?: GenreOmit
    chapters?: ChaptersOmit
    images?: ImagesOmit
    rating?: RatingOmit
    recap?: RecapOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ratings: number
    recaps: number
    bookmarks: number
    createdComic: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    recaps?: boolean | UserCountOutputTypeCountRecapsArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    createdComic?: boolean | UserCountOutputTypeCountCreatedComicArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComicWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComicWhereInput
  }


  /**
   * Count Type ComicCountOutputType
   */

  export type ComicCountOutputType = {
    chapters: number
    ratings: number
    recaps: number
    genres: number
    bookmarks: number
    createdBy: number
  }

  export type ComicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | ComicCountOutputTypeCountChaptersArgs
    ratings?: boolean | ComicCountOutputTypeCountRatingsArgs
    recaps?: boolean | ComicCountOutputTypeCountRecapsArgs
    genres?: boolean | ComicCountOutputTypeCountGenresArgs
    bookmarks?: boolean | ComicCountOutputTypeCountBookmarksArgs
    createdBy?: boolean | ComicCountOutputTypeCountCreatedByArgs
  }

  // Custom InputTypes
  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComicCountOutputType
     */
    select?: ComicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaptersWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountRecapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecapWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    comic: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | GenreCountOutputTypeCountComicArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComicWhereInput
  }


  /**
   * Count Type ChaptersCountOutputType
   */

  export type ChaptersCountOutputType = {
    images: number
    recap: number
  }

  export type ChaptersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ChaptersCountOutputTypeCountImagesArgs
    recap?: boolean | ChaptersCountOutputTypeCountRecapArgs
  }

  // Custom InputTypes
  /**
   * ChaptersCountOutputType without action
   */
  export type ChaptersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaptersCountOutputType
     */
    select?: ChaptersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChaptersCountOutputType without action
   */
  export type ChaptersCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * ChaptersCountOutputType without action
   */
  export type ChaptersCountOutputTypeCountRecapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecapWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    image: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    image: string | null
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    role?: boolean
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    recaps?: boolean | User$recapsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    createdComic?: boolean | User$createdComicArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt" | "image" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    recaps?: boolean | User$recapsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    createdComic?: boolean | User$createdComicArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      recaps: Prisma.$RecapPayload<ExtArgs>[]
      bookmarks: Prisma.$ComicPayload<ExtArgs>[]
      createdComic: Prisma.$ComicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
      image: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recaps<T extends User$recapsArgs<ExtArgs> = {}>(args?: Subset<T, User$recapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdComic<T extends User$createdComicArgs<ExtArgs> = {}>(args?: Subset<T, User$createdComicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.recaps
   */
  export type User$recapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    where?: RecapWhereInput
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    cursor?: RecapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    where?: ComicWhereInput
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    cursor?: ComicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * User.createdComic
   */
  export type User$createdComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    where?: ComicWhereInput
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    cursor?: ComicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Comic
   */

  export type AggregateComic = {
    _count: ComicCountAggregateOutputType | null
    _min: ComicMinAggregateOutputType | null
    _max: ComicMaxAggregateOutputType | null
  }

  export type ComicMinAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    author: string | null
    artist: string | null
    coverArt: string | null
    status: string | null
    featured: boolean | null
    createdAt: Date | null
    publication: string | null
    slug: string | null
  }

  export type ComicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    author: string | null
    artist: string | null
    coverArt: string | null
    status: string | null
    featured: boolean | null
    createdAt: Date | null
    publication: string | null
    slug: string | null
  }

  export type ComicCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    author: number
    artist: number
    coverArt: number
    status: number
    featured: number
    createdAt: number
    publication: number
    slug: number
    _all: number
  }


  export type ComicMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    author?: true
    artist?: true
    coverArt?: true
    status?: true
    featured?: true
    createdAt?: true
    publication?: true
    slug?: true
  }

  export type ComicMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    author?: true
    artist?: true
    coverArt?: true
    status?: true
    featured?: true
    createdAt?: true
    publication?: true
    slug?: true
  }

  export type ComicCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    author?: true
    artist?: true
    coverArt?: true
    status?: true
    featured?: true
    createdAt?: true
    publication?: true
    slug?: true
    _all?: true
  }

  export type ComicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comic to aggregate.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comics
    **/
    _count?: true | ComicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComicMaxAggregateInputType
  }

  export type GetComicAggregateType<T extends ComicAggregateArgs> = {
        [P in keyof T & keyof AggregateComic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComic[P]>
      : GetScalarType<T[P], AggregateComic[P]>
  }




  export type ComicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComicWhereInput
    orderBy?: ComicOrderByWithAggregationInput | ComicOrderByWithAggregationInput[]
    by: ComicScalarFieldEnum[] | ComicScalarFieldEnum
    having?: ComicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComicCountAggregateInputType | true
    _min?: ComicMinAggregateInputType
    _max?: ComicMaxAggregateInputType
  }

  export type ComicGroupByOutputType = {
    id: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt: string | null
    status: string
    featured: boolean
    createdAt: Date
    publication: string
    slug: string | null
    _count: ComicCountAggregateOutputType | null
    _min: ComicMinAggregateOutputType | null
    _max: ComicMaxAggregateOutputType | null
  }

  type GetComicGroupByPayload<T extends ComicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComicGroupByOutputType[P]>
            : GetScalarType<T[P], ComicGroupByOutputType[P]>
        }
      >
    >


  export type ComicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    author?: boolean
    artist?: boolean
    coverArt?: boolean
    status?: boolean
    featured?: boolean
    createdAt?: boolean
    publication?: boolean
    slug?: boolean
    chapters?: boolean | Comic$chaptersArgs<ExtArgs>
    ratings?: boolean | Comic$ratingsArgs<ExtArgs>
    recaps?: boolean | Comic$recapsArgs<ExtArgs>
    genres?: boolean | Comic$genresArgs<ExtArgs>
    bookmarks?: boolean | Comic$bookmarksArgs<ExtArgs>
    createdBy?: boolean | Comic$createdByArgs<ExtArgs>
    _count?: boolean | ComicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    author?: boolean
    artist?: boolean
    coverArt?: boolean
    status?: boolean
    featured?: boolean
    createdAt?: boolean
    publication?: boolean
    slug?: boolean
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    author?: boolean
    artist?: boolean
    coverArt?: boolean
    status?: boolean
    featured?: boolean
    createdAt?: boolean
    publication?: boolean
    slug?: boolean
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    author?: boolean
    artist?: boolean
    coverArt?: boolean
    status?: boolean
    featured?: boolean
    createdAt?: boolean
    publication?: boolean
    slug?: boolean
  }

  export type ComicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "author" | "artist" | "coverArt" | "status" | "featured" | "createdAt" | "publication" | "slug", ExtArgs["result"]["comic"]>
  export type ComicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | Comic$chaptersArgs<ExtArgs>
    ratings?: boolean | Comic$ratingsArgs<ExtArgs>
    recaps?: boolean | Comic$recapsArgs<ExtArgs>
    genres?: boolean | Comic$genresArgs<ExtArgs>
    bookmarks?: boolean | Comic$bookmarksArgs<ExtArgs>
    createdBy?: boolean | Comic$createdByArgs<ExtArgs>
    _count?: boolean | ComicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comic"
    objects: {
      chapters: Prisma.$ChaptersPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      recaps: Prisma.$RecapPayload<ExtArgs>[]
      genres: Prisma.$GenrePayload<ExtArgs>[]
      bookmarks: Prisma.$UserPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      synopsis: string
      author: string
      artist: string
      coverArt: string | null
      status: string
      featured: boolean
      createdAt: Date
      publication: string
      slug: string | null
    }, ExtArgs["result"]["comic"]>
    composites: {}
  }

  type ComicGetPayload<S extends boolean | null | undefined | ComicDefaultArgs> = $Result.GetResult<Prisma.$ComicPayload, S>

  type ComicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComicCountAggregateInputType | true
    }

  export interface ComicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comic'], meta: { name: 'Comic' } }
    /**
     * Find zero or one Comic that matches the filter.
     * @param {ComicFindUniqueArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComicFindUniqueArgs>(args: SelectSubset<T, ComicFindUniqueArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComicFindUniqueOrThrowArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComicFindUniqueOrThrowArgs>(args: SelectSubset<T, ComicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindFirstArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComicFindFirstArgs>(args?: SelectSubset<T, ComicFindFirstArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindFirstOrThrowArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComicFindFirstOrThrowArgs>(args?: SelectSubset<T, ComicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comics
     * const comics = await prisma.comic.findMany()
     * 
     * // Get first 10 Comics
     * const comics = await prisma.comic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comicWithIdOnly = await prisma.comic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComicFindManyArgs>(args?: SelectSubset<T, ComicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comic.
     * @param {ComicCreateArgs} args - Arguments to create a Comic.
     * @example
     * // Create one Comic
     * const Comic = await prisma.comic.create({
     *   data: {
     *     // ... data to create a Comic
     *   }
     * })
     * 
     */
    create<T extends ComicCreateArgs>(args: SelectSubset<T, ComicCreateArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comics.
     * @param {ComicCreateManyArgs} args - Arguments to create many Comics.
     * @example
     * // Create many Comics
     * const comic = await prisma.comic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComicCreateManyArgs>(args?: SelectSubset<T, ComicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comics and returns the data saved in the database.
     * @param {ComicCreateManyAndReturnArgs} args - Arguments to create many Comics.
     * @example
     * // Create many Comics
     * const comic = await prisma.comic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comics and only return the `id`
     * const comicWithIdOnly = await prisma.comic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComicCreateManyAndReturnArgs>(args?: SelectSubset<T, ComicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comic.
     * @param {ComicDeleteArgs} args - Arguments to delete one Comic.
     * @example
     * // Delete one Comic
     * const Comic = await prisma.comic.delete({
     *   where: {
     *     // ... filter to delete one Comic
     *   }
     * })
     * 
     */
    delete<T extends ComicDeleteArgs>(args: SelectSubset<T, ComicDeleteArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comic.
     * @param {ComicUpdateArgs} args - Arguments to update one Comic.
     * @example
     * // Update one Comic
     * const comic = await prisma.comic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComicUpdateArgs>(args: SelectSubset<T, ComicUpdateArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comics.
     * @param {ComicDeleteManyArgs} args - Arguments to filter Comics to delete.
     * @example
     * // Delete a few Comics
     * const { count } = await prisma.comic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComicDeleteManyArgs>(args?: SelectSubset<T, ComicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comics
     * const comic = await prisma.comic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComicUpdateManyArgs>(args: SelectSubset<T, ComicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comics and returns the data updated in the database.
     * @param {ComicUpdateManyAndReturnArgs} args - Arguments to update many Comics.
     * @example
     * // Update many Comics
     * const comic = await prisma.comic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comics and only return the `id`
     * const comicWithIdOnly = await prisma.comic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComicUpdateManyAndReturnArgs>(args: SelectSubset<T, ComicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comic.
     * @param {ComicUpsertArgs} args - Arguments to update or create a Comic.
     * @example
     * // Update or create a Comic
     * const comic = await prisma.comic.upsert({
     *   create: {
     *     // ... data to create a Comic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comic we want to update
     *   }
     * })
     */
    upsert<T extends ComicUpsertArgs>(args: SelectSubset<T, ComicUpsertArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicCountArgs} args - Arguments to filter Comics to count.
     * @example
     * // Count the number of Comics
     * const count = await prisma.comic.count({
     *   where: {
     *     // ... the filter for the Comics we want to count
     *   }
     * })
    **/
    count<T extends ComicCountArgs>(
      args?: Subset<T, ComicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComicAggregateArgs>(args: Subset<T, ComicAggregateArgs>): Prisma.PrismaPromise<GetComicAggregateType<T>>

    /**
     * Group by Comic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComicGroupByArgs['orderBy'] }
        : { orderBy?: ComicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comic model
   */
  readonly fields: ComicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends Comic$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Comic$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Comic$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Comic$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recaps<T extends Comic$recapsArgs<ExtArgs> = {}>(args?: Subset<T, Comic$recapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Comic$genresArgs<ExtArgs> = {}>(args?: Subset<T, Comic$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Comic$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Comic$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends Comic$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Comic$createdByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comic model
   */
  interface ComicFieldRefs {
    readonly id: FieldRef<"Comic", 'String'>
    readonly title: FieldRef<"Comic", 'String'>
    readonly synopsis: FieldRef<"Comic", 'String'>
    readonly author: FieldRef<"Comic", 'String'>
    readonly artist: FieldRef<"Comic", 'String'>
    readonly coverArt: FieldRef<"Comic", 'String'>
    readonly status: FieldRef<"Comic", 'String'>
    readonly featured: FieldRef<"Comic", 'Boolean'>
    readonly createdAt: FieldRef<"Comic", 'DateTime'>
    readonly publication: FieldRef<"Comic", 'String'>
    readonly slug: FieldRef<"Comic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comic findUnique
   */
  export type ComicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic findUniqueOrThrow
   */
  export type ComicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic findFirst
   */
  export type ComicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comics.
     */
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic findFirstOrThrow
   */
  export type ComicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comics.
     */
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic findMany
   */
  export type ComicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comics to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic create
   */
  export type ComicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The data needed to create a Comic.
     */
    data: XOR<ComicCreateInput, ComicUncheckedCreateInput>
  }

  /**
   * Comic createMany
   */
  export type ComicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comics.
     */
    data: ComicCreateManyInput | ComicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comic createManyAndReturn
   */
  export type ComicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * The data used to create many Comics.
     */
    data: ComicCreateManyInput | ComicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comic update
   */
  export type ComicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The data needed to update a Comic.
     */
    data: XOR<ComicUpdateInput, ComicUncheckedUpdateInput>
    /**
     * Choose, which Comic to update.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic updateMany
   */
  export type ComicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comics.
     */
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyInput>
    /**
     * Filter which Comics to update
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to update.
     */
    limit?: number
  }

  /**
   * Comic updateManyAndReturn
   */
  export type ComicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * The data used to update Comics.
     */
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyInput>
    /**
     * Filter which Comics to update
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to update.
     */
    limit?: number
  }

  /**
   * Comic upsert
   */
  export type ComicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The filter to search for the Comic to update in case it exists.
     */
    where: ComicWhereUniqueInput
    /**
     * In case the Comic found by the `where` argument doesn't exist, create a new Comic with this data.
     */
    create: XOR<ComicCreateInput, ComicUncheckedCreateInput>
    /**
     * In case the Comic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComicUpdateInput, ComicUncheckedUpdateInput>
  }

  /**
   * Comic delete
   */
  export type ComicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter which Comic to delete.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic deleteMany
   */
  export type ComicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comics to delete
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to delete.
     */
    limit?: number
  }

  /**
   * Comic.chapters
   */
  export type Comic$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    where?: ChaptersWhereInput
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    cursor?: ChaptersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Comic.ratings
   */
  export type Comic$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Comic.recaps
   */
  export type Comic$recapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    where?: RecapWhereInput
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    cursor?: RecapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * Comic.genres
   */
  export type Comic$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Comic.bookmarks
   */
  export type Comic$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Comic.createdBy
   */
  export type Comic$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Comic without action
   */
  export type ComicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comic?: boolean | Genre$comicArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | Genre$comicArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      comic: Prisma.$ComicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comic<T extends Genre$comicArgs<ExtArgs> = {}>(args?: Subset<T, Genre$comicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.comic
   */
  export type Genre$comicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    where?: ComicWhereInput
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    cursor?: ComicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Chapters
   */

  export type AggregateChapters = {
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  export type ChaptersAvgAggregateOutputType = {
    chapNum: number | null
  }

  export type ChaptersSumAggregateOutputType = {
    chapNum: number | null
  }

  export type ChaptersMinAggregateOutputType = {
    id: string | null
    title: string | null
    chapNum: number | null
    createdAt: Date | null
    comicId: string | null
  }

  export type ChaptersMaxAggregateOutputType = {
    id: string | null
    title: string | null
    chapNum: number | null
    createdAt: Date | null
    comicId: string | null
  }

  export type ChaptersCountAggregateOutputType = {
    id: number
    title: number
    chapNum: number
    createdAt: number
    comicId: number
    _all: number
  }


  export type ChaptersAvgAggregateInputType = {
    chapNum?: true
  }

  export type ChaptersSumAggregateInputType = {
    chapNum?: true
  }

  export type ChaptersMinAggregateInputType = {
    id?: true
    title?: true
    chapNum?: true
    createdAt?: true
    comicId?: true
  }

  export type ChaptersMaxAggregateInputType = {
    id?: true
    title?: true
    chapNum?: true
    createdAt?: true
    comicId?: true
  }

  export type ChaptersCountAggregateInputType = {
    id?: true
    title?: true
    chapNum?: true
    createdAt?: true
    comicId?: true
    _all?: true
  }

  export type ChaptersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to aggregate.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChaptersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaptersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaptersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaptersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaptersMaxAggregateInputType
  }

  export type GetChaptersAggregateType<T extends ChaptersAggregateArgs> = {
        [P in keyof T & keyof AggregateChapters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapters[P]>
      : GetScalarType<T[P], AggregateChapters[P]>
  }




  export type ChaptersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaptersWhereInput
    orderBy?: ChaptersOrderByWithAggregationInput | ChaptersOrderByWithAggregationInput[]
    by: ChaptersScalarFieldEnum[] | ChaptersScalarFieldEnum
    having?: ChaptersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaptersCountAggregateInputType | true
    _avg?: ChaptersAvgAggregateInputType
    _sum?: ChaptersSumAggregateInputType
    _min?: ChaptersMinAggregateInputType
    _max?: ChaptersMaxAggregateInputType
  }

  export type ChaptersGroupByOutputType = {
    id: string
    title: string
    chapNum: number
    createdAt: Date
    comicId: string
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  type GetChaptersGroupByPayload<T extends ChaptersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaptersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaptersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
            : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
        }
      >
    >


  export type ChaptersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapNum?: boolean
    createdAt?: boolean
    comicId?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    images?: boolean | Chapters$imagesArgs<ExtArgs>
    recap?: boolean | Chapters$recapArgs<ExtArgs>
    _count?: boolean | ChaptersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapNum?: boolean
    createdAt?: boolean
    comicId?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chapNum?: boolean
    createdAt?: boolean
    comicId?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectScalar = {
    id?: boolean
    title?: boolean
    chapNum?: boolean
    createdAt?: boolean
    comicId?: boolean
  }

  export type ChaptersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "chapNum" | "createdAt" | "comicId", ExtArgs["result"]["chapters"]>
  export type ChaptersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    images?: boolean | Chapters$imagesArgs<ExtArgs>
    recap?: boolean | Chapters$recapArgs<ExtArgs>
    _count?: boolean | ChaptersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChaptersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }
  export type ChaptersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }

  export type $ChaptersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapters"
    objects: {
      comic: Prisma.$ComicPayload<ExtArgs>
      images: Prisma.$ImagesPayload<ExtArgs>[]
      recap: Prisma.$RecapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      chapNum: number
      createdAt: Date
      comicId: string
    }, ExtArgs["result"]["chapters"]>
    composites: {}
  }

  type ChaptersGetPayload<S extends boolean | null | undefined | ChaptersDefaultArgs> = $Result.GetResult<Prisma.$ChaptersPayload, S>

  type ChaptersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChaptersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChaptersCountAggregateInputType | true
    }

  export interface ChaptersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapters'], meta: { name: 'Chapters' } }
    /**
     * Find zero or one Chapters that matches the filter.
     * @param {ChaptersFindUniqueArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChaptersFindUniqueArgs>(args: SelectSubset<T, ChaptersFindUniqueArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChaptersFindUniqueOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChaptersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChaptersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChaptersFindFirstArgs>(args?: SelectSubset<T, ChaptersFindFirstArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChaptersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChaptersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapters.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chaptersWithIdOnly = await prisma.chapters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChaptersFindManyArgs>(args?: SelectSubset<T, ChaptersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapters.
     * @param {ChaptersCreateArgs} args - Arguments to create a Chapters.
     * @example
     * // Create one Chapters
     * const Chapters = await prisma.chapters.create({
     *   data: {
     *     // ... data to create a Chapters
     *   }
     * })
     * 
     */
    create<T extends ChaptersCreateArgs>(args: SelectSubset<T, ChaptersCreateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChaptersCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChaptersCreateManyArgs>(args?: SelectSubset<T, ChaptersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChaptersCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChaptersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChaptersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapters.
     * @param {ChaptersDeleteArgs} args - Arguments to delete one Chapters.
     * @example
     * // Delete one Chapters
     * const Chapters = await prisma.chapters.delete({
     *   where: {
     *     // ... filter to delete one Chapters
     *   }
     * })
     * 
     */
    delete<T extends ChaptersDeleteArgs>(args: SelectSubset<T, ChaptersDeleteArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapters.
     * @param {ChaptersUpdateArgs} args - Arguments to update one Chapters.
     * @example
     * // Update one Chapters
     * const chapters = await prisma.chapters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChaptersUpdateArgs>(args: SelectSubset<T, ChaptersUpdateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChaptersDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChaptersDeleteManyArgs>(args?: SelectSubset<T, ChaptersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChaptersUpdateManyArgs>(args: SelectSubset<T, ChaptersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChaptersUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChaptersUpdateManyAndReturnArgs>(args: SelectSubset<T, ChaptersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapters.
     * @param {ChaptersUpsertArgs} args - Arguments to update or create a Chapters.
     * @example
     * // Update or create a Chapters
     * const chapters = await prisma.chapters.upsert({
     *   create: {
     *     // ... data to create a Chapters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapters we want to update
     *   }
     * })
     */
    upsert<T extends ChaptersUpsertArgs>(args: SelectSubset<T, ChaptersUpsertArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapters.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChaptersCountArgs>(
      args?: Subset<T, ChaptersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaptersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChaptersAggregateArgs>(args: Subset<T, ChaptersAggregateArgs>): Prisma.PrismaPromise<GetChaptersAggregateType<T>>

    /**
     * Group by Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChaptersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaptersGroupByArgs['orderBy'] }
        : { orderBy?: ChaptersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChaptersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaptersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapters model
   */
  readonly fields: ChaptersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaptersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comic<T extends ComicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComicDefaultArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Chapters$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Chapters$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recap<T extends Chapters$recapArgs<ExtArgs> = {}>(args?: Subset<T, Chapters$recapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapters model
   */
  interface ChaptersFieldRefs {
    readonly id: FieldRef<"Chapters", 'String'>
    readonly title: FieldRef<"Chapters", 'String'>
    readonly chapNum: FieldRef<"Chapters", 'Int'>
    readonly createdAt: FieldRef<"Chapters", 'DateTime'>
    readonly comicId: FieldRef<"Chapters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chapters findUnique
   */
  export type ChaptersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findUniqueOrThrow
   */
  export type ChaptersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findFirst
   */
  export type ChaptersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findFirstOrThrow
   */
  export type ChaptersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findMany
   */
  export type ChaptersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters create
   */
  export type ChaptersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapters.
     */
    data: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
  }

  /**
   * Chapters createMany
   */
  export type ChaptersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapters createManyAndReturn
   */
  export type ChaptersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapters update
   */
  export type ChaptersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapters.
     */
    data: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
    /**
     * Choose, which Chapters to update.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters updateMany
   */
  export type ChaptersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapters updateManyAndReturn
   */
  export type ChaptersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapters upsert
   */
  export type ChaptersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapters to update in case it exists.
     */
    where: ChaptersWhereUniqueInput
    /**
     * In case the Chapters found by the `where` argument doesn't exist, create a new Chapters with this data.
     */
    create: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
    /**
     * In case the Chapters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
  }

  /**
   * Chapters delete
   */
  export type ChaptersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter which Chapters to delete.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters deleteMany
   */
  export type ChaptersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapters.images
   */
  export type Chapters$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Chapters.recap
   */
  export type Chapters$recapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    where?: RecapWhereInput
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    cursor?: RecapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * Chapters without action
   */
  export type ChaptersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    pageNum: number | null
  }

  export type ImagesSumAggregateOutputType = {
    pageNum: number | null
  }

  export type ImagesMinAggregateOutputType = {
    url: string | null
    chapterId: string | null
    pageNum: number | null
  }

  export type ImagesMaxAggregateOutputType = {
    url: string | null
    chapterId: string | null
    pageNum: number | null
  }

  export type ImagesCountAggregateOutputType = {
    url: number
    chapterId: number
    pageNum: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    pageNum?: true
  }

  export type ImagesSumAggregateInputType = {
    pageNum?: true
  }

  export type ImagesMinAggregateInputType = {
    url?: true
    chapterId?: true
    pageNum?: true
  }

  export type ImagesMaxAggregateInputType = {
    url?: true
    chapterId?: true
    pageNum?: true
  }

  export type ImagesCountAggregateInputType = {
    url?: true
    chapterId?: true
    pageNum?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    url: string
    chapterId: string
    pageNum: number
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    chapterId?: boolean
    pageNum?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    chapterId?: boolean
    pageNum?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    chapterId?: boolean
    pageNum?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    url?: boolean
    chapterId?: boolean
    pageNum?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"url" | "chapterId" | "pageNum", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      chapter: Prisma.$ChaptersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      url: string
      chapterId: string
      pageNum: number
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `url`
     * const imagesWithUrlOnly = await prisma.images.findMany({ select: { url: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `url`
     * const imagesWithUrlOnly = await prisma.images.createManyAndReturn({
     *   select: { url: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `url`
     * const imagesWithUrlOnly = await prisma.images.updateManyAndReturn({
     *   select: { url: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChaptersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChaptersDefaultArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly url: FieldRef<"Images", 'String'>
    readonly chapterId: FieldRef<"Images", 'String'>
    readonly pageNum: FieldRef<"Images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images createManyAndReturn
   */
  export type ImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images updateManyAndReturn
   */
  export type ImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    comicId: string | null
    userId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    comicId: string | null
    userId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    comicId: number
    userId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    score?: true
  }

  export type RatingSumAggregateInputType = {
    score?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    comicId: string
    userId: string
    score: number | null
    createdAt: Date
    updatedAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    comicId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comicId" | "userId" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      comic: Prisma.$ComicPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comicId: string
      userId: string
      score: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comic<T extends ComicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComicDefaultArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly comicId: FieldRef<"Rating", 'String'>
    readonly userId: FieldRef<"Rating", 'String'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Recap
   */

  export type AggregateRecap = {
    _count: RecapCountAggregateOutputType | null
    _min: RecapMinAggregateOutputType | null
    _max: RecapMaxAggregateOutputType | null
  }

  export type RecapMinAggregateOutputType = {
    id: string | null
    comicId: string | null
    userId: string | null
    chapterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecapMaxAggregateOutputType = {
    id: string | null
    comicId: string | null
    userId: string | null
    chapterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecapCountAggregateOutputType = {
    id: number
    comicId: number
    userId: number
    chapterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecapMinAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecapMaxAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecapCountAggregateInputType = {
    id?: true
    comicId?: true
    userId?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recap to aggregate.
     */
    where?: RecapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recaps to fetch.
     */
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recaps
    **/
    _count?: true | RecapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecapMaxAggregateInputType
  }

  export type GetRecapAggregateType<T extends RecapAggregateArgs> = {
        [P in keyof T & keyof AggregateRecap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecap[P]>
      : GetScalarType<T[P], AggregateRecap[P]>
  }




  export type RecapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecapWhereInput
    orderBy?: RecapOrderByWithAggregationInput | RecapOrderByWithAggregationInput[]
    by: RecapScalarFieldEnum[] | RecapScalarFieldEnum
    having?: RecapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecapCountAggregateInputType | true
    _min?: RecapMinAggregateInputType
    _max?: RecapMaxAggregateInputType
  }

  export type RecapGroupByOutputType = {
    id: string
    comicId: string
    userId: string
    chapterId: string
    createdAt: Date
    updatedAt: Date
    _count: RecapCountAggregateOutputType | null
    _min: RecapMinAggregateOutputType | null
    _max: RecapMaxAggregateOutputType | null
  }

  type GetRecapGroupByPayload<T extends RecapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecapGroupByOutputType[P]>
            : GetScalarType<T[P], RecapGroupByOutputType[P]>
        }
      >
    >


  export type RecapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recap"]>

  export type RecapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recap"]>

  export type RecapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comicId?: boolean
    userId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recap"]>

  export type RecapSelectScalar = {
    id?: boolean
    comicId?: boolean
    userId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comicId" | "userId" | "chapterId" | "createdAt" | "updatedAt", ExtArgs["result"]["recap"]>
  export type RecapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChaptersDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recap"
    objects: {
      chapter: Prisma.$ChaptersPayload<ExtArgs>
      comic: Prisma.$ComicPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comicId: string
      userId: string
      chapterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recap"]>
    composites: {}
  }

  type RecapGetPayload<S extends boolean | null | undefined | RecapDefaultArgs> = $Result.GetResult<Prisma.$RecapPayload, S>

  type RecapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecapCountAggregateInputType | true
    }

  export interface RecapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recap'], meta: { name: 'Recap' } }
    /**
     * Find zero or one Recap that matches the filter.
     * @param {RecapFindUniqueArgs} args - Arguments to find a Recap
     * @example
     * // Get one Recap
     * const recap = await prisma.recap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecapFindUniqueArgs>(args: SelectSubset<T, RecapFindUniqueArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecapFindUniqueOrThrowArgs} args - Arguments to find a Recap
     * @example
     * // Get one Recap
     * const recap = await prisma.recap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecapFindUniqueOrThrowArgs>(args: SelectSubset<T, RecapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapFindFirstArgs} args - Arguments to find a Recap
     * @example
     * // Get one Recap
     * const recap = await prisma.recap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecapFindFirstArgs>(args?: SelectSubset<T, RecapFindFirstArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapFindFirstOrThrowArgs} args - Arguments to find a Recap
     * @example
     * // Get one Recap
     * const recap = await prisma.recap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecapFindFirstOrThrowArgs>(args?: SelectSubset<T, RecapFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recaps
     * const recaps = await prisma.recap.findMany()
     * 
     * // Get first 10 Recaps
     * const recaps = await prisma.recap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recapWithIdOnly = await prisma.recap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecapFindManyArgs>(args?: SelectSubset<T, RecapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recap.
     * @param {RecapCreateArgs} args - Arguments to create a Recap.
     * @example
     * // Create one Recap
     * const Recap = await prisma.recap.create({
     *   data: {
     *     // ... data to create a Recap
     *   }
     * })
     * 
     */
    create<T extends RecapCreateArgs>(args: SelectSubset<T, RecapCreateArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recaps.
     * @param {RecapCreateManyArgs} args - Arguments to create many Recaps.
     * @example
     * // Create many Recaps
     * const recap = await prisma.recap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecapCreateManyArgs>(args?: SelectSubset<T, RecapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recaps and returns the data saved in the database.
     * @param {RecapCreateManyAndReturnArgs} args - Arguments to create many Recaps.
     * @example
     * // Create many Recaps
     * const recap = await prisma.recap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recaps and only return the `id`
     * const recapWithIdOnly = await prisma.recap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecapCreateManyAndReturnArgs>(args?: SelectSubset<T, RecapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recap.
     * @param {RecapDeleteArgs} args - Arguments to delete one Recap.
     * @example
     * // Delete one Recap
     * const Recap = await prisma.recap.delete({
     *   where: {
     *     // ... filter to delete one Recap
     *   }
     * })
     * 
     */
    delete<T extends RecapDeleteArgs>(args: SelectSubset<T, RecapDeleteArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recap.
     * @param {RecapUpdateArgs} args - Arguments to update one Recap.
     * @example
     * // Update one Recap
     * const recap = await prisma.recap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecapUpdateArgs>(args: SelectSubset<T, RecapUpdateArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recaps.
     * @param {RecapDeleteManyArgs} args - Arguments to filter Recaps to delete.
     * @example
     * // Delete a few Recaps
     * const { count } = await prisma.recap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecapDeleteManyArgs>(args?: SelectSubset<T, RecapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recaps
     * const recap = await prisma.recap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecapUpdateManyArgs>(args: SelectSubset<T, RecapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recaps and returns the data updated in the database.
     * @param {RecapUpdateManyAndReturnArgs} args - Arguments to update many Recaps.
     * @example
     * // Update many Recaps
     * const recap = await prisma.recap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recaps and only return the `id`
     * const recapWithIdOnly = await prisma.recap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecapUpdateManyAndReturnArgs>(args: SelectSubset<T, RecapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recap.
     * @param {RecapUpsertArgs} args - Arguments to update or create a Recap.
     * @example
     * // Update or create a Recap
     * const recap = await prisma.recap.upsert({
     *   create: {
     *     // ... data to create a Recap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recap we want to update
     *   }
     * })
     */
    upsert<T extends RecapUpsertArgs>(args: SelectSubset<T, RecapUpsertArgs<ExtArgs>>): Prisma__RecapClient<$Result.GetResult<Prisma.$RecapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapCountArgs} args - Arguments to filter Recaps to count.
     * @example
     * // Count the number of Recaps
     * const count = await prisma.recap.count({
     *   where: {
     *     // ... the filter for the Recaps we want to count
     *   }
     * })
    **/
    count<T extends RecapCountArgs>(
      args?: Subset<T, RecapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecapAggregateArgs>(args: Subset<T, RecapAggregateArgs>): Prisma.PrismaPromise<GetRecapAggregateType<T>>

    /**
     * Group by Recap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecapGroupByArgs['orderBy'] }
        : { orderBy?: RecapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recap model
   */
  readonly fields: RecapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChaptersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChaptersDefaultArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comic<T extends ComicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComicDefaultArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recap model
   */
  interface RecapFieldRefs {
    readonly id: FieldRef<"Recap", 'String'>
    readonly comicId: FieldRef<"Recap", 'String'>
    readonly userId: FieldRef<"Recap", 'String'>
    readonly chapterId: FieldRef<"Recap", 'String'>
    readonly createdAt: FieldRef<"Recap", 'DateTime'>
    readonly updatedAt: FieldRef<"Recap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recap findUnique
   */
  export type RecapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter, which Recap to fetch.
     */
    where: RecapWhereUniqueInput
  }

  /**
   * Recap findUniqueOrThrow
   */
  export type RecapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter, which Recap to fetch.
     */
    where: RecapWhereUniqueInput
  }

  /**
   * Recap findFirst
   */
  export type RecapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter, which Recap to fetch.
     */
    where?: RecapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recaps to fetch.
     */
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recaps.
     */
    cursor?: RecapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recaps.
     */
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * Recap findFirstOrThrow
   */
  export type RecapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter, which Recap to fetch.
     */
    where?: RecapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recaps to fetch.
     */
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recaps.
     */
    cursor?: RecapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recaps.
     */
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * Recap findMany
   */
  export type RecapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter, which Recaps to fetch.
     */
    where?: RecapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recaps to fetch.
     */
    orderBy?: RecapOrderByWithRelationInput | RecapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recaps.
     */
    cursor?: RecapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recaps.
     */
    skip?: number
    distinct?: RecapScalarFieldEnum | RecapScalarFieldEnum[]
  }

  /**
   * Recap create
   */
  export type RecapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * The data needed to create a Recap.
     */
    data: XOR<RecapCreateInput, RecapUncheckedCreateInput>
  }

  /**
   * Recap createMany
   */
  export type RecapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recaps.
     */
    data: RecapCreateManyInput | RecapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recap createManyAndReturn
   */
  export type RecapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * The data used to create many Recaps.
     */
    data: RecapCreateManyInput | RecapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recap update
   */
  export type RecapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * The data needed to update a Recap.
     */
    data: XOR<RecapUpdateInput, RecapUncheckedUpdateInput>
    /**
     * Choose, which Recap to update.
     */
    where: RecapWhereUniqueInput
  }

  /**
   * Recap updateMany
   */
  export type RecapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recaps.
     */
    data: XOR<RecapUpdateManyMutationInput, RecapUncheckedUpdateManyInput>
    /**
     * Filter which Recaps to update
     */
    where?: RecapWhereInput
    /**
     * Limit how many Recaps to update.
     */
    limit?: number
  }

  /**
   * Recap updateManyAndReturn
   */
  export type RecapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * The data used to update Recaps.
     */
    data: XOR<RecapUpdateManyMutationInput, RecapUncheckedUpdateManyInput>
    /**
     * Filter which Recaps to update
     */
    where?: RecapWhereInput
    /**
     * Limit how many Recaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recap upsert
   */
  export type RecapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * The filter to search for the Recap to update in case it exists.
     */
    where: RecapWhereUniqueInput
    /**
     * In case the Recap found by the `where` argument doesn't exist, create a new Recap with this data.
     */
    create: XOR<RecapCreateInput, RecapUncheckedCreateInput>
    /**
     * In case the Recap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecapUpdateInput, RecapUncheckedUpdateInput>
  }

  /**
   * Recap delete
   */
  export type RecapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
    /**
     * Filter which Recap to delete.
     */
    where: RecapWhereUniqueInput
  }

  /**
   * Recap deleteMany
   */
  export type RecapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recaps to delete
     */
    where?: RecapWhereInput
    /**
     * Limit how many Recaps to delete.
     */
    limit?: number
  }

  /**
   * Recap without action
   */
  export type RecapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recap
     */
    select?: RecapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recap
     */
    omit?: RecapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecapInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ComicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    author: 'author',
    artist: 'artist',
    coverArt: 'coverArt',
    status: 'status',
    featured: 'featured',
    createdAt: 'createdAt',
    publication: 'publication',
    slug: 'slug'
  };

  export type ComicScalarFieldEnum = (typeof ComicScalarFieldEnum)[keyof typeof ComicScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const ChaptersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    chapNum: 'chapNum',
    createdAt: 'createdAt',
    comicId: 'comicId'
  };

  export type ChaptersScalarFieldEnum = (typeof ChaptersScalarFieldEnum)[keyof typeof ChaptersScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    url: 'url',
    chapterId: 'chapterId',
    pageNum: 'pageNum'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    comicId: 'comicId',
    userId: 'userId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const RecapScalarFieldEnum: {
    id: 'id',
    comicId: 'comicId',
    userId: 'userId',
    chapterId: 'chapterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecapScalarFieldEnum = (typeof RecapScalarFieldEnum)[keyof typeof RecapScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    ratings?: RatingListRelationFilter
    recaps?: RecapListRelationFilter
    bookmarks?: ComicListRelationFilter
    createdComic?: ComicListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    ratings?: RatingOrderByRelationAggregateInput
    recaps?: RecapOrderByRelationAggregateInput
    bookmarks?: ComicOrderByRelationAggregateInput
    createdComic?: ComicOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    ratings?: RatingListRelationFilter
    recaps?: RecapListRelationFilter
    bookmarks?: ComicListRelationFilter
    createdComic?: ComicListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type ComicWhereInput = {
    AND?: ComicWhereInput | ComicWhereInput[]
    OR?: ComicWhereInput[]
    NOT?: ComicWhereInput | ComicWhereInput[]
    id?: StringFilter<"Comic"> | string
    title?: StringFilter<"Comic"> | string
    synopsis?: StringFilter<"Comic"> | string
    author?: StringFilter<"Comic"> | string
    artist?: StringFilter<"Comic"> | string
    coverArt?: StringNullableFilter<"Comic"> | string | null
    status?: StringFilter<"Comic"> | string
    featured?: BoolFilter<"Comic"> | boolean
    createdAt?: DateTimeFilter<"Comic"> | Date | string
    publication?: StringFilter<"Comic"> | string
    slug?: StringNullableFilter<"Comic"> | string | null
    chapters?: ChaptersListRelationFilter
    ratings?: RatingListRelationFilter
    recaps?: RecapListRelationFilter
    genres?: GenreListRelationFilter
    bookmarks?: UserListRelationFilter
    createdBy?: UserListRelationFilter
  }

  export type ComicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    author?: SortOrder
    artist?: SortOrder
    coverArt?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    publication?: SortOrder
    slug?: SortOrderInput | SortOrder
    chapters?: ChaptersOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    recaps?: RecapOrderByRelationAggregateInput
    genres?: GenreOrderByRelationAggregateInput
    bookmarks?: UserOrderByRelationAggregateInput
    createdBy?: UserOrderByRelationAggregateInput
  }

  export type ComicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    slug?: string
    AND?: ComicWhereInput | ComicWhereInput[]
    OR?: ComicWhereInput[]
    NOT?: ComicWhereInput | ComicWhereInput[]
    synopsis?: StringFilter<"Comic"> | string
    author?: StringFilter<"Comic"> | string
    artist?: StringFilter<"Comic"> | string
    coverArt?: StringNullableFilter<"Comic"> | string | null
    status?: StringFilter<"Comic"> | string
    featured?: BoolFilter<"Comic"> | boolean
    createdAt?: DateTimeFilter<"Comic"> | Date | string
    publication?: StringFilter<"Comic"> | string
    chapters?: ChaptersListRelationFilter
    ratings?: RatingListRelationFilter
    recaps?: RecapListRelationFilter
    genres?: GenreListRelationFilter
    bookmarks?: UserListRelationFilter
    createdBy?: UserListRelationFilter
  }, "id" | "title" | "slug">

  export type ComicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    author?: SortOrder
    artist?: SortOrder
    coverArt?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    publication?: SortOrder
    slug?: SortOrderInput | SortOrder
    _count?: ComicCountOrderByAggregateInput
    _max?: ComicMaxOrderByAggregateInput
    _min?: ComicMinOrderByAggregateInput
  }

  export type ComicScalarWhereWithAggregatesInput = {
    AND?: ComicScalarWhereWithAggregatesInput | ComicScalarWhereWithAggregatesInput[]
    OR?: ComicScalarWhereWithAggregatesInput[]
    NOT?: ComicScalarWhereWithAggregatesInput | ComicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comic"> | string
    title?: StringWithAggregatesFilter<"Comic"> | string
    synopsis?: StringWithAggregatesFilter<"Comic"> | string
    author?: StringWithAggregatesFilter<"Comic"> | string
    artist?: StringWithAggregatesFilter<"Comic"> | string
    coverArt?: StringNullableWithAggregatesFilter<"Comic"> | string | null
    status?: StringWithAggregatesFilter<"Comic"> | string
    featured?: BoolWithAggregatesFilter<"Comic"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Comic"> | Date | string
    publication?: StringWithAggregatesFilter<"Comic"> | string
    slug?: StringNullableWithAggregatesFilter<"Comic"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    comic?: ComicListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    comic?: ComicOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    comic?: ComicListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type ChaptersWhereInput = {
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    id?: StringFilter<"Chapters"> | string
    title?: StringFilter<"Chapters"> | string
    chapNum?: IntFilter<"Chapters"> | number
    createdAt?: DateTimeFilter<"Chapters"> | Date | string
    comicId?: StringFilter<"Chapters"> | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    images?: ImagesListRelationFilter
    recap?: RecapListRelationFilter
  }

  export type ChaptersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    chapNum?: SortOrder
    createdAt?: SortOrder
    comicId?: SortOrder
    comic?: ComicOrderByWithRelationInput
    images?: ImagesOrderByRelationAggregateInput
    recap?: RecapOrderByRelationAggregateInput
  }

  export type ChaptersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    title?: StringFilter<"Chapters"> | string
    chapNum?: IntFilter<"Chapters"> | number
    createdAt?: DateTimeFilter<"Chapters"> | Date | string
    comicId?: StringFilter<"Chapters"> | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    images?: ImagesListRelationFilter
    recap?: RecapListRelationFilter
  }, "id">

  export type ChaptersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    chapNum?: SortOrder
    createdAt?: SortOrder
    comicId?: SortOrder
    _count?: ChaptersCountOrderByAggregateInput
    _avg?: ChaptersAvgOrderByAggregateInput
    _max?: ChaptersMaxOrderByAggregateInput
    _min?: ChaptersMinOrderByAggregateInput
    _sum?: ChaptersSumOrderByAggregateInput
  }

  export type ChaptersScalarWhereWithAggregatesInput = {
    AND?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    OR?: ChaptersScalarWhereWithAggregatesInput[]
    NOT?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapters"> | string
    title?: StringWithAggregatesFilter<"Chapters"> | string
    chapNum?: IntWithAggregatesFilter<"Chapters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chapters"> | Date | string
    comicId?: StringWithAggregatesFilter<"Chapters"> | string
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    chapterId?: StringFilter<"Images"> | string
    pageNum?: IntFilter<"Images"> | number
    chapter?: XOR<ChaptersScalarRelationFilter, ChaptersWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    url?: SortOrder
    chapterId?: SortOrder
    pageNum?: SortOrder
    chapter?: ChaptersOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    chapterId_pageNum?: ImagesChapterIdPageNumCompoundUniqueInput
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    chapterId?: StringFilter<"Images"> | string
    pageNum?: IntFilter<"Images"> | number
    chapter?: XOR<ChaptersScalarRelationFilter, ChaptersWhereInput>
  }, "chapterId_pageNum">

  export type ImagesOrderByWithAggregationInput = {
    url?: SortOrder
    chapterId?: SortOrder
    pageNum?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    url?: StringWithAggregatesFilter<"Images"> | string
    chapterId?: StringWithAggregatesFilter<"Images"> | string
    pageNum?: IntWithAggregatesFilter<"Images"> | number
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    comicId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    score?: IntNullableFilter<"Rating"> | number | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comic?: ComicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    comicId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    score?: IntNullableFilter<"Rating"> | number | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    comicId?: StringWithAggregatesFilter<"Rating"> | string
    userId?: StringWithAggregatesFilter<"Rating"> | string
    score?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type RecapWhereInput = {
    AND?: RecapWhereInput | RecapWhereInput[]
    OR?: RecapWhereInput[]
    NOT?: RecapWhereInput | RecapWhereInput[]
    id?: StringFilter<"Recap"> | string
    comicId?: StringFilter<"Recap"> | string
    userId?: StringFilter<"Recap"> | string
    chapterId?: StringFilter<"Recap"> | string
    createdAt?: DateTimeFilter<"Recap"> | Date | string
    updatedAt?: DateTimeFilter<"Recap"> | Date | string
    chapter?: XOR<ChaptersScalarRelationFilter, ChaptersWhereInput>
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecapOrderByWithRelationInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapter?: ChaptersOrderByWithRelationInput
    comic?: ComicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RecapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecapWhereInput | RecapWhereInput[]
    OR?: RecapWhereInput[]
    NOT?: RecapWhereInput | RecapWhereInput[]
    comicId?: StringFilter<"Recap"> | string
    userId?: StringFilter<"Recap"> | string
    chapterId?: StringFilter<"Recap"> | string
    createdAt?: DateTimeFilter<"Recap"> | Date | string
    updatedAt?: DateTimeFilter<"Recap"> | Date | string
    chapter?: XOR<ChaptersScalarRelationFilter, ChaptersWhereInput>
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecapOrderByWithAggregationInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecapCountOrderByAggregateInput
    _max?: RecapMaxOrderByAggregateInput
    _min?: RecapMinOrderByAggregateInput
  }

  export type RecapScalarWhereWithAggregatesInput = {
    AND?: RecapScalarWhereWithAggregatesInput | RecapScalarWhereWithAggregatesInput[]
    OR?: RecapScalarWhereWithAggregatesInput[]
    NOT?: RecapScalarWhereWithAggregatesInput | RecapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recap"> | string
    comicId?: StringWithAggregatesFilter<"Recap"> | string
    userId?: StringWithAggregatesFilter<"Recap"> | string
    chapterId?: StringWithAggregatesFilter<"Recap"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recap"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingCreateNestedManyWithoutUserInput
    recaps?: RecapCreateNestedManyWithoutUserInput
    bookmarks?: ComicCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    recaps?: RecapUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: ComicUncheckedCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUpdateManyWithoutUserNestedInput
    recaps?: RecapUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUncheckedUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ComicCreateInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    ratings?: RatingCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    ratings?: RatingUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicCreateManyInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
  }

  export type ComicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    comic?: ComicCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    comic?: ComicUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comic?: ComicUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comic?: ComicUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChaptersCreateInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comic: ComicCreateNestedOneWithoutChaptersInput
    images?: ImagesCreateNestedManyWithoutChapterInput
    recap?: RecapCreateNestedManyWithoutChapterInput
  }

  export type ChaptersUncheckedCreateInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comicId: string
    images?: ImagesUncheckedCreateNestedManyWithoutChapterInput
    recap?: RecapUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChaptersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutChaptersNestedInput
    images?: ImagesUpdateManyWithoutChapterNestedInput
    recap?: RecapUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comicId?: StringFieldUpdateOperationsInput | string
    images?: ImagesUncheckedUpdateManyWithoutChapterNestedInput
    recap?: RecapUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersCreateManyInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comicId: string
  }

  export type ChaptersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChaptersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comicId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateInput = {
    url: string
    pageNum: number
    chapter: ChaptersCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    url: string
    chapterId: string
    pageNum: number
  }

  export type ImagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
    chapter?: ChaptersUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateManyInput = {
    url: string
    chapterId: string
    pageNum: number
  }

  export type ImagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateInput = {
    id?: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comic: ComicCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    comicId: string
    userId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    comicId: string
    userId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChaptersCreateNestedOneWithoutRecapInput
    comic: ComicCreateNestedOneWithoutRecapsInput
    user: UserCreateNestedOneWithoutRecapsInput
  }

  export type RecapUncheckedCreateInput = {
    id?: string
    comicId: string
    userId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChaptersUpdateOneRequiredWithoutRecapNestedInput
    comic?: ComicUpdateOneRequiredWithoutRecapsNestedInput
    user?: UserUpdateOneRequiredWithoutRecapsNestedInput
  }

  export type RecapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapCreateManyInput = {
    id?: string
    comicId: string
    userId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type RecapListRelationFilter = {
    every?: RecapWhereInput
    some?: RecapWhereInput
    none?: RecapWhereInput
  }

  export type ComicListRelationFilter = {
    every?: ComicWhereInput
    some?: ComicWhereInput
    none?: ComicWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChaptersListRelationFilter = {
    every?: ChaptersWhereInput
    some?: ChaptersWhereInput
    none?: ChaptersWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ChaptersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    author?: SortOrder
    artist?: SortOrder
    coverArt?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    publication?: SortOrder
    slug?: SortOrder
  }

  export type ComicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    author?: SortOrder
    artist?: SortOrder
    coverArt?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    publication?: SortOrder
    slug?: SortOrder
  }

  export type ComicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    author?: SortOrder
    artist?: SortOrder
    coverArt?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    publication?: SortOrder
    slug?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ComicScalarRelationFilter = {
    is?: ComicWhereInput
    isNot?: ComicWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChaptersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapNum?: SortOrder
    createdAt?: SortOrder
    comicId?: SortOrder
  }

  export type ChaptersAvgOrderByAggregateInput = {
    chapNum?: SortOrder
  }

  export type ChaptersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapNum?: SortOrder
    createdAt?: SortOrder
    comicId?: SortOrder
  }

  export type ChaptersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chapNum?: SortOrder
    createdAt?: SortOrder
    comicId?: SortOrder
  }

  export type ChaptersSumOrderByAggregateInput = {
    chapNum?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChaptersScalarRelationFilter = {
    is?: ChaptersWhereInput
    isNot?: ChaptersWhereInput
  }

  export type ImagesChapterIdPageNumCompoundUniqueInput = {
    chapterId: string
    pageNum: number
  }

  export type ImagesCountOrderByAggregateInput = {
    url?: SortOrder
    chapterId?: SortOrder
    pageNum?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    pageNum?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    url?: SortOrder
    chapterId?: SortOrder
    pageNum?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    url?: SortOrder
    chapterId?: SortOrder
    pageNum?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    pageNum?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RecapCountOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecapMaxOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecapMinOrderByAggregateInput = {
    id?: SortOrder
    comicId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RecapCreateNestedManyWithoutUserInput = {
    create?: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput> | RecapCreateWithoutUserInput[] | RecapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutUserInput | RecapCreateOrConnectWithoutUserInput[]
    createMany?: RecapCreateManyUserInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type ComicCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput> | ComicCreateWithoutBookmarksInput[] | ComicUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutBookmarksInput | ComicCreateOrConnectWithoutBookmarksInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type ComicCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput> | ComicCreateWithoutCreatedByInput[] | ComicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutCreatedByInput | ComicCreateOrConnectWithoutCreatedByInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RecapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput> | RecapCreateWithoutUserInput[] | RecapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutUserInput | RecapCreateOrConnectWithoutUserInput[]
    createMany?: RecapCreateManyUserInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type ComicUncheckedCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput> | ComicCreateWithoutBookmarksInput[] | ComicUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutBookmarksInput | ComicCreateOrConnectWithoutBookmarksInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type ComicUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput> | ComicCreateWithoutCreatedByInput[] | ComicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutCreatedByInput | ComicCreateOrConnectWithoutCreatedByInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RecapUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput> | RecapCreateWithoutUserInput[] | RecapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutUserInput | RecapCreateOrConnectWithoutUserInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutUserInput | RecapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecapCreateManyUserInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutUserInput | RecapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutUserInput | RecapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type ComicUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput> | ComicCreateWithoutBookmarksInput[] | ComicUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutBookmarksInput | ComicCreateOrConnectWithoutBookmarksInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutBookmarksInput | ComicUpsertWithWhereUniqueWithoutBookmarksInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutBookmarksInput | ComicUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutBookmarksInput | ComicUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type ComicUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput> | ComicCreateWithoutCreatedByInput[] | ComicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutCreatedByInput | ComicCreateOrConnectWithoutCreatedByInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutCreatedByInput | ComicUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutCreatedByInput | ComicUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutCreatedByInput | ComicUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RecapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput> | RecapCreateWithoutUserInput[] | RecapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutUserInput | RecapCreateOrConnectWithoutUserInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutUserInput | RecapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecapCreateManyUserInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutUserInput | RecapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutUserInput | RecapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type ComicUncheckedUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput> | ComicCreateWithoutBookmarksInput[] | ComicUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutBookmarksInput | ComicCreateOrConnectWithoutBookmarksInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutBookmarksInput | ComicUpsertWithWhereUniqueWithoutBookmarksInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutBookmarksInput | ComicUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutBookmarksInput | ComicUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type ComicUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput> | ComicCreateWithoutCreatedByInput[] | ComicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutCreatedByInput | ComicCreateOrConnectWithoutCreatedByInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutCreatedByInput | ComicUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutCreatedByInput | ComicUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutCreatedByInput | ComicUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type ChaptersCreateNestedManyWithoutComicInput = {
    create?: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput> | ChaptersCreateWithoutComicInput[] | ChaptersUncheckedCreateWithoutComicInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutComicInput | ChaptersCreateOrConnectWithoutComicInput[]
    createMany?: ChaptersCreateManyComicInputEnvelope
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutComicInput = {
    create?: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput> | RatingCreateWithoutComicInput[] | RatingUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutComicInput | RatingCreateOrConnectWithoutComicInput[]
    createMany?: RatingCreateManyComicInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RecapCreateNestedManyWithoutComicInput = {
    create?: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput> | RecapCreateWithoutComicInput[] | RecapUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutComicInput | RecapCreateOrConnectWithoutComicInput[]
    createMany?: RecapCreateManyComicInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type GenreCreateNestedManyWithoutComicInput = {
    create?: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput> | GenreCreateWithoutComicInput[] | GenreUncheckedCreateWithoutComicInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutComicInput | GenreCreateOrConnectWithoutComicInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | UserCreateWithoutBookmarksInput[] | UserUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | UserCreateOrConnectWithoutBookmarksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCreatedComicInput = {
    create?: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput> | UserCreateWithoutCreatedComicInput[] | UserUncheckedCreateWithoutCreatedComicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedComicInput | UserCreateOrConnectWithoutCreatedComicInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChaptersUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput> | ChaptersCreateWithoutComicInput[] | ChaptersUncheckedCreateWithoutComicInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutComicInput | ChaptersCreateOrConnectWithoutComicInput[]
    createMany?: ChaptersCreateManyComicInputEnvelope
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput> | RatingCreateWithoutComicInput[] | RatingUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutComicInput | RatingCreateOrConnectWithoutComicInput[]
    createMany?: RatingCreateManyComicInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RecapUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput> | RecapCreateWithoutComicInput[] | RecapUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutComicInput | RecapCreateOrConnectWithoutComicInput[]
    createMany?: RecapCreateManyComicInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput> | GenreCreateWithoutComicInput[] | GenreUncheckedCreateWithoutComicInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutComicInput | GenreCreateOrConnectWithoutComicInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | UserCreateWithoutBookmarksInput[] | UserUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | UserCreateOrConnectWithoutBookmarksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedComicInput = {
    create?: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput> | UserCreateWithoutCreatedComicInput[] | UserUncheckedCreateWithoutCreatedComicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedComicInput | UserCreateOrConnectWithoutCreatedComicInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChaptersUpdateManyWithoutComicNestedInput = {
    create?: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput> | ChaptersCreateWithoutComicInput[] | ChaptersUncheckedCreateWithoutComicInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutComicInput | ChaptersCreateOrConnectWithoutComicInput[]
    upsert?: ChaptersUpsertWithWhereUniqueWithoutComicInput | ChaptersUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: ChaptersCreateManyComicInputEnvelope
    set?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    disconnect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    delete?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    update?: ChaptersUpdateWithWhereUniqueWithoutComicInput | ChaptersUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: ChaptersUpdateManyWithWhereWithoutComicInput | ChaptersUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutComicNestedInput = {
    create?: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput> | RatingCreateWithoutComicInput[] | RatingUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutComicInput | RatingCreateOrConnectWithoutComicInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutComicInput | RatingUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: RatingCreateManyComicInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutComicInput | RatingUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutComicInput | RatingUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RecapUpdateManyWithoutComicNestedInput = {
    create?: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput> | RecapCreateWithoutComicInput[] | RecapUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutComicInput | RecapCreateOrConnectWithoutComicInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutComicInput | RecapUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: RecapCreateManyComicInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutComicInput | RecapUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutComicInput | RecapUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type GenreUpdateManyWithoutComicNestedInput = {
    create?: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput> | GenreCreateWithoutComicInput[] | GenreUncheckedCreateWithoutComicInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutComicInput | GenreCreateOrConnectWithoutComicInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutComicInput | GenreUpsertWithWhereUniqueWithoutComicInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutComicInput | GenreUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutComicInput | GenreUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | UserCreateWithoutBookmarksInput[] | UserUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | UserCreateOrConnectWithoutBookmarksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBookmarksInput | UserUpsertWithWhereUniqueWithoutBookmarksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBookmarksInput | UserUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBookmarksInput | UserUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCreatedComicNestedInput = {
    create?: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput> | UserCreateWithoutCreatedComicInput[] | UserUncheckedCreateWithoutCreatedComicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedComicInput | UserCreateOrConnectWithoutCreatedComicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedComicInput | UserUpsertWithWhereUniqueWithoutCreatedComicInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedComicInput | UserUpdateWithWhereUniqueWithoutCreatedComicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedComicInput | UserUpdateManyWithWhereWithoutCreatedComicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChaptersUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput> | ChaptersCreateWithoutComicInput[] | ChaptersUncheckedCreateWithoutComicInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutComicInput | ChaptersCreateOrConnectWithoutComicInput[]
    upsert?: ChaptersUpsertWithWhereUniqueWithoutComicInput | ChaptersUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: ChaptersCreateManyComicInputEnvelope
    set?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    disconnect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    delete?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    update?: ChaptersUpdateWithWhereUniqueWithoutComicInput | ChaptersUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: ChaptersUpdateManyWithWhereWithoutComicInput | ChaptersUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput> | RatingCreateWithoutComicInput[] | RatingUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutComicInput | RatingCreateOrConnectWithoutComicInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutComicInput | RatingUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: RatingCreateManyComicInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutComicInput | RatingUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutComicInput | RatingUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RecapUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput> | RecapCreateWithoutComicInput[] | RecapUncheckedCreateWithoutComicInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutComicInput | RecapCreateOrConnectWithoutComicInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutComicInput | RecapUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: RecapCreateManyComicInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutComicInput | RecapUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutComicInput | RecapUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput> | GenreCreateWithoutComicInput[] | GenreUncheckedCreateWithoutComicInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutComicInput | GenreCreateOrConnectWithoutComicInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutComicInput | GenreUpsertWithWhereUniqueWithoutComicInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutComicInput | GenreUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutComicInput | GenreUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | UserCreateWithoutBookmarksInput[] | UserUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | UserCreateOrConnectWithoutBookmarksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBookmarksInput | UserUpsertWithWhereUniqueWithoutBookmarksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBookmarksInput | UserUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBookmarksInput | UserUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedComicNestedInput = {
    create?: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput> | UserCreateWithoutCreatedComicInput[] | UserUncheckedCreateWithoutCreatedComicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedComicInput | UserCreateOrConnectWithoutCreatedComicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedComicInput | UserUpsertWithWhereUniqueWithoutCreatedComicInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedComicInput | UserUpdateWithWhereUniqueWithoutCreatedComicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedComicInput | UserUpdateManyWithWhereWithoutCreatedComicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ComicCreateNestedManyWithoutGenresInput = {
    create?: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput> | ComicCreateWithoutGenresInput[] | ComicUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutGenresInput | ComicCreateOrConnectWithoutGenresInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type ComicUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput> | ComicCreateWithoutGenresInput[] | ComicUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutGenresInput | ComicCreateOrConnectWithoutGenresInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
  }

  export type ComicUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput> | ComicCreateWithoutGenresInput[] | ComicUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutGenresInput | ComicCreateOrConnectWithoutGenresInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutGenresInput | ComicUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutGenresInput | ComicUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutGenresInput | ComicUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type ComicUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput> | ComicCreateWithoutGenresInput[] | ComicUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ComicCreateOrConnectWithoutGenresInput | ComicCreateOrConnectWithoutGenresInput[]
    upsert?: ComicUpsertWithWhereUniqueWithoutGenresInput | ComicUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    disconnect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    delete?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    connect?: ComicWhereUniqueInput | ComicWhereUniqueInput[]
    update?: ComicUpdateWithWhereUniqueWithoutGenresInput | ComicUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ComicUpdateManyWithWhereWithoutGenresInput | ComicUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ComicScalarWhereInput | ComicScalarWhereInput[]
  }

  export type ComicCreateNestedOneWithoutChaptersInput = {
    create?: XOR<ComicCreateWithoutChaptersInput, ComicUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: ComicCreateOrConnectWithoutChaptersInput
    connect?: ComicWhereUniqueInput
  }

  export type ImagesCreateNestedManyWithoutChapterInput = {
    create?: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput> | ImagesCreateWithoutChapterInput[] | ImagesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutChapterInput | ImagesCreateOrConnectWithoutChapterInput[]
    createMany?: ImagesCreateManyChapterInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type RecapCreateNestedManyWithoutChapterInput = {
    create?: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput> | RecapCreateWithoutChapterInput[] | RecapUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutChapterInput | RecapCreateOrConnectWithoutChapterInput[]
    createMany?: RecapCreateManyChapterInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput> | ImagesCreateWithoutChapterInput[] | ImagesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutChapterInput | ImagesCreateOrConnectWithoutChapterInput[]
    createMany?: ImagesCreateManyChapterInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type RecapUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput> | RecapCreateWithoutChapterInput[] | RecapUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutChapterInput | RecapCreateOrConnectWithoutChapterInput[]
    createMany?: RecapCreateManyChapterInputEnvelope
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComicUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<ComicCreateWithoutChaptersInput, ComicUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: ComicCreateOrConnectWithoutChaptersInput
    upsert?: ComicUpsertWithoutChaptersInput
    connect?: ComicWhereUniqueInput
    update?: XOR<XOR<ComicUpdateToOneWithWhereWithoutChaptersInput, ComicUpdateWithoutChaptersInput>, ComicUncheckedUpdateWithoutChaptersInput>
  }

  export type ImagesUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput> | ImagesCreateWithoutChapterInput[] | ImagesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutChapterInput | ImagesCreateOrConnectWithoutChapterInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutChapterInput | ImagesUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ImagesCreateManyChapterInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutChapterInput | ImagesUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutChapterInput | ImagesUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type RecapUpdateManyWithoutChapterNestedInput = {
    create?: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput> | RecapCreateWithoutChapterInput[] | RecapUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutChapterInput | RecapCreateOrConnectWithoutChapterInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutChapterInput | RecapUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: RecapCreateManyChapterInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutChapterInput | RecapUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutChapterInput | RecapUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput> | ImagesCreateWithoutChapterInput[] | ImagesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutChapterInput | ImagesCreateOrConnectWithoutChapterInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutChapterInput | ImagesUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ImagesCreateManyChapterInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutChapterInput | ImagesUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutChapterInput | ImagesUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type RecapUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput> | RecapCreateWithoutChapterInput[] | RecapUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: RecapCreateOrConnectWithoutChapterInput | RecapCreateOrConnectWithoutChapterInput[]
    upsert?: RecapUpsertWithWhereUniqueWithoutChapterInput | RecapUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: RecapCreateManyChapterInputEnvelope
    set?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    disconnect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    delete?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    connect?: RecapWhereUniqueInput | RecapWhereUniqueInput[]
    update?: RecapUpdateWithWhereUniqueWithoutChapterInput | RecapUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: RecapUpdateManyWithWhereWithoutChapterInput | RecapUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: RecapScalarWhereInput | RecapScalarWhereInput[]
  }

  export type ChaptersCreateNestedOneWithoutImagesInput = {
    create?: XOR<ChaptersCreateWithoutImagesInput, ChaptersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutImagesInput
    connect?: ChaptersWhereUniqueInput
  }

  export type ChaptersUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ChaptersCreateWithoutImagesInput, ChaptersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutImagesInput
    upsert?: ChaptersUpsertWithoutImagesInput
    connect?: ChaptersWhereUniqueInput
    update?: XOR<XOR<ChaptersUpdateToOneWithWhereWithoutImagesInput, ChaptersUpdateWithoutImagesInput>, ChaptersUncheckedUpdateWithoutImagesInput>
  }

  export type ComicCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ComicCreateWithoutRatingsInput, ComicUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ComicCreateOrConnectWithoutRatingsInput
    connect?: ComicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComicUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ComicCreateWithoutRatingsInput, ComicUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ComicCreateOrConnectWithoutRatingsInput
    upsert?: ComicUpsertWithoutRatingsInput
    connect?: ComicWhereUniqueInput
    update?: XOR<XOR<ComicUpdateToOneWithWhereWithoutRatingsInput, ComicUpdateWithoutRatingsInput>, ComicUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type ChaptersCreateNestedOneWithoutRecapInput = {
    create?: XOR<ChaptersCreateWithoutRecapInput, ChaptersUncheckedCreateWithoutRecapInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutRecapInput
    connect?: ChaptersWhereUniqueInput
  }

  export type ComicCreateNestedOneWithoutRecapsInput = {
    create?: XOR<ComicCreateWithoutRecapsInput, ComicUncheckedCreateWithoutRecapsInput>
    connectOrCreate?: ComicCreateOrConnectWithoutRecapsInput
    connect?: ComicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecapsInput = {
    create?: XOR<UserCreateWithoutRecapsInput, UserUncheckedCreateWithoutRecapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecapsInput
    connect?: UserWhereUniqueInput
  }

  export type ChaptersUpdateOneRequiredWithoutRecapNestedInput = {
    create?: XOR<ChaptersCreateWithoutRecapInput, ChaptersUncheckedCreateWithoutRecapInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutRecapInput
    upsert?: ChaptersUpsertWithoutRecapInput
    connect?: ChaptersWhereUniqueInput
    update?: XOR<XOR<ChaptersUpdateToOneWithWhereWithoutRecapInput, ChaptersUpdateWithoutRecapInput>, ChaptersUncheckedUpdateWithoutRecapInput>
  }

  export type ComicUpdateOneRequiredWithoutRecapsNestedInput = {
    create?: XOR<ComicCreateWithoutRecapsInput, ComicUncheckedCreateWithoutRecapsInput>
    connectOrCreate?: ComicCreateOrConnectWithoutRecapsInput
    upsert?: ComicUpsertWithoutRecapsInput
    connect?: ComicWhereUniqueInput
    update?: XOR<XOR<ComicUpdateToOneWithWhereWithoutRecapsInput, ComicUpdateWithoutRecapsInput>, ComicUncheckedUpdateWithoutRecapsInput>
  }

  export type UserUpdateOneRequiredWithoutRecapsNestedInput = {
    create?: XOR<UserCreateWithoutRecapsInput, UserUncheckedCreateWithoutRecapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecapsInput
    upsert?: UserUpsertWithoutRecapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecapsInput, UserUpdateWithoutRecapsInput>, UserUncheckedUpdateWithoutRecapsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RatingCreateWithoutUserInput = {
    id?: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comic: ComicCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    id?: string
    comicId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecapCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChaptersCreateNestedOneWithoutRecapInput
    comic: ComicCreateNestedOneWithoutRecapsInput
  }

  export type RecapUncheckedCreateWithoutUserInput = {
    id?: string
    comicId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapCreateOrConnectWithoutUserInput = {
    where: RecapWhereUniqueInput
    create: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput>
  }

  export type RecapCreateManyUserInputEnvelope = {
    data: RecapCreateManyUserInput | RecapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComicCreateWithoutBookmarksInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    ratings?: RatingCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateWithoutBookmarksInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicCreateOrConnectWithoutBookmarksInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput>
  }

  export type ComicCreateWithoutCreatedByInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    ratings?: RatingCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
  }

  export type ComicUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
  }

  export type ComicCreateOrConnectWithoutCreatedByInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    comicId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    score?: IntNullableFilter<"Rating"> | number | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type RecapUpsertWithWhereUniqueWithoutUserInput = {
    where: RecapWhereUniqueInput
    update: XOR<RecapUpdateWithoutUserInput, RecapUncheckedUpdateWithoutUserInput>
    create: XOR<RecapCreateWithoutUserInput, RecapUncheckedCreateWithoutUserInput>
  }

  export type RecapUpdateWithWhereUniqueWithoutUserInput = {
    where: RecapWhereUniqueInput
    data: XOR<RecapUpdateWithoutUserInput, RecapUncheckedUpdateWithoutUserInput>
  }

  export type RecapUpdateManyWithWhereWithoutUserInput = {
    where: RecapScalarWhereInput
    data: XOR<RecapUpdateManyMutationInput, RecapUncheckedUpdateManyWithoutUserInput>
  }

  export type RecapScalarWhereInput = {
    AND?: RecapScalarWhereInput | RecapScalarWhereInput[]
    OR?: RecapScalarWhereInput[]
    NOT?: RecapScalarWhereInput | RecapScalarWhereInput[]
    id?: StringFilter<"Recap"> | string
    comicId?: StringFilter<"Recap"> | string
    userId?: StringFilter<"Recap"> | string
    chapterId?: StringFilter<"Recap"> | string
    createdAt?: DateTimeFilter<"Recap"> | Date | string
    updatedAt?: DateTimeFilter<"Recap"> | Date | string
  }

  export type ComicUpsertWithWhereUniqueWithoutBookmarksInput = {
    where: ComicWhereUniqueInput
    update: XOR<ComicUpdateWithoutBookmarksInput, ComicUncheckedUpdateWithoutBookmarksInput>
    create: XOR<ComicCreateWithoutBookmarksInput, ComicUncheckedCreateWithoutBookmarksInput>
  }

  export type ComicUpdateWithWhereUniqueWithoutBookmarksInput = {
    where: ComicWhereUniqueInput
    data: XOR<ComicUpdateWithoutBookmarksInput, ComicUncheckedUpdateWithoutBookmarksInput>
  }

  export type ComicUpdateManyWithWhereWithoutBookmarksInput = {
    where: ComicScalarWhereInput
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyWithoutBookmarksInput>
  }

  export type ComicScalarWhereInput = {
    AND?: ComicScalarWhereInput | ComicScalarWhereInput[]
    OR?: ComicScalarWhereInput[]
    NOT?: ComicScalarWhereInput | ComicScalarWhereInput[]
    id?: StringFilter<"Comic"> | string
    title?: StringFilter<"Comic"> | string
    synopsis?: StringFilter<"Comic"> | string
    author?: StringFilter<"Comic"> | string
    artist?: StringFilter<"Comic"> | string
    coverArt?: StringNullableFilter<"Comic"> | string | null
    status?: StringFilter<"Comic"> | string
    featured?: BoolFilter<"Comic"> | boolean
    createdAt?: DateTimeFilter<"Comic"> | Date | string
    publication?: StringFilter<"Comic"> | string
    slug?: StringNullableFilter<"Comic"> | string | null
  }

  export type ComicUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ComicWhereUniqueInput
    update: XOR<ComicUpdateWithoutCreatedByInput, ComicUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ComicCreateWithoutCreatedByInput, ComicUncheckedCreateWithoutCreatedByInput>
  }

  export type ComicUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ComicWhereUniqueInput
    data: XOR<ComicUpdateWithoutCreatedByInput, ComicUncheckedUpdateWithoutCreatedByInput>
  }

  export type ComicUpdateManyWithWhereWithoutCreatedByInput = {
    where: ComicScalarWhereInput
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChaptersCreateWithoutComicInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    images?: ImagesCreateNestedManyWithoutChapterInput
    recap?: RecapCreateNestedManyWithoutChapterInput
  }

  export type ChaptersUncheckedCreateWithoutComicInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutChapterInput
    recap?: RecapUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChaptersCreateOrConnectWithoutComicInput = {
    where: ChaptersWhereUniqueInput
    create: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput>
  }

  export type ChaptersCreateManyComicInputEnvelope = {
    data: ChaptersCreateManyComicInput | ChaptersCreateManyComicInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutComicInput = {
    id?: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutComicInput = {
    id?: string
    userId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutComicInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput>
  }

  export type RatingCreateManyComicInputEnvelope = {
    data: RatingCreateManyComicInput | RatingCreateManyComicInput[]
    skipDuplicates?: boolean
  }

  export type RecapCreateWithoutComicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChaptersCreateNestedOneWithoutRecapInput
    user: UserCreateNestedOneWithoutRecapsInput
  }

  export type RecapUncheckedCreateWithoutComicInput = {
    id?: string
    userId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapCreateOrConnectWithoutComicInput = {
    where: RecapWhereUniqueInput
    create: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput>
  }

  export type RecapCreateManyComicInputEnvelope = {
    data: RecapCreateManyComicInput | RecapCreateManyComicInput[]
    skipDuplicates?: boolean
  }

  export type GenreCreateWithoutComicInput = {
    id?: string
    name: string
  }

  export type GenreUncheckedCreateWithoutComicInput = {
    id?: string
    name: string
  }

  export type GenreCreateOrConnectWithoutComicInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput>
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingCreateNestedManyWithoutUserInput
    recaps?: RecapCreateNestedManyWithoutUserInput
    createdComic?: ComicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    recaps?: RecapUncheckedCreateNestedManyWithoutUserInput
    createdComic?: ComicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type UserCreateWithoutCreatedComicInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingCreateNestedManyWithoutUserInput
    recaps?: RecapCreateNestedManyWithoutUserInput
    bookmarks?: ComicCreateNestedManyWithoutBookmarksInput
  }

  export type UserUncheckedCreateWithoutCreatedComicInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    recaps?: RecapUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: ComicUncheckedCreateNestedManyWithoutBookmarksInput
  }

  export type UserCreateOrConnectWithoutCreatedComicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput>
  }

  export type ChaptersUpsertWithWhereUniqueWithoutComicInput = {
    where: ChaptersWhereUniqueInput
    update: XOR<ChaptersUpdateWithoutComicInput, ChaptersUncheckedUpdateWithoutComicInput>
    create: XOR<ChaptersCreateWithoutComicInput, ChaptersUncheckedCreateWithoutComicInput>
  }

  export type ChaptersUpdateWithWhereUniqueWithoutComicInput = {
    where: ChaptersWhereUniqueInput
    data: XOR<ChaptersUpdateWithoutComicInput, ChaptersUncheckedUpdateWithoutComicInput>
  }

  export type ChaptersUpdateManyWithWhereWithoutComicInput = {
    where: ChaptersScalarWhereInput
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyWithoutComicInput>
  }

  export type ChaptersScalarWhereInput = {
    AND?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
    OR?: ChaptersScalarWhereInput[]
    NOT?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
    id?: StringFilter<"Chapters"> | string
    title?: StringFilter<"Chapters"> | string
    chapNum?: IntFilter<"Chapters"> | number
    createdAt?: DateTimeFilter<"Chapters"> | Date | string
    comicId?: StringFilter<"Chapters"> | string
  }

  export type RatingUpsertWithWhereUniqueWithoutComicInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutComicInput, RatingUncheckedUpdateWithoutComicInput>
    create: XOR<RatingCreateWithoutComicInput, RatingUncheckedCreateWithoutComicInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutComicInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutComicInput, RatingUncheckedUpdateWithoutComicInput>
  }

  export type RatingUpdateManyWithWhereWithoutComicInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutComicInput>
  }

  export type RecapUpsertWithWhereUniqueWithoutComicInput = {
    where: RecapWhereUniqueInput
    update: XOR<RecapUpdateWithoutComicInput, RecapUncheckedUpdateWithoutComicInput>
    create: XOR<RecapCreateWithoutComicInput, RecapUncheckedCreateWithoutComicInput>
  }

  export type RecapUpdateWithWhereUniqueWithoutComicInput = {
    where: RecapWhereUniqueInput
    data: XOR<RecapUpdateWithoutComicInput, RecapUncheckedUpdateWithoutComicInput>
  }

  export type RecapUpdateManyWithWhereWithoutComicInput = {
    where: RecapScalarWhereInput
    data: XOR<RecapUpdateManyMutationInput, RecapUncheckedUpdateManyWithoutComicInput>
  }

  export type GenreUpsertWithWhereUniqueWithoutComicInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutComicInput, GenreUncheckedUpdateWithoutComicInput>
    create: XOR<GenreCreateWithoutComicInput, GenreUncheckedCreateWithoutComicInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutComicInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutComicInput, GenreUncheckedUpdateWithoutComicInput>
  }

  export type GenreUpdateManyWithWhereWithoutComicInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutComicInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateManyWithWhereWithoutBookmarksInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBookmarksInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedComicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedComicInput, UserUncheckedUpdateWithoutCreatedComicInput>
    create: XOR<UserCreateWithoutCreatedComicInput, UserUncheckedCreateWithoutCreatedComicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedComicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedComicInput, UserUncheckedUpdateWithoutCreatedComicInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedComicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedComicInput>
  }

  export type ComicCreateWithoutGenresInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    ratings?: RatingCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateWithoutGenresInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicCreateOrConnectWithoutGenresInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput>
  }

  export type ComicUpsertWithWhereUniqueWithoutGenresInput = {
    where: ComicWhereUniqueInput
    update: XOR<ComicUpdateWithoutGenresInput, ComicUncheckedUpdateWithoutGenresInput>
    create: XOR<ComicCreateWithoutGenresInput, ComicUncheckedCreateWithoutGenresInput>
  }

  export type ComicUpdateWithWhereUniqueWithoutGenresInput = {
    where: ComicWhereUniqueInput
    data: XOR<ComicUpdateWithoutGenresInput, ComicUncheckedUpdateWithoutGenresInput>
  }

  export type ComicUpdateManyWithWhereWithoutGenresInput = {
    where: ComicScalarWhereInput
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyWithoutGenresInput>
  }

  export type ComicCreateWithoutChaptersInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    ratings?: RatingCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateWithoutChaptersInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicCreateOrConnectWithoutChaptersInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutChaptersInput, ComicUncheckedCreateWithoutChaptersInput>
  }

  export type ImagesCreateWithoutChapterInput = {
    url: string
    pageNum: number
  }

  export type ImagesUncheckedCreateWithoutChapterInput = {
    url: string
    pageNum: number
  }

  export type ImagesCreateOrConnectWithoutChapterInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput>
  }

  export type ImagesCreateManyChapterInputEnvelope = {
    data: ImagesCreateManyChapterInput | ImagesCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type RecapCreateWithoutChapterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comic: ComicCreateNestedOneWithoutRecapsInput
    user: UserCreateNestedOneWithoutRecapsInput
  }

  export type RecapUncheckedCreateWithoutChapterInput = {
    id?: string
    comicId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapCreateOrConnectWithoutChapterInput = {
    where: RecapWhereUniqueInput
    create: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput>
  }

  export type RecapCreateManyChapterInputEnvelope = {
    data: RecapCreateManyChapterInput | RecapCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type ComicUpsertWithoutChaptersInput = {
    update: XOR<ComicUpdateWithoutChaptersInput, ComicUncheckedUpdateWithoutChaptersInput>
    create: XOR<ComicCreateWithoutChaptersInput, ComicUncheckedCreateWithoutChaptersInput>
    where?: ComicWhereInput
  }

  export type ComicUpdateToOneWithWhereWithoutChaptersInput = {
    where?: ComicWhereInput
    data: XOR<ComicUpdateWithoutChaptersInput, ComicUncheckedUpdateWithoutChaptersInput>
  }

  export type ComicUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: RatingUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type ImagesUpsertWithWhereUniqueWithoutChapterInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutChapterInput, ImagesUncheckedUpdateWithoutChapterInput>
    create: XOR<ImagesCreateWithoutChapterInput, ImagesUncheckedCreateWithoutChapterInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutChapterInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutChapterInput, ImagesUncheckedUpdateWithoutChapterInput>
  }

  export type ImagesUpdateManyWithWhereWithoutChapterInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutChapterInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    url?: StringFilter<"Images"> | string
    chapterId?: StringFilter<"Images"> | string
    pageNum?: IntFilter<"Images"> | number
  }

  export type RecapUpsertWithWhereUniqueWithoutChapterInput = {
    where: RecapWhereUniqueInput
    update: XOR<RecapUpdateWithoutChapterInput, RecapUncheckedUpdateWithoutChapterInput>
    create: XOR<RecapCreateWithoutChapterInput, RecapUncheckedCreateWithoutChapterInput>
  }

  export type RecapUpdateWithWhereUniqueWithoutChapterInput = {
    where: RecapWhereUniqueInput
    data: XOR<RecapUpdateWithoutChapterInput, RecapUncheckedUpdateWithoutChapterInput>
  }

  export type RecapUpdateManyWithWhereWithoutChapterInput = {
    where: RecapScalarWhereInput
    data: XOR<RecapUpdateManyMutationInput, RecapUncheckedUpdateManyWithoutChapterInput>
  }

  export type ChaptersCreateWithoutImagesInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comic: ComicCreateNestedOneWithoutChaptersInput
    recap?: RecapCreateNestedManyWithoutChapterInput
  }

  export type ChaptersUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comicId: string
    recap?: RecapUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChaptersCreateOrConnectWithoutImagesInput = {
    where: ChaptersWhereUniqueInput
    create: XOR<ChaptersCreateWithoutImagesInput, ChaptersUncheckedCreateWithoutImagesInput>
  }

  export type ChaptersUpsertWithoutImagesInput = {
    update: XOR<ChaptersUpdateWithoutImagesInput, ChaptersUncheckedUpdateWithoutImagesInput>
    create: XOR<ChaptersCreateWithoutImagesInput, ChaptersUncheckedCreateWithoutImagesInput>
    where?: ChaptersWhereInput
  }

  export type ChaptersUpdateToOneWithWhereWithoutImagesInput = {
    where?: ChaptersWhereInput
    data: XOR<ChaptersUpdateWithoutImagesInput, ChaptersUncheckedUpdateWithoutImagesInput>
  }

  export type ChaptersUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutChaptersNestedInput
    recap?: RecapUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comicId?: StringFieldUpdateOperationsInput | string
    recap?: RecapUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ComicCreateWithoutRatingsInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    recaps?: RecapCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateWithoutRatingsInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    recaps?: RecapUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicCreateOrConnectWithoutRatingsInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutRatingsInput, ComicUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    recaps?: RecapCreateNestedManyWithoutUserInput
    bookmarks?: ComicCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    recaps?: RecapUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: ComicUncheckedCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type ComicUpsertWithoutRatingsInput = {
    update: XOR<ComicUpdateWithoutRatingsInput, ComicUncheckedUpdateWithoutRatingsInput>
    create: XOR<ComicCreateWithoutRatingsInput, ComicUncheckedCreateWithoutRatingsInput>
    where?: ComicWhereInput
  }

  export type ComicUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ComicWhereInput
    data: XOR<ComicUpdateWithoutRatingsInput, ComicUncheckedUpdateWithoutRatingsInput>
  }

  export type ComicUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    recaps?: RecapUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    recaps?: RecapUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUncheckedUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChaptersCreateWithoutRecapInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comic: ComicCreateNestedOneWithoutChaptersInput
    images?: ImagesCreateNestedManyWithoutChapterInput
  }

  export type ChaptersUncheckedCreateWithoutRecapInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
    comicId: string
    images?: ImagesUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChaptersCreateOrConnectWithoutRecapInput = {
    where: ChaptersWhereUniqueInput
    create: XOR<ChaptersCreateWithoutRecapInput, ChaptersUncheckedCreateWithoutRecapInput>
  }

  export type ComicCreateWithoutRecapsInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersCreateNestedManyWithoutComicInput
    ratings?: RatingCreateNestedManyWithoutComicInput
    genres?: GenreCreateNestedManyWithoutComicInput
    bookmarks?: UserCreateNestedManyWithoutBookmarksInput
    createdBy?: UserCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicUncheckedCreateWithoutRecapsInput = {
    id?: string
    title: string
    synopsis: string
    author: string
    artist: string
    coverArt?: string | null
    status: string
    featured?: boolean
    createdAt?: Date | string
    publication: string
    slug?: string | null
    chapters?: ChaptersUncheckedCreateNestedManyWithoutComicInput
    ratings?: RatingUncheckedCreateNestedManyWithoutComicInput
    genres?: GenreUncheckedCreateNestedManyWithoutComicInput
    bookmarks?: UserUncheckedCreateNestedManyWithoutBookmarksInput
    createdBy?: UserUncheckedCreateNestedManyWithoutCreatedComicInput
  }

  export type ComicCreateOrConnectWithoutRecapsInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutRecapsInput, ComicUncheckedCreateWithoutRecapsInput>
  }

  export type UserCreateWithoutRecapsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingCreateNestedManyWithoutUserInput
    bookmarks?: ComicCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRecapsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    role?: string
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: ComicUncheckedCreateNestedManyWithoutBookmarksInput
    createdComic?: ComicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRecapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecapsInput, UserUncheckedCreateWithoutRecapsInput>
  }

  export type ChaptersUpsertWithoutRecapInput = {
    update: XOR<ChaptersUpdateWithoutRecapInput, ChaptersUncheckedUpdateWithoutRecapInput>
    create: XOR<ChaptersCreateWithoutRecapInput, ChaptersUncheckedCreateWithoutRecapInput>
    where?: ChaptersWhereInput
  }

  export type ChaptersUpdateToOneWithWhereWithoutRecapInput = {
    where?: ChaptersWhereInput
    data: XOR<ChaptersUpdateWithoutRecapInput, ChaptersUncheckedUpdateWithoutRecapInput>
  }

  export type ChaptersUpdateWithoutRecapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutChaptersNestedInput
    images?: ImagesUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersUncheckedUpdateWithoutRecapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comicId?: StringFieldUpdateOperationsInput | string
    images?: ImagesUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ComicUpsertWithoutRecapsInput = {
    update: XOR<ComicUpdateWithoutRecapsInput, ComicUncheckedUpdateWithoutRecapsInput>
    create: XOR<ComicCreateWithoutRecapsInput, ComicUncheckedCreateWithoutRecapsInput>
    where?: ComicWhereInput
  }

  export type ComicUpdateToOneWithWhereWithoutRecapsInput = {
    where?: ComicWhereInput
    data: XOR<ComicUpdateWithoutRecapsInput, ComicUncheckedUpdateWithoutRecapsInput>
  }

  export type ComicUpdateWithoutRecapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    ratings?: RatingUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutRecapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type UserUpsertWithoutRecapsInput = {
    update: XOR<UserUpdateWithoutRecapsInput, UserUncheckedUpdateWithoutRecapsInput>
    create: XOR<UserCreateWithoutRecapsInput, UserUncheckedCreateWithoutRecapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecapsInput, UserUncheckedUpdateWithoutRecapsInput>
  }

  export type UserUpdateWithoutRecapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRecapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUncheckedUpdateManyWithoutBookmarksNestedInput
    createdComic?: ComicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type RatingCreateManyUserInput = {
    id?: string
    comicId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapCreateManyUserInput = {
    id?: string
    comicId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChaptersUpdateOneRequiredWithoutRecapNestedInput
    comic?: ComicUpdateOneRequiredWithoutRecapsNestedInput
  }

  export type RecapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComicUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    ratings?: RatingUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateManyWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComicUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    ratings?: RatingUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    genres?: GenreUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
  }

  export type ComicUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    genres?: GenreUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
  }

  export type ComicUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaptersCreateManyComicInput = {
    id?: string
    title: string
    chapNum: number
    createdAt?: Date | string
  }

  export type RatingCreateManyComicInput = {
    id?: string
    userId: string
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecapCreateManyComicInput = {
    id?: string
    userId: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChaptersUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutChapterNestedInput
    recap?: RecapUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutChapterNestedInput
    recap?: RecapUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChaptersUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chapNum?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChaptersUpdateOneRequiredWithoutRecapNestedInput
    user?: UserUpdateOneRequiredWithoutRecapsNestedInput
  }

  export type RecapUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUpdateManyWithoutUserNestedInput
    recaps?: RecapUpdateManyWithoutUserNestedInput
    createdComic?: ComicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutUserNestedInput
    createdComic?: ComicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutCreatedComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUpdateManyWithoutUserNestedInput
    recaps?: RecapUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUpdateManyWithoutBookmarksNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: ComicUncheckedUpdateManyWithoutBookmarksNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ComicUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUpdateManyWithoutComicNestedInput
    ratings?: RatingUpdateManyWithoutComicNestedInput
    recaps?: RecapUpdateManyWithoutComicNestedInput
    bookmarks?: UserUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChaptersUncheckedUpdateManyWithoutComicNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutComicNestedInput
    recaps?: RecapUncheckedUpdateManyWithoutComicNestedInput
    bookmarks?: UserUncheckedUpdateManyWithoutBookmarksNestedInput
    createdBy?: UserUncheckedUpdateManyWithoutCreatedComicNestedInput
  }

  export type ComicUncheckedUpdateManyWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverArt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagesCreateManyChapterInput = {
    url: string
    pageNum: number
  }

  export type RecapCreateManyChapterInput = {
    id?: string
    comicId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateWithoutChapterInput = {
    url?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesUncheckedUpdateWithoutChapterInput = {
    url?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesUncheckedUpdateManyWithoutChapterInput = {
    url?: StringFieldUpdateOperationsInput | string
    pageNum?: IntFieldUpdateOperationsInput | number
  }

  export type RecapUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutRecapsNestedInput
    user?: UserUpdateOneRequiredWithoutRecapsNestedInput
  }

  export type RecapUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecapUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}