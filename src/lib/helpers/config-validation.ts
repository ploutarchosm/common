import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

// Generic validate function
export function validateConfig<T extends object>(
    config: Record<string, unknown>,
    ClassType: new () => T
): T {
    const validatedConfig = plainToInstance(ClassType, config, {
        enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig as object, {
        skipMissingProperties: false
    });

    if (errors.length > 0) {
        throw new Error(errors.toString());
    }

    return validatedConfig;
}

