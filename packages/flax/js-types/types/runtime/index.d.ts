import { effect, untracked, action } from '@preact/signals-core';
export { effect, untracked, action };
/** @internal Native child previews must not subscribe an evaluating parent. */
export declare function readBindingSnapshot<T>(read: () => T): T;
/** @internal Failed conversion inputs must remain able to recover before mounting. */
export declare function withBindingSnapshots<T>(action: () => T): T;
export interface Binding<T> {
    readonly kind: 'binding';
    read(): T;
    observe(token: number): () => void;
}
export interface ReadonlySignal<T> {
    readonly value: T;
    readonly bind: Binding<T>;
    /** Read the current value without tracking a dependency. */
    peek(): T;
    /** Run immediately and on changes; call the returned function to unsubscribe. */
    subscribe(listener: (value: T) => void): () => void;
}
export interface Signal<T> extends ReadonlySignal<T> {
    value: T;
}
/** A lazy property binding. Each mounted property owns a separate subscription. */
export declare function bind<T>(read: () => T): Binding<T>;
export declare function signal<T>(value: T): Signal<T>;
export declare function computed<T>(read: () => T): ReadonlySignal<T>;
export declare function batch<T>(action: () => T): T;
declare const jointListener: unique symbol;
/** The capability for one generated TextEditingController registration. */
export interface FlaxJointListener {
    readonly [jointListener]: true;
}
type JointListenerOwner = {
    addListener(callback: () => void): void;
    removeListener(callback: () => void): void;
};
/** Creates a fresh view of a live ordinary Dart object in this session. */
export declare function ownJointObject<T extends object>(source: T): T;
/** Registers one synchronous listener with its own unlink capability. */
export declare function addJointListener(owner: JointListenerOwner, callback: () => void): FlaxJointListener;
/** Unlinks one local joint capability. Repeated calls return false. */
export declare function unlinkJoint(ref: object): boolean;
/** The real absolute persistent data directory for the current application. */
export declare function getHomePath(): Promise<string>;
