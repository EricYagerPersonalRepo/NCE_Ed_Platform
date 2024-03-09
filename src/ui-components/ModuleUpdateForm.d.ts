/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Module } from "../API.ts";
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
export declare type ModuleUpdateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ModuleUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModuleUpdateFormOverridesProps = {
    ModuleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ModuleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ModuleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    module?: Module;
    onSubmit?: (fields: ModuleUpdateFormInputValues) => ModuleUpdateFormInputValues;
    onSuccess?: (fields: ModuleUpdateFormInputValues) => void;
    onError?: (fields: ModuleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModuleUpdateFormInputValues) => ModuleUpdateFormInputValues;
    onValidate?: ModuleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ModuleUpdateForm(props: ModuleUpdateFormProps): React.ReactElement;
