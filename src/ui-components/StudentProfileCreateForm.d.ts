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
    cognitoUserID?: string;
    name?: string;
    email?: string;
    CourseProfiles?: CourseProfile[];
    birthdate?: string;
    avatar?: string;
};
export declare type StudentProfileCreateFormValidationValues = {
    cognitoUserID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    CourseProfiles?: ValidationFunction<CourseProfile>;
    birthdate?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileCreateFormOverridesProps = {
    StudentProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoUserID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    CourseProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextAreaFieldProps>;
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
