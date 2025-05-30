// export const saveFormSchema = (schema: any) => {
//   localStorage.setItem("form_schema", JSON.stringify(schema));
// };

// export const getFormSchema = (): any => {
//   const data = localStorage.getItem("form_schema");
//   return data ? JSON.parse(data) : null;
// };

// export const saveUserResponse = (response: any) => {
//   const old = JSON.parse(localStorage.getItem("user_responses") || "[]");
//   localStorage.setItem("user_responses", JSON.stringify([...old, response]));
// };



// utils/storage.ts

const FORM_SCHEMA_KEY = 'form_schema';
const USER_RESPONSES_KEY = 'user_responses';

export function saveFormSchema(schema: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(FORM_SCHEMA_KEY, JSON.stringify(schema));
  }
}

export function getFormSchema(): any | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(FORM_SCHEMA_KEY);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function saveUserResponse(response: any) {
  if (typeof window !== 'undefined') {
    const responses = getUserResponses();
    responses.push(response);
    localStorage.setItem(USER_RESPONSES_KEY, JSON.stringify(responses));
  }
}

export function getUserResponses(): any[] {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(USER_RESPONSES_KEY);
    return data ? JSON.parse(data) : [];
  }
  return [];
}
