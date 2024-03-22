/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BroadcastNotification } from "../API.ts";
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
export declare type BroadcastNotificationUpdateFormInputValues = {
    targetStudent?: string;
    title?: string;
    message?: string;
    createdAt?: string;
    type?: string;
    redirect?: string;
};
export declare type BroadcastNotificationUpdateFormValidationValues = {
    targetStudent?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    redirect?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BroadcastNotificationUpdateFormOverridesProps = {
    BroadcastNotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    targetStudent?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    redirect?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BroadcastNotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: BroadcastNotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    broadcastNotification?: BroadcastNotification;
    onSubmit?: (fields: BroadcastNotificationUpdateFormInputValues) => BroadcastNotificationUpdateFormInputValues;
    onSuccess?: (fields: BroadcastNotificationUpdateFormInputValues) => void;
    onError?: (fields: BroadcastNotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BroadcastNotificationUpdateFormInputValues) => BroadcastNotificationUpdateFormInputValues;
    onValidate?: BroadcastNotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BroadcastNotificationUpdateForm(props: BroadcastNotificationUpdateFormProps): React.ReactElement;
