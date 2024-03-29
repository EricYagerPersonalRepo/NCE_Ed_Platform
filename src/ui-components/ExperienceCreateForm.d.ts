/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ExperienceCreateFormInputValues = {
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
    companyName?: string;
    jobTitle?: string;
    description?: string;
};
export declare type ExperienceCreateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    isCurrent?: ValidationFunction<boolean>;
    companyName?: ValidationFunction<string>;
    jobTitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceCreateFormOverridesProps = {
    ExperienceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    isCurrent?: PrimitiveOverrideProps<SwitchFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceCreateFormProps = React.PropsWithChildren<{
    overrides?: ExperienceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExperienceCreateFormInputValues) => ExperienceCreateFormInputValues;
    onSuccess?: (fields: ExperienceCreateFormInputValues) => void;
    onError?: (fields: ExperienceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExperienceCreateFormInputValues) => ExperienceCreateFormInputValues;
    onValidate?: ExperienceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExperienceCreateForm(props: ExperienceCreateFormProps): React.ReactElement;
