export default class SassExtractor {

    static getTime(sassVar: string): number {
        const suffix = ['s', 'ms'].find((suffix) => sassVar.includes(suffix))!

        return Number(sassVar.split(suffix).shift())
    }

    static getPx(sassVar: string): number {
        return Number(sassVar.split('px').shift())
    }

}