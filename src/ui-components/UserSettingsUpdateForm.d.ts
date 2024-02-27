/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StudentProfile, UserSettings } from "../API.ts";
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
export declare type UserSettingsUpdateFormInputValues = {
    studentProfile?: StudentProfile;
    notificationsEnabled?: boolean;
    darkModeEnabled?: boolean;
    language?: string;
    isAdmin?: boolean;
};
export declare type UserSettingsUpdateFormValidationValues = {
    studentProfile?: ValidationFunction<StudentProfile>;
    notificationsEnabled?: ValidationFunction<boolean>;
    darkModeEnabled?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
    isAdmin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserSettingsUpdateFormOverridesProps = {
    UserSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentProfile?: PrimitiveOverrideProps<AutocompleteProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    darkModeEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userSettings?: UserSettings;
    onSubmit?: (fields: UserSettingsUpdateFormInputValues) => UserSettingsUpdateFormInputValues;
    onSuccess?: (fields: UserSettingsUpdateFormInputValues) => void;
    onError?: (fields: UserSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserSettingsUpdateFormInputValues) => UserSettingsUpdateFormInputValues;
    onValidate?: UserSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserSettingsUpdateForm(props: UserSettingsUpdateFormProps): React.ReactElement;
