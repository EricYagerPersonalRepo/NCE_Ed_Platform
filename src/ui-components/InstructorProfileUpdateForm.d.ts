/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { InstructorProfile } from "../API.ts";
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
export declare type InstructorProfileUpdateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type InstructorProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorProfileUpdateFormOverridesProps = {
    InstructorProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructorProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instructorProfile?: InstructorProfile;
    onSubmit?: (fields: InstructorProfileUpdateFormInputValues) => InstructorProfileUpdateFormInputValues;
    onSuccess?: (fields: InstructorProfileUpdateFormInputValues) => void;
    onError?: (fields: InstructorProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorProfileUpdateFormInputValues) => InstructorProfileUpdateFormInputValues;
    onValidate?: InstructorProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorProfileUpdateForm(props: InstructorProfileUpdateFormProps): React.ReactElement;
