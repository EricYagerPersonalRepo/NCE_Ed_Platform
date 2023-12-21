/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StudentProfile } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseProfileCreateFormInputValues = {
    studentprofiles?: StudentProfile[];
    title?: string;
    description?: string;
};
export declare type CourseProfileCreateFormValidationValues = {
    studentprofiles?: ValidationFunction<StudentProfile>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseProfileCreateFormOverridesProps = {
    CourseProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentprofiles?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseProfileCreateFormInputValues) => CourseProfileCreateFormInputValues;
    onSuccess?: (fields: CourseProfileCreateFormInputValues) => void;
    onError?: (fields: CourseProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseProfileCreateFormInputValues) => CourseProfileCreateFormInputValues;
    onValidate?: CourseProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseProfileCreateForm(props: CourseProfileCreateFormProps): React.ReactElement;
