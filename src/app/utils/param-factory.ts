import { HttpParams } from "@angular/common/http";

export class ParamFactory {
    static build<T>(data: T): HttpParams {
        const params = new HttpParams();

        Object.entries(data).forEach(item => {
            params.append(item[0], item[1]);
        });

        return params;
    }
}