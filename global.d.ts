export {};

// Define your common types
declare global {
  interface ApiError {
    isError: boolean;
    errorMsg: string;
  }

  // Add more types as needed errorMsg: string; showError: boolean
}
