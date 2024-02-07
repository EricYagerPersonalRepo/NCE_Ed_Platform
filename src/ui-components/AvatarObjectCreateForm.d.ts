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
export declare type AvatarObjectCreateFormInputValues = {
    bucket?: string;
    key?: string;
    region?: string;
};
export declare type AvatarObjectCreateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarObjectCreateFormOverridesProps = {
    AvatarObjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvatarObjectCreateFormProps = React.PropsWithChildren<{
    overrides?: AvatarObjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AvatarObjectCreateFormInputValues) => AvatarObjectCreateFormInputValues;
    onSuccess?: (fields: AvatarObjectCreateFormInputValues) => void;
    onError?: (fields: AvatarObjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvatarObjectCreateFormInputValues) => AvatarObjectCreateFormInputValues;
    onValidate?: AvatarObjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function AvatarObjectCreateForm(props: AvatarObjectCreateFormProps): React.ReactElement;
