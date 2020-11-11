import { QueryDescription, Query } from "../query-builder.ts";
import { FieldAlias } from '../data-types.ts';
import { Translator } from "./translator.ts";

/** Translator interface for translating `QueryDescription` objects to regular queries. */
export class BasicTranslator implements Translator {
  /** Translate a query description into a regular query. */
  translateToQuery(query: QueryDescription): Query {
    return "";
  }

  /** Format a field to the database format, e.g. `userName` to `user_name`. */
  formatFieldNameToDatabase(
    fieldName: string | FieldAlias,
  ): string | FieldAlias {
    return fieldName;
  }
}
