/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseEnrollment, CourseProfile, StudentProfile } from "../API.ts";
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
export declare type CourseEnrollmentUpdateFormInputValues = {
    studentProfile?: StudentProfile;
    courseProfile?: CourseProfile;
    enrollmentDate?: string;
    progress?: string;
    state?: string;
};
export declare type CourseEnrollmentUpdateFormValidationValues = {
    studentProfile?: ValidationFunction<StudentProfile>;
    courseProfile?: ValidationFunction<CourseProfile>;
    enrollmentDate?: ValidationFunction<string>;
    progress?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseEnrollmentUpdateFormOverridesProps = {
    CourseEnrollmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    courseProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    enrollmentDate?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<SelectFieldProps>;
    state?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CourseEnrollmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseEnrollmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courseEnrollment?: CourseEnrollment;
    onSubmit?: (fields: CourseEnrollmentUpdateFormInputValues) => CourseEnrollmentUpdateFormInputValues;
    onSuccess?: (fields: CourseEnrollmentUpdateFormInputValues) => void;
    onError?: (fields: CourseEnrollmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseEnrollmentUpdateFormInputValues) => CourseEnrollmentUpdateFormInputValues;
    onValidate?: CourseEnrollmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseEnrollmentUpdateForm(props: CourseEnrollmentUpdateFormProps): React.ReactElement;
