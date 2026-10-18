export type DragTargetWillAccept<T extends unknown | null = unknown | null> = ((data: T | null) => boolean);
export type DragTargetWillAcceptInput<T extends unknown | null = unknown | null> = ((data: T | null) => boolean);
