/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    name?: string;
    email?: string;
    status?: string;
    notificationsEnabled?: boolean;
    darkModeEnabled?: boolean;
    language?: string;
    isAdmin?: boolean;
};
export declare type StudentProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    notificationsEnabled?: ValidationFunction<boolean>;
    darkModeEnabled?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
    isAdmin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileCreateFormOverridesProps = {
    StudentProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    darkModeEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
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
