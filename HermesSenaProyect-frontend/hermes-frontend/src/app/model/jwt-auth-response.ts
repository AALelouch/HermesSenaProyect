export class JwtAuthResponse {
    type: string;
    token: string;

    constructor(type: string, token: string) {
        this.type = type;
        this.token = token;
    }
}
