declare type float = number;
declare type int = number;
export declare class Double {
    hi: float;
    lo: float;
    constructor(obj?: any);
    static clone(X: Double): Double;
    static fromSum11(a: float, b: float): Double;
    static fromMul11(a: float, b: float): Double;
    static fromSqr1(a: float): Double;
    static fromString(s: string): Double;
    toNumber(): float;
    toExponential(precision: int): string;
    static add22(X: Double, Y: Double): Double;
    static sub22(X: Double, Y: Double): Double;
    static mul22(X: Double, Y: Double): Double;
    static div22(X: Double, Y: Double): Double;
    static add21(X: Double, f: float): Double;
    static sub21(X: Double, f: float): Double;
    static mul21(X: Double, f: float): Double;
    static div21(X: Double, f: float): Double;
    static abs2(X: Double): Double;
    static neg2(X: Double): Double;
    static inv2(X: Double): Double;
    static sqr2(X: Double): Double;
    static sqrt2(X: Double): Double;
    static eq22(X: Double, Y: Double): boolean;
    static ne22(X: Double, Y: Double): boolean;
    static gt22(X: Double, Y: Double): boolean;
    static lt22(X: Double, Y: Double): boolean;
    static ge22(X: Double, Y: Double): boolean;
    static le22(X: Double, Y: Double): boolean;
    static eq21(X: Double, f: float): boolean;
    static ne21(X: Double, f: float): boolean;
    static gt21(X: Double, f: float): boolean;
    static lt21(X: Double, f: float): boolean;
    static ge21(X: Double, f: float): boolean;
    static le21(X: Double, f: float): boolean;
    static get One(): Double;
    static get Zero(): Double;
    static get Infinity(): Double;
    static get MinusInfinity(): Double;
    static get NaN(): Double;
    static get Pi(): Double;
    static get X2Pi(): Double;
    static get E(): Double;
    static get Log2(): Double;
    static get Phi(): Double;
    static exp2(X: Double): Double;
    static ln2(X: Double): Double;
    static sinh2(X: Double): Double;
    static cosh2(X: Double): Double;
    static pow22(base: Double, exp: Double): Double;
    static mul21pow2(X: Double, n: int): Double;
    static pow2n(X: Double, n: int): Double;
    add(other: any): Double;
    sub(other: any): Double;
    mul(other: any): Double;
    div(other: any): Double;
    eq(other: any): boolean;
    ne(other: any): boolean;
    gt(other: any): boolean;
    lt(other: any): boolean;
    ge(other: any): boolean;
    le(other: any): boolean;
    abs(): Double;
    neg(): Double;
    inv(): Double;
    sqr(): Double;
    sqrt(): Double;
    exp(): Double;
    ln(): Double;
    sinh(): Double;
    cosh(): Double;
    pow(exp: Double): Double;
    pown(exp: float): Double;
}
export { Double as default };
