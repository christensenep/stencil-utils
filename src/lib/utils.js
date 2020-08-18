const queryString = require('./query-string');

/**
 * Normalize querystring params. Remove empty array values
 * @param {string} params
 * @returns {string} Normalized querystring
 */
export function normalizeQueryStringParams(params) {
    const qsParams = queryString.parse(params);
    const paramString = queryString.stringify(qsParams, {
        filterValues: true,
    });
    return paramString;
}
