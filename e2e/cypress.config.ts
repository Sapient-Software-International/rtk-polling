import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run rtk-polling:serve',
        production: 'nx run rtk-polling:preview',
      },
      ciWebServerCommand: 'nx run rtk-polling:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
