/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CourseApprovalCreateFormInputValues = {
    status?: string;
    comments?: string;
    approvingAdmin?: string;
};
export declare type CourseApprovalCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    comments?: ValidationFunction<string>;
    approvingAdmin?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseApprovalCreateFormOverridesProps = {
    CourseApprovalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    approvingAdmin?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseApprovalCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseApprovalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseApprovalCreateFormInputValues) => CourseApprovalCreateFormInputValues;
    onSuccess?: (fields: CourseApprovalCreateFormInputValues) => void;
    onError?: (fields: CourseApprovalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseApprovalCreateFormInputValues) => CourseApprovalCreateFormInputValues;
    onValidate?: CourseApprovalCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseApprovalCreateForm(props: CourseApprovalCreateFormProps): React.ReactElement;
