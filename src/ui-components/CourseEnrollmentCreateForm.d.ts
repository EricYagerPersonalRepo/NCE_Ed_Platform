/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseProfile, StudentProfile } from "../API.ts";
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
export declare type CourseEnrollmentCreateFormInputValues = {
    studentProfile?: StudentProfile;
    courseProfile?: CourseProfile;
    enrollmentDate?: string;
    progress?: string;
    state?: string;
};
export declare type CourseEnrollmentCreateFormValidationValues = {
    studentProfile?: ValidationFunction<StudentProfile>;
    courseProfile?: ValidationFunction<CourseProfile>;
    enrollmentDate?: ValidationFunction<string>;
    progress?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseEnrollmentCreateFormOverridesProps = {
    CourseEnrollmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    courseProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    enrollmentDate?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<SelectFieldProps>;
    state?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CourseEnrollmentCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseEnrollmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseEnrollmentCreateFormInputValues) => CourseEnrollmentCreateFormInputValues;
    onSuccess?: (fields: CourseEnrollmentCreateFormInputValues) => void;
    onError?: (fields: CourseEnrollmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseEnrollmentCreateFormInputValues) => CourseEnrollmentCreateFormInputValues;
    onValidate?: CourseEnrollmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseEnrollmentCreateForm(props: CourseEnrollmentCreateFormProps): React.ReactElement;
