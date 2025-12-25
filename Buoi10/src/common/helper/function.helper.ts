interface ResponseSuccess<T> {
  status: string;
  statusCode: number;
  message: string;
  data: T;
  doc?: string;
}

export const responseSuccess = <T>(
  data: T,
  message = "ok",
  statusCode = 200
): ResponseSuccess<T> => {
  return {
    status: "success",
    statusCode: statusCode,
    message: message,
    data,
    doc: "example.doc",
  };
};

interface ResponseError {
  status: string;
  statusCode: number;
  message: string;
  stack?: string;
  doc: string;
}
export const responseError = (
  message = "Interal Server Error",
  statusCode = 500,
  stack = ""
): ResponseError => {
  return {
    status: "error",
    statusCode: statusCode,
    message: message,
    stack: stack,
    doc: "example.doc",
  };
};
