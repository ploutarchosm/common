export interface IMapper<TFrom, TTo> {
    map(from: TFrom): Promise<TTo>;
}
