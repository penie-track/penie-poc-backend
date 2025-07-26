export function checkMissingFields(
  requiredFields: string[],
  data: Record<string, any>
): string[] {
  return requiredFields.filter((field) => {
    const value = data[field];
    return value === undefined || value === null || "";
  });
}
