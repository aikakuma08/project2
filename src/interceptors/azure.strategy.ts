import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

// const clientID = 'b2d0c8ff-64e4-4729-b343-2358bef94b0d';
// const tenantID = 'c1ba9c93-9276-444a-ae3e-d2e886e257b6';

const config = {
  credentials: {
    tenantID: 'Enter_your_tenant_id',
    clientID: 'Enter_your_client_id',
    audience: 'Enter_your_client_id',
  },
  metadata: {
    authority: 'login.microsoftonline.com',
    discovery: '.well-known/openid-configuration',
    version: 'v2.0',
  },
  settings: {
    validateIssuer: true,
    passReqToCallback: false,
    loggingLevel: 'info',
  },
};
const EXPOSED_SCOPES = ['Files.Read']; //provide a scope of your azure AD

// Extracts ID token from header and validates it.
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      // identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
      // clientID,
      identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
      issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
      clientID: config.credentials.clientID,
      audience: config.credentials.audience,
      validateIssuer: config.settings.validateIssuer,
      passReqToCallback: config.settings.passReqToCallback,
      loggingLevel: config.settings.loggingLevel,
      scope: EXPOSED_SCOPES,
      loggingNoPII: false,
    });
  }

  // async validate(data) {
  //   return data;
  // }

  async validate(profile: any): Promise<any> {
    // Implement user validation and extraction of necessary user information from profile
    // Example: Extract and store user details in a session
    return profile;
  }
}

// export const AzureADGuard = AuthGuard('azure-ad');
