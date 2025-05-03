
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
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model appointments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type appointments = $Result.DefaultSelection<Prisma.$appointmentsPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model employees
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model otp
 * 
 */
export type otp = $Result.DefaultSelection<Prisma.$otpPayload>
/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
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
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.appointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.otpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    admins: 'admins',
    appointments: 'appointments',
    company: 'company',
    employees: 'employees',
    otp: 'otp',
    services: 'services',
    users: 'users'
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
      modelProps: "admins" | "appointments" | "company" | "employees" | "otp" | "services" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      appointments: {
        payload: Prisma.$appointmentsPayload<ExtArgs>
        fields: Prisma.appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findFirst: {
            args: Prisma.appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findMany: {
            args: Prisma.appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          create: {
            args: Prisma.appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          createMany: {
            args: Prisma.appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          delete: {
            args: Prisma.appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          update: {
            args: Prisma.appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          upsert: {
            args: Prisma.appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      otp: {
        payload: Prisma.$otpPayload<ExtArgs>
        fields: Prisma.otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findFirst: {
            args: Prisma.otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findMany: {
            args: Prisma.otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          create: {
            args: Prisma.otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          createMany: {
            args: Prisma.otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          delete: {
            args: Prisma.otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          update: {
            args: Prisma.otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          deleteMany: {
            args: Prisma.otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          upsert: {
            args: Prisma.otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    admins?: adminsOmit
    appointments?: appointmentsOmit
    company?: companyOmit
    employees?: employeesOmit
    otp?: otpOmit
    services?: servicesOmit
    users?: usersOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    employees: number
    services: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
    services?: boolean | CompanyCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    appointments: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | EmployeesCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }


  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    appointments: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServicesCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    appointments: number
    otp: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UsersCountOutputTypeCountAppointmentsArgs
    otp?: boolean | UsersCountOutputTypeCountOtpArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    admin_id: number | null
    employee_id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    admin_id: number | null
    employee_id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    admin_id: number | null
    employee_id: number | null
  }

  export type AdminsMaxAggregateOutputType = {
    admin_id: number | null
    employee_id: number | null
  }

  export type AdminsCountAggregateOutputType = {
    admin_id: number
    employee_id: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    admin_id?: true
    employee_id?: true
  }

  export type AdminsSumAggregateInputType = {
    admin_id?: true
    employee_id?: true
  }

  export type AdminsMinAggregateInputType = {
    admin_id?: true
    employee_id?: true
  }

  export type AdminsMaxAggregateInputType = {
    admin_id?: true
    employee_id?: true
  }

  export type AdminsCountAggregateInputType = {
    admin_id?: true
    employee_id?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    admin_id: number
    employee_id: number
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    employee_id?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    employee_id?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    employee_id?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectScalar = {
    admin_id?: boolean
    employee_id?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "employee_id", ExtArgs["result"]["admins"]>
  export type adminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }
  export type adminsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }
  export type adminsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
  }

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      employee_id: number
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.createManyAndReturn({
     *   select: { admin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(args?: SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.updateManyAndReturn({
     *   select: { admin_id: true },
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
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(args: SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
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
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the admins model
   */
  interface adminsFieldRefs {
    readonly admin_id: FieldRef<"admins", 'Int'>
    readonly employee_id: FieldRef<"admins", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins createManyAndReturn
   */
  export type adminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins updateManyAndReturn
   */
  export type adminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
  }


  /**
   * Model appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    appointment_id: number | null
    user_id: number | null
    employee_id: number | null
    service_id: number | null
    total_cost: Decimal | null
  }

  export type AppointmentsSumAggregateOutputType = {
    appointment_id: number | null
    user_id: number | null
    employee_id: number | null
    service_id: number | null
    total_cost: Decimal | null
  }

  export type AppointmentsMinAggregateOutputType = {
    appointment_id: number | null
    user_id: number | null
    employee_id: number | null
    service_id: number | null
    appointment_time: Date | null
    status: string | null
    total_cost: Decimal | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    appointment_id: number | null
    user_id: number | null
    employee_id: number | null
    service_id: number | null
    appointment_time: Date | null
    status: string | null
    total_cost: Decimal | null
  }

  export type AppointmentsCountAggregateOutputType = {
    appointment_id: number
    user_id: number
    employee_id: number
    service_id: number
    appointment_time: number
    status: number
    total_cost: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    appointment_id?: true
    user_id?: true
    employee_id?: true
    service_id?: true
    total_cost?: true
  }

  export type AppointmentsSumAggregateInputType = {
    appointment_id?: true
    user_id?: true
    employee_id?: true
    service_id?: true
    total_cost?: true
  }

  export type AppointmentsMinAggregateInputType = {
    appointment_id?: true
    user_id?: true
    employee_id?: true
    service_id?: true
    appointment_time?: true
    status?: true
    total_cost?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    appointment_id?: true
    user_id?: true
    employee_id?: true
    service_id?: true
    appointment_time?: true
    status?: true
    total_cost?: true
  }

  export type AppointmentsCountAggregateInputType = {
    appointment_id?: true
    user_id?: true
    employee_id?: true
    service_id?: true
    appointment_time?: true
    status?: true
    total_cost?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to aggregate.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithAggregationInput | appointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    appointment_id: number
    user_id: number
    employee_id: number
    service_id: number
    appointment_time: Date
    status: string | null
    total_cost: Decimal | null
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    user_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    appointment_time?: boolean
    status?: boolean
    total_cost?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    user_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    appointment_time?: boolean
    status?: boolean
    total_cost?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    user_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    appointment_time?: boolean
    status?: boolean
    total_cost?: boolean
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectScalar = {
    appointment_id?: boolean
    user_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    appointment_time?: boolean
    status?: boolean
    total_cost?: boolean
  }

  export type appointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"appointment_id" | "user_id" | "employee_id" | "service_id" | "appointment_time" | "status" | "total_cost", ExtArgs["result"]["appointments"]>
  export type appointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employeesDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointments"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs>
      services: Prisma.$servicesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      appointment_id: number
      user_id: number
      employee_id: number
      service_id: number
      appointment_time: Date
      status: string | null
      total_cost: Prisma.Decimal | null
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type appointmentsGetPayload<S extends boolean | null | undefined | appointmentsDefaultArgs> = $Result.GetResult<Prisma.$appointmentsPayload, S>

  type appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointments'], meta: { name: 'appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {appointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentsFindUniqueArgs>(args: SelectSubset<T, appointmentsFindUniqueArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentsFindFirstArgs>(args?: SelectSubset<T, appointmentsFindFirstArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.findMany({ select: { appointment_id: true } })
     * 
     */
    findMany<T extends appointmentsFindManyArgs>(args?: SelectSubset<T, appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {appointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends appointmentsCreateArgs>(args: SelectSubset<T, appointmentsCreateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentsCreateManyArgs>(args?: SelectSubset<T, appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {appointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.createManyAndReturn({
     *   select: { appointment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, appointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {appointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends appointmentsDeleteArgs>(args: SelectSubset<T, appointmentsDeleteArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {appointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentsUpdateArgs>(args: SelectSubset<T, appointmentsUpdateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentsDeleteManyArgs>(args?: SelectSubset<T, appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentsUpdateManyArgs>(args: SelectSubset<T, appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {appointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.updateManyAndReturn({
     *   select: { appointment_id: true },
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
    updateManyAndReturn<T extends appointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, appointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {appointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends appointmentsUpsertArgs>(args: SelectSubset<T, appointmentsUpsertArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentsCountArgs>(
      args?: Subset<T, appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsGroupByArgs} args - Group by arguments.
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
      T extends appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: appointmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointments model
   */
  readonly fields: appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicesDefaultArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the appointments model
   */
  interface appointmentsFieldRefs {
    readonly appointment_id: FieldRef<"appointments", 'Int'>
    readonly user_id: FieldRef<"appointments", 'Int'>
    readonly employee_id: FieldRef<"appointments", 'Int'>
    readonly service_id: FieldRef<"appointments", 'Int'>
    readonly appointment_time: FieldRef<"appointments", 'DateTime'>
    readonly status: FieldRef<"appointments", 'String'>
    readonly total_cost: FieldRef<"appointments", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * appointments findUnique
   */
  export type appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findUniqueOrThrow
   */
  export type appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findFirst
   */
  export type appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findFirstOrThrow
   */
  export type appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findMany
   */
  export type appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments create
   */
  export type appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a appointments.
     */
    data: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
  }

  /**
   * appointments createMany
   */
  export type appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointments createManyAndReturn
   */
  export type appointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments update
   */
  export type appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a appointments.
     */
    data: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
    /**
     * Choose, which appointments to update.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments updateMany
   */
  export type appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointments updateManyAndReturn
   */
  export type appointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments upsert
   */
  export type appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the appointments to update in case it exists.
     */
    where: appointmentsWhereUniqueInput
    /**
     * In case the appointments found by the `where` argument doesn't exist, create a new appointments with this data.
     */
    create: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
    /**
     * In case the appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
  }

  /**
   * appointments delete
   */
  export type appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter which appointments to delete.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments deleteMany
   */
  export type appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointments without action
   */
  export type appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    company_id: number | null
  }

  export type CompanySumAggregateOutputType = {
    company_id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    company_id: number | null
    company_name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    company_id: number | null
    company_name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type CompanyCountAggregateOutputType = {
    company_id: number
    company_name: number
    address: number
    phone: number
    email: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    company_id?: true
  }

  export type CompanySumAggregateInputType = {
    company_id?: true
  }

  export type CompanyMinAggregateInputType = {
    company_id?: true
    company_name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type CompanyMaxAggregateInputType = {
    company_id?: true
    company_name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type CompanyCountAggregateInputType = {
    company_id?: true
    company_name?: true
    address?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    company_id: number
    company_name: string
    address: string | null
    phone: string | null
    email: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    employees?: boolean | company$employeesArgs<ExtArgs>
    services?: boolean | company$servicesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    company_id?: boolean
    company_name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "company_name" | "address" | "phone" | "email", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | company$employeesArgs<ExtArgs>
    services?: boolean | company$servicesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs>[]
      services: Prisma.$servicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      company_name: string
      address: string | null
      phone: string | null
      email: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends company$servicesArgs<ExtArgs> = {}>(args?: Subset<T, company$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly company_id: FieldRef<"company", 'Int'>
    readonly company_name: FieldRef<"company", 'String'>
    readonly address: FieldRef<"company", 'String'>
    readonly phone: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.employees
   */
  export type company$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    cursor?: employeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * company.services
   */
  export type company$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    cursor?: servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    employee_id: number | null
    working_hours: number | null
    company_id: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    employee_id: number | null
    working_hours: number | null
    company_id: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    employee_id: number | null
    full_name: string | null
    working_hours: number | null
    company_id: number | null
  }

  export type EmployeesMaxAggregateOutputType = {
    employee_id: number | null
    full_name: string | null
    working_hours: number | null
    company_id: number | null
  }

  export type EmployeesCountAggregateOutputType = {
    employee_id: number
    full_name: number
    working_hours: number
    company_id: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    employee_id?: true
    working_hours?: true
    company_id?: true
  }

  export type EmployeesSumAggregateInputType = {
    employee_id?: true
    working_hours?: true
    company_id?: true
  }

  export type EmployeesMinAggregateInputType = {
    employee_id?: true
    full_name?: true
    working_hours?: true
    company_id?: true
  }

  export type EmployeesMaxAggregateInputType = {
    employee_id?: true
    full_name?: true
    working_hours?: true
    company_id?: true
  }

  export type EmployeesCountAggregateInputType = {
    employee_id?: true
    full_name?: true
    working_hours?: true
    company_id?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    employee_id: number
    full_name: string
    working_hours: number
    company_id: number
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    full_name?: boolean
    working_hours?: boolean
    company_id?: boolean
    admins?: boolean | employees$adminsArgs<ExtArgs>
    appointments?: boolean | employees$appointmentsArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    full_name?: boolean
    working_hours?: boolean
    company_id?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    full_name?: boolean
    working_hours?: boolean
    company_id?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectScalar = {
    employee_id?: boolean
    full_name?: boolean
    working_hours?: boolean
    company_id?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employee_id" | "full_name" | "working_hours" | "company_id", ExtArgs["result"]["employees"]>
  export type employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | employees$adminsArgs<ExtArgs>
    appointments?: boolean | employees$appointmentsArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type employeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {
      admins: Prisma.$adminsPayload<ExtArgs> | null
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employee_id: number
      full_name: string
      working_hours: number
      company_id: number
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.findMany({ select: { employee_id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.createManyAndReturn({
     *   select: { employee_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.updateManyAndReturn({
     *   select: { employee_id: true },
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
    updateManyAndReturn<T extends employeesUpdateManyAndReturnArgs>(args: SelectSubset<T, employeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
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
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends employees$adminsArgs<ExtArgs> = {}>(args?: Subset<T, employees$adminsArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointments<T extends employees$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, employees$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the employees model
   */
  interface employeesFieldRefs {
    readonly employee_id: FieldRef<"employees", 'Int'>
    readonly full_name: FieldRef<"employees", 'String'>
    readonly working_hours: FieldRef<"employees", 'Int'>
    readonly company_id: FieldRef<"employees", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees createManyAndReturn
   */
  export type employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees updateManyAndReturn
   */
  export type employeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees.admins
   */
  export type employees$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    where?: adminsWhereInput
  }

  /**
   * employees.appointments
   */
  export type employees$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
  }


  /**
   * Model otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    otp_id: number | null
    user_id: number | null
  }

  export type OtpSumAggregateOutputType = {
    otp_id: number | null
    user_id: number | null
  }

  export type OtpMinAggregateOutputType = {
    otp_id: number | null
    user_id: number | null
    otp_code: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    otp_id: number | null
    user_id: number | null
    otp_code: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type OtpCountAggregateOutputType = {
    otp_id: number
    user_id: number
    otp_code: number
    created_at: number
    expires_at: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    otp_id?: true
    user_id?: true
  }

  export type OtpSumAggregateInputType = {
    otp_id?: true
    user_id?: true
  }

  export type OtpMinAggregateInputType = {
    otp_id?: true
    user_id?: true
    otp_code?: true
    created_at?: true
    expires_at?: true
  }

  export type OtpMaxAggregateInputType = {
    otp_id?: true
    user_id?: true
    otp_code?: true
    created_at?: true
    expires_at?: true
  }

  export type OtpCountAggregateInputType = {
    otp_id?: true
    user_id?: true
    otp_code?: true
    created_at?: true
    expires_at?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otp to aggregate.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpWhereInput
    orderBy?: otpOrderByWithAggregationInput | otpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    otp_id: number
    user_id: number
    otp_code: string
    created_at: Date | null
    expires_at: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp_id?: boolean
    user_id?: boolean
    otp_code?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type otpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp_id?: boolean
    user_id?: boolean
    otp_code?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type otpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp_id?: boolean
    user_id?: boolean
    otp_code?: boolean
    created_at?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type otpSelectScalar = {
    otp_id?: boolean
    user_id?: boolean
    otp_code?: boolean
    created_at?: boolean
    expires_at?: boolean
  }

  export type otpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"otp_id" | "user_id" | "otp_code" | "created_at" | "expires_at", ExtArgs["result"]["otp"]>
  export type otpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type otpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type otpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otp"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      otp_id: number
      user_id: number
      otp_code: string
      created_at: Date | null
      expires_at: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type otpGetPayload<S extends boolean | null | undefined | otpDefaultArgs> = $Result.GetResult<Prisma.$otpPayload, S>

  type otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otp'], meta: { name: 'otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {otpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpFindUniqueArgs>(args: SelectSubset<T, otpFindUniqueArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpFindUniqueOrThrowArgs>(args: SelectSubset<T, otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpFindFirstArgs>(args?: SelectSubset<T, otpFindFirstArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpFindFirstOrThrowArgs>(args?: SelectSubset<T, otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `otp_id`
     * const otpWithOtp_idOnly = await prisma.otp.findMany({ select: { otp_id: true } })
     * 
     */
    findMany<T extends otpFindManyArgs>(args?: SelectSubset<T, otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {otpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends otpCreateArgs>(args: SelectSubset<T, otpCreateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {otpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpCreateManyArgs>(args?: SelectSubset<T, otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {otpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `otp_id`
     * const otpWithOtp_idOnly = await prisma.otp.createManyAndReturn({
     *   select: { otp_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otpCreateManyAndReturnArgs>(args?: SelectSubset<T, otpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {otpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends otpDeleteArgs>(args: SelectSubset<T, otpDeleteArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {otpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpUpdateArgs>(args: SelectSubset<T, otpUpdateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {otpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpDeleteManyArgs>(args?: SelectSubset<T, otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpUpdateManyArgs>(args: SelectSubset<T, otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {otpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `otp_id`
     * const otpWithOtp_idOnly = await prisma.otp.updateManyAndReturn({
     *   select: { otp_id: true },
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
    updateManyAndReturn<T extends otpUpdateManyAndReturnArgs>(args: SelectSubset<T, otpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {otpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends otpUpsertArgs>(args: SelectSubset<T, otpUpsertArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends otpCountArgs>(
      args?: Subset<T, otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpGroupByArgs} args - Group by arguments.
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
      T extends otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpGroupByArgs['orderBy'] }
        : { orderBy?: otpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otp model
   */
  readonly fields: otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the otp model
   */
  interface otpFieldRefs {
    readonly otp_id: FieldRef<"otp", 'Int'>
    readonly user_id: FieldRef<"otp", 'Int'>
    readonly otp_code: FieldRef<"otp", 'String'>
    readonly created_at: FieldRef<"otp", 'DateTime'>
    readonly expires_at: FieldRef<"otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * otp findUnique
   */
  export type otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findUniqueOrThrow
   */
  export type otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findFirst
   */
  export type otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findFirstOrThrow
   */
  export type otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findMany
   */
  export type otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp create
   */
  export type otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * The data needed to create a otp.
     */
    data: XOR<otpCreateInput, otpUncheckedCreateInput>
  }

  /**
   * otp createMany
   */
  export type otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otp createManyAndReturn
   */
  export type otpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * otp update
   */
  export type otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * The data needed to update a otp.
     */
    data: XOR<otpUpdateInput, otpUncheckedUpdateInput>
    /**
     * Choose, which otp to update.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp updateMany
   */
  export type otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otp updateManyAndReturn
   */
  export type otpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * otp upsert
   */
  export type otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * The filter to search for the otp to update in case it exists.
     */
    where: otpWhereUniqueInput
    /**
     * In case the otp found by the `where` argument doesn't exist, create a new otp with this data.
     */
    create: XOR<otpCreateInput, otpUncheckedCreateInput>
    /**
     * In case the otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpUpdateInput, otpUncheckedUpdateInput>
  }

  /**
   * otp delete
   */
  export type otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    /**
     * Filter which otp to delete.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp deleteMany
   */
  export type otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to delete
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to delete.
     */
    limit?: number
  }

  /**
   * otp without action
   */
  export type otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
  }


  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    service_id: number | null
    base_cost: Decimal | null
    company_id: number | null
  }

  export type ServicesSumAggregateOutputType = {
    service_id: number | null
    base_cost: Decimal | null
    company_id: number | null
  }

  export type ServicesMinAggregateOutputType = {
    service_id: number | null
    service_name: string | null
    description: string | null
    base_cost: Decimal | null
    company_id: number | null
  }

  export type ServicesMaxAggregateOutputType = {
    service_id: number | null
    service_name: string | null
    description: string | null
    base_cost: Decimal | null
    company_id: number | null
  }

  export type ServicesCountAggregateOutputType = {
    service_id: number
    service_name: number
    description: number
    base_cost: number
    company_id: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    service_id?: true
    base_cost?: true
    company_id?: true
  }

  export type ServicesSumAggregateInputType = {
    service_id?: true
    base_cost?: true
    company_id?: true
  }

  export type ServicesMinAggregateInputType = {
    service_id?: true
    service_name?: true
    description?: true
    base_cost?: true
    company_id?: true
  }

  export type ServicesMaxAggregateInputType = {
    service_id?: true
    service_name?: true
    description?: true
    base_cost?: true
    company_id?: true
  }

  export type ServicesCountAggregateInputType = {
    service_id?: true
    service_name?: true
    description?: true
    base_cost?: true
    company_id?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    service_id: number
    service_name: string
    description: string | null
    base_cost: Decimal | null
    company_id: number
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    service_name?: boolean
    description?: boolean
    base_cost?: boolean
    company_id?: boolean
    appointments?: boolean | services$appointmentsArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    service_name?: boolean
    description?: boolean
    base_cost?: boolean
    company_id?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    service_name?: boolean
    description?: boolean
    base_cost?: boolean
    company_id?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    service_id?: boolean
    service_name?: boolean
    description?: boolean
    base_cost?: boolean
    company_id?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"service_id" | "service_name" | "description" | "base_cost" | "company_id", ExtArgs["result"]["services"]>
  export type servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | services$appointmentsArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type servicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type servicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      service_id: number
      service_name: string
      description: string | null
      base_cost: Prisma.Decimal | null
      company_id: number
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `service_id`
     * const servicesWithService_idOnly = await prisma.services.findMany({ select: { service_id: true } })
     * 
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `service_id`
     * const servicesWithService_idOnly = await prisma.services.createManyAndReturn({
     *   select: { service_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `service_id`
     * const servicesWithService_idOnly = await prisma.services.updateManyAndReturn({
     *   select: { service_id: true },
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
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
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
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends services$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, services$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly service_id: FieldRef<"services", 'Int'>
    readonly service_name: FieldRef<"services", 'String'>
    readonly description: FieldRef<"services", 'String'>
    readonly base_cost: FieldRef<"services", 'Decimal'>
    readonly company_id: FieldRef<"services", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export type servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export type servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services.appointments
   */
  export type services$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    phone: number
    email: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    phone: string
    email: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
    appointments?: boolean | users$appointmentsArgs<ExtArgs>
    otp?: boolean | users$otpArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "first_name" | "last_name" | "phone" | "email" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | users$appointmentsArgs<ExtArgs>
    otp?: boolean | users$otpArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      otp: Prisma.$otpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      phone: string
      email: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends users$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otp<T extends users$otpArgs<ExtArgs> = {}>(args?: Subset<T, users$otpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.appointments
   */
  export type users$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * users.otp
   */
  export type users$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpInclude<ExtArgs> | null
    where?: otpWhereInput
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    cursor?: otpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AdminsScalarFieldEnum: {
    admin_id: 'admin_id',
    employee_id: 'employee_id'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    appointment_id: 'appointment_id',
    user_id: 'user_id',
    employee_id: 'employee_id',
    service_id: 'service_id',
    appointment_time: 'appointment_time',
    status: 'status',
    total_cost: 'total_cost'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    company_id: 'company_id',
    company_name: 'company_name',
    address: 'address',
    phone: 'phone',
    email: 'email'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    employee_id: 'employee_id',
    full_name: 'full_name',
    working_hours: 'working_hours',
    company_id: 'company_id'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    otp_id: 'otp_id',
    user_id: 'user_id',
    otp_code: 'otp_code',
    created_at: 'created_at',
    expires_at: 'expires_at'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    service_id: 'service_id',
    service_name: 'service_name',
    description: 'description',
    base_cost: 'base_cost',
    company_id: 'company_id'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    email: 'email',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    admin_id?: IntFilter<"admins"> | number
    employee_id?: IntFilter<"admins"> | number
    employees?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }

  export type adminsOrderByWithRelationInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
    employees?: employeesOrderByWithRelationInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    employee_id?: number
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    employees?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }, "admin_id" | "employee_id">

  export type adminsOrderByWithAggregationInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"admins"> | number
    employee_id?: IntWithAggregatesFilter<"admins"> | number
  }

  export type appointmentsWhereInput = {
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    appointment_id?: IntFilter<"appointments"> | number
    user_id?: IntFilter<"appointments"> | number
    employee_id?: IntFilter<"appointments"> | number
    service_id?: IntFilter<"appointments"> | number
    appointment_time?: DateTimeFilter<"appointments"> | Date | string
    status?: StringNullableFilter<"appointments"> | string | null
    total_cost?: DecimalNullableFilter<"appointments"> | Decimal | DecimalJsLike | number | string | null
    employees?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
    services?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type appointmentsOrderByWithRelationInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    appointment_time?: SortOrder
    status?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    employees?: employeesOrderByWithRelationInput
    services?: servicesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type appointmentsWhereUniqueInput = Prisma.AtLeast<{
    appointment_id?: number
    employee_id_appointment_time?: appointmentsEmployee_idAppointment_timeCompoundUniqueInput
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    user_id?: IntFilter<"appointments"> | number
    employee_id?: IntFilter<"appointments"> | number
    service_id?: IntFilter<"appointments"> | number
    appointment_time?: DateTimeFilter<"appointments"> | Date | string
    status?: StringNullableFilter<"appointments"> | string | null
    total_cost?: DecimalNullableFilter<"appointments"> | Decimal | DecimalJsLike | number | string | null
    employees?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
    services?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "appointment_id" | "employee_id_appointment_time">

  export type appointmentsOrderByWithAggregationInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    appointment_time?: SortOrder
    status?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    _count?: appointmentsCountOrderByAggregateInput
    _avg?: appointmentsAvgOrderByAggregateInput
    _max?: appointmentsMaxOrderByAggregateInput
    _min?: appointmentsMinOrderByAggregateInput
    _sum?: appointmentsSumOrderByAggregateInput
  }

  export type appointmentsScalarWhereWithAggregatesInput = {
    AND?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    OR?: appointmentsScalarWhereWithAggregatesInput[]
    NOT?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    appointment_id?: IntWithAggregatesFilter<"appointments"> | number
    user_id?: IntWithAggregatesFilter<"appointments"> | number
    employee_id?: IntWithAggregatesFilter<"appointments"> | number
    service_id?: IntWithAggregatesFilter<"appointments"> | number
    appointment_time?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    status?: StringNullableWithAggregatesFilter<"appointments"> | string | null
    total_cost?: DecimalNullableWithAggregatesFilter<"appointments"> | Decimal | DecimalJsLike | number | string | null
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    company_id?: IntFilter<"company"> | number
    company_name?: StringFilter<"company"> | string
    address?: StringNullableFilter<"company"> | string | null
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    employees?: EmployeesListRelationFilter
    services?: ServicesListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    employees?: employeesOrderByRelationAggregateInput
    services?: servicesOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    company_id?: number
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    company_name?: StringFilter<"company"> | string
    address?: StringNullableFilter<"company"> | string | null
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    employees?: EmployeesListRelationFilter
    services?: ServicesListRelationFilter
  }, "company_id">

  export type companyOrderByWithAggregationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"company"> | number
    company_name?: StringWithAggregatesFilter<"company"> | string
    address?: StringNullableWithAggregatesFilter<"company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"company"> | string | null
    email?: StringNullableWithAggregatesFilter<"company"> | string | null
  }

  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    employee_id?: IntFilter<"employees"> | number
    full_name?: StringFilter<"employees"> | string
    working_hours?: IntFilter<"employees"> | number
    company_id?: IntFilter<"employees"> | number
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    appointments?: AppointmentsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }

  export type employeesOrderByWithRelationInput = {
    employee_id?: SortOrder
    full_name?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
    admins?: adminsOrderByWithRelationInput
    appointments?: appointmentsOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    employee_id?: number
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    full_name?: StringFilter<"employees"> | string
    working_hours?: IntFilter<"employees"> | number
    company_id?: IntFilter<"employees"> | number
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    appointments?: AppointmentsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }, "employee_id">

  export type employeesOrderByWithAggregationInput = {
    employee_id?: SortOrder
    full_name?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    employee_id?: IntWithAggregatesFilter<"employees"> | number
    full_name?: StringWithAggregatesFilter<"employees"> | string
    working_hours?: IntWithAggregatesFilter<"employees"> | number
    company_id?: IntWithAggregatesFilter<"employees"> | number
  }

  export type otpWhereInput = {
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    otp_id?: IntFilter<"otp"> | number
    user_id?: IntFilter<"otp"> | number
    otp_code?: StringFilter<"otp"> | string
    created_at?: DateTimeNullableFilter<"otp"> | Date | string | null
    expires_at?: DateTimeFilter<"otp"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type otpOrderByWithRelationInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type otpWhereUniqueInput = Prisma.AtLeast<{
    otp_id?: number
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    user_id?: IntFilter<"otp"> | number
    otp_code?: StringFilter<"otp"> | string
    created_at?: DateTimeNullableFilter<"otp"> | Date | string | null
    expires_at?: DateTimeFilter<"otp"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "otp_id">

  export type otpOrderByWithAggregationInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    _count?: otpCountOrderByAggregateInput
    _avg?: otpAvgOrderByAggregateInput
    _max?: otpMaxOrderByAggregateInput
    _min?: otpMinOrderByAggregateInput
    _sum?: otpSumOrderByAggregateInput
  }

  export type otpScalarWhereWithAggregatesInput = {
    AND?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    OR?: otpScalarWhereWithAggregatesInput[]
    NOT?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    otp_id?: IntWithAggregatesFilter<"otp"> | number
    user_id?: IntWithAggregatesFilter<"otp"> | number
    otp_code?: StringWithAggregatesFilter<"otp"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"otp"> | Date | string | null
    expires_at?: DateTimeWithAggregatesFilter<"otp"> | Date | string
  }

  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    service_id?: IntFilter<"services"> | number
    service_name?: StringFilter<"services"> | string
    description?: StringNullableFilter<"services"> | string | null
    base_cost?: DecimalNullableFilter<"services"> | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFilter<"services"> | number
    appointments?: AppointmentsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }

  export type servicesOrderByWithRelationInput = {
    service_id?: SortOrder
    service_name?: SortOrder
    description?: SortOrderInput | SortOrder
    base_cost?: SortOrderInput | SortOrder
    company_id?: SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    service_id?: number
    service_name?: string
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    description?: StringNullableFilter<"services"> | string | null
    base_cost?: DecimalNullableFilter<"services"> | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFilter<"services"> | number
    appointments?: AppointmentsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }, "service_id" | "service_name">

  export type servicesOrderByWithAggregationInput = {
    service_id?: SortOrder
    service_name?: SortOrder
    description?: SortOrderInput | SortOrder
    base_cost?: SortOrderInput | SortOrder
    company_id?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    service_id?: IntWithAggregatesFilter<"services"> | number
    service_name?: StringWithAggregatesFilter<"services"> | string
    description?: StringNullableWithAggregatesFilter<"services"> | string | null
    base_cost?: DecimalNullableWithAggregatesFilter<"services"> | Decimal | DecimalJsLike | number | string | null
    company_id?: IntWithAggregatesFilter<"services"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    appointments?: AppointmentsListRelationFilter
    otp?: OtpListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
    otp?: otpOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    phone?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    appointments?: AppointmentsListRelationFilter
    otp?: OtpListRelationFilter
  }, "user_id" | "phone" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type adminsCreateInput = {
    employees: employeesCreateNestedOneWithoutAdminsInput
  }

  export type adminsUncheckedCreateInput = {
    admin_id?: number
    employee_id: number
  }

  export type adminsUpdateInput = {
    employees?: employeesUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type adminsCreateManyInput = {
    admin_id?: number
    employee_id: number
  }

  export type adminsUpdateManyMutationInput = {

  }

  export type adminsUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type appointmentsCreateInput = {
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    employees: employeesCreateNestedOneWithoutAppointmentsInput
    services: servicesCreateNestedOneWithoutAppointmentsInput
    users: usersCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateInput = {
    appointment_id?: number
    user_id: number
    employee_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUpdateInput = {
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employees?: employeesUpdateOneRequiredWithoutAppointmentsNestedInput
    services?: servicesUpdateOneRequiredWithoutAppointmentsNestedInput
    users?: usersUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateManyInput = {
    appointment_id?: number
    user_id: number
    employee_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUpdateManyMutationInput = {
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUncheckedUpdateManyInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type companyCreateInput = {
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    employees?: employeesCreateNestedManyWithoutCompanyInput
    services?: servicesCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    company_id?: number
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    employees?: employeesUncheckedCreateNestedManyWithoutCompanyInput
    services?: servicesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: employeesUpdateManyWithoutCompanyNestedInput
    services?: servicesUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: employeesUncheckedUpdateManyWithoutCompanyNestedInput
    services?: servicesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    company_id?: number
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
  }

  export type companyUpdateManyMutationInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesCreateInput = {
    full_name: string
    working_hours: number
    admins?: adminsCreateNestedOneWithoutEmployeesInput
    appointments?: appointmentsCreateNestedManyWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeesInput
  }

  export type employeesUncheckedCreateInput = {
    employee_id?: number
    full_name: string
    working_hours: number
    company_id: number
    admins?: adminsUncheckedCreateNestedOneWithoutEmployeesInput
    appointments?: appointmentsUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    admins?: adminsUpdateOneWithoutEmployeesNestedInput
    appointments?: appointmentsUpdateManyWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    admins?: adminsUncheckedUpdateOneWithoutEmployeesNestedInput
    appointments?: appointmentsUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesCreateManyInput = {
    employee_id?: number
    full_name: string
    working_hours: number
    company_id: number
  }

  export type employeesUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
  }

  export type employeesUncheckedUpdateManyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type otpCreateInput = {
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
    users: usersCreateNestedOneWithoutOtpInput
  }

  export type otpUncheckedCreateInput = {
    otp_id?: number
    user_id: number
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type otpUpdateInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutOtpNestedInput
  }

  export type otpUncheckedUpdateInput = {
    otp_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpCreateManyInput = {
    otp_id?: number
    user_id: number
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type otpUpdateManyMutationInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpUncheckedUpdateManyInput = {
    otp_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesCreateInput = {
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsCreateNestedManyWithoutServicesInput
    company: companyCreateNestedOneWithoutServicesInput
  }

  export type servicesUncheckedCreateInput = {
    service_id?: number
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    company_id: number
    appointments?: appointmentsUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsUpdateManyWithoutServicesNestedInput
    company?: companyUpdateOneRequiredWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFieldUpdateOperationsInput | number
    appointments?: appointmentsUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type servicesCreateManyInput = {
    service_id?: number
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    company_id: number
  }

  export type servicesUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type servicesUncheckedUpdateManyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    appointments?: appointmentsCreateNestedManyWithoutUsersInput
    otp?: otpCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    appointments?: appointmentsUncheckedCreateNestedManyWithoutUsersInput
    otp?: otpUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: appointmentsUpdateManyWithoutUsersNestedInput
    otp?: otpUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: appointmentsUncheckedUpdateManyWithoutUsersNestedInput
    otp?: otpUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EmployeesScalarRelationFilter = {
    is?: employeesWhereInput
    isNot?: employeesWhereInput
  }

  export type adminsCountOrderByAggregateInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    admin_id?: SortOrder
    employee_id?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ServicesScalarRelationFilter = {
    is?: servicesWhereInput
    isNot?: servicesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type appointmentsEmployee_idAppointment_timeCompoundUniqueInput = {
    employee_id: number
    appointment_time: Date | string
  }

  export type appointmentsCountOrderByAggregateInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    appointment_time?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type appointmentsAvgOrderByAggregateInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    total_cost?: SortOrder
  }

  export type appointmentsMaxOrderByAggregateInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    appointment_time?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type appointmentsMinOrderByAggregateInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    appointment_time?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type appointmentsSumOrderByAggregateInput = {
    appointment_id?: SortOrder
    user_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    total_cost?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type EmployeesListRelationFilter = {
    every?: employeesWhereInput
    some?: employeesWhereInput
    none?: employeesWhereInput
  }

  export type ServicesListRelationFilter = {
    every?: servicesWhereInput
    some?: servicesWhereInput
    none?: servicesWhereInput
  }

  export type employeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type servicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    company_id?: SortOrder
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

  export type AdminsNullableScalarRelationFilter = {
    is?: adminsWhereInput | null
    isNot?: adminsWhereInput | null
  }

  export type AppointmentsListRelationFilter = {
    every?: appointmentsWhereInput
    some?: appointmentsWhereInput
    none?: appointmentsWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type appointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesCountOrderByAggregateInput = {
    employee_id?: SortOrder
    full_name?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    employee_id?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    employee_id?: SortOrder
    full_name?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    employee_id?: SortOrder
    full_name?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    employee_id?: SortOrder
    working_hours?: SortOrder
    company_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type otpCountOrderByAggregateInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type otpAvgOrderByAggregateInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
  }

  export type otpMaxOrderByAggregateInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type otpMinOrderByAggregateInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type otpSumOrderByAggregateInput = {
    otp_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type servicesCountOrderByAggregateInput = {
    service_id?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    base_cost?: SortOrder
    company_id?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    service_id?: SortOrder
    base_cost?: SortOrder
    company_id?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    service_id?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    base_cost?: SortOrder
    company_id?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    service_id?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    base_cost?: SortOrder
    company_id?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    service_id?: SortOrder
    base_cost?: SortOrder
    company_id?: SortOrder
  }

  export type OtpListRelationFilter = {
    every?: otpWhereInput
    some?: otpWhereInput
    none?: otpWhereInput
  }

  export type otpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type employeesCreateNestedOneWithoutAdminsInput = {
    create?: XOR<employeesCreateWithoutAdminsInput, employeesUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAdminsInput
    connect?: employeesWhereUniqueInput
  }

  export type employeesUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<employeesCreateWithoutAdminsInput, employeesUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAdminsInput
    upsert?: employeesUpsertWithoutAdminsInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutAdminsInput, employeesUpdateWithoutAdminsInput>, employeesUncheckedUpdateWithoutAdminsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type employeesCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<employeesCreateWithoutAppointmentsInput, employeesUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAppointmentsInput
    connect?: employeesWhereUniqueInput
  }

  export type servicesCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<servicesCreateWithoutAppointmentsInput, servicesUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: servicesCreateOrConnectWithoutAppointmentsInput
    connect?: servicesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<usersCreateWithoutAppointmentsInput, usersUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAppointmentsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type employeesUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<employeesCreateWithoutAppointmentsInput, employeesUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAppointmentsInput
    upsert?: employeesUpsertWithoutAppointmentsInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutAppointmentsInput, employeesUpdateWithoutAppointmentsInput>, employeesUncheckedUpdateWithoutAppointmentsInput>
  }

  export type servicesUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<servicesCreateWithoutAppointmentsInput, servicesUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: servicesCreateOrConnectWithoutAppointmentsInput
    upsert?: servicesUpsertWithoutAppointmentsInput
    connect?: servicesWhereUniqueInput
    update?: XOR<XOR<servicesUpdateToOneWithWhereWithoutAppointmentsInput, servicesUpdateWithoutAppointmentsInput>, servicesUncheckedUpdateWithoutAppointmentsInput>
  }

  export type usersUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<usersCreateWithoutAppointmentsInput, usersUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAppointmentsInput
    upsert?: usersUpsertWithoutAppointmentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAppointmentsInput, usersUpdateWithoutAppointmentsInput>, usersUncheckedUpdateWithoutAppointmentsInput>
  }

  export type employeesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput> | employeesCreateWithoutCompanyInput[] | employeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutCompanyInput | employeesCreateOrConnectWithoutCompanyInput[]
    createMany?: employeesCreateManyCompanyInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type servicesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput> | servicesCreateWithoutCompanyInput[] | servicesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutCompanyInput | servicesCreateOrConnectWithoutCompanyInput[]
    createMany?: servicesCreateManyCompanyInputEnvelope
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
  }

  export type employeesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput> | employeesCreateWithoutCompanyInput[] | employeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutCompanyInput | employeesCreateOrConnectWithoutCompanyInput[]
    createMany?: employeesCreateManyCompanyInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type servicesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput> | servicesCreateWithoutCompanyInput[] | servicesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutCompanyInput | servicesCreateOrConnectWithoutCompanyInput[]
    createMany?: servicesCreateManyCompanyInputEnvelope
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type employeesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput> | employeesCreateWithoutCompanyInput[] | employeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutCompanyInput | employeesCreateOrConnectWithoutCompanyInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutCompanyInput | employeesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeesCreateManyCompanyInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutCompanyInput | employeesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutCompanyInput | employeesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type servicesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput> | servicesCreateWithoutCompanyInput[] | servicesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutCompanyInput | servicesCreateOrConnectWithoutCompanyInput[]
    upsert?: servicesUpsertWithWhereUniqueWithoutCompanyInput | servicesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: servicesCreateManyCompanyInputEnvelope
    set?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    disconnect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    delete?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    update?: servicesUpdateWithWhereUniqueWithoutCompanyInput | servicesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: servicesUpdateManyWithWhereWithoutCompanyInput | servicesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: servicesScalarWhereInput | servicesScalarWhereInput[]
  }

  export type employeesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput> | employeesCreateWithoutCompanyInput[] | employeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutCompanyInput | employeesCreateOrConnectWithoutCompanyInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutCompanyInput | employeesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeesCreateManyCompanyInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutCompanyInput | employeesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutCompanyInput | employeesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type servicesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput> | servicesCreateWithoutCompanyInput[] | servicesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutCompanyInput | servicesCreateOrConnectWithoutCompanyInput[]
    upsert?: servicesUpsertWithWhereUniqueWithoutCompanyInput | servicesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: servicesCreateManyCompanyInputEnvelope
    set?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    disconnect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    delete?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    update?: servicesUpdateWithWhereUniqueWithoutCompanyInput | servicesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: servicesUpdateManyWithWhereWithoutCompanyInput | servicesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: servicesScalarWhereInput | servicesScalarWhereInput[]
  }

  export type adminsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminsCreateOrConnectWithoutEmployeesInput
    connect?: adminsWhereUniqueInput
  }

  export type appointmentsCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput> | appointmentsCreateWithoutEmployeesInput[] | appointmentsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutEmployeesInput | appointmentsCreateOrConnectWithoutEmployeesInput[]
    createMany?: appointmentsCreateManyEmployeesInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<companyCreateWithoutEmployeesInput, companyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeesInput
    connect?: companyWhereUniqueInput
  }

  export type adminsUncheckedCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminsCreateOrConnectWithoutEmployeesInput
    connect?: adminsWhereUniqueInput
  }

  export type appointmentsUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput> | appointmentsCreateWithoutEmployeesInput[] | appointmentsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutEmployeesInput | appointmentsCreateOrConnectWithoutEmployeesInput[]
    createMany?: appointmentsCreateManyEmployeesInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type adminsUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminsCreateOrConnectWithoutEmployeesInput
    upsert?: adminsUpsertWithoutEmployeesInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutEmployeesInput, adminsUpdateWithoutEmployeesInput>, adminsUncheckedUpdateWithoutEmployeesInput>
  }

  export type appointmentsUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput> | appointmentsCreateWithoutEmployeesInput[] | appointmentsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutEmployeesInput | appointmentsCreateOrConnectWithoutEmployeesInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutEmployeesInput | appointmentsUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: appointmentsCreateManyEmployeesInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutEmployeesInput | appointmentsUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutEmployeesInput | appointmentsUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<companyCreateWithoutEmployeesInput, companyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeesInput
    upsert?: companyUpsertWithoutEmployeesInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutEmployeesInput, companyUpdateWithoutEmployeesInput>, companyUncheckedUpdateWithoutEmployeesInput>
  }

  export type adminsUncheckedUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminsCreateOrConnectWithoutEmployeesInput
    upsert?: adminsUpsertWithoutEmployeesInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutEmployeesInput, adminsUpdateWithoutEmployeesInput>, adminsUncheckedUpdateWithoutEmployeesInput>
  }

  export type appointmentsUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput> | appointmentsCreateWithoutEmployeesInput[] | appointmentsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutEmployeesInput | appointmentsCreateOrConnectWithoutEmployeesInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutEmployeesInput | appointmentsUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: appointmentsCreateManyEmployeesInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutEmployeesInput | appointmentsUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutEmployeesInput | appointmentsUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOtpInput = {
    create?: XOR<usersCreateWithoutOtpInput, usersUncheckedCreateWithoutOtpInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<usersCreateWithoutOtpInput, usersUncheckedCreateWithoutOtpInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpInput
    upsert?: usersUpsertWithoutOtpInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOtpInput, usersUpdateWithoutOtpInput>, usersUncheckedUpdateWithoutOtpInput>
  }

  export type appointmentsCreateNestedManyWithoutServicesInput = {
    create?: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput> | appointmentsCreateWithoutServicesInput[] | appointmentsUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutServicesInput | appointmentsCreateOrConnectWithoutServicesInput[]
    createMany?: appointmentsCreateManyServicesInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutServicesInput = {
    create?: XOR<companyCreateWithoutServicesInput, companyUncheckedCreateWithoutServicesInput>
    connectOrCreate?: companyCreateOrConnectWithoutServicesInput
    connect?: companyWhereUniqueInput
  }

  export type appointmentsUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput> | appointmentsCreateWithoutServicesInput[] | appointmentsUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutServicesInput | appointmentsCreateOrConnectWithoutServicesInput[]
    createMany?: appointmentsCreateManyServicesInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type appointmentsUpdateManyWithoutServicesNestedInput = {
    create?: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput> | appointmentsCreateWithoutServicesInput[] | appointmentsUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutServicesInput | appointmentsCreateOrConnectWithoutServicesInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutServicesInput | appointmentsUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: appointmentsCreateManyServicesInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutServicesInput | appointmentsUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutServicesInput | appointmentsUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<companyCreateWithoutServicesInput, companyUncheckedCreateWithoutServicesInput>
    connectOrCreate?: companyCreateOrConnectWithoutServicesInput
    upsert?: companyUpsertWithoutServicesInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutServicesInput, companyUpdateWithoutServicesInput>, companyUncheckedUpdateWithoutServicesInput>
  }

  export type appointmentsUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput> | appointmentsCreateWithoutServicesInput[] | appointmentsUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutServicesInput | appointmentsCreateOrConnectWithoutServicesInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutServicesInput | appointmentsUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: appointmentsCreateManyServicesInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutServicesInput | appointmentsUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutServicesInput | appointmentsUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type appointmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput> | appointmentsCreateWithoutUsersInput[] | appointmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutUsersInput | appointmentsCreateOrConnectWithoutUsersInput[]
    createMany?: appointmentsCreateManyUsersInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type otpCreateNestedManyWithoutUsersInput = {
    create?: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput> | otpCreateWithoutUsersInput[] | otpUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: otpCreateOrConnectWithoutUsersInput | otpCreateOrConnectWithoutUsersInput[]
    createMany?: otpCreateManyUsersInputEnvelope
    connect?: otpWhereUniqueInput | otpWhereUniqueInput[]
  }

  export type appointmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput> | appointmentsCreateWithoutUsersInput[] | appointmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutUsersInput | appointmentsCreateOrConnectWithoutUsersInput[]
    createMany?: appointmentsCreateManyUsersInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type otpUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput> | otpCreateWithoutUsersInput[] | otpUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: otpCreateOrConnectWithoutUsersInput | otpCreateOrConnectWithoutUsersInput[]
    createMany?: otpCreateManyUsersInputEnvelope
    connect?: otpWhereUniqueInput | otpWhereUniqueInput[]
  }

  export type appointmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput> | appointmentsCreateWithoutUsersInput[] | appointmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutUsersInput | appointmentsCreateOrConnectWithoutUsersInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutUsersInput | appointmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: appointmentsCreateManyUsersInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutUsersInput | appointmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutUsersInput | appointmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type otpUpdateManyWithoutUsersNestedInput = {
    create?: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput> | otpCreateWithoutUsersInput[] | otpUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: otpCreateOrConnectWithoutUsersInput | otpCreateOrConnectWithoutUsersInput[]
    upsert?: otpUpsertWithWhereUniqueWithoutUsersInput | otpUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: otpCreateManyUsersInputEnvelope
    set?: otpWhereUniqueInput | otpWhereUniqueInput[]
    disconnect?: otpWhereUniqueInput | otpWhereUniqueInput[]
    delete?: otpWhereUniqueInput | otpWhereUniqueInput[]
    connect?: otpWhereUniqueInput | otpWhereUniqueInput[]
    update?: otpUpdateWithWhereUniqueWithoutUsersInput | otpUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: otpUpdateManyWithWhereWithoutUsersInput | otpUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: otpScalarWhereInput | otpScalarWhereInput[]
  }

  export type appointmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput> | appointmentsCreateWithoutUsersInput[] | appointmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutUsersInput | appointmentsCreateOrConnectWithoutUsersInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutUsersInput | appointmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: appointmentsCreateManyUsersInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutUsersInput | appointmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutUsersInput | appointmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type otpUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput> | otpCreateWithoutUsersInput[] | otpUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: otpCreateOrConnectWithoutUsersInput | otpCreateOrConnectWithoutUsersInput[]
    upsert?: otpUpsertWithWhereUniqueWithoutUsersInput | otpUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: otpCreateManyUsersInputEnvelope
    set?: otpWhereUniqueInput | otpWhereUniqueInput[]
    disconnect?: otpWhereUniqueInput | otpWhereUniqueInput[]
    delete?: otpWhereUniqueInput | otpWhereUniqueInput[]
    connect?: otpWhereUniqueInput | otpWhereUniqueInput[]
    update?: otpUpdateWithWhereUniqueWithoutUsersInput | otpUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: otpUpdateManyWithWhereWithoutUsersInput | otpUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: otpScalarWhereInput | otpScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type employeesCreateWithoutAdminsInput = {
    full_name: string
    working_hours: number
    appointments?: appointmentsCreateNestedManyWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutAdminsInput = {
    employee_id?: number
    full_name: string
    working_hours: number
    company_id: number
    appointments?: appointmentsUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutAdminsInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutAdminsInput, employeesUncheckedCreateWithoutAdminsInput>
  }

  export type employeesUpsertWithoutAdminsInput = {
    update: XOR<employeesUpdateWithoutAdminsInput, employeesUncheckedUpdateWithoutAdminsInput>
    create: XOR<employeesCreateWithoutAdminsInput, employeesUncheckedCreateWithoutAdminsInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutAdminsInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutAdminsInput, employeesUncheckedUpdateWithoutAdminsInput>
  }

  export type employeesUpdateWithoutAdminsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    appointments?: appointmentsUpdateManyWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutAdminsInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    appointments?: appointmentsUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesCreateWithoutAppointmentsInput = {
    full_name: string
    working_hours: number
    admins?: adminsCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutAppointmentsInput = {
    employee_id?: number
    full_name: string
    working_hours: number
    company_id: number
    admins?: adminsUncheckedCreateNestedOneWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutAppointmentsInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutAppointmentsInput, employeesUncheckedCreateWithoutAppointmentsInput>
  }

  export type servicesCreateWithoutAppointmentsInput = {
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    company: companyCreateNestedOneWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutAppointmentsInput = {
    service_id?: number
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    company_id: number
  }

  export type servicesCreateOrConnectWithoutAppointmentsInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutAppointmentsInput, servicesUncheckedCreateWithoutAppointmentsInput>
  }

  export type usersCreateWithoutAppointmentsInput = {
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    otp?: otpCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAppointmentsInput = {
    user_id?: number
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    otp?: otpUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAppointmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAppointmentsInput, usersUncheckedCreateWithoutAppointmentsInput>
  }

  export type employeesUpsertWithoutAppointmentsInput = {
    update: XOR<employeesUpdateWithoutAppointmentsInput, employeesUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<employeesCreateWithoutAppointmentsInput, employeesUncheckedCreateWithoutAppointmentsInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutAppointmentsInput, employeesUncheckedUpdateWithoutAppointmentsInput>
  }

  export type employeesUpdateWithoutAppointmentsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    admins?: adminsUpdateOneWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutAppointmentsInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    admins?: adminsUncheckedUpdateOneWithoutEmployeesNestedInput
  }

  export type servicesUpsertWithoutAppointmentsInput = {
    update: XOR<servicesUpdateWithoutAppointmentsInput, servicesUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<servicesCreateWithoutAppointmentsInput, servicesUncheckedCreateWithoutAppointmentsInput>
    where?: servicesWhereInput
  }

  export type servicesUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: servicesWhereInput
    data: XOR<servicesUpdateWithoutAppointmentsInput, servicesUncheckedUpdateWithoutAppointmentsInput>
  }

  export type servicesUpdateWithoutAppointmentsInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    company?: companyUpdateOneRequiredWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutAppointmentsInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpsertWithoutAppointmentsInput = {
    update: XOR<usersUpdateWithoutAppointmentsInput, usersUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<usersCreateWithoutAppointmentsInput, usersUncheckedCreateWithoutAppointmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAppointmentsInput, usersUncheckedUpdateWithoutAppointmentsInput>
  }

  export type usersUpdateWithoutAppointmentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: otpUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAppointmentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: otpUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type employeesCreateWithoutCompanyInput = {
    full_name: string
    working_hours: number
    admins?: adminsCreateNestedOneWithoutEmployeesInput
    appointments?: appointmentsCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutCompanyInput = {
    employee_id?: number
    full_name: string
    working_hours: number
    admins?: adminsUncheckedCreateNestedOneWithoutEmployeesInput
    appointments?: appointmentsUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutCompanyInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput>
  }

  export type employeesCreateManyCompanyInputEnvelope = {
    data: employeesCreateManyCompanyInput | employeesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type servicesCreateWithoutCompanyInput = {
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsCreateNestedManyWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutCompanyInput = {
    service_id?: number
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesCreateOrConnectWithoutCompanyInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput>
  }

  export type servicesCreateManyCompanyInputEnvelope = {
    data: servicesCreateManyCompanyInput | servicesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type employeesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: employeesWhereUniqueInput
    update: XOR<employeesUpdateWithoutCompanyInput, employeesUncheckedUpdateWithoutCompanyInput>
    create: XOR<employeesCreateWithoutCompanyInput, employeesUncheckedCreateWithoutCompanyInput>
  }

  export type employeesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: employeesWhereUniqueInput
    data: XOR<employeesUpdateWithoutCompanyInput, employeesUncheckedUpdateWithoutCompanyInput>
  }

  export type employeesUpdateManyWithWhereWithoutCompanyInput = {
    where: employeesScalarWhereInput
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type employeesScalarWhereInput = {
    AND?: employeesScalarWhereInput | employeesScalarWhereInput[]
    OR?: employeesScalarWhereInput[]
    NOT?: employeesScalarWhereInput | employeesScalarWhereInput[]
    employee_id?: IntFilter<"employees"> | number
    full_name?: StringFilter<"employees"> | string
    working_hours?: IntFilter<"employees"> | number
    company_id?: IntFilter<"employees"> | number
  }

  export type servicesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: servicesWhereUniqueInput
    update: XOR<servicesUpdateWithoutCompanyInput, servicesUncheckedUpdateWithoutCompanyInput>
    create: XOR<servicesCreateWithoutCompanyInput, servicesUncheckedCreateWithoutCompanyInput>
  }

  export type servicesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: servicesWhereUniqueInput
    data: XOR<servicesUpdateWithoutCompanyInput, servicesUncheckedUpdateWithoutCompanyInput>
  }

  export type servicesUpdateManyWithWhereWithoutCompanyInput = {
    where: servicesScalarWhereInput
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type servicesScalarWhereInput = {
    AND?: servicesScalarWhereInput | servicesScalarWhereInput[]
    OR?: servicesScalarWhereInput[]
    NOT?: servicesScalarWhereInput | servicesScalarWhereInput[]
    service_id?: IntFilter<"services"> | number
    service_name?: StringFilter<"services"> | string
    description?: StringNullableFilter<"services"> | string | null
    base_cost?: DecimalNullableFilter<"services"> | Decimal | DecimalJsLike | number | string | null
    company_id?: IntFilter<"services"> | number
  }

  export type adminsCreateWithoutEmployeesInput = {

  }

  export type adminsUncheckedCreateWithoutEmployeesInput = {
    admin_id?: number
  }

  export type adminsCreateOrConnectWithoutEmployeesInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
  }

  export type appointmentsCreateWithoutEmployeesInput = {
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    services: servicesCreateNestedOneWithoutAppointmentsInput
    users: usersCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutEmployeesInput = {
    appointment_id?: number
    user_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateOrConnectWithoutEmployeesInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput>
  }

  export type appointmentsCreateManyEmployeesInputEnvelope = {
    data: appointmentsCreateManyEmployeesInput | appointmentsCreateManyEmployeesInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutEmployeesInput = {
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    services?: servicesCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutEmployeesInput = {
    company_id?: number
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    services?: servicesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutEmployeesInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutEmployeesInput, companyUncheckedCreateWithoutEmployeesInput>
  }

  export type adminsUpsertWithoutEmployeesInput = {
    update: XOR<adminsUpdateWithoutEmployeesInput, adminsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<adminsCreateWithoutEmployeesInput, adminsUncheckedCreateWithoutEmployeesInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutEmployeesInput, adminsUncheckedUpdateWithoutEmployeesInput>
  }

  export type adminsUpdateWithoutEmployeesInput = {

  }

  export type adminsUncheckedUpdateWithoutEmployeesInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
  }

  export type appointmentsUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutEmployeesInput, appointmentsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<appointmentsCreateWithoutEmployeesInput, appointmentsUncheckedCreateWithoutEmployeesInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutEmployeesInput, appointmentsUncheckedUpdateWithoutEmployeesInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutEmployeesInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type appointmentsScalarWhereInput = {
    AND?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    OR?: appointmentsScalarWhereInput[]
    NOT?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    appointment_id?: IntFilter<"appointments"> | number
    user_id?: IntFilter<"appointments"> | number
    employee_id?: IntFilter<"appointments"> | number
    service_id?: IntFilter<"appointments"> | number
    appointment_time?: DateTimeFilter<"appointments"> | Date | string
    status?: StringNullableFilter<"appointments"> | string | null
    total_cost?: DecimalNullableFilter<"appointments"> | Decimal | DecimalJsLike | number | string | null
  }

  export type companyUpsertWithoutEmployeesInput = {
    update: XOR<companyUpdateWithoutEmployeesInput, companyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<companyCreateWithoutEmployeesInput, companyUncheckedCreateWithoutEmployeesInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutEmployeesInput, companyUncheckedUpdateWithoutEmployeesInput>
  }

  export type companyUpdateWithoutEmployeesInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    services?: servicesUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutEmployeesInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    services?: servicesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type usersCreateWithoutOtpInput = {
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    appointments?: appointmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOtpInput = {
    user_id?: number
    first_name: string
    last_name: string
    phone: string
    email?: string | null
    created_at?: Date | string | null
    appointments?: appointmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOtpInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOtpInput, usersUncheckedCreateWithoutOtpInput>
  }

  export type usersUpsertWithoutOtpInput = {
    update: XOR<usersUpdateWithoutOtpInput, usersUncheckedUpdateWithoutOtpInput>
    create: XOR<usersCreateWithoutOtpInput, usersUncheckedCreateWithoutOtpInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOtpInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOtpInput, usersUncheckedUpdateWithoutOtpInput>
  }

  export type usersUpdateWithoutOtpInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: appointmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOtpInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: appointmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type appointmentsCreateWithoutServicesInput = {
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    employees: employeesCreateNestedOneWithoutAppointmentsInput
    users: usersCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutServicesInput = {
    appointment_id?: number
    user_id: number
    employee_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateOrConnectWithoutServicesInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput>
  }

  export type appointmentsCreateManyServicesInputEnvelope = {
    data: appointmentsCreateManyServicesInput | appointmentsCreateManyServicesInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutServicesInput = {
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    employees?: employeesCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutServicesInput = {
    company_id?: number
    company_name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    employees?: employeesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutServicesInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutServicesInput, companyUncheckedCreateWithoutServicesInput>
  }

  export type appointmentsUpsertWithWhereUniqueWithoutServicesInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutServicesInput, appointmentsUncheckedUpdateWithoutServicesInput>
    create: XOR<appointmentsCreateWithoutServicesInput, appointmentsUncheckedCreateWithoutServicesInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutServicesInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutServicesInput, appointmentsUncheckedUpdateWithoutServicesInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutServicesInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutServicesInput>
  }

  export type companyUpsertWithoutServicesInput = {
    update: XOR<companyUpdateWithoutServicesInput, companyUncheckedUpdateWithoutServicesInput>
    create: XOR<companyCreateWithoutServicesInput, companyUncheckedCreateWithoutServicesInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutServicesInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutServicesInput, companyUncheckedUpdateWithoutServicesInput>
  }

  export type companyUpdateWithoutServicesInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: employeesUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutServicesInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: employeesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type appointmentsCreateWithoutUsersInput = {
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    employees: employeesCreateNestedOneWithoutAppointmentsInput
    services: servicesCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutUsersInput = {
    appointment_id?: number
    employee_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateOrConnectWithoutUsersInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput>
  }

  export type appointmentsCreateManyUsersInputEnvelope = {
    data: appointmentsCreateManyUsersInput | appointmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type otpCreateWithoutUsersInput = {
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type otpUncheckedCreateWithoutUsersInput = {
    otp_id?: number
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type otpCreateOrConnectWithoutUsersInput = {
    where: otpWhereUniqueInput
    create: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput>
  }

  export type otpCreateManyUsersInputEnvelope = {
    data: otpCreateManyUsersInput | otpCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type appointmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutUsersInput, appointmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<appointmentsCreateWithoutUsersInput, appointmentsUncheckedCreateWithoutUsersInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutUsersInput, appointmentsUncheckedUpdateWithoutUsersInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutUsersInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type otpUpsertWithWhereUniqueWithoutUsersInput = {
    where: otpWhereUniqueInput
    update: XOR<otpUpdateWithoutUsersInput, otpUncheckedUpdateWithoutUsersInput>
    create: XOR<otpCreateWithoutUsersInput, otpUncheckedCreateWithoutUsersInput>
  }

  export type otpUpdateWithWhereUniqueWithoutUsersInput = {
    where: otpWhereUniqueInput
    data: XOR<otpUpdateWithoutUsersInput, otpUncheckedUpdateWithoutUsersInput>
  }

  export type otpUpdateManyWithWhereWithoutUsersInput = {
    where: otpScalarWhereInput
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyWithoutUsersInput>
  }

  export type otpScalarWhereInput = {
    AND?: otpScalarWhereInput | otpScalarWhereInput[]
    OR?: otpScalarWhereInput[]
    NOT?: otpScalarWhereInput | otpScalarWhereInput[]
    otp_id?: IntFilter<"otp"> | number
    user_id?: IntFilter<"otp"> | number
    otp_code?: StringFilter<"otp"> | string
    created_at?: DateTimeNullableFilter<"otp"> | Date | string | null
    expires_at?: DateTimeFilter<"otp"> | Date | string
  }

  export type employeesCreateManyCompanyInput = {
    employee_id?: number
    full_name: string
    working_hours: number
  }

  export type servicesCreateManyCompanyInput = {
    service_id?: number
    service_name: string
    description?: string | null
    base_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type employeesUpdateWithoutCompanyInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    admins?: adminsUpdateOneWithoutEmployeesNestedInput
    appointments?: appointmentsUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutCompanyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
    admins?: adminsUncheckedUpdateOneWithoutEmployeesNestedInput
    appointments?: appointmentsUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateManyWithoutCompanyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    working_hours?: IntFieldUpdateOperationsInput | number
  }

  export type servicesUpdateWithoutCompanyInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutCompanyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointments?: appointmentsUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateManyWithoutCompanyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateManyEmployeesInput = {
    appointment_id?: number
    user_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUpdateWithoutEmployeesInput = {
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    services?: servicesUpdateOneRequiredWithoutAppointmentsNestedInput
    users?: usersUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutEmployeesInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUncheckedUpdateManyWithoutEmployeesInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateManyServicesInput = {
    appointment_id?: number
    user_id: number
    employee_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUpdateWithoutServicesInput = {
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employees?: employeesUpdateOneRequiredWithoutAppointmentsNestedInput
    users?: usersUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutServicesInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUncheckedUpdateManyWithoutServicesInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsCreateManyUsersInput = {
    appointment_id?: number
    employee_id: number
    service_id: number
    appointment_time: Date | string
    status?: string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type otpCreateManyUsersInput = {
    otp_id?: number
    otp_code: string
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type appointmentsUpdateWithoutUsersInput = {
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employees?: employeesUpdateOneRequiredWithoutAppointmentsNestedInput
    services?: servicesUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutUsersInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type appointmentsUncheckedUpdateManyWithoutUsersInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type otpUpdateWithoutUsersInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpUncheckedUpdateWithoutUsersInput = {
    otp_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpUncheckedUpdateManyWithoutUsersInput = {
    otp_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
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