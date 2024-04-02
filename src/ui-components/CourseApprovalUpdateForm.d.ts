/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseApproval } from "../API.ts";
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
export declare type CourseApprovalUpdateFormInputValues = {
    status?: string;
    comments?: string;
    approvingAdmin?: string;
};
export declare type CourseApprovalUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    comments?: ValidationFunction<string>;
    approvingAdmin?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseApprovalUpdateFormOverridesProps = {
    CourseApprovalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    approvingAdmin?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseApprovalUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseApprovalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courseApproval?: CourseApproval;
    onSubmit?: (fields: CourseApprovalUpdateFormInputValues) => CourseApprovalUpdateFormInputValues;
    onSuccess?: (fields: CourseApprovalUpdateFormInputValues) => void;
    onError?: (fields: CourseApprovalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseApprovalUpdateFormInputValues) => CourseApprovalUpdateFormInputValues;
    onValidate?: CourseApprovalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseApprovalUpdateForm(props: CourseApprovalUpdateFormProps): React.ReactElement;
