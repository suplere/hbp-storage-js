/////////////////////
///// Storage
/////////////////////

export type StorageUploadParams = {
  file: File;
  id?: string;
  name?: string;
  bucketId?: string;
};

export type StorageUploadResponse =
  | { fileMetadata: HeadObjectOutput; error: null }
  | { fileMetadata: null; error: Error };

export type StorageGetUrlParams = {
  fileId: string;
};

export type StorageGetPresignedUrlParams = {
  fileId: string;
};

export type StorageGetPresignedUrlResponse =
  | { presignedUrl: { url: string; expiration: number }; error: null }
  | { presignedUrl: null; error: Error };

export type StorageDeleteParams = {
  fileId: string;
};

export type StorageDeleteResponse = { error: Error | null };

/////////////////////
///// API
/////////////////////

// type FileResponse = {
//   id: string;
//   name: string;
//   size: number;
//   mimeType: string;
//   etag: string;
//   createdAt: string;
//   bucketId: string;
// };

export type MetadataValue = string;
export type Metadata = { [key: string]: MetadataValue };

export interface HeadObjectOutput {
  /**
   * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
   */
  DeleteMarker?: boolean;
  /**
   * Indicates that a range of bytes was specified.
   */
  AcceptRanges?: string;
  /**
   * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL encoded.
   */
  Expiration?: string;
  /**
   * If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see RestoreObject or an archive copy is already restored.  If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:  x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00 GMT"  If the object restoration is in progress, the header returns the value ongoing-request="true". For more information about archiving objects, see Transitioning Objects: General Considerations.
   */
  Restore?: string;
  /**
   * Last modified date of the object
   */
  LastModified?: Date;
  /**
   * Size of the body in bytes.
   */
  ContentLength?: number;
  /**
   * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   */
  ETag?: string;
  /**
   * This is set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   */
  MissingMeta?: number;
  /**
   * Version of the object.
   */
  VersionId?: string;
  /**
   * Specifies caching behavior along the request/reply chain.
   */
  CacheControl?: string;
  /**
   * Specifies presentational information for the object.
   */
  ContentDisposition?: string;
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   */
  ContentEncoding?: string;
  /**
   * The language the content is in.
   */
  ContentLanguage?: string;
  /**
   * A standard MIME type describing the format of the object data.
   */
  ContentType?: string;
  /**
   * The date and time at which the object is no longer cacheable.
   */
  Expires?: Date;
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   */
  WebsiteRedirectLocation?: string;
  /**
   * If the object is stored using server-side encryption either with an AWS KMS customer master key (CMK) or an Amazon S3-managed encryption key, the response includes this header with the value of the server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  ServerSideEncryption?: string;
  /**
   * A map of metadata to store with the object in S3.
   */
  Metadata?: Metadata;
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  SSECustomerAlgorithm?: string;
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  SSECustomerKeyMD5?: string;
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  SSEKMSKeyId?: string;
  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for Standard storage class objects. For more information, see Storage Classes.
   */
  StorageClass?: string;
  RequestCharged?: string;
  /**
   * Amazon S3 can return this header if your request involves a bucket that is either a source or destination in a replication rule. In replication, you have a source bucket on which you configure replication and destination bucket where Amazon S3 stores object replicas. When you request an object (GetObject) or object metadata (HeadObject) from these buckets, Amazon S3 will return the x-amz-replication-status header in the response as follows:   If requesting an object from the source bucket — Amazon S3 will return the x-amz-replication-status header if the object in your request is eligible for replication.  For example, suppose that in your replication configuration, you specify object prefix TaxDocs requesting Amazon S3 to replicate objects with key prefix TaxDocs. Any objects you upload with this key name prefix, for example TaxDocs/document1.pdf, are eligible for replication. For any object request with this key name prefix, Amazon S3 will return the x-amz-replication-status header with value PENDING, COMPLETED or FAILED indicating object replication status.   If requesting an object from the destination bucket — Amazon S3 will return the x-amz-replication-status header with value REPLICA if the object in your request is a replica that Amazon S3 created.   For more information, see Replication.
   */
  ReplicationStatus?: string;
  /**
   * The count of parts this object has.
   */
  PartsCount?: number;
  /**
   * The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the s3:GetObjectRetention permission. For more information about S3 Object Lock, see Object Lock.
   */
  ObjectLockMode?: string;
  /**
   * The date and time when the Object Lock retention period expires. This header is only returned if the requester has the s3:GetObjectRetention permission.
   */
  ObjectLockRetainUntilDate?: Date;
  /**
   * Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the s3:GetObjectLegalHold permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see Object Lock.
   */
  ObjectLockLegalHoldStatus?: string;
}

export type ApiUploadParams = {
  file: FormData;
  id?: string;
  name?: string;
  bucketId?: string;
};

export type ApiUploadResponse =
  | { fileMetadata: HeadObjectOutput; error: null }
  | { fileMetadata: null; error: Error };

export type ApiGetPresignedUrlParams = {
  fileId: string;
};

export type ApiGetPresignedUrlResponse =
  | { presignedUrl: { url: string; expiration: number }; error: null }
  | { presignedUrl: null; error: Error };

export type ApiDeleteParams = {
  fileId: string;
};

export type MetaObject = {
  token?: string;
}

export type HBPS3MetaData = {
  key: string;
  AcceptRanges?: string;
  LastModified?: string;
  ContentLength?: number;
  ETag?: string;
  ContentType?: string;
  Metadata?: MetaObject
}

export type StorageMetadataResponse = {
  metadata: HBPS3MetaData | null,
  error: Error | null
}

export type ApiDeleteResponse = { error: Error | null };

export type StorageUploadFile = {
  path: string;
  file: File;
  onUploadProgress: any | undefined;
};

export type StorageUploadString = {
  path: string;
  data: string;
  type: "raw" | "data_url";
  metadata: { "content-type": string } | null;
  onUploadProgress: any | undefined;
};

/////////////////////
///// MISC
/////////////////////

export type UploadHeaders = {
  "x-nhost-bucket-id"?: string;
  "x-nhost-file-id"?: string;
  "x-nhost-file-name"?: string;
};
