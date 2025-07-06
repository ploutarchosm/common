# Common helpers For Nest.js Restful API

Common services, configurations, and helper functions

## Installation

```bash
npm install @ploutos/common
```

## Usage
```typescript
import { Module } from '@nestjs/common';
import { NamespaceModule } from '@ploutos/common';

@Module({
    imports: [
        // The intermediate library configures the NamespaceModule
        NamespaceModule.forRoot({
            configKey: 'security'
        }),
    ],
    exports: [
        // Export the configured module so main app can use it
        NamespaceModule,
    ],
})
export class IntermediateLibraryModule {}

```

