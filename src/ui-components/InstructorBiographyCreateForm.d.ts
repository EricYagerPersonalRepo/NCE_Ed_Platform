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
export declare type InstructorBiographyCreateFormInputValues = {
    overview?: string;
};
export declare type InstructorBiographyCreateFormValidationValues = {
    overview?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorBiographyCreateFormOverridesProps = {
    InstructorBiographyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    overview?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorBiographyCreateFormProps = React.PropsWithChildren<{
    overrides?: InstructorBiographyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstructorBiographyCreateFormInputValues) => InstructorBiographyCreateFormInputValues;
    onSuccess?: (fields: InstructorBiographyCreateFormInputValues) => void;
    onError?: (fields: InstructorBiographyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorBiographyCreateFormInputValues) => InstructorBiographyCreateFormInputValues;
    onValidate?: InstructorBiographyCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorBiographyCreateForm(props: InstructorBiographyCreateFormProps): React.ReactElement;
