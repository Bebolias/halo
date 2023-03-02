/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CommentEmailOwner } from './comment-email-owner'
// May contain unused imports in some cases
// @ts-ignore
import { Ref } from './ref'

/**
 *
 * @export
 * @interface CommentRequest
 */
export interface CommentRequest {
  /**
   *
   * @type {Ref}
   * @memberof CommentRequest
   */
  subjectRef: Ref
  /**
   *
   * @type {CommentEmailOwner}
   * @memberof CommentRequest
   */
  owner?: CommentEmailOwner
  /**
   *
   * @type {string}
   * @memberof CommentRequest
   */
  raw: string
  /**
   *
   * @type {string}
   * @memberof CommentRequest
   */
  content: string
  /**
   *
   * @type {boolean}
   * @memberof CommentRequest
   */
  allowNotification?: boolean
}
