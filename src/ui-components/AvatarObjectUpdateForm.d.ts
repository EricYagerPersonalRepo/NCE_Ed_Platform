/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AvatarObject } from "../API.ts";
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
export declare type AvatarObjectUpdateFormInputValues = {
    bucket?: string;
    key?: string;
    region?: string;
};
export declare type AvatarObjectUpdateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarObjectUpdateFormOverridesProps = {
    AvatarObjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvatarObjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: AvatarObjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    avatarObject?: AvatarObject;
    onSubmit?: (fields: AvatarObjectUpdateFormInputValues) => AvatarObjectUpdateFormInputValues;
    onSuccess?: (fields: AvatarObjectUpdateFormInputValues) => void;
    onError?: (fields: AvatarObjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvatarObjectUpdateFormInputValues) => AvatarObjectUpdateFormInputValues;
    onValidate?: AvatarObjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AvatarObjectUpdateForm(props: AvatarObjectUpdateFormProps): React.ReactElement;
