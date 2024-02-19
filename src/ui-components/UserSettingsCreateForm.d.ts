/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserSettingsCreateFormInputValues = {
    studentProfile?: StudentProfile;
    notificationsEnabled?: boolean;
    darkModeEnabled?: boolean;
    language?: string;
};
export declare type UserSettingsCreateFormValidationValues = {
    studentProfile?: ValidationFunction<StudentProfile>;
    notificationsEnabled?: ValidationFunction<boolean>;
    darkModeEnabled?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserSettingsCreateFormOverridesProps = {
    UserSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    darkModeEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserSettingsCreateFormInputValues) => UserSettingsCreateFormInputValues;
    onSuccess?: (fields: UserSettingsCreateFormInputValues) => void;
    onError?: (fields: UserSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserSettingsCreateFormInputValues) => UserSettingsCreateFormInputValues;
    onValidate?: UserSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserSettingsCreateForm(props: UserSettingsCreateFormProps): React.ReactElement;
