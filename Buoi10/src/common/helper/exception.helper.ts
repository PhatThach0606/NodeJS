import { statusCodes } from "./status-code.helper.js";
export class BadRequestException extends Error {
  code: number;
  constructor(message = "Bad Request") {
    super(message);
    this.code = statusCodes.BAD_REQUEST;
  }
}
/**
 * Yêu cầu FE logout
 */
export class UnauthorizedException extends Error {
  code: number;
  constructor(message = "Unauthorized") {
    super(message);
    this.code = statusCodes.UNAUTHORIZED;
  }
}

export class ForbiddenException extends Error {
  code: number;
  constructor(message = "Forbidden") {
    super(message);
    this.code = statusCodes.FORBIDDEN;
  }
}
/**
 * Không tìm thấy
 */
export class NotFoundException extends Error {
  code: number;
  constructor(message = "Not Found") {
    super(message);
    this.code = statusCodes.NOT_FOUND;
  }
}

export class ConflictException extends Error {
  code: number;
  constructor(message = "Conflict") {
    super(message);
    this.code = statusCodes.CONFLICT;
  }
}
