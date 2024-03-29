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
export declare type InstructorProfileCreateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type InstructorProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorProfileCreateFormOverridesProps = {
    InstructorProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: InstructorProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstructorProfileCreateFormInputValues) => InstructorProfileCreateFormInputValues;
    onSuccess?: (fields: InstructorProfileCreateFormInputValues) => void;
    onError?: (fields: InstructorProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorProfileCreateFormInputValues) => InstructorProfileCreateFormInputValues;
    onValidate?: InstructorProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorProfileCreateForm(props: InstructorProfileCreateFormProps): React.ReactElement;
