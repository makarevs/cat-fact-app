export interface ICatFact{
    fact: string
}

export default function CatFact(iCFact: ICatFact){
    return(
        <>
        <p>{iCFact.fact}</p>
        </>
    )
};
