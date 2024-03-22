/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NCEUserSettingsCreateFormInputValues = {
    notificationsEnabled?: boolean;
    darkModeEnabled?: boolean;
    language?: string;
    isAdmin?: boolean;
};
export declare type NCEUserSettingsCreateFormValidationValues = {
    notificationsEnabled?: ValidationFunction<boolean>;
    darkModeEnabled?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
    isAdmin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NCEUserSettingsCreateFormOverridesProps = {
    NCEUserSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    darkModeEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NCEUserSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: NCEUserSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NCEUserSettingsCreateFormInputValues) => NCEUserSettingsCreateFormInputValues;
    onSuccess?: (fields: NCEUserSettingsCreateFormInputValues) => void;
    onError?: (fields: NCEUserSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NCEUserSettingsCreateFormInputValues) => NCEUserSettingsCreateFormInputValues;
    onValidate?: NCEUserSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NCEUserSettingsCreateForm(props: NCEUserSettingsCreateFormProps): React.ReactElement;
