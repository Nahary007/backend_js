export const keycloakConfig = {
  authServerUrl: 'http://keycloak:8080',
  realm: 'parking-realm',
  clientId: 'parking-api',
  secret: 'MON_SECRET_GENERÉ_DANS_KEYCLOAK',
  policyEnforcement: 'ENFORCING',
};