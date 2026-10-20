export type FormFieldValidator<T extends unknown | null = unknown | null> = ((value: T | null) => string | null);
export type FormFieldValidatorInput<T extends unknown | null = unknown | null> = ((value: T | null) => string | null);
