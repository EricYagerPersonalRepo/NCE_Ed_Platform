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
export declare type UserNotificationReadCreateFormInputValues = {
    notificationID?: string;
    readAt?: string;
};
export declare type UserNotificationReadCreateFormValidationValues = {
    notificationID?: ValidationFunction<string>;
    readAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNotificationReadCreateFormOverridesProps = {
    UserNotificationReadCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    notificationID?: PrimitiveOverrideProps<TextFieldProps>;
    readAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNotificationReadCreateFormProps = React.PropsWithChildren<{
    overrides?: UserNotificationReadCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserNotificationReadCreateFormInputValues) => UserNotificationReadCreateFormInputValues;
    onSuccess?: (fields: UserNotificationReadCreateFormInputValues) => void;
    onError?: (fields: UserNotificationReadCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNotificationReadCreateFormInputValues) => UserNotificationReadCreateFormInputValues;
    onValidate?: UserNotificationReadCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserNotificationReadCreateForm(props: UserNotificationReadCreateFormProps): React.ReactElement;
