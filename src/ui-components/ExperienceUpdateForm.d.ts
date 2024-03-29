/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Experience } from "../API.ts";
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
export declare type ExperienceUpdateFormInputValues = {
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
    companyName?: string;
    jobTitle?: string;
    description?: string;
};
export declare type ExperienceUpdateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    isCurrent?: ValidationFunction<boolean>;
    companyName?: ValidationFunction<string>;
    jobTitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceUpdateFormOverridesProps = {
    ExperienceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    isCurrent?: PrimitiveOverrideProps<SwitchFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExperienceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    experience?: Experience;
    onSubmit?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onSuccess?: (fields: ExperienceUpdateFormInputValues) => void;
    onError?: (fields: ExperienceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onValidate?: ExperienceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExperienceUpdateForm(props: ExperienceUpdateFormProps): React.ReactElement;
