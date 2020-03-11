import * as yup from 'yup';

export const ruleValidation = yup.object({
  srcAddr: yup
    .string()
    .required()
    .min(5),
  dstAddr: yup
    .string()
    .required()
    .min(5)
});
