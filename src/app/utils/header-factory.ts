import { HttpHeaders } from "@angular/common/http";

export class HeaderFactory {

    static build(token: string | null, tipoToken: string | null): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `${tipoToken} ${token}`,
        });

        return headers;
    }
};