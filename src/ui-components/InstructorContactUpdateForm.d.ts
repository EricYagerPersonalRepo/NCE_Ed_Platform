/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { InstructorContact } from "../API.ts";
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
export declare type InstructorContactUpdateFormInputValues = {
    phone?: string;
    email?: string;
};
export declare type InstructorContactUpdateFormValidationValues = {
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorContactUpdateFormOverridesProps = {
    InstructorContactUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorContactUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructorContactUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instructorContact?: InstructorContact;
    onSubmit?: (fields: InstructorContactUpdateFormInputValues) => InstructorContactUpdateFormInputValues;
    onSuccess?: (fields: InstructorContactUpdateFormInputValues) => void;
    onError?: (fields: InstructorContactUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorContactUpdateFormInputValues) => InstructorContactUpdateFormInputValues;
    onValidate?: InstructorContactUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorContactUpdateForm(props: InstructorContactUpdateFormProps): React.ReactElement;
