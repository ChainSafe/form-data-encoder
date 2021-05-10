import isFunction from "./isFunction"

import {FormDataLike} from "../FormDataLike"

/**
 * Check if given object is FormData
 *
 * @param value an object to test
 */
const isFormData = (value?: unknown): value is FormDataLike => Boolean(
  (value as FormDataLike)
    && isFunction((value as FormDataLike).constructor)
    && (value as FormDataLike)[Symbol.toStringTag] === "FormData"
    && isFunction((value as FormDataLike).set)
    && isFunction((value as FormDataLike).append)
    && isFunction((value as FormDataLike).has)
    && isFunction((value as FormDataLike).get)
    && isFunction((value as FormDataLike).getAll)
    && isFunction((value as FormDataLike).keys)
    && isFunction((value as FormDataLike).values)
    && isFunction((value as FormDataLike).entries)
    && isFunction((value as FormDataLike)[Symbol.iterator])
)

export default isFormData