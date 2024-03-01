/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RegistrantCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    StudentProfiles?: StudentProfile[];
    address?: string;
    birthdate?: string;
};
export declare type RegistrantCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    StudentProfiles?: ValidationFunction<StudentProfile>;
    address?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrantCreateFormOverridesProps = {
    RegistrantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    StudentProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RegistrantCreateFormProps = React.PropsWithChildren<{
    overrides?: RegistrantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RegistrantCreateFormInputValues) => RegistrantCreateFormInputValues;
    onSuccess?: (fields: RegistrantCreateFormInputValues) => void;
    onError?: (fields: RegistrantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegistrantCreateFormInputValues) => RegistrantCreateFormInputValues;
    onValidate?: RegistrantCreateFormValidationValues;
} & React.CSSProperties>;
export default function RegistrantCreateForm(props: RegistrantCreateFormProps): React.ReactElement;
