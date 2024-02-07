/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseEnrollment, CourseProfile } from "../API.ts";
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
export declare type CourseProfileUpdateFormInputValues = {
    title?: string;
    description?: string;
    courseEnrollments?: CourseEnrollment[];
};
export declare type CourseProfileUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    courseEnrollments?: ValidationFunction<CourseEnrollment>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseProfileUpdateFormOverridesProps = {
    CourseProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    courseEnrollments?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CourseProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courseProfile?: CourseProfile;
    onSubmit?: (fields: CourseProfileUpdateFormInputValues) => CourseProfileUpdateFormInputValues;
    onSuccess?: (fields: CourseProfileUpdateFormInputValues) => void;
    onError?: (fields: CourseProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseProfileUpdateFormInputValues) => CourseProfileUpdateFormInputValues;
    onValidate?: CourseProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseProfileUpdateForm(props: CourseProfileUpdateFormProps): React.ReactElement;
