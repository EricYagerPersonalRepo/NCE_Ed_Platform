/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseProfile } from "../API.ts";
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
export declare type StudentProfileCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    CourseProfiles?: CourseProfile[];
};
export declare type StudentProfileCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    CourseProfiles?: ValidationFunction<CourseProfile>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileCreateFormOverridesProps = {
    StudentProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    CourseProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type StudentProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: StudentProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentProfileCreateFormInputValues) => StudentProfileCreateFormInputValues;
    onSuccess?: (fields: StudentProfileCreateFormInputValues) => void;
    onError?: (fields: StudentProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentProfileCreateFormInputValues) => StudentProfileCreateFormInputValues;
    onValidate?: StudentProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudentProfileCreateForm(props: StudentProfileCreateFormProps): React.ReactElement;
