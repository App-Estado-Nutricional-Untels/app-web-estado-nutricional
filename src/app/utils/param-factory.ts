import { HttpParams } from "@angular/common/http";

export class ParamFactory {
    static build<T>(data: T): HttpParams {
        let params = new HttpParams();

        Object.entries(data).forEach(item => {
            if (item[1]) {
                params = params.append(item[0], item[1]);
            }
        });
        return params;
    }
}