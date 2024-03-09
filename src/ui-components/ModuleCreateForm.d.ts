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
export declare type ModuleCreateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ModuleCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModuleCreateFormOverridesProps = {
    ModuleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ModuleCreateFormProps = React.PropsWithChildren<{
    overrides?: ModuleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ModuleCreateFormInputValues) => ModuleCreateFormInputValues;
    onSuccess?: (fields: ModuleCreateFormInputValues) => void;
    onError?: (fields: ModuleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModuleCreateFormInputValues) => ModuleCreateFormInputValues;
    onValidate?: ModuleCreateFormValidationValues;
} & React.CSSProperties>;
export default function ModuleCreateForm(props: ModuleCreateFormProps): React.ReactElement;
