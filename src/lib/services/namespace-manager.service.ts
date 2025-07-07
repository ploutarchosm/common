import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as clsHooked from 'cls-hooked';
import { NamespaceConfigurations } from "../interfaces/namespace-configuration.interface";
import { NAMESPACE_CONFIG_KEY } from "../constants/namespace-config-key";

@Injectable()
export class NamespaceManagerService {
    constructor(
        private configService: ConfigService,
        @Inject(NAMESPACE_CONFIG_KEY) private namespaceConfig: string,
    ) {}

    private get config(): NamespaceConfigurations {
        return this.configService.get<NamespaceConfigurations>(this.namespaceConfig);
    }

    get namespaceName(): string {
        return this.config.namespaceName;
    }

    get requestUrl(): string {
        return this.config.requestUrl;
    }

    getNamespace(name = this.namespaceName) {
        return clsHooked.getNamespace(name);
    }

    destroyNamespace(name = this.namespaceName): void {
        clsHooked.destroyNamespace(name);
    }

    createNamespace(name = this.namespaceName): void {
        clsHooked.createNamespace(name);
    }

    getRequestUrl(name = this.namespaceName) {
        const ns = clsHooked.getNamespace(name);
        return ns.get(this.requestUrl);
    }
}
