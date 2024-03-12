/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NCEStudentProfileCreateFormInputValues = {
    name?: string;
    email?: string;
    birthdate?: string;
};
export declare type NCEStudentProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NCEStudentProfileCreateFormOverridesProps = {
    NCEStudentProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NCEStudentProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: NCEStudentProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NCEStudentProfileCreateFormInputValues) => NCEStudentProfileCreateFormInputValues;
    onSuccess?: (fields: NCEStudentProfileCreateFormInputValues) => void;
    onError?: (fields: NCEStudentProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NCEStudentProfileCreateFormInputValues) => NCEStudentProfileCreateFormInputValues;
    onValidate?: NCEStudentProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function NCEStudentProfileCreateForm(props: NCEStudentProfileCreateFormProps): React.ReactElement;