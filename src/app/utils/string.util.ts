export abstract class StringUtils {
    static upperSnakeCaseToCapitalizedSpaced(texto: string | undefined | null) {
        if (!!texto) {
            let s = texto.toLowerCase().split("_").join(" ");
            return s.charAt(0).toUpperCase() + s.slice(1);
        }

        return undefined;
    }
}