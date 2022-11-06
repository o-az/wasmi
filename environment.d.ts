interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'staging' | 'production';
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables;
}
