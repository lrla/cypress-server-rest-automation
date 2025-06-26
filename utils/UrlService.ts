interface UrlOptions {
    domain?: string;
    env?: string;
    port?: number;
    protocol?: string;
}

export class UrlService {
    private app = Cypress.env('app') as string;
    private env = Cypress.env('env') as string;

    /**
     * Get the URL 
     */
    public url(app: string, relativeUrl = '', options?: UrlOptions): string {
        const domain = options?.domain || '';
        const env = options?.env || this.env;
        let host!: string;
        let port!: string;
        let protocol!: string;

        // if request is to localhost
        if (env === 'dev' && app === this.app) {
            protocol = options?.protocol || 'http';
            port = `:${options?.port || 4200}`;
            host = 'localhost';

        // else the request should be to a test instance of an app
        } else {
            protocol = options?.protocol || 'https';
            host = `${app}.${domain}`;
            port = '';
        }
        return `${protocol}://${host}${port}/${relativeUrl}`;
    }
}
