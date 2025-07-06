import { DynamicModule, Module } from "@nestjs/common";
import { NAMESPACE_CONFIG_KEY } from "../constants/namespace-config-key";
import { NamespaceManagerService } from "../services/namespace-manager.service";
import { NamespaceModuleOptions } from "../interfaces/namespace-module-options.interface";

@Module({})
export class NamespaceModule {
    static forRoot(options: NamespaceModuleOptions): DynamicModule {
        return {
            module: NamespaceModule,
            providers: [
                {
                    provide: NAMESPACE_CONFIG_KEY,
                    useValue: options.configKey,
                },
                NamespaceManagerService,
            ],
            exports: [NamespaceManagerService],
        };
    }

    static forRootAsync(options: {
        useFactory: (...args: any[]) => Promise<NamespaceModuleOptions> | NamespaceModuleOptions;
        inject?: any[];
    }): DynamicModule {
        return {
            module: NamespaceModule,
            providers: [
                {
                    provide: NAMESPACE_CONFIG_KEY,
                    useFactory: async (...args: any[]) => {
                        const config = await options.useFactory(...args);
                        return config.configKey;
                    },
                    inject: options.inject || [],
                },
                NamespaceManagerService,
            ],
            exports: [NamespaceManagerService],
        };
    }
}
