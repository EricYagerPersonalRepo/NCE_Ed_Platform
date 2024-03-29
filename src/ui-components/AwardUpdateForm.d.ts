/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Award } from "../API.ts";
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
export declare type AwardUpdateFormInputValues = {
    awardDate?: string;
    awardSource?: string;
    description?: string;
};
export declare type AwardUpdateFormValidationValues = {
    awardDate?: ValidationFunction<string>;
    awardSource?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwardUpdateFormOverridesProps = {
    AwardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    awardDate?: PrimitiveOverrideProps<TextFieldProps>;
    awardSource?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwardUpdateFormProps = React.PropsWithChildren<{
    overrides?: AwardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    award?: Award;
    onSubmit?: (fields: AwardUpdateFormInputValues) => AwardUpdateFormInputValues;
    onSuccess?: (fields: AwardUpdateFormInputValues) => void;
    onError?: (fields: AwardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwardUpdateFormInputValues) => AwardUpdateFormInputValues;
    onValidate?: AwardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AwardUpdateForm(props: AwardUpdateFormProps): React.ReactElement;
